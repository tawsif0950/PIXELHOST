'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Globe, 
  Code, 
  Image as ImageIcon, 
  Share2, 
  Clock, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const hardShadowHover = "transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000]";

  const features = [
    {
      icon: <Zap className="text-[#FFE873]" size={32} />,
      title: "Lightning Fast",
      description: "Optimized for speed. Your images are uploaded and processed in milliseconds."
    },
    {
      icon: <Shield className="text-[#FF90E8]" size={32} />,
      title: "Secure Storage",
      description: "Images are stored securely on GitHub's infrastructure with global redundancy."
    },
    {
      icon: <Globe className="text-[#88FF88]" size={32} />,
      title: "Global CDN",
      description: "Served via high-speed CDNs like jsDelivr for instant loading anywhere in the world."
    },
    {
      icon: <Code className="text-[#88CCFF]" size={32} />,
      title: "Multiple Formats",
      description: "Get Direct, HTML, BBCode, and Markdown links ready to use in one click."
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#FFE873]">
      <Header />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block border-4 border-black bg-[#FFE873] px-4 py-1 rounded-full font-bold mb-6 shadow-[4px_4px_0px_0px_#000] transform -rotate-2"
            >
              ✨ Instant links, zero hassle
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl lg:text-8xl font-black tracking-tight leading-tight mb-6 uppercase font-display"
            >
              Share images <br className="hidden lg:block" />
              <span className="relative inline-block">
                <span className="relative z-10">like a pro.</span>
                <span className="absolute bottom-2 left-0 w-full h-8 bg-[#FF90E8] -z-10 transform -rotate-1"></span>
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-medium mb-10 max-w-2xl mx-auto lg:mx-0 border-l-8 border-black pl-6"
            >
              The boldest, fastest image hosting platform for developers and creators. 
              Get permanent direct links instantly. No accounts, no tracking, just speed.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <Link 
                href="/upload"
                className={`px-10 py-5 border-4 border-black rounded-2xl bg-[#FF90E8] shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide w-full sm:w-auto text-xl text-center flex items-center justify-center gap-2`}
              >
                Start Uploading <ArrowRight size={24} />
              </Link>
              <a href="/docs" className={`inline-block px-10 py-5 border-4 border-black rounded-2xl bg-white shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide w-full sm:w-auto text-xl text-center`}>
                Read Docs
              </a>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            className="flex-1 hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-black rounded-[3rem] transform rotate-3"></div>
              <div className="relative bg-white border-8 border-black rounded-[3rem] p-8 shadow-[16px_16px_0px_0px_#FFE873]">
                <div className="flex gap-4 mb-6">
                  <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-black"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-500 border-2 border-black"></div>
                  <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-black"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-gray-100 rounded-lg border-2 border-black w-3/4"></div>
                  <div className="h-64 bg-gray-50 rounded-2xl border-4 border-dashed border-black flex items-center justify-center">
                    <ImageIcon size={64} className="text-gray-300" />
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 bg-[#FF90E8] rounded-xl border-2 border-black flex-1"></div>
                    <div className="h-10 bg-black rounded-xl border-2 border-black w-12"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black uppercase mb-6 font-display">Why PixelHost?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">We&apos;ve built the ultimate tool for sharing images without the friction of traditional hosting.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border-4 border-white rounded-3xl hover:bg-white hover:text-black transition-colors duration-300 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-black uppercase mb-4">{feature.title}</h3>
                <p className="font-medium text-gray-400 group-hover:text-black">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <h2 className="text-5xl lg:text-7xl font-black uppercase mb-12 font-display">Three steps to <br/> perfection.</h2>
              <div className="space-y-12">
                {[
                  { step: "01", title: "Upload", desc: "Drag and drop your image into our secure uploader." },
                  { step: "02", title: "Process", desc: "We optimize and host your image on our global network." },
                  { step: "03", title: "Share", desc: "Copy your direct link and paste it anywhere instantly." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 items-start">
                    <div className="text-4xl font-black text-[#FF90E8] border-4 border-black px-4 py-2 rounded-2xl shadow-[4px_4px_0px_0px_#000]">{item.step}</div>
                    <div>
                      <h3 className="text-3xl font-black uppercase mb-2">{item.title}</h3>
                      <p className="text-xl font-medium text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="p-8 border-8 border-black rounded-[3rem] bg-[#88CCFF] shadow-[16px_16px_0px_0px_#000]">
                <div className="bg-white border-4 border-black rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-4 border-b-4 border-black pb-4">
                    <Share2 size={24} />
                    <span className="font-black uppercase">Share Anywhere</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-green-600 font-bold">
                      <CheckCircle2 size={20} /> Discord & Slack
                    </div>
                    <div className="flex items-center gap-3 text-green-600 font-bold">
                      <CheckCircle2 size={20} /> Forums & BBCode
                    </div>
                    <div className="flex items-center gap-3 text-green-600 font-bold">
                      <CheckCircle2 size={20} /> GitHub & Markdown
                    </div>
                    <div className="flex items-center gap-3 text-green-600 font-bold">
                      <CheckCircle2 size={20} /> Direct API Access
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section for SEO */}
      <section className="py-32 bg-gray-50 border-t-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black uppercase mb-8 font-display">The #1 Free Image Hosting Service for 2026</h2>
              <div className="prose prose-xl font-medium text-gray-700 space-y-6">
                <p>
                  PixelHost is designed to be the fastest and most reliable <strong>free image hosting</strong> service on the web. Whether you are a developer looking for a <strong>direct image link generator</strong> or a creator needing to <strong>share images</strong> on forums, Discord, or GitHub, PixelHost provides the tools you need.
                </p>
                <p>
                  Our platform makes it easy to <strong>upload image and get direct link</strong> instantly. We understand that speed and simplicity are key, which is why we offer <strong>no signup image hosting</strong>. Simply drag and drop your files, and our high-speed servers will process them in milliseconds, providing you with <strong>permanent image links</strong> that never expire.
                </p>
                <p>
                  PixelHost is the ultimate <strong>postimage alternative</strong>. We provide a variety of embed codes, including <strong>BBCode image hosting</strong> for forums and <strong>Markdown image hosting</strong> for developers. Our <strong>direct link image hosting</strong> ensures that your images load perfectly every time, without annoying landing pages or slow redirects.
                </p>
                <h3 className="text-3xl font-black uppercase mt-12 mb-4">Why Choose PixelHost for Image Sharing?</h3>
                <p>
                  When you need to <strong>host images for free</strong>, you want a service that is both fast and secure. PixelHost utilizes a global CDN to serve your images from the closest possible location, ensuring lightning-fast load times worldwide. Our <strong>free image hosting with direct link</strong> capability is perfect for eBay sellers, forum users, and web developers alike.
                </p>
                <p>
                  We support all major formats, including JPG, PNG, GIF, and WEBP. With our <strong>fast image hosting</strong>, you can upload multiple images at once and get a list of links ready to be shared. Experience the best <strong>image sharing</strong> platform today—no registration, no limits, just pure performance.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Direct Links", color: "#FFE873", href: "/image-hosting-with-direct-link" },
                { label: "Free Hosting", color: "#FF90E8", href: "/free-image-hosting" },
                { label: "Upload Image", color: "#88FF88", href: "/upload-image" },
                { label: "BBCode Ads", color: "#88CCFF", href: "/bbcode-image-hosting" }
              ].map((item, i) => (
                <Link key={i} href={item.href} style={{ backgroundColor: item.color }} className={`p-8 border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_#000] flex items-center justify-center text-center ${hardShadowHover}`}>
                  <span className="text-xl font-black uppercase">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#FF90E8] border-t-8 border-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-8xl font-black uppercase mb-12 leading-none font-display">Ready to host <br/> your first image?</h2>
          <Link 
            href="/upload"
            className={`inline-block px-16 py-8 border-8 border-black rounded-[2.5rem] bg-white shadow-[16px_16px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide text-3xl`}
          >
            Get Started Now
          </Link>
          <div className="mt-12 flex justify-center gap-8 text-xl font-bold uppercase">
            <div className="flex items-center gap-2"><Clock size={24} /> 100% Free</div>
            <div className="flex items-center gap-2"><Zap size={24} /> No Signup</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
