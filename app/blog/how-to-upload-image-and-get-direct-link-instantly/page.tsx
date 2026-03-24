'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { UploadCloud, Zap, Code, CheckCircle2 } from 'lucide-react';
import AdBanner from '@/components/AdBanner';

export default function HowToUploadImage() {
  const hardShadowHover = "transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000]";

  return (
    <div className="min-h-screen font-sans selection:bg-[#FFE873]">
      <Header />

      {/* Top Banner Ad 468x60 */}
      <AdBanner dataKey="f60bb3c33ea02991baadb5fe0f4de9dc" width={468} height={60} />

      <main className="max-w-4xl mx-auto px-6 py-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black uppercase mb-8 font-display leading-tight"
        >
          How to Upload Image & <br/> <span className="text-[#88CCFF]">Get Direct Link Instantly</span>
        </motion.h1>

        <div className="prose prose-xl font-medium text-gray-700 space-y-8 mb-16">
          <p className="text-2xl border-l-8 border-black pl-6 font-bold">
            Need to <strong>upload image and get direct link</strong> instantly? PixelHost is the fastest way to get your images online and share them anywhere.
          </p>

          <h2 className="text-4xl font-black uppercase text-black mt-12">Step 1: Go to PixelHost.fun</h2>
          <p>
            The first step is to visit <strong>PixelHost.fun</strong>. Our platform is designed for speed and simplicity, making it easy to <strong>upload image get direct link</strong> in seconds.
          </p>

          <h2 className="text-4xl font-black uppercase text-black mt-12">Step 2: Select Your Image</h2>
          <p>
            Once you are on the homepage, click <strong>“Upload Image”</strong> or drag and drop your file into our uploader. We support all major formats, including JPG, PNG, GIF, and WEBP.
          </p>

          {/* Mid Banner Ad 300x250 */}
          <AdBanner dataKey="46eea6dc12051609b0b8dc8ee4729962" width={300} height={250} />

          <h2 className="text-4xl font-black uppercase text-black mt-12">Step 3: Get Your Direct Link</h2>
          <p>
            After the upload is complete, you will be provided with a variety of links, including a <strong>direct image link</strong>. This is a clean URL that points directly to the image file, making it perfect for embedding on websites, forums, and blogs.
          </p>

          <div className="bg-[#88CCFF] p-8 border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_#000] not-prose my-8">
            <h3 className="text-2xl font-black uppercase mb-4">Why PixelHost is the Best Direct Link Generator:</h3>
            <ul className="space-y-2 font-bold">
              <li className="flex items-center gap-2"><CheckCircle2 size={20} /> Instant Direct Image Links</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={20} /> No Signup Required</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={20} /> High-Speed Global CDN</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={20} /> Support for All Major Formats</li>
            </ul>
          </div>

          <h2 className="text-4xl font-black uppercase text-black mt-12">Conclusion</h2>
          <p>
            When it comes to <strong>free image hosting</strong>, PixelHost is the clear winner for 2026. It offers the best combination of speed, reliability, and ease of use. Whether you are a developer looking for a <strong>direct image link generator</strong> or a creator needing to <strong>share images</strong> on forums, Discord, or GitHub, PixelHost is the perfect solution.
          </p>
        </div>

        <div className="text-center">
          <a 
            href="/upload"
            className={`inline-flex items-center gap-3 px-12 py-6 border-4 border-black rounded-2xl bg-[#88CCFF] shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide text-2xl`}
          >
            <UploadCloud size={32} /> Start Uploading Now
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
