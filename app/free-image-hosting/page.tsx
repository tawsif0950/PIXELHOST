'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Zap, Globe, CheckCircle2 } from 'lucide-react';

export default function FreeImageHosting() {
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
          Free Image Hosting <br/> <span className="text-[#FF90E8]">No Limits</span>
        </motion.h1>

        <div className="prose prose-xl font-medium text-gray-700 space-y-8 mb-16">
          <p className="text-2xl border-l-8 border-black pl-6 font-bold">
            Looking for the best <strong>free image hosting</strong> service? PixelHost offers a fast, secure, and completely free platform to host your images forever.
          </p>

          <h2 className="text-4xl font-black uppercase text-black mt-12">Why Use Our Free Image Hosting?</h2>
          <p>
            In today&apos;s digital world, sharing images should be easy. Our <strong>free image hosting</strong> service is built for speed and reliability. Whether you are sharing photos with friends, embedding images in a blog, or using them for professional development, PixelHost is the perfect solution.
          </p>

          <div className="grid md:grid-cols-2 gap-8 not-prose my-12">
            <div className="p-8 border-4 border-black rounded-3xl bg-[#FFE873] shadow-[8px_8px_0px_0px_#000]">
              <Shield size={32} className="mb-4" />
              <h3 className="text-2xl font-black uppercase mb-2">Secure & Private</h3>
              <p className="font-bold">Your images are stored safely on our redundant servers.</p>
            </div>
            <div className="p-8 border-4 border-black rounded-3xl bg-[#88FF88] shadow-[8px_8px_0px_0px_#000]">
              <Zap size={32} className="mb-4" />
              <h3 className="text-2xl font-black uppercase mb-2">Instant Upload</h3>
              <p className="font-bold">No waiting, no accounts. Just upload and share.</p>
            </div>
          </div>

          <h2 className="text-4xl font-black uppercase text-black mt-12">Unlimited Bandwidth & Storage</h2>
          <p>
            We don&apos;t believe in limits. Our <strong>unlimited image hosting</strong> allows you to upload as many images as you need. We provide a global CDN (Content Delivery Network) to ensure that your images load instantly for users around the world. This makes PixelHost one of the <strong>fastest free image hosting</strong> sites available today.
          </p>

          <h2 className="text-4xl font-black uppercase text-black mt-12">The Best PostImage Alternative</h2>
          <p>
            Many users are looking for a reliable <strong>PostImage alternative</strong> or <strong>Imgur alternative</strong>. PixelHost fills that gap by providing a clean, ad-light experience focused entirely on the user. We provide direct links, BBCode for forums, and Markdown for developers, making us the most versatile <strong>image sharing</strong> platform.
          </p>

          <div className="bg-black text-white p-10 rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_#FF90E8] my-16">
            <h3 className="text-3xl font-black uppercase mb-6 text-[#FF90E8]">Key Features:</h3>
            <ul className="space-y-4 font-bold text-xl">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> 100% Free Forever</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> No Registration Required</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> Direct Image Links</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> High-Speed Global CDN</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#88FF88]" /> Support for JPG, PNG, GIF, WEBP</li>
            </ul>
          </div>

          <p>
            Ready to experience the next level of <strong>free image hosting</strong>? Join thousands of users who trust PixelHost for their image sharing needs. Our platform is optimized for Core Web Vitals, ensuring a smooth and fast experience on both desktop and mobile devices.
          </p>
        </div>

        <div className="text-center">
          <a 
            href="/upload"
            className={`inline-block px-12 py-6 border-4 border-black rounded-2xl bg-[#FF90E8] shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide text-2xl`}
          >
            Upload Your Image Now
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
