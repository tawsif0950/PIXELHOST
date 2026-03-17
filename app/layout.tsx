import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'PixelHost – Free Image Hosting & Direct Image Links Generator',
  description: 'PixelHost is a fast and free image hosting platform that lets you upload images instantly and get direct links, HTML, BBCode, and Markdown embed codes. No signup required. Share your images anywhere easily with high speed hosting.',
  keywords: ['postimage', 'image host', 'free image hosting', 'direct image links', 'image upload', 'share images', 'fast image host', 'no signup image hosting'],
  icons: {
    icon: 'https://i.postimg.cc/wvHYTSVw/Chat-GPT-Image-Mar-17-2026-11-02-33-PM.png',
    apple: 'https://i.postimg.cc/wvHYTSVw/Chat-GPT-Image-Mar-17-2026-11-02-33-PM.png',
  },
  openGraph: {
    title: 'PixelHost – Free Image Hosting & Direct Image Links Generator',
    description: 'PixelHost is a fast and free image hosting platform that lets you upload images instantly and get direct links, HTML, BBCode, and Markdown embed codes. No signup required. Share your images anywhere easily with high speed hosting.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelHost – Free Image Hosting & Direct Image Links Generator',
    description: 'PixelHost is a fast and free image hosting platform that lets you upload images instantly and get direct links, HTML, BBCode, and Markdown embed codes. No signup required. Share your images anywhere easily with high speed hosting.',
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
