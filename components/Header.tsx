'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hardShadowHover = "transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000]";

  return (
    <header className="sticky top-0 z-50 flex flex-col">
      {/* Global Notice Banner */}
      <div className="bg-[#FFE873] border-b-4 border-black px-4 py-2 text-center font-black uppercase tracking-wide text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 z-50 relative">
        <span>🚀 We develop any website: E-commerce, SaaS & Custom Apps!</span>
        <a 
          href="https://wa.me/+8801410199221" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 bg-white px-3 py-1 border-2 border-black rounded-full hover:bg-[#88FF88] transition-colors shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
        >
          Contact WhatsApp: +8801410199221
        </a>
      </div>

      <nav className="px-6 py-4 bg-white border-b-4 border-black relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-12 h-12 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_#000] flex items-center justify-center bg-[#FF90E8] overflow-hidden relative"
          >
            <Image src="https://i.postimg.cc/wvHYTSVw/Chat-GPT-Image-Mar-17-2026-11-02-33-PM.png" alt="PixelHost Logo" fill className="object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <span className="text-2xl font-black tracking-tight uppercase">PixelHost</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/docs" className="font-bold hover:underline decoration-4 underline-offset-4">Docs</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden w-12 h-12 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_#000] flex items-center justify-center bg-white ${hardShadowHover}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b-4 border-black p-6 flex flex-col gap-4"
        >
          <Link href="/docs" className="font-bold text-lg border-b-2 border-black pb-2">Docs</Link>
        </motion.div>
      )}
      </nav>
    </header>
  );
}
