import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ais-pre-rjzwhfdjcbot7jwi7w5bh4-48852631961.asia-southeast1.run.app'),
  title: 'PixelHost – Free Image Hosting & Direct Image Links Generator',
  description: 'PixelHost is a fast and free image hosting platform that lets you upload images instantly and get direct links, HTML, BBCode, and Markdown embed codes. No signup required. Share your images anywhere easily with high speed hosting.',
  keywords: ['pixelhost', 'pixel host', 'image hosting', 'free image hosting', 'direct image links', 'image upload', 'share images', 'fast image host', 'no signup image hosting', 'postimage alternative', 'imgur alternative', 'developer image host'],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: 'https://i.postimg.cc/wvHYTSVw/Chat-GPT-Image-Mar-17-2026-11-02-33-PM.png',
    apple: 'https://i.postimg.cc/wvHYTSVw/Chat-GPT-Image-Mar-17-2026-11-02-33-PM.png',
  },
  openGraph: {
    title: 'PixelHost – Free Image Hosting & Direct Image Links Generator',
    description: 'PixelHost is a fast and free image hosting platform that lets you upload images instantly and get direct links, HTML, BBCode, and Markdown embed codes. No signup required. Share your images anywhere easily with high speed hosting.',
    type: 'website',
    url: 'https://ais-pre-rjzwhfdjcbot7jwi7w5bh4-48852631961.asia-southeast1.run.app',
    siteName: 'PixelHost',
    images: [
      {
        url: 'https://i.postimg.cc/wvHYTSVw/Chat-GPT-Image-Mar-17-2026-11-02-33-PM.png',
        width: 1200,
        height: 630,
        alt: 'PixelHost Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelHost – Free Image Hosting & Direct Image Links Generator',
    description: 'PixelHost is a fast and free image hosting platform that lets you upload images instantly and get direct links, HTML, BBCode, and Markdown embed codes. No signup required. Share your images anywhere easily with high speed hosting.',
    images: ['https://i.postimg.cc/wvHYTSVw/Chat-GPT-Image-Mar-17-2026-11-02-33-PM.png'],
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'PixelHost',
    'description': 'Free image hosting and direct image links generator.',
    'url': 'https://ais-pre-rjzwhfdjcbot7jwi7w5bh4-48852631961.asia-southeast1.run.app',
    'applicationCategory': 'MultimediaApplication',
    'operatingSystem': 'All',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'featureList': [
      'Instant image upload',
      'Direct image links',
      'No signup required',
      'Markdown and BBCode support'
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9081783676352581"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
