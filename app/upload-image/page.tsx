'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { UploadCloud, Zap, Code, CheckCircle2 } from 'lucide-react';

export default function UploadImage() {
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
          Upload Image & <br/> <span className="text-[#88CCFF]">Get Direct Link</span>
        </motion.h1>

        <div className="prose prose-xl font-medium text-gray-700 space-y-8 mb-16">
          <p className="text-2xl border-l-8 border-black pl-6 font-bold">
            Need to <strong>upload image and get direct link</strong> instantly? PixelHost is the fastest way to get your images online and share them anywhere.
          </p>

          <h2 className="text-4xl font-black uppercase text-black mt-12">How to Upload an Image Instantly</h2>
          <p>
            Sharing images should not be complicated. Our <strong>image upload</strong> platform is designed for simplicity. Whether you are using a desktop or mobile device, you can <strong>upload image get direct link</strong> in three simple steps:
          </p>

          <div className="grid md:grid-cols-3 gap-8 not-prose my-12">
            {[
              { step: "01", title: "Select", desc: "Choose your image file or drag and drop it into our uploader." },
              { step: "02", title: "Upload", desc: "Our high-speed servers process and host your image instantly." },
              { step: "03", title: "Share", desc: "Copy your direct link, BBCode, or Markdown code and share it." }
            ].map((item, i) => (
              <div key={i} className="p-8 border-4 border-black rounded-3xl bg-white shadow-[8px_8px_0px_0px_#000] flex flex-col items-center text-center">
                <div className="text-3xl font-black text-[#88CCFF] border-4 border-black px-4 py-2 rounded-2xl shadow-[4px_4px_0px_0px_#000] mb-6">{item.step}</div>
                <h3 className="text-2xl font-black uppercase mb-2">{item.title}</h3>
                <p className="font-bold">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-black uppercase text-black mt-12">No Signup Image Uploading</h2>
          <p>
            We value your time and privacy. That&apos;s why we offer <strong>no signup image hosting</strong>. You don&apos;t need to create an account or provide an email address to <strong>upload image for free</strong>. Just upload and get your links immediately. This makes PixelHost the perfect tool for quick image sharing on Discord, Slack, and other messaging platforms.
          </p>

          <h2 className="text-4xl font-black uppercase text-black mt-12">Direct Link Image Hosting</h2>
          <p>
            A <strong>direct image link</strong> is essential for embedding images on websites, forums, and blogs. Unlike other services that force users to view images on their landing pages, PixelHost provides <strong>permanent direct links</strong> that point directly to the image file. This ensures that your images load perfectly every time, without any extra baggage.
          </p>

          <div className="bg-black text-white p-10 rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_#88CCFF] my-16">
            <h3 className="text-3xl font-black uppercase mb-6 text-[#88CCFF]">Supported Formats:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['JPG', 'PNG', 'GIF', 'WEBP'].map((format) => (
                <div key={format} className="border-4 border-white p-4 rounded-xl flex items-center justify-center text-center">
                  <span className="font-black text-xl uppercase">{format}</span>
                </div>
              ))}
            </div>
          </div>

          <p>
            PixelHost is the best <strong>image sharing</strong> platform for developers, creators, and everyday users. Our <strong>fast image hosting</strong> ensures that your images are always available when you need them. Try our <strong>free image hosting with direct link</strong> today and see why PixelHost is the preferred choice for millions of users.
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
