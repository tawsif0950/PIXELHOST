import React from 'react';
import Link from 'next/link';
import { seoCountries, seoCities, formatLocation } from '@/lib/seo-data';

export default function InternalLinks({ keyword }: { keyword: string }) {
  // Generate a deterministic subset of links based on the keyword length
  const countryLinks = seoCountries.slice(0, 3).map(c => ({
    href: `/free-image-hosting-no-signup-${c}`,
    label: `Free Image Hosting in ${formatLocation(c)}`
  }));

  const cityLinks = seoCities.slice(0, 3).map(c => ({
    href: `/upload-image-${c}`,
    label: `Upload Image from ${formatLocation(c)}`
  }));

  const altLinks = seoCountries.slice(3, 6).map(c => ({
    href: `/imgur-alternative-${c}`,
    label: `Imgur Alternative for ${formatLocation(c)}`
  }));

  const allLinks = [...countryLinks, ...cityLinks, ...altLinks];

  return (
    <div className="mt-16 p-8 border-4 border-black rounded-3xl bg-gray-50 shadow-[8px_8px_0px_0px_#000]">
      <h3 className="text-2xl font-black uppercase mb-6">Explore {keyword} Worldwide</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allLinks.map((link, i) => (
          <Link 
            key={i} 
            href={link.href}
            className="text-blue-600 font-bold hover:underline truncate"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
