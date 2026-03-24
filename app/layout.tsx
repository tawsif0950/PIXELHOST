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
  metadataBase: new URL('https://www.pixelhost.fun'),
  title: 'Free Image Hosting - Upload Image & Get Direct Link | PixelHost',
  description: 'PixelHost is the best free image hosting platform. Upload images instantly and get direct links, HTML, BBCode, and Markdown embed codes. No signup required, fast CDN, and reliable image sharing.',
  keywords: ['free image hosting', 'upload image get direct link', 'bbcode image hosting', 'markdown image hosting', 'direct link generator', 'image sharing', 'postimage alternative', 'imgur alternative', 'fast image hosting'],
  alternates: {
    canonical: 'https://www.pixelhost.fun',
  },
  icons: {
    icon: 'https://i.postimg.cc/wvHYTSVw/Chat-GPT-Image-Mar-17-2026-11-02-33-PM.png',
    apple: 'https://i.postimg.cc/wvHYTSVw/Chat-GPT-Image-Mar-17-2026-11-02-33-PM.png',
  },
  openGraph: {
    title: 'Free Image Hosting - Upload Image & Get Direct Link | PixelHost',
    description: 'Upload images instantly and get direct links, HTML, BBCode, and Markdown embed codes. No signup required, fast CDN, and reliable image sharing.',
    type: 'website',
    url: 'https://www.pixelhost.fun',
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
    title: 'Free Image Hosting - Upload Image & Get Direct Link | PixelHost',
    description: 'Upload images instantly and get direct links, HTML, BBCode, and Markdown embed codes. No signup required, fast CDN, and reliable image sharing.',
    images: ['https://i.postimg.cc/wvHYTSVw/Chat-GPT-Image-Mar-17-2026-11-02-33-PM.png'],
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'PixelHost',
    'description': 'Free image hosting and direct image links generator.',
    'url': 'https://www.pixelhost.fun',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        {/* Popunder Script */}
        <Script 
          src="https://pl28967231.profitablecpmratenetwork.com/19/4b/d9/194bd95f07de96cab1e31967e8cc1ae6.js" 
          strategy="afterInteractive" 
        />
        {/* Ad Banner Script */}
        <Script id="ad-banner-options" strategy="afterInteractive">
          {`
            atOptions = {
              'key' : 'e77f1d762f698d785a257e9e7c781133',
              'format' : 'iframe',
              'height' : 50,
              'width' : 320,
              'params' : {}
            };
          `}
        </Script>
        <Script 
          src="https://www.highperformanceformat.com/e77f1d762f698d785a257e9e7c781133/invoke.js" 
          strategy="afterInteractive" 
        />

        {/* Native Banner Ads */}
        <div id="container-4ba34455187764348a1b50ff3519e0a8"></div>
        <Script 
          async 
          data-cfasync="false" 
          src="https://pl28967259.profitablecpmratenetwork.com/4ba34455187764348a1b50ff3519e0a8/invoke.js" 
          strategy="afterInteractive" 
        />

        {/* Social Bar */}
        <Script 
          src="https://pl28967266.profitablecpmratenetwork.com/63/56/2c/63562cc882e94cee0e018d36ea4dd7c2.js" 
          strategy="afterInteractive" 
        />

        {/* Another Banner Ads */}
        <Script id="ad-banner-options-2" strategy="afterInteractive">
          {`
            atOptions = {
              'key' : '072d87e163ef14ac173d91ccc908ba09',
              'format' : 'iframe',
              'height' : 300,
              'width' : 160,
              'params' : {}
            };
          `}
        </Script>
        <Script 
          src="https://www.highperformanceformat.com/072d87e163ef14ac173d91ccc908ba09/invoke.js" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}
