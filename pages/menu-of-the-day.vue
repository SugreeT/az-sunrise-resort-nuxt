<template>
  <div id="preloader">
    <div data-loader="circle-side"></div>
  </div>
  <!-- /Page Preload -->

  <section class="menu-section">
    <div class="full-container">
      <div class="intro p-3">
        <img
          src="~assets/img/logo/AZ-sunrise-logo.png"
          width="250"
          height="250"
          alt=""
          class="mb-3"
        /><br />
        Menu of the Day
      </div>
    </div>
  </section>
  <!-- End menu-section -->

  <!-- ส่วนแสดงแท็บ + เมนู -->
  <section
    class="menu-section"
    v-for="tab in localizedSection3Tabs"
    :key="tab.id"
  >
    <div class="full-container">
      <div class="half-container"></div>

      <div class="half-container">
        <div class="txt_container">
          <div class="m_title">
            <!-- แสดงชื่อแท็บ (เช่น “Starters”) -->
            <h2>{{ tab.name }}</h2>
          </div>
          <!-- ใช้ class="menu-list" กับ <ul> เพื่อกำหนด CSS ด้านล่าง -->
          <ul class="menu-list">
            <!-- วนลูปเมนูทั้งหมดใน tab.food_menus -->
            <li v-for="menu in tab.food_menus" :key="menu.id">
              <h3>{{ menu.name }}</h3>
              <p>{{ menu.material }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- End menu-section -->

  <section class="menu-section">
    <div class="full-container">
      <div class="half-container"></div>

      <div class="half-container">
        <div class="txt_container">
          <h3>Reserve a Table</h3>
          <p></p>
          <p class="phone_us">
            Call Us <a href="tel://076643222">076643222</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- End menu-section -->

  <nav>
    <ul class="vertical-nav">
      <li><a href="#0" class="prev inactive">Next</a></li>
      <li><a href="#0" class="next">Prev</a></li>
    </ul>
  </nav>
  <!-- End vertical-nav -->

  <nav>
    <ul class="top-nav">
      <li>
        <a href="/restaurant" class="back"
          ><i class="bi bi-arrow-90deg-left"></i
        ></a>
      </li>
    </ul>
  </nav>
  <!-- End top-nav -->

  <div class="progress-wrap">
    <svg
      class="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  <!-- /back to top -->
</template>

<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from "vue";
import { useI18n } from "vue-i18n";
import { useAsyncData } from "#app";
import apiService from "@/services/apiService";
import type {
  Section3Item,
  TranslatedMenu,
  TranslatedTab,
} from "@/interfaces/Section3Item";
import { useIsMobile } from "~/composables/useIsMobile";

// ใช้ useHead เพื่อแทรก <script> และ <link> บางตัวเข้าไปใน <head>
import { useHead } from "#imports";
useHead({
  script: [
    { src: "/js/common_scripts.js", type: "text/javascript", defer: true },
    { src: "/js/common_functions.js", type: "text/javascript", defer: true },
    { src: "/phpmailer/validate.js", type: "text/javascript", defer: true },
    { src: "/js/day_menu.js", type: "text/javascript", defer: true },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "/css/day_menu.css", // ชี้ไปยังไฟล์ CSS เฉพาะเพจ
    },
  ],
});

// =======================
// 1) สเตตสำหรับการ render + ScrollCue
// =======================
const isMounted = ref(false);
const { isMobile } = useIsMobile();

// =======================
// 2) i18n
// =======================
const { locale } = useI18n();

// =======================
// 3) กำหนด pageId / pageName
// =======================
const pageId = 2;
const pageName = "restaurant";

// =======================
// 4) เรียก fetch Section หลัก (ใช้ useAsyncData จะรันก่อน render หน้าจอ)
// =======================
const {
  data: responseDataSection,
  pending,
  error,
} = await useAsyncData("landing-section", () =>
  apiService.get(`/api/landingpage/content/${pageId}`)
);

// =======================
// 5) สเตตสำหรับ Section อื่น ๆ ที่จะโหลดใน onMounted
// =======================
const responseDataSection1 = ref<Record<string, any>>({});
const responseDataSection3 = ref<Section3Item | null>(null);

// ฟังก์ชันโหลดข้อมูล Section1, Section3 (พร้อมกัน)
async function loadOtherSections() {
  // เรียก API พร้อมกันสองตัว (ปัจจุบันใช้ตัวเดียว คือ content/restaurant)
  const [sec0] = await Promise.all([
    apiService.get(`/landingpage/content/${pageName}`),
    // สามารถเพิ่ม API อื่น ๆ ได้ในอาเรย์นี้
  ]);

  const data0 = sec0.data;
  responseDataSection1.value = data0.section1;
  responseDataSection3.value = data0.section3;
}

onMounted(async () => {
  isMounted.value = true;

  await loadOtherSections();
  // ถ้ามีการใช้ ScrollCue ให้ re-init ตรงนี้
  // if (window?.ScrollCue) { window.ScrollCue.update() }

  await nextTick();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =======================
// 6) เตรียม computed สำหรับดึงค่า locale ย่อ (“cn” แทน “zh-CN”)
// =======================
const getLang = computed(() =>
  locale.value === "zh-CN" ? "cn" : locale.value
);

// =======================
// 7) computed เดียว: แปลค่า responseDataSection3.value.tabs → TranslatedTab[]
// =======================
const localizedSection3Tabs = computed<TranslatedTab[]>(() => {
  // ถ้ายังไม่มีข้อมูล ให้คืน array ว่าง
  if (!responseDataSection3.value) {
    return [] as TranslatedTab[];
  }

  // หา langKey จาก locale (ถ้า “zh-CN” → “cn”)
  const rawLang = getLang.value; // เช่น 'en', 'cn', 'ru'
  const langKey = rawLang === "zh-CN" ? "cn" : rawLang;

  // ฟังก์ชันช่วยดึง field ของ menu ที่แปลแล้ว
  function getField(
    obj: Record<string, any>,
    fieldBase: "name" | "price" | "material"
  ): string {
    const fullKey = `${fieldBase}_${langKey}`; // เช่น "name_cn", "price_ru"
    if (obj[fullKey] != null && obj[fullKey].toString().trim() !== "") {
      return obj[fullKey];
    }
    return obj[`${fieldBase}_en`] || "";
  }

  // แปลงแต่ละ tab ใน responseDataSection3.value.tabs
  return responseDataSection3.value.tabs.map((tab) => {
    // แปลชื่อแท็บ
    const rawTabName = (tab[`name_${langKey}`] as string) || "";
    const localizedTabName =
      rawTabName.trim() !== "" ? rawTabName : tab.name_en;

    // แปล food_menus ในแท็บนี้
    const translatedMenus: TranslatedMenu[] = (tab.food_menus || []).map(
      (menu) => ({
        ...menu,
        name: getField(menu, "name"),
        price: getField(menu, "price"),
        material: getField(menu, "material"),
      })
    );

    // คืนโครงสร้าง TranslatedTab
    return {
      id: tab.id,
      name: localizedTabName,
      food_menus: translatedMenus,
    };
  });
});
</script>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: inherit;
  }
}
/* กำหนดสูงสุดให้เมนู เพื่อเลื่อนได้เมื่อรายการเมนูยาวเกิน */
.menu-list {
  max-height: 400px; /* ปรับได้ตามจำนวนพื้นที่ที่ต้องการ */
  overflow-y: auto; /* เมื่อเกิน max-height จะเลื่อนในแนวตั้ง */
  list-style: none; /* ลบ bullet point */
  margin: 0; /* ลบ margin ด้านบนล่าง */
  padding: 0; /* ลบ padding ด้านซ้ายขวา */
  column-count: 2; /* แบ่งคอลัมน์เป็น 2 คอลัมน์ */
  column-gap: 2rem; /* ระยะห่างระหว่างคอลัมน์ (ปรับได้ตามดีไซน์) */
}

/* เพิ่มช่องว่างระหว่าง <li> แต่ละตัว เพื่อความสวยงาม */
.menu-list li {
  break-inside: avoid; /* ป้องกันไม่ให้ list item กระโดดไปอีกคอลัมน์กลางประโยค */
  margin-bottom: 1rem; /* ช่องว่างระหว่างรายการ */
}

/* ถ้าต้องการให้ชื่อเมนู และ material จัดระยะให้ดูสวยงาม */
.menu-list li h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
}

.menu-list li p {
  margin: 0.25rem 0 0;
  font-style: italic;
  color: #666;
}

/* ถ้าต้องการให้ scrollbar ปรากฏเฉพาะเมื่อ hover บนเมนูลิสต์ */
.menu-list {
  scrollbar-width: thin; /* สำหรับ Firefox */
  scrollbar-color: rgba(0, 0, 0, 0.3) transparent; /* Firefox thumb/track */
}

.menu-list::-webkit-scrollbar {
  width: 6px; /* สำหรับ Chrome / Safari */
}

.menu-list::-webkit-scrollbar-track {
  background: transparent;
}

.menu-list::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
</style>
