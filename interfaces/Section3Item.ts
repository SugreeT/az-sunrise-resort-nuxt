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

// Interface ของแต่ละเมนูย่อย (FoodMenu) ในแต่ละ Tab
export interface FoodMenuItem {
   id: number;           // รหัสเมนู
  image_id: number;     // รหัสรูป
  image: GalleryImage;  // ข้อมูลรูปแบบเต็ม
  name_en: string;
  name_cn: string;
  name_ru: string;
  price_en: string;
  price_cn: string;
  price_ru: string;
  material_en: string;
  material_cn: string;
  material_ru: string;
  tab_id: number;       // FK ไปที่ tab
}

// Interface ของแต่ละ Tab (หรือ Category) ใน Section3
export interface Tab {
  id: number;              // รหัส tab (primary key ในตาราง tabs)
  name_en: string;         // ชื่อหมวด (ภาษาอังกฤษ)  
  name_cn: string;         // ชื่อหมวด (ภาษาจีน)  
  name_ru: string;         // ชื่อหมวด (ภาษารัสเซีย)  
  image_id: number;        // รหัสรูปภาพของหมวด (ถ้ามี)  
  content_id: number;      // รหัส content หลัก (เช่น section3.id)  
  food_menus: FoodMenuItem[];  // Array ของเมนูย่อยในหมวดนี้
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
