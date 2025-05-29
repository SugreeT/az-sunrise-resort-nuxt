// interfaces/Section3Item.ts

export interface Banner {
  id: number
  name: string
  path: string
  type: string
  size_bytes: number
  original_name: string
  category: string
  created_date: string
  created_by: string
}

export interface Facility {
  name: string
}

export interface PopularPlace {
  name: string
}

// you can tighten these up if you know the shape of services/tabs
export type Service = Record<string, unknown>
export type Tab     = Record<string, unknown>

export interface GalleryImage {
  id: number
  name: string
  path: string
  type: string
  size_bytes: number
  original_name: string
  category: string
  created_date: string
  created_by: string
  thumbnail_name: string
}

export interface GalleryItem {
  id: number
  image_id: number
  image: GalleryImage
  content_id: number
}

export interface Section3Item {
  id: number
  banner: Banner
  title_en: string
  title_cn: string
  title_mini_en: string
  title_mini_cn: string
  title_mini_ru: string
  description_en: string
  description_mini_en: string
  facilities_en: Facility[]
  facilities_cn: Facility[]
  popular_places_en: PopularPlace[]
  services: Service[]
  tabs: Tab[]
  galleries: GalleryItem[]
  page_id: number
}
