import React from 'react';
import { Metadata } from 'next';
import { seoCountries, formatLocation } from '@/lib/seo-data';
import SeoPageTemplate from '@/components/SeoPageTemplate';

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateStaticParams() {
  return seoCountries.map((country) => ({
    country,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const country = resolvedParams?.country || 'usa';
  const formattedCountry = formatLocation(country);
  
  return {
    title: `Free Image Hosting No Signup in ${formattedCountry} | PixelHost`,
    description: `Looking for free image hosting with no signup in ${formattedCountry}? Upload images instantly and get direct links with PixelHost. Fast, secure, and anonymous.`,
    alternates: {
      canonical: `https://www.pixelhost.fun/free-image-hosting-no-signup-${country}`,
    },
    openGraph: {
      title: `Free Image Hosting No Signup in ${formattedCountry}`,
      description: `Upload images instantly and get direct links in ${formattedCountry}. Zero signup required.`,
      url: `https://www.pixelhost.fun/free-image-hosting-no-signup-${country}`,
    }
  };
}

export default async function FreeImageHostingCountryPage({ params }: Props) {
  const resolvedParams = await params;
  const country = resolvedParams?.country || 'usa';
  const formattedCountry = formatLocation(country);

  return (
    <SeoPageTemplate
      h1={`Free Image Hosting No Signup in ${formattedCountry}`}
      intro={`Upload images instantly and get direct links with zero signup. Optimized for lightning-fast delivery across ${formattedCountry}.`}
      keyword="free image hosting no signup"
      location={formattedCountry}
      badge={`📍 Top Rated in ${formattedCountry}`}
      bgColor="bg-[#FFE873]"
    />
  );
}
