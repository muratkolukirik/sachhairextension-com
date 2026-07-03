export const SITE = {
  name: 'Sach & Vogue Hair',
  tagline: 'Premium Human Hair Extensions Manufacturer',
  url: 'https://sachhairextension.com',
  location: 'Fethiye / Ölüdeniz, Türkiye',
  address: {
    street: 'Taşyaka Mah., Ölüdeniz Caddesi (TSK), No: 45/1',
    city: 'Fethiye / Muğla',
    postalCode: '48300',
    country: 'TR',
  },
  phone: '+90 530 916 03 75',
  whatsapp: 'https://wa.me/905309160375',
  instagram: 'https://www.instagram.com/sachhairextensions',
  mainSite: 'https://sachhair.com',
} as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Extensions', href: '/hair-extensions/' },
  { label: 'Private Label', href: '/private-label-hair-extensions/' },
  { label: 'Colours', href: '/hair-extension-colours/' },
  { label: 'Supply', href: '/professional-salon-supply/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const CATEGORIES = [
  {
    title: 'Tape-In Hair Extensions',
    href: '/tape-in-hair-extensions/',
    description: 'PU tape wefts manufactured for discreet, professional salon installation.',
  },
  {
    title: 'Keratin Tip Hair Extensions',
    href: '/keratin-hair-extensions/',
    description: 'Flat, U, V, and I-tip bonds for precise strand-by-strand work.',
  },
  {
    title: 'Weft Hair Extensions',
    href: '/weft-hair-extensions/',
    description: 'Machine-wefted bulk hair for sew-in, beaded, and wholesale supply.',
  },
  {
    title: 'Clip-In Hair Extensions',
    href: '/clip-in-hair-extensions/',
    description: 'Removable professional sets with reinforced sewing and clip distribution.',
  },
] as const;

export const WHOLESALE = [
  { label: 'Professional Salon Supply', href: '/professional-salon-supply/' },
  { label: 'Wholesale Hair Extensions', href: '/wholesale-hair-extensions/' },
  { label: 'Wholesale Weft Extensions', href: '/wholesale-weft-hair-extensions/' },
  { label: 'Private Label Manufacturing', href: '/private-label-hair-extensions/' },
] as const;

export const GUIDES = [
  { label: 'The DNA of Sach Hair Extensions', href: '/the-dna-of-sach-hair-extensions/' },
  { label: 'Colour Code Guide', href: '/hair-extension-colours-colour-code-guide/' },
  { label: 'Weight Guide', href: '/hair-extension-weight-guide/' },
  { label: 'Hair Extensions Training', href: '/hair-extensions-training/' },
] as const;
