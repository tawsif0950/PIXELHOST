'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SmartLinkButtonProps {
  url: string;
  text?: string;
  className?: string;
}

export default function SmartLinkButton({ 
  url, 
  text = "Support Us", 
  className = "" 
}: SmartLinkButtonProps) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 border-4 border-black rounded-xl bg-[#88FF88] shadow-[4px_4px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] transition-all font-black uppercase tracking-wide text-sm ${className}`}
    >
      {text} <ExternalLink size={16} />
    </a>
  );
}
