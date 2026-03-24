'use client';

import React from 'react';

interface AdBannerProps {
  dataKey: string;
  width: number;
  height: number;
  className?: string;
}

export default function AdBanner({ dataKey, width, height, className = '' }: AdBannerProps) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { 
            margin: 0; 
            padding: 0; 
            overflow: hidden; 
            background: transparent; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            width: 100vw;
          }
        </style>
      </head>
      <body>
        <script type="text/javascript">
          atOptions = {
            'key' : '${dataKey}',
            'format' : 'iframe',
            'height' : ${height},
            'width' : ${width},
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="https://www.highperformanceformat.com/${dataKey}/invoke.js"></script>
      </body>
    </html>
  `;

  return (
    <div className={`flex justify-center items-center my-6 w-full ${className}`}>
      <div 
        className="bg-gray-50 border-2 border-gray-200 rounded-lg overflow-hidden flex items-center justify-center relative"
        style={{ width: width, height: height, minWidth: width, minHeight: height }}
      >
        <span className="absolute text-gray-300 text-xs uppercase font-bold tracking-widest z-0">Advertisement</span>
        <iframe
          title={`Ad-${width}x${height}`}
          srcDoc={html}
          width={width}
          height={height}
          frameBorder="0"
          scrolling="no"
          className="relative z-10"
          style={{ border: 'none', overflow: 'hidden', width: `${width}px`, height: `${height}px` }}
        />
      </div>
    </div>
  );
}
