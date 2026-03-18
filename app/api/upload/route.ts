import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
const MAX_SIZE_MB = 10;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ success: false, error: 'Invalid file type. Only JPG, PNG, GIF, and WebP are allowed.' }, { status: 400 });
    }

    if (file.size > MAX_SIZE_BYTES) {
      return NextResponse.json({ success: false, error: `File size exceeds ${MAX_SIZE_MB}MB limit.` }, { status: 400 });
    }

    const githubToken = process.env.GITHUB_TOKEN;
    const githubUsername = process.env.GITHUB_USERNAME;
    const githubRepo = process.env.GITHUB_REPO;
    const githubBranch = process.env.GITHUB_BRANCH || 'main';

    // Safe debugging logs
    console.log('--- GitHub Credentials Check ---');
    console.log('Token exists:', !!githubToken);
    console.log('Username exists:', !!githubUsername);
    console.log('Repo exists:', !!githubRepo);
    console.log('Branch:', githubBranch);
    console.log('--------------------------------');

    if (!githubToken || !githubUsername || !githubRepo) {
      return NextResponse.json({
        success: false,
        error: 'Missing GitHub credentials. Check Vercel environment variables.',
        details: {
          token: !!githubToken,
          username: !!githubUsername,
          repo: !!githubRepo
        }
      }, { status: 500 });
    }

    const buffer = await file.arrayBuffer();
    const base64Content = Buffer.from(buffer).toString('base64');

    const ext = file.name.split('.').pop()?.toLowerCase() || 'png';
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    const filename = `${timestamp}_${random}.${ext}`;

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    
    const path = `uploads/${year}/${month}/${filename}`;

    const githubApiUrl = `https://api.github.com/repos/${githubUsername}/${githubRepo}/contents/${path}`;

    const response = await fetch(githubApiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'upload image',
        content: base64Content,
        branch: githubBranch,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('GitHub API Error:', errorData);
      return NextResponse.json({ success: false, error: 'Failed to upload image to GitHub.' }, { status: 500 });
    }

    const protocol = request.headers.get('x-forwarded-proto') || 'http';
    const host = request.headers.get('host');
    const origin = `${protocol}://${host}`;

    const directLink = `${origin}/${path}`;
    const cdnLink = `https://cdn.jsdelivr.net/gh/${githubUsername}/${githubRepo}@${githubBranch}/${path}`;

    return NextResponse.json({
      success: true,
      filename: filename,
      links: {
        direct: directLink,
        html: `<img src="${directLink}" alt="image">`,
        bbcode: `[img]${directLink}[/img]`,
        markdown: `![image](${directLink})`,
        cdn: cdnLink
      }
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error during upload.' }, { status: 500 });
  }
}
