export const seoCountries = [
  'usa', 'uk', 'canada', 'australia', 'germany', 
  'france', 'japan', 'india', 'brazil', 'mexico',
  'spain', 'italy', 'netherlands', 'sweden', 'singapore'
];

export const seoCities = [
  'new-york', 'london', 'tokyo', 'paris', 'berlin', 
  'sydney', 'toronto', 'mumbai', 'los-angeles', 'chicago',
  'dubai', 'singapore-city', 'amsterdam', 'seoul', 'hong-kong'
];

export const formatLocation = (loc: string) => {
  return loc.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export const backlinkData = {
  anchorTexts: [
    "free image hosting",
    "upload image get direct link",
    "imgur alternative",
    "host images online",
    "fast image upload",
    "bbcode image hosting",
    "markdown image hosting"
  ],
  snippets: [
    "Upload images instantly with PixelHost. No signup required and get direct links.",
    "Looking for an Imgur alternative? PixelHost offers fast, anonymous image hosting.",
    "Share images on forums and Reddit easily with our direct BBCode and Markdown links.",
    "The fastest way to host images online without creating an account or paying fees.",
    "Get permanent direct image links for your web projects and applications instantly."
  ]
};
