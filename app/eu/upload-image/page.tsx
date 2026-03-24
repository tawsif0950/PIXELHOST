import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Globe, Code } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fastest Free Image Hosting in Europe | Upload Image & Get Direct Link',
  description: 'Top-rated free image hosting for EU users. Upload images instantly, get direct links, and enjoy fast loading speeds across Europe. GDPR compliant, no signup required.',
  alternates: {
    canonical: 'https://www.pixelhost.fun/eu/upload-image',
    languages: {
      'en-US': 'https://www.pixelhost.fun/us/free-image-hosting',
      'en-GB': 'https://www.pixelhost.fun/uk/image-hosting',
      'en-IE': 'https://www.pixelhost.fun/eu/upload-image',
      'ja-JP': 'https://www.pixelhost.fun/jp/image-hosting',
      'x-default': 'https://www.pixelhost.fun/'
    }
  }
};

export default function EUImageHosting() {
  const hardShadowHover = "transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000]";

  return (
    <div className="min-h-screen font-sans selection:bg-[#FFE873]">
      <Header />

      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block border-4 border-black bg-[#88CCFF] px-4 py-1 rounded-full font-bold mb-6 shadow-[4px_4px_0px_0px_#000] transform -rotate-2">
              🇪🇺 #1 Image Hosting in Europe
            </div>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-tight mb-6 uppercase font-display">
              Fast Image Hosting <br className="hidden lg:block" />
              <span className="relative inline-block">
                <span className="relative z-10">for EU Users.</span>
                <span className="absolute bottom-2 left-0 w-full h-8 bg-[#FF90E8] -z-10 transform -rotate-1"></span>
              </span>
            </h1>
            <p className="text-2xl font-medium mb-10 max-w-2xl mx-auto lg:mx-0 border-l-8 border-black pl-6">
              Upload images instantly and get direct links with zero signup. GDPR compliant and optimized for lightning-fast delivery across Europe.
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
        </div>
      </main>

      <section className="py-32 bg-white border-t-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-6xl font-black uppercase mb-8 font-display">Why EU Users Choose PixelHost</h2>
          <div className="prose prose-xl font-medium text-gray-700 space-y-6 max-w-none">
            <p>
              If you are looking for <strong>upload image get direct link fast Europe</strong>, PixelHost is your ultimate solution. We understand that speed and privacy are critical for European users, which is why our infrastructure is optimized for European traffic and fully GDPR compliant.
            </p>
            <p>
              Whether you are a developer looking for an <strong>imgur alternative fast upload</strong> or a forum user needing <strong>best image hosting for forums 2026</strong>, our platform delivers. Upload your image and get a direct link in seconds. No tracking, no hidden fees, just pure performance.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-8 border-4 border-black rounded-3xl bg-[#FFE873] shadow-[8px_8px_0px_0px_#000]">
                <Globe size={48} className="mb-4" />
                <h3 className="text-2xl font-black uppercase mb-2">EU-Based CDN</h3>
                <p>Lightning-fast image delivery from servers located in Frankfurt, Paris, and Amsterdam.</p>
              </div>
              <div className="p-8 border-4 border-black rounded-3xl bg-[#88FF88] shadow-[8px_8px_0px_0px_#000]">
                <Shield size={48} className="mb-4" />
                <h3 className="text-2xl font-black uppercase mb-2">GDPR Compliant</h3>
                <p>No accounts required. We respect your privacy and don't track your personal data.</p>
              </div>
              <div className="p-8 border-4 border-black rounded-3xl bg-[#88CCFF] shadow-[8px_8px_0px_0px_#000]">
                <Code size={48} className="mb-4" />
                <h3 className="text-2xl font-black uppercase mb-2">Direct Links</h3>
                <p>Get permanent direct links, BBCode, and Markdown instantly after uploading.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
