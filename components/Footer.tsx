import React from 'react';
import Image from 'next/image';

export default function Footer() {
  const hardShadowHover = "transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000]";

  return (
    <footer className="py-12 px-6 border-t-4 border-black bg-[#FFE873]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 border-4 border-black rounded-xl bg-white shadow-[4px_4px_0px_0px_#000] flex items-center justify-center overflow-hidden relative">
            <Image src="https://i.postimg.cc/wvHYTSVw/Chat-GPT-Image-Mar-17-2026-11-02-33-PM.png" alt="PixelHost Logo" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <span className="text-2xl font-black uppercase">PixelHost</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="font-bold text-lg">
            © {new Date().getFullYear()} PixelHost. All rights reserved.
          </p>
          <p className="font-bold text-sm uppercase tracking-wider">
            Developed by <a href="https://hackoria.space" target="_blank" rel="noopener noreferrer" className="hover:underline text-black">hackoria.space</a>
          </p>
        </div>
        <div className="flex gap-4">
        </div>
      </div>
    </footer>
  );
}
