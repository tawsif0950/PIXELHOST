'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, Copy, CheckCircle2, Loader2, ArrowLeft, X } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';

interface UploadResult {
  success: boolean;
  filename?: string;
  originalName?: string;
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
  const [previews, setPreviews] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResults, setUploadResults] = useState<UploadResult[] | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  useEffect(() => {
    const objectUrls = files.map(file => URL.createObjectURL(file));
    setPreviews(objectUrls);
    return () => {
      objectUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [files]);

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
      setFiles(prev => [...prev, ...Array.from(e.dataTransfer.files!)]);
      setUploadResults(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
      setUploadResults(null);
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    setIsUploading(true);
    setUploadResults(null);

    const completedResults: UploadResult[] = [];

    // Upload sequentially to prevent GitHub API concurrency conflicts
    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        const result = await response.json();
        completedResults.push({ ...result, originalName: file.name });
      } catch (error) {
        console.error('Upload failed:', error);
        completedResults.push({ success: false, error: 'Upload failed due to network error.', originalName: file.name });
      }
    }

    setUploadResults(completedResults);
    setIsUploading(false);
    setFiles([]);
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
            <div className="w-24 h-24 border-4 border-black rounded-full bg-white shadow-[4px_4px_0px_0px_#000] flex items-center justify-center mb-8 transform -rotate-6 shrink-0">
              {isUploading ? (
                <Loader2 size={40} strokeWidth={2.5} className="animate-spin" />
              ) : uploadResults?.some(r => r.success) ? (
                <CheckCircle2 size={40} strokeWidth={2.5} className="text-green-500" />
              ) : (
                <UploadCloud size={40} strokeWidth={2.5} />
              )}
            </div>
            
            {uploadResults ? (
              <div className="flex flex-col items-center w-full max-w-3xl">
                <h3 className="text-3xl font-black uppercase mb-8 text-green-600 font-display">
                  Upload Complete!
                </h3>
                
                <div className="w-full space-y-8 text-left">
                  {uploadResults.map((result, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_#000]">
                      {result.success && result.links ? (
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <div className="w-full md:w-1/3 shrink-0">
                            <div className="aspect-square rounded-xl border-4 border-black overflow-hidden bg-white">
                              <img src={result.links.direct} alt={result.originalName || 'Uploaded image'} className="w-full h-full object-cover" />
                            </div>
                            <p className="mt-2 text-xs font-bold truncate text-center">{result.originalName}</p>
                          </div>
                          <div className="w-full md:w-2/3 space-y-4">
                            {[
                              { key: `direct-${index}`, label: 'Direct Link', value: result.links.direct },
                              { key: `html-${index}`, label: 'HTML Embed', value: result.links.html },
                              { key: `bbcode-${index}`, label: 'BBCode', value: result.links.bbcode },
                              { key: `markdown-${index}`, label: 'Markdown', value: result.links.markdown },
                            ].map(({ key, label, value }) => (
                              <div key={key} className="flex flex-col gap-1">
                                <label className="text-xs font-black uppercase tracking-wider text-gray-500">{label}</label>
                                <div className="flex items-center gap-2">
                                  <input 
                                    type="text" 
                                    readOnly 
                                    value={value} 
                                    className="flex-1 px-3 py-2 border-2 border-black rounded-lg bg-white text-xs font-mono outline-none shadow-[2px_2px_0px_0px_#000] min-w-0"
                                  />
                                  <button 
                                    onClick={() => copyToClipboard(value, key)}
                                    className="p-2 border-2 border-black rounded-lg bg-[#FFE873] hover:bg-[#FF90E8] transition-colors shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center justify-center shrink-0"
                                    title="Copy to clipboard"
                                  >
                                    {copiedLink === key ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-red-500 font-bold flex items-center gap-2">
                          <X size={24} /> Failed to upload {result.originalName}: {result.error}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setUploadResults(null)}
                  className={`mt-12 px-8 py-3 border-4 border-black rounded-2xl bg-white shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase`}
                >
                  Upload More
                </button>
              </div>
            ) : isUploading ? (
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-black uppercase mb-4 font-display">
                  Uploading...
                </h3>
                <p className="font-medium mb-8 text-xl">
                  Please wait while we process your images.
                </p>
              </div>
            ) : files.length > 0 ? (
              <div className="flex flex-col items-center w-full max-w-2xl">
                <h3 className="text-4xl font-black uppercase mb-6 font-display">
                  {files.length} file{files.length > 1 ? 's' : ''} ready
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10 w-full">
                  {files.map((f, i) => (
                    <div key={i} className="relative aspect-square rounded-xl border-4 border-black overflow-hidden bg-white shadow-[4px_4px_0px_0px_#000] group">
                      <img src={previews[i]} alt={f.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-x-0 bottom-0 bg-black/70 text-white text-xs p-1 truncate text-center font-medium">
                        {f.name}
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setFiles(files.filter((_, index) => index !== i));
                        }}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-6">
                  <button 
                    onClick={() => setFiles([])}
                    className={`px-8 py-3 border-4 border-black rounded-2xl bg-white shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase`}
                  >
                    {files.length > 1 ? 'Clear All' : 'Clear'}
                  </button>
                  <button 
                    onClick={handleUpload}
                    className={`px-10 py-3 border-4 border-black rounded-2xl bg-[#FF90E8] shadow-[8px_8px_0px_0px_#000] ${hardShadowHover} font-black uppercase tracking-wide`}
                  >
                    {files.length > 1 ? 'Upload All' : 'Upload Now'}
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

        {/* Bottom Banner Ad 300x250 */}
        <div className="mt-12">
          <AdBanner dataKey="46eea6dc12051609b0b8dc8ee4729962" width={300} height={250} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
