'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, Code, Key, Zap, Image as ImageIcon, Link2, CheckCircle2, Info, FileImage, Lightbulb, AlertTriangle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Docs() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen font-sans selection:bg-[#FFE873] bg-white flex flex-col">
      <Header />

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-72 border-b-4 md:border-b-0 md:border-r-4 border-black bg-[#f8f9fa] p-6 flex-shrink-0">
          <div className="sticky top-28">
            <h3 className="font-black uppercase text-xl mb-6 border-b-4 border-black pb-2 inline-block">Documentation</h3>
            <ul className="space-y-3">
              {[
                { id: 'about', label: 'About PixelHost', icon: <Info size={18} strokeWidth={3} /> },
                { id: 'how-to-upload', label: 'How to Upload', icon: <UploadCloud size={18} strokeWidth={3} /> },
                { id: 'formats', label: 'Supported Formats', icon: <FileImage size={18} strokeWidth={3} /> },
                { id: 'links', label: 'Image Links', icon: <Link2 size={18} strokeWidth={3} /> },
                { id: 'tips', label: 'Usage Tips', icon: <Lightbulb size={18} strokeWidth={3} /> },
                { id: 'notes', label: 'Notes & Troubleshooting', icon: <AlertTriangle size={18} strokeWidth={3} /> },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 border-4 border-black rounded-xl font-bold transition-all text-left ${
                      activeSection === item.id 
                        ? 'bg-[#FFE873] shadow-[4px_4px_0px_0px_#000] translate-x-1' 
                        : 'bg-white hover:bg-[#FF90E8] hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-12 bg-white">
          <div className="max-w-4xl">
            {activeSection === 'about' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl md:text-5xl font-black uppercase mb-6">About PixelHost</h1>
                <p className="text-xl font-medium mb-8 border-l-4 border-black pl-4">
                  <strong>PixelHost (pixelhost.fun)</strong> is a free image hosting website where you can upload images and instantly get multiple shareable links — similar to PostImage.
                </p>
                <div className="relative p-8 border-4 border-black rounded-3xl bg-[#FF90E8] shadow-[8px_8px_0px_0px_#000] flex flex-col items-center justify-center text-center mt-12">
                  <div className="absolute -top-4 -right-4 bg-[#FFE873] border-4 border-black p-2 rounded-xl shadow-[4px_4px_0px_0px_#000] transform rotate-12">
                    <Zap size={24} strokeWidth={3} />
                  </div>
                  <h2 className="text-3xl font-black uppercase mb-4">Fast. Free. Simple.</h2>
                  <p className="text-lg font-bold">Host your images with us and share them anywhere on the web.</p>
                </div>
              </motion.div>
            )}

            {activeSection === 'how-to-upload' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl md:text-5xl font-black uppercase mb-6">How to Upload an Image</h1>
                <p className="text-xl font-medium mb-12 border-l-4 border-black pl-4">
                  Uploading an image to PixelHost is incredibly simple. Follow these steps to get your images online instantly.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
                  <div>
                    <ol className="space-y-4 text-lg font-bold list-decimal list-inside">
                      <li className="p-3 border-4 border-black rounded-xl bg-[#FFE873] shadow-[4px_4px_0px_0px_#000]">Go to <strong>pixelhost.fun</strong></li>
                      <li className="p-3 border-4 border-black rounded-xl bg-white shadow-[4px_4px_0px_0px_#000]">Click <strong>“Upload Image”</strong> or drag & drop your file</li>
                      <li className="p-3 border-4 border-black rounded-xl bg-white shadow-[4px_4px_0px_0px_#000]">Select your image</li>
                      <li className="p-3 border-4 border-black rounded-xl bg-[#FF90E8] shadow-[4px_4px_0px_0px_#000]">Wait for the upload to complete</li>
                    </ol>
                  </div>

                  {/* Visual Art for Upload */}
                  <div className="relative p-8 border-4 border-black rounded-3xl bg-[#f8f9fa] shadow-[8px_8px_0px_0px_#000] flex flex-col items-center justify-center text-center">
                    <div className="absolute -top-4 -right-4 bg-[#FFE873] border-4 border-black p-2 rounded-xl shadow-[4px_4px_0px_0px_#000] transform rotate-12">
                      <Zap size={24} strokeWidth={3} />
                    </div>
                    <div className="w-24 h-24 bg-white border-4 border-black rounded-2xl border-dashed flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_#000]">
                      <ImageIcon size={40} strokeWidth={2} className="text-gray-400" />
                    </div>
                    <div className="bg-[#FF90E8] border-4 border-black px-6 py-2 rounded-xl font-black uppercase shadow-[4px_4px_0px_0px_#000] transform -rotate-2">
                      Select Image
                    </div>
                    <motion.div 
                      animate={{ y: [0, -10, 0] }} 
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="mt-6"
                    >
                      <UploadCloud size={32} strokeWidth={3} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'formats' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl md:text-5xl font-black uppercase mb-6">Supported Formats</h1>
                <p className="text-xl font-medium mb-8 border-l-4 border-black pl-4">
                  We support the most common image formats for the web.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {['JPG / JPEG', 'PNG', 'GIF', 'WEBP'].map((format) => (
                    <div key={format} className="border-4 border-black p-6 rounded-2xl bg-[#FFE873] shadow-[4px_4px_0px_0px_#000] flex items-center justify-center text-center">
                      <span className="font-black text-xl uppercase">{format}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === 'links' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl md:text-5xl font-black uppercase mb-6">Your Image Links</h1>
                <p className="text-xl font-medium mb-12 border-l-4 border-black pl-4">
                  After uploading, PixelHost will generate multiple links for you to use.
                </p>

                <div className="space-y-8">
                  <div className="border-4 border-black p-6 rounded-2xl bg-white shadow-[4px_4px_0px_0px_#000]">
                    <h3 className="font-black text-2xl mb-2 uppercase">1. Direct Link</h3>
                    <p className="font-medium mb-4">Open or share the image directly</p>
                    <div className="bg-black text-white p-4 rounded-xl font-mono text-sm border-4 border-black shadow-[4px_4px_0px_0px_#FF90E8] overflow-x-auto">
                      https://pixelhost.fun/your-image.png
                    </div>
                  </div>

                  <div className="border-4 border-black p-6 rounded-2xl bg-white shadow-[4px_4px_0px_0px_#000]">
                    <h3 className="font-black text-2xl mb-2 uppercase">2. HTML Embed</h3>
                    <p className="font-medium mb-4">Use for websites</p>
                    <div className="bg-black text-white p-4 rounded-xl font-mono text-sm border-4 border-black shadow-[4px_4px_0px_0px_#FFE873] overflow-x-auto">
                      {`<img src="https://pixelhost.fun/your-image.png" alt="image">`}
                    </div>
                  </div>

                  <div className="border-4 border-black p-6 rounded-2xl bg-white shadow-[4px_4px_0px_0px_#000]">
                    <h3 className="font-black text-2xl mb-2 uppercase">3. BBCode</h3>
                    <p className="font-medium mb-4">Use for forums</p>
                    <div className="bg-black text-white p-4 rounded-xl font-mono text-sm border-4 border-black shadow-[4px_4px_0px_0px_#FF90E8] overflow-x-auto">
                      [img]https://pixelhost.fun/your-image.png[/img]
                    </div>
                  </div>

                  <div className="border-4 border-black p-6 rounded-2xl bg-white shadow-[4px_4px_0px_0px_#000]">
                    <h3 className="font-black text-2xl mb-2 uppercase">4. Markdown</h3>
                    <p className="font-medium mb-4">Use for GitHub or blogs</p>
                    <div className="bg-black text-white p-4 rounded-xl font-mono text-sm border-4 border-black shadow-[4px_4px_0px_0px_#FFE873] overflow-x-auto">
                      ![image](https://pixelhost.fun/your-image.png)
                    </div>
                  </div>

                  <div className="border-4 border-black p-6 rounded-2xl bg-white shadow-[4px_4px_0px_0px_#000]">
                    <h3 className="font-black text-2xl mb-2 uppercase">5. CDN / Fast Link</h3>
                    <p className="font-medium mb-4">Optimized for fast loading</p>
                    <div className="bg-black text-white p-4 rounded-xl font-mono text-sm border-4 border-black shadow-[4px_4px_0px_0px_#FF90E8] overflow-x-auto">
                      https://cdn.pixelhost.fun/your-image.png
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'tips' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl md:text-5xl font-black uppercase mb-6">Usage Tips</h1>
                
                <h2 className="text-3xl font-black uppercase mb-4 mt-12">Copy Links</h2>
                <ul className="list-disc list-inside text-lg font-medium space-y-2 mb-12">
                  <li>Click <strong>“Copy”</strong> next to any link</li>
                  <li>Paste anywhere (Facebook, Discord, website, etc.)</li>
                </ul>

                <h2 className="text-3xl font-black uppercase mb-4">Best Usage Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-4 border-black p-6 rounded-2xl bg-[#FFE873] shadow-[4px_4px_0px_0px_#000]">
                    <h3 className="font-black text-xl mb-2 uppercase">Direct Link</h3>
                    <p className="font-medium">Use for sharing directly with others.</p>
                  </div>
                  <div className="border-4 border-black p-6 rounded-2xl bg-[#FF90E8] shadow-[4px_4px_0px_0px_#000]">
                    <h3 className="font-black text-xl mb-2 uppercase">HTML</h3>
                    <p className="font-medium">Use for embedding in websites.</p>
                  </div>
                  <div className="border-4 border-black p-6 rounded-2xl bg-white shadow-[4px_4px_0px_0px_#000]">
                    <h3 className="font-black text-xl mb-2 uppercase">BBCode</h3>
                    <p className="font-medium">Use for posting on forums.</p>
                  </div>
                  <div className="border-4 border-black p-6 rounded-2xl bg-white shadow-[4px_4px_0px_0px_#000]">
                    <h3 className="font-black text-xl mb-2 uppercase">Markdown</h3>
                    <p className="font-medium">Use for developers (GitHub, blogs).</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'notes' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl md:text-5xl font-black uppercase mb-6">Notes & Troubleshooting</h1>
                
                <div className="border-4 border-black p-8 rounded-3xl bg-[#FFE873] shadow-[8px_8px_0px_0px_#000] mb-12">
                  <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                    <AlertTriangle size={32} strokeWidth={3} /> Important Notes
                  </h2>
                  <ul className="list-disc list-inside text-lg font-bold space-y-3">
                    <li>Uploaded images are publicly accessible</li>
                    <li>Do not upload illegal or sensitive content</li>
                    <li>Keep your link safe if you want privacy</li>
                    <li>Large files may take longer to upload</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-black uppercase mb-6">Troubleshooting</h2>
                <div className="space-y-6">
                  <div className="border-4 border-black p-6 rounded-2xl bg-white shadow-[4px_4px_0px_0px_#000]">
                    <h3 className="font-black text-xl mb-2 uppercase">Upload not working?</h3>
                    <ul className="list-disc list-inside font-medium">
                      <li>Check internet connection</li>
                      <li>Try a smaller image</li>
                    </ul>
                  </div>
                  <div className="border-4 border-black p-6 rounded-2xl bg-white shadow-[4px_4px_0px_0px_#000]">
                    <h3 className="font-black text-xl mb-2 uppercase">Link not opening?</h3>
                    <ul className="list-disc list-inside font-medium">
                      <li>Refresh page</li>
                      <li>Try another link format</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
