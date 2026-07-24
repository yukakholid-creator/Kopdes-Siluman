export type ProductCategory = 'semua' | 'furniture' | 'sofa' | 'kusen' | 'pertanian';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subcategory: string;
  price: number;
  formattedPrice: string;
  unit?: string;
  image: string;
  description: string;
  specifications: Record<string, string>;
  isPopular?: boolean;
  stockStatus: 'Tersedia' | 'Pre-Order' | 'Stok Terbatas';
}

export type ArticleCategory = 'kegiatan' | 'ekonomi' | 'pengumuman' | 'edukasi' | 'pertanian';

export interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: ArticleCategory;
  categoryLabel: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export type GalleryCategory = 'semua' | 'kegiatan' | 'produk' | 'desa' | 'pertanian' | 'industri';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  description: string;
  date: string;
}

export interface VillagePotensi {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  stats: string;
  highlights: string[];
}

export interface OrgMember {
  role: string;
  name: string;
  position: string;
  photo?: string;
  period: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  category: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface CooperativeInfo {
  name: string;
  shortName: string;
  slogan: string;
  established: string;
  legalNumber: string;
  legalDate: string;
  nib: string;
  address: string;
  village: string;
  district: string;
  regency: string;
  province: string;
  postalCode: string;
  phone: string;
  whatsapp: string;
  email: string;
  mapEmbedUrl: string;
  mapDirectUrl: string;
  operatingHours: string;
  socials: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}
