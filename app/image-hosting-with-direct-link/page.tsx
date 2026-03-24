'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link2, Zap, Globe, CheckCircle2 } from 'lucide-react';

export default function DirectLinkHosting() {
  const hardShadowHover = "transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000]";

  return (
    <div className="min-h-screen font-sans selection:bg-[#FFE873]">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black uppercase mb-8 font-display leading-tight"
        >
          Image Hosting with <br/> <span className="text-[#FFE873]">Direct Link</span>
        </motion.h1>

        <div className="prose prose-xl font-medium text-gray-700 space-y-8 mb-16">
          <p className="text-2xl border-l-8 border-black pl-6 font-bold">
            PixelHost is the ultimate <strong>image hosting with direct link</strong> service. Get permanent, high-speed links for your images instantly.
          </p>

          <h2 className="text-4xl font-black uppercase text-black mt-12">What is Direct Link Image Hosting?</h2>
          <p>
            A <strong>direct image link</strong> is a URL that points directly to an image file (e.g., `.jpg`, `.png`, `.gif`). This is essential for embedding images on websites, blogs, and forums. Many <strong>free image hosting</strong> sites force users to view images on their landing pages, but PixelHost provides <strong>direct link image hosting</strong> for a seamless experience.
          </p>

          <div className="grid md:grid-cols-2 gap-8 not-prose my-12">
            <div className="p-8 border-4 border-black rounded-3xl bg-[#FFE873] shadow-[8px_8px_0px_0px_#000]">
              <Link2 size={32} className="mb-4" />
              <h3 className="text-2xl font-black uppercase mb-2">Permanent Links</h3>
              <p className="font-bold">Our links never expire, ensuring your images stay online.</p>
            </div>
            <div className="p-8 border-4 border-black rounded-3xl bg-[#88FF88] shadow-[8px_8px_0px_0px_#000]">
              <Globe size={32} className="mb-4" />
              <h3 className="text-2xl font-black uppercase mb-2">Global CDN</h3>
              <p className="font-bold">Images load instantly for users around the world.</p>
            </div>
          </div>

          <h2 className="text-4xl font-black uppercase text-black mt-12">The Best Direct Link Generator</h2>
          <p>
            PixelHost acts as a <strong>direct image link generator</strong>. Once you upload an image, we provide you with a clean URL that you can use anywhere. This is perfect for developers who need to <strong>host images for free</strong> and use them in their applications or for forum users who need to <strong>share images</strong> with a direct link.
          </p>

          <h2 className="text-4xl font-black uppercase text-black mt-12">Why Direct Links Matter</h2>
          <p>
            Using <strong>direct link image hosting</strong> ensures that your images load quickly and correctly. It prevents broken images and slow loading times, which can negatively impact user experience and SEO. PixelHost is optimized for Core Web Vitals, making it one of the <strong>fastest free image hosting</strong> platforms available.
          </p>

          <div className="bg-black text-white p-10 rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_#FFE873] my-16">
            <h3 className="text-3xl font-black uppercase mb-6 text-[#FFE873]">Why PixelHost is #1:</h3>
            <ul className="space-y-4 font-bold text-xl">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> Instant Direct Image Links</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> No Signup Required</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> High-Speed Global CDN</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> Support for All Major Formats</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> 100% Free Image Hosting</li>
            </ul>
          </div>

          <p>
            Ready to get your <strong>direct image link</strong>? PixelHost is the most reliable <strong>image sharing</strong> platform for 2026. Our <strong>fast image hosting</strong> ensures that your images are always available when you need them. Try our <strong>free image hosting with direct link</strong> today and see why PixelHost is the preferred choice for millions of users.
          </p>
        </div>

        <div className="text-center">
          <a 
            href="/upload"
            className={`inline-flex items-center gap-3 px-12 py-6 border-4 border-black rounded-2xl bg-[#FFE873] shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide text-2xl`}
          >
            <Zap size={32} /> Get Your Direct Link Now
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
