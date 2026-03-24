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
    title: `Best Imgur Alternative in ${formattedCountry} | Fast Uploads`,
    description: `Looking for an Imgur alternative in ${formattedCountry}? PixelHost offers fast, anonymous image hosting with direct links and no signup required.`,
    alternates: {
      canonical: `https://www.pixelhost.fun/imgur-alternative-${country}`,
    },
    openGraph: {
      title: `Best Imgur Alternative in ${formattedCountry}`,
      description: `Fast, anonymous image hosting with direct links in ${formattedCountry}. No signup required.`,
      url: `https://www.pixelhost.fun/imgur-alternative-${country}`,
    }
  };
}

export default async function ImgurAlternativeCountryPage({ params }: Props) {
  const resolvedParams = await params;
  const country = resolvedParams?.country || 'usa';
  const formattedCountry = formatLocation(country);

  return (
    <SeoPageTemplate
      h1={`Best Imgur Alternative in ${formattedCountry}`}
      intro={`Ditch the heavy UI and tracking. PixelHost is the fastest, most reliable Imgur alternative for users in ${formattedCountry}.`}
      keyword="imgur alternative"
      location={formattedCountry}
      badge={`⚡ Top Alternative in ${formattedCountry}`}
      bgColor="bg-[#88CCFF]"
    />
  );
}
