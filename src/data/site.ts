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
  { label: 'Hair Extensions', href: '/hair-extensions/' },
  { label: 'Colours', href: '/hair-extension-colours/' },
  { label: 'Salon Supply', href: '/professional-salon-supply/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const CATEGORIES = [
  {
    title: 'Tape-In Hair Extensions',
    href: '/tape-in-hair-extensions/',
    description: 'Ultra-thin wefts for discreet, salon-friendly installation.',
  },
  {
    title: 'Keratin Tip Hair Extensions',
    href: '/keratin-hair-extensions/',
    description: 'Pre-bonded keratin tips for precise, strand-by-strand work.',
  },
  {
    title: 'Weft Hair Extensions',
    href: '/weft-hair-extensions/',
    description: 'Machine and hand-tied wefts for sew-in and beaded methods.',
  },
  {
    title: 'Clip-In Hair Extensions',
    href: '/clip-in-hair-extensions/',
    description: 'Removable clip systems for flexible styling and retail.',
  },
] as const;
