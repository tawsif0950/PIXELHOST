import React from 'react';
import { Metadata } from 'next';
import { seoCities, formatLocation } from '@/lib/seo-data';
import SeoPageTemplate from '@/components/SeoPageTemplate';

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return seoCities.map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const city = resolvedParams?.city || 'new-york';
  const formattedCity = formatLocation(city);
  
  return {
    title: `Upload Image & Get Direct Link in ${formattedCity} | PixelHost`,
    description: `Upload images and get direct links instantly in ${formattedCity}. PixelHost is the fastest way to host images online without creating an account.`,
    alternates: {
      canonical: `https://www.pixelhost.fun/upload-image-${city}`,
    },
    openGraph: {
      title: `Upload Image & Get Direct Link in ${formattedCity}`,
      description: `Upload images and get direct links instantly in ${formattedCity}. Zero signup required.`,
      url: `https://www.pixelhost.fun/upload-image-${city}`,
    }
  };
}

export default async function UploadImageCityPage({ params }: Props) {
  const resolvedParams = await params;
  const city = resolvedParams?.city || 'new-york';
  const formattedCity = formatLocation(city);

  return (
    <SeoPageTemplate
      h1={`Upload Image & Get Direct Link in ${formattedCity}`}
      intro={`The fastest way to upload images and generate direct links in ${formattedCity}. Perfect for forums, Markdown, and developers.`}
      keyword="upload image get direct link"
      location={formattedCity}
      badge={`🚀 Fast Uploads in ${formattedCity}`}
      bgColor="bg-[#88FF88]"
    />
  );
}
