'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Code, Zap, Globe, CheckCircle2 } from 'lucide-react';

export default function BBCodeHosting() {
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
          BBCode Image Hosting <br/> <span className="text-[#FF90E8]">For Forums</span>
        </motion.h1>

        <div className="prose prose-xl font-medium text-gray-700 space-y-8 mb-16">
          <p className="text-2xl border-l-8 border-black pl-6 font-bold">
            PixelHost is the best <strong>BBCode image hosting</strong> service for forums and online communities. Get your images online and share them instantly.
          </p>

          <h2 className="text-4xl font-black uppercase text-black mt-12">What is BBCode Image Hosting?</h2>
          <p>
            <strong>BBCode</strong> (Bulletin Board Code) is a markup language used on many online forums and message boards. <strong>BBCode image hosting</strong> allows you to embed images in your posts using a simple code snippet. PixelHost provides <strong>free image hosting with BBCode</strong>, making it the perfect tool for forum users.
          </p>

          <div className="grid md:grid-cols-2 gap-8 not-prose my-12">
            <div className="p-8 border-4 border-black rounded-3xl bg-[#FF90E8] shadow-[8px_8px_0px_0px_#000]">
              <Code size={32} className="mb-4" />
              <h3 className="text-2xl font-black uppercase mb-2">Instant BBCode</h3>
              <p className="font-bold">Get your BBCode snippet immediately after uploading.</p>
            </div>
            <div className="p-8 border-4 border-black rounded-3xl bg-[#FFE873] shadow-[8px_8px_0px_0px_#000]">
              <Zap size={32} className="mb-4" />
              <h3 className="text-2xl font-black uppercase mb-2">Fast Upload</h3>
              <p className="font-bold">No accounts or registration required to share images.</p>
            </div>
          </div>

          <h2 className="text-4xl font-black uppercase text-black mt-12">The Best PostImage Alternative for Forums</h2>
          <p>
            Many forum users are looking for a reliable <strong>PostImage alternative</strong> or <strong>Imgur alternative</strong>. PixelHost provides a clean, fast, and secure platform for <strong>BBCode image hosting</strong>. Our <strong>direct link image hosting</strong> ensures that your images load perfectly every time, without any annoying landing pages or slow redirects.
          </p>

          <h2 className="text-4xl font-black uppercase text-black mt-12">How to Use BBCode for Image Sharing</h2>
          <p>
            Using <strong>BBCode image hosting</strong> is incredibly simple. Once you upload an image to PixelHost, we provide you with a code snippet that looks like this: `[img]https://pixelhost.fun/your-image.png[/img]`. Simply copy and paste this code into your forum post, and your image will be displayed instantly.
          </p>

          <div className="bg-black text-white p-10 rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_#FF90E8] my-16">
            <h3 className="text-3xl font-black uppercase mb-6 text-[#FF90E8]">Why Forum Users Love PixelHost:</h3>
            <ul className="space-y-4 font-bold text-xl">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> Instant BBCode & Markdown</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> No Registration Required</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> High-Speed Global CDN</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> Support for All Major Formats</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> 100% Free Image Hosting</li>
            </ul>
          </div>

          <p>
            Ready to get your <strong>BBCode image link</strong>? PixelHost is the most reliable <strong>image sharing</strong> platform for 2026. Our <strong>fast image hosting</strong> ensures that your images are always available when you need them. Try our <strong>free image hosting with direct link</strong> today and see why PixelHost is the preferred choice for millions of users.
          </p>
        </div>

        <div className="text-center">
          <a 
            href="/upload"
            className={`inline-flex items-center gap-3 px-12 py-6 border-4 border-black rounded-2xl bg-[#FF90E8] shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide text-2xl`}
          >
            <Zap size={32} /> Get Your BBCode Now
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
