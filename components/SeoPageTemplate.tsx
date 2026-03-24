import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Globe, Code } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InternalLinks from './InternalLinks';
import AdBanner from '@/components/AdBanner';

interface SeoPageTemplateProps {
  h1: string;
  intro: string;
  keyword: string;
  location: string;
  badge: string;
  bgColor: string;
}

export default function SeoPageTemplate({
  h1,
  intro,
  keyword,
  location,
  badge,
  bgColor
}: SeoPageTemplateProps) {
  const hardShadowHover = "transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000]";

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': `Is PixelHost the best ${keyword} in ${location}?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `Yes, PixelHost provides the fastest and most secure ${keyword} services for users in ${location}.`
        }
      },
      {
        '@type': 'Question',
        'name': 'Do I need to sign up?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, we offer 100% free image hosting with no signup required. You can get direct links instantly.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#FFE873]">
      <Header />

      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className={`inline-block border-4 border-black px-4 py-1 rounded-full font-bold mb-6 shadow-[4px_4px_0px_0px_#000] transform -rotate-2 ${bgColor}`}>
              {badge}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6 uppercase font-display">
              {h1}
            </h1>
            <p className="text-2xl font-medium mb-10 max-w-2xl mx-auto lg:mx-0 border-l-8 border-black pl-6">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Link 
                href="/upload"
                className={`px-10 py-5 border-4 border-black rounded-2xl bg-[#FF90E8] shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide w-full sm:w-auto text-xl text-center flex items-center justify-center gap-2`}
              >
                Upload Now <ArrowRight size={24} />
              </Link>
            </div>
          </div>
          
          {/* Sidebar Ad 160x600 */}
          <div className="hidden lg:block w-[160px] shrink-0">
            <AdBanner dataKey="df39010bac07f2a2c2007feccb82f47d" width={160} height={600} />
          </div>
        </div>
      </main>

      <section className="py-32 bg-white border-t-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-6xl font-black uppercase mb-8 font-display">Why Choose PixelHost in {location}?</h2>
          <div className="prose prose-xl font-medium text-gray-700 space-y-6 max-w-none">
            <p>
              If you are looking for <strong>{keyword}</strong>, PixelHost is your ultimate solution. We understand that speed and privacy are critical for users in {location}, which is why our infrastructure is optimized for your local traffic.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-8 border-4 border-black rounded-3xl bg-[#FFE873] shadow-[8px_8px_0px_0px_#000]">
                <Globe size={48} className="mb-4" />
                <h3 className="text-2xl font-black uppercase mb-2">Global CDN</h3>
                <p>Lightning-fast image delivery from servers located near {location}.</p>
              </div>
              <div className="p-8 border-4 border-black rounded-3xl bg-[#88FF88] shadow-[8px_8px_0px_0px_#000]">
                <Shield size={48} className="mb-4" />
                <h3 className="text-2xl font-black uppercase mb-2">Privacy First</h3>
                <p>No accounts required. We don't track your personal data or sell it to third parties.</p>
              </div>
              <div className="p-8 border-4 border-black rounded-3xl bg-[#88CCFF] shadow-[8px_8px_0px_0px_#000]">
                <Code size={48} className="mb-4" />
                <h3 className="text-2xl font-black uppercase mb-2">Direct Links</h3>
                <p>Get permanent direct links, BBCode, and Markdown instantly after uploading.</p>
              </div>
            </div>
          </div>
          
          <InternalLinks keyword={keyword} />

          {/* Bottom Banner Ad 300x250 */}
          <div className="mt-16">
            <AdBanner dataKey="46eea6dc12051609b0b8dc8ee4729962" width={300} height={250} />
          </div>
        </div>
      </section>

      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Footer />
    </div>
  );
}
