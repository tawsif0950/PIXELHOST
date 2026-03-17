'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UploadCloud, Copy, CheckCircle2, Loader2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface UploadResult {
  success: boolean;
  filename?: string;
  links?: {
    direct: string;
    html: string;
    bbcode: string;
    markdown: string;
    cdn: string;
  };
  error?: string;
}

export default function Home() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<UploadResult | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFiles(Array.from(e.dataTransfer.files));
      setUploadResult(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(Array.from(e.target.files));
      setUploadResult(null);
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    setIsUploading(true);
    setUploadResult(null);

    const formData = new FormData();
    formData.append('file', files[0]);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setUploadResult(result);
      if (result.success) {
        setFiles([]);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      setUploadResult({ success: false, error: 'Upload failed due to network error.' });
    } finally {
      setIsUploading(false);
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(type);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const scrollToUpload = () => {
    const uploadArea = document.getElementById('upload-area');
    if (uploadArea) {
      uploadArea.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hardShadowHover = "transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000]";

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
              className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6 uppercase"
            >
              Share images <br className="hidden lg:block" />
              <span className="relative inline-block">
                <span className="relative z-10">like a pro.</span>
                <span className="absolute bottom-2 left-0 w-full h-6 bg-[#FF90E8] -z-10 transform -rotate-1"></span>
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl font-medium mb-10 max-w-2xl mx-auto lg:mx-0 border-l-4 border-black pl-4"
            >
              A bold, lightning-fast image hosting platform. 
              Drag, drop, and get your shareable link instantly. No fluff, just lines.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <button 
                onClick={scrollToUpload}
                className={`px-8 py-4 border-4 border-black rounded-2xl bg-[#FF90E8] shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide w-full sm:w-auto text-lg`}
              >
                Start Uploading
              </button>
              <a href="/docs" className={`inline-block px-8 py-4 border-4 border-black rounded-2xl bg-white shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide w-full sm:w-auto text-lg text-center`}>
                Read Docs
              </a>
            </motion.div>
          </div>

          {/* Upload Area */}
          <motion.div 
            id="upload-area"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-none scroll-mt-32"
          >
            <div className="p-4 rounded-[2rem] border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                  relative overflow-hidden rounded-2xl border-4 border-dashed border-black transition-colors duration-300 flex flex-col items-center justify-center p-12 text-center min-h-[400px]
                  ${isDragging ? 'bg-[#FFE873]' : 'bg-[#f8f9fa]'}
                `}
              >
                <div className="w-24 h-24 border-4 border-black rounded-full bg-white shadow-[4px_4px_0px_0px_#000] flex items-center justify-center mb-8 transform -rotate-6">
                  {isUploading ? (
                    <Loader2 size={40} strokeWidth={2.5} className="animate-spin" />
                  ) : uploadResult?.success ? (
                    <CheckCircle2 size={40} strokeWidth={2.5} className="text-green-500" />
                  ) : (
                    <UploadCloud size={40} strokeWidth={2.5} />
                  )}
                </div>
                
                {uploadResult?.success && uploadResult.links ? (
                  <div className="flex flex-col items-center w-full max-w-sm">
                    <h3 className="text-2xl font-black uppercase mb-6 text-green-600">
                      Upload Success!
                    </h3>
                    
                    <div className="w-full space-y-4 text-left">
                      {Object.entries(uploadResult.links).map(([key, value]) => (
                        <div key={key} className="flex flex-col gap-1">
                          <label className="text-xs font-bold uppercase tracking-wider">{key} Link</label>
                          <div className="flex items-center gap-2">
                            <input 
                              type="text" 
                              readOnly 
                              value={value} 
                              className="flex-1 px-3 py-2 border-2 border-black rounded-lg bg-white text-sm font-mono outline-none"
                            />
                            <button 
                              onClick={() => copyToClipboard(value, key)}
                              className="p-2 border-2 border-black rounded-lg bg-[#FFE873] hover:bg-[#FF90E8] transition-colors"
                              title="Copy to clipboard"
                            >
                              {copiedLink === key ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => setUploadResult(null)}
                      className={`mt-8 px-6 py-2 border-4 border-black rounded-xl bg-white shadow-[4px_4px_0px_0px_#000] ${hardShadowHover} font-bold uppercase`}
                    >
                      Upload Another
                    </button>
                  </div>
                ) : isUploading ? (
                  <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-black uppercase mb-4">
                      Uploading...
                    </h3>
                    <p className="font-medium mb-8 text-lg">
                      Please wait while we process your image.
                    </p>
                  </div>
                ) : files.length > 0 ? (
                  <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-black uppercase mb-4">
                      {files.length} file{files.length > 1 ? 's' : ''} ready
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center mb-8 max-w-xs">
                      {files.slice(0, 3).map((f, i) => (
                        <span key={i} className="text-sm px-4 py-2 border-2 border-black bg-white font-bold rounded-full shadow-[4px_4px_0px_0px_#000] truncate max-w-[150px]">
                          {f.name}
                        </span>
                      ))}
                      {files.length > 3 && (
                        <span className="text-sm px-4 py-2 border-2 border-black bg-[#FFE873] font-bold rounded-full shadow-[4px_4px_0px_0px_#000]">
                          +{files.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    {uploadResult?.error && (
                      <p className="text-red-500 font-bold mb-4">{uploadResult.error}</p>
                    )}

                    <div className="flex gap-4">
                      <button 
                        onClick={() => setFiles([])}
                        className={`px-6 py-2 border-4 border-black rounded-xl bg-white shadow-[4px_4px_0px_0px_#000] ${hardShadowHover} font-bold uppercase`}
                      >
                        Clear
                      </button>
                      <button 
                        onClick={handleUpload}
                        className={`px-8 py-2 border-4 border-black rounded-xl bg-[#FF90E8] shadow-[4px_4px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide`}
                      >
                        Upload Now
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-3xl font-black uppercase mb-4">
                      Drop images
                    </h3>
                    <p className="font-medium mb-8 text-lg">
                      JPG, PNG, GIF, WEBP (Max 20MB)
                    </p>
                    
                    <label className={`cursor-pointer px-8 py-4 border-4 border-black rounded-2xl bg-[#FF90E8] shadow-[4px_4px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide`}>
                      Browse Files
                      <input type="file" className="hidden" multiple accept="image/*" onChange={handleFileChange} />
                    </label>
                  </>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
