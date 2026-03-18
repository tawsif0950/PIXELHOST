import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const LOGO_URL = 'https://i.postimg.cc/wvHYTSVw/Chat-GPT-Image-Mar-17-2026-11-02-33-PM.png';

const fetchLogo = async () => {
  const logoRes = await fetch(LOGO_URL);
  if (logoRes.ok) {
    const buffer = await logoRes.arrayBuffer();
    const contentType = logoRes.headers.get('content-type') || 'image/png';
    return new Response(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }
  return new Response('Not Found', { status: 404 });
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: pathSegments } = await params;
  const path = pathSegments.join('/');
  const fullPath = `uploads/${path}`;

  const githubUsername = process.env.GITHUB_USERNAME;
  const githubRepo = process.env.GITHUB_REPO;
  const githubBranch = process.env.GITHUB_BRANCH || 'main';

  if (!githubUsername || !githubRepo) {
    return fetchLogo();
  }

  const githubRawUrl = `https://raw.githubusercontent.com/${githubUsername}/${githubRepo}/${githubBranch}/${fullPath}`;

  try {
    const response = await fetch(githubRawUrl);

    if (response.ok) {
      const buffer = await response.arrayBuffer();
      const contentType = response.headers.get('content-type') || 'image/png';

      return new Response(buffer, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    } else {
      // If not found or error, return logo
      return fetchLogo();
    }
  } catch (error) {
    console.error('Error fetching image from GitHub:', error);
    return fetchLogo();
  }
}
