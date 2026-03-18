import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const LOGO_URL = 'https://i.postimg.cc/wvHYTSVw/Chat-GPT-Image-Mar-17-2026-11-02-33-PM.png';

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
    return NextResponse.redirect(LOGO_URL);
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
      // If not found or error, redirect to logo
      return NextResponse.redirect(LOGO_URL);
    }
  } catch (error) {
    console.error('Error fetching image from GitHub:', error);
    return NextResponse.redirect(LOGO_URL);
  }
}
