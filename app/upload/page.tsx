'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, Copy, CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
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

export default function UploadPage() {
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

  const hardShadowHover = "transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000]";

  return (
    <div className="min-h-screen font-sans selection:bg-[#FFE873]">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="inline-flex items-center gap-2 font-bold uppercase mb-8 hover:underline">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 sm:p-8 rounded-[2rem] border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] sm:shadow-[12px_12px_0px_0px_#000]"
        >
          <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
              relative overflow-hidden rounded-2xl border-4 border-dashed border-black transition-colors duration-300 flex flex-col items-center justify-center p-6 sm:p-12 text-center min-h-[400px]
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
              <div className="flex flex-col items-center w-full max-w-lg">
                <h3 className="text-3xl font-black uppercase mb-8 text-green-600 font-display">
                  Upload Success!
                </h3>
                
                <div className="w-full space-y-6 text-left">
                  {Object.entries(uploadResult.links)
                    .filter(([key]) => key === 'html')
                    .map(([key, value]) => (
                      <div key={key} className="flex flex-col gap-2">
                        <label className="text-sm font-black uppercase tracking-wider">{key} Link</label>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                          <input 
                            type="text" 
                            readOnly 
                            value={value} 
                            className="flex-1 px-4 py-3 border-4 border-black rounded-xl bg-white text-sm font-mono outline-none shadow-[4px_4px_0px_0px_#000] min-w-0"
                          />
                          <button 
                            onClick={() => copyToClipboard(value, key)}
                            className="p-3 border-4 border-black rounded-xl bg-[#FFE873] hover:bg-[#FF90E8] transition-colors shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center"
                            title="Copy to clipboard"
                          >
                            {copiedLink === key ? <CheckCircle2 size={24} /> : <Copy size={24} />}
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
                
                <button 
                  onClick={() => setUploadResult(null)}
                  className={`mt-12 px-8 py-3 border-4 border-black rounded-2xl bg-white shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase`}
                >
                  Upload Another
                </button>
              </div>
            ) : isUploading ? (
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-black uppercase mb-4 font-display">
                  Uploading...
                </h3>
                <p className="font-medium mb-8 text-xl">
                  Please wait while we process your image.
                </p>
              </div>
            ) : files.length > 0 ? (
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-black uppercase mb-6 font-display">
                  {files.length} file{files.length > 1 ? 's' : ''} ready
                </h3>
                <div className="flex flex-wrap gap-4 justify-center mb-10 max-w-md">
                  {files.slice(0, 3).map((f, i) => (
                    <span key={i} className="text-base px-6 py-3 border-4 border-black bg-white font-black rounded-xl shadow-[6px_6px_0px_0px_#000] truncate max-w-[200px]">
                      {f.name}
                    </span>
                  ))}
                  {files.length > 3 && (
                    <span className="text-base px-6 py-3 border-4 border-black bg-[#FFE873] font-black rounded-xl shadow-[6px_6px_0px_0px_#000]">
                      +{files.length - 3} more
                    </span>
                  )}
                </div>
                
                {uploadResult?.error && (
                  <p className="text-red-500 font-black mb-6 text-xl">{uploadResult.error}</p>
                )}

                <div className="flex gap-6">
                  <button 
                    onClick={() => setFiles([])}
                    className={`px-8 py-3 border-4 border-black rounded-2xl bg-white shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase`}
                  >
                    Clear
                  </button>
                  <button 
                    onClick={handleUpload}
                    className={`px-10 py-3 border-4 border-black rounded-2xl bg-[#FF90E8] shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide`}
                  >
                    Upload Now
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-4xl font-black uppercase mb-6 font-display">
                  Drop images here
                </h3>
                <p className="font-medium mb-10 text-xl">
                  JPG, PNG, GIF, WEBP (Max 10MB)
                </p>
                
                <label className={`cursor-pointer px-10 py-5 border-4 border-black rounded-2xl bg-[#FF90E8] shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide text-xl`}>
                  Browse Files
                  <input type="file" className="hidden" multiple accept="image/*" onChange={handleFileChange} />
                </label>
              </>
            )}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
