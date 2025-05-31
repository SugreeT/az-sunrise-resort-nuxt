<template>
  <main>
    <!-- <div id="carousel-home"> -->
    <!-- <div class="owl-carousel owl-theme kenburns">
                <div class="owl-slide background-image cover" data-background="url(img/img_ex/slide_1.jpg)">
                    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                        <div class="container">
                            <div class="row justify-content-center justify-content-md-start">
                                <div class="col-lg-6 static">
                                    <div class="slide-text white">
                                        <small class="owl-slide-animated owl-slide-title">Restaurant Experience</small>
                                        <h2 class="owl-slide-animated owl-slide-title-2">A unique experience where to eat</h2>
                                        <div class="owl-slide-animated owl-slide-title-3"><a class="btn_1 outline white mt-3" href="#first_section">Read more</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
    <!--/owl-slide-->
    <!-- <div class="owl-slide background-image cover" data-background="url(img/img_ex/slide_2.jpg)">
                    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-6 static">
                                    <div class="slide-text white text-center">
                                        <small class="owl-slide-animated owl-slide-title">Restaurant Experience</small>
                                        <h2 class="owl-slide-animated owl-slide-title-2">A truly taste experience</h2>
                                        <div class="owl-slide-animated owl-slide-title-3"><a class="btn_1 outline white mt-3" href="#first_section">Read more</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
    <!--/owl-slide-->
    <!-- <div class="owl-slide background-image cover" data-background="url(img/img_ex/slide_3.jpg)">
                    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.6)">
                        <div class="container">
                            <div class="row justify-content-center justify-content-md-end">
                                <div class="col-lg-6 static">
                                    <div class="slide-text text-end white">
                                        <small class="owl-slide-animated owl-slide-title">RestaurantExperience</small>
                                        <h2 class="owl-slide-animated owl-slide-title-2">The experience of unique dishes</h2>
                                        <div class="owl-slide-animated owl-slide-title-3"><a class="btn_1 outline white mt-3" href="#first_section">Read more</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div> -->
    <!--/owl-slide-->
    <!-- </div> -->
    <!-- <div class="mouse_wp">
                <a href="#first_section" class="btn_scrollto">
                    <div class="mouse"></div>
                </a>
            </div> -->
    <!-- / mouse -->
    <!-- </div> -->
    <!--/carousel-->
    <div class="hero full-height jarallax" data-jarallax data-speed="0.2">
      <client-only>
        <img
          class="jarallax-img"
          :src="
            apiService.getImageUrl(
              responseDataSection1.banner?.path,
              responseDataSection1.banner?.name
            )
          "
          alt=""
        />
        <div
          class="wrapper opacity-mask d-flex align-items-center justify-content-center animate_hero"
          data-opacity-mask="rgba(0, 0, 0, 0.5)"
        >
          <div class="container">
            <div class="row justify-content-center justify-content-md-start">
              <div class="col-lg-6 static">
                <div class="slide-text white">
                  <small class="slide-animated one">
                    {{ localizedDataSection1.title }}</small
                  >
                  <h1 class="slide-animated two">
                    {{ localizedDataSection1.titleMini }}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </client-only>
    </div>
    <!-- 
        <div class="hero home-search full-height jarallax" >
            <client-only>
            <img class="jarallax-img kenburns" src="~assets/img/img_ex/slide_1.jpg" alt="">
                <div class="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero" >
                <div class="container">
                    <small class="owl-slide-animated owl-slide-title">Restaurant Experience</small>
                    <h2 class="owl-slide-animated owl-slide-title-2">A unique experience where to eat</h2>
                    <div class="owl-slide-animated owl-slide-title-3"><a class="btn_1 outline white mt-3" href="#first_section">Read more</a></div>
                </div>
                <div class="mouse_wp slide-animated four">
                    <a href="#first_section" class="btn_scrollto">
                        <div class="mouse"></div>
                    </a>
                </div>
            </div>
            </client-only>
           
        </div> -->

    <div class="container margin_120_95" id="first_section">
      <div class="row justify-content-between align-items-center">
        <!-- Left Side -->
        <div class="col-lg-6">
          <div class="intro">
            <div class="title">
              <h2 data-cue="slideInUp">{{ localizedDataSection2.title }}</h2>
            </div>
            <p class="lead" data-cue="slideInUp">
              {{ localizedDataSection2.description }}
            </p>
            <p data-cue="slideInLeft" data-duration="2000"></p>
          </div>
        </div>

        <!-- Right Side -->
        <div class="col-lg-5">
          <div>
            <ul class="list-unstyled mb-4">
              <li
                v-for="(schedule, idx) in localizedDataSection2.schedules || []"
                :key="idx"
                class="d-flex justify-content-between mb-2 text-end"
                data-cue="slideInRight"
                data-duration="2000"
              >
                <strong>{{ schedule.title }}</strong>
                <span>{{ schedule.time }}</span>
              </li>
              <!-- <li
                class="d-flex justify-content-between mb-2 text-end"
                data-cue="slideInRight"
                data-duration="2000"
              >
                <strong>{{ $t("fitness.yoga_class") }}</strong>
                <span>{{ $t("fitness.yoga_time") }}</span>
              </li>
              <li
                class="d-flex justify-content-between mb-2 text-end"
                data-cue="slideInRight"
                data-duration="2000"
              >
                <strong>{{ $t("fitness.hiit_class") }}</strong>
                <span>{{ $t("fitness.hiit_time") }}</span>
              </li> -->
            </ul>
            <p class="phone_element" data-cue="slideInUp" data-duration="2000">
              <a href="tel://423424234">
                <i class="bi bi-telephone"></i>
                <span>
                  <em>{{ $t("experience.reservations") }}</em> 076643222
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    s
    <!-- /container -->

    <div class="pattern_3">
      <div class="container margin_120_95" id="first_section">
        <div class="title text-center mb-5">
          <small data-cue="slideInUp">A.Z. Sunrise Resort</small>
          <h2 data-cue="slideInUp" data-delay="100">
            {{ $t("restaurant-menu-title") }}
          </h2>
        </div>
        <div class="tabs_menu" data-cue="slideInUp" data-delay="200">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li
              v-for="(tab, index) in localizedSection3Tabs || []"
              :key="tab.id"
              class="nav-item"
              role="presentation"
            >
              <!-- :href="`#pane-${tab.id}`" -->
              <a
                href="#"
                :id="`tab-${tab.id}`"
                class="nav-link"
                :class="{ active: index === 0 }"
                data-bs-toggle="tab"
                :data-bs-target="`#pane-${tab.id}`"
                role="tab"
              >
                {{ tab.name }}
              </a>
            </li>
          </ul>
          <div class="tab-content add_bottom_25" role="tablist">
            <div
              v-for="(tab, index) in localizedSection3Tabs || []"
              :id="`pane-${tab.id}`"
              class="card tab-pane fade show active"
              role="tabpanel"
              :aria-labelledby="`tab-${tab.id}`"
            >
              <div class="card-header" role="tab" :id="`heading-${tab.id}`">
                <h5>
                  <a
                    href="#"
                    class="collapsed"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse-${tab.id}`"
                    aria-expanded="true"
                    :aria-controls="`collapse-${tab.id}`"
                  >
                    {{ $t("menu.tab.starters") }}
                  </a>
                </h5>
              </div>
              <div
                :id="`collapse-${tab.id}`"
                class="collapse"
                role="tabpanel"
                :aria-labelledby="`heading-${tab.id}`"
              >
                <div class="card-body">
                  <div
                    class="banner background-image"
                    :style="{
                      backgroundImage: `url(img/restaurant/bg-res-2.jpeg)`,
                    }"
                  >
                    <div
                      class="wrapper d-flex align-items-center justify-content-between opacity-mask"
                      data-opacity-mask="rgba(0, 0, 0, 0.6)"
                    >
                      <template v-if="firstMenuSection3">
                        <div>
                          <!-- แสดงชื่อเมนูและราคา -->
                          <h3>
                            {{ firstMenuSection3.name }} &nbsp;&nbsp;&nbsp;{{
                              firstMenuSection3.price
                            }}
                          </h3>
                          <!-- แสดงวัตถุดิบ -->
                          <p>{{ firstMenuSection3.material }}</p>
                          <a href="menu-of-the-day" class="btn_1">{{
                            $t("menu.view")
                          }}</a>
                        </div>

                        <figure
                          class="banner-figure"
                          v-if="firstMenuSection3.image"
                        >
                          <a>
                            <!-- ใช้ class เดิม “circle-img” แต่เปลี่ยน src เป็น binding -->
                            <img
                              :src="
                                apiService.getImageUrl(
                                  firstMenuSection3.image.path,
                                  firstMenuSection3.image.name
                                )
                              "
                              :alt="firstMenuSection3.name"
                              class="circle-img"
                            />
                          </a>
                        </figure>
                        <figure class="banner-figure" v-else>
                          <a title="">
                            <img
                              src="~assets/img/no-image4.jpg"
                              alt=""
                              class="circle-img"
                            />
                          </a>
                        </figure>
                      </template>
                    </div>
                    <!-- /wrapper -->
                  </div>
                  <!-- /banner -->
                  <div class="row magnific-gallery add_top_30">
                    <!-- วนลูปเมนูจาก localizedSection3Tabs.food_menus -->
                    <div
                      class="col-lg-6"
                      v-for="(menu, idx) in tab.food_menus"
                      :key="menu.id || idx"
                    >
                      <div class="menu_item">
                        <figure v-if="menu.image">
                          <a title="" data-type="image">
                            <img
                              :src="
                                apiService.getImageUrl(
                                  menu.image.path,
                                  menu.image.name
                                )
                              "
                              alt=""
                            />
                          </a>
                        </figure>
                        <figure v-else>
                          <a title="">
                            <img src="~assets/img/no-image4.jpg" alt="" />
                          </a>
                        </figure>

                        <div class="menu_title">
                          <h3>{{ menu.name }}</h3>
                          <em>{{ menu.price }}</em>
                        </div>
                        <p>{{ menu.material }}</p>
                      </div>
                    </div>
                  </div>
                  <!-- /row -->
                </div>
                <!-- /card-body -->
              </div>
            </div>
            <!-- /tab -->
          </div>
          <!-- /tab-content -->
        </div>
        <!-- /tabs_menu-->

        <p class="text-center mt-5">
          <a href="menu-of-the-day" class="btn_1 outline">{{
            $t("menu.view-day-menu")
          }}</a>
        </p>
      </div>
      <!-- /container -->
    </div>
    <!-- /pattern -->

    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="title mb-3 text-center">
          <!-- <small data-cue="slideInUp">Contact Us</small> -->
          <h2 data-cue="slideInUp" data-delay="200">
            {{ $t("contact_title") }}
          </h2>
        </div>
        <div class="col-xl-4 col-lg-4 order-lg-2">
          <div class="contact_info" data-cue="slideInUp" data-delay="200">
            <ul class="clearfix">
              <li>
                <i class="bi bi-telephone"></i>
                <h4>{{ $t("contact_phone_title") }}</h4>
                <div>
                  {{ $t("contact_phone_value") }} <br />
                  <small>{{ $t("contact_phone_note") }}</small>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 order-lg-2">
          <div class="contact_info" data-cue="slideInUp" data-delay="200">
            <ul class="clearfix">
              <li>
                <i class="bi bi-envelope-paper"></i>
                <h4>{{ $t("contact_email_title") }}</h4>
                <p>
                  <a href="#0"
                    >rsvn@azsunriseresort.com<br /><small>&nbsp;</small></a
                  >
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 order-lg-2">
          <div class="contact_info" data-cue="slideInUp" data-delay="200">
            <ul class="clearfix">
              <li>
                <i class="bi bi-geo-alt"></i>
                <h4>{{ $t("contact_address_title") }}</h4>
                <div>{{ $t("contact_address_value") }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useAsyncData } from "#app";
import apiService from "@/services/apiService";
import type {
  Section3Item,
  GalleryItem,
  Tab,
  FoodMenuItem,
} from "@/interfaces/Section3Item";

// 1) Simple mount flag + ScrollCue
const isMounted = ref(false);

// 2) i18n
const { locale } = useI18n();

// 3) pageId constant
const pageId = 2;
const pageName = "restaurant";

// 4) fetch main landing section via useAsyncData (runs before render)
const {
  data: responseDataSection,
  pending,
  error,
} = await useAsyncData("landing-section", () =>
  apiService.get(`/api/landingpage/content/${pageId}`)
);

// 5) other sections loaded onMounted
const responseDataSection1 = ref<Record<string, any>>({});
const responseDataSection2 = ref<Record<string, any>>({});
const responseDataSection3 = ref<Section3Item | null>(null);

onMounted(async () => {
  isMounted.value = true;

  // re-init ScrollCue if provided
  if (window?.ScrollCue) {
    window.ScrollCue.update();
  }

  // load sections 1–3
  await loadOtherSections();

  await nextTick();
  // จึงสั่ง Bootstrap re‐initialize tabs
  initBootstrapTabs();
  await nextTick();
  window.scrollTo({ top: 0, behavior: "smooth" });

  // sync locale from localStorage
  if (process.client) {
    const saved = localStorage.getItem("lang");
    if (saved) {
      locale.value = saved;
    }
  }

  await nextTick();
  refreshFsLightbox();

  //   await nextTick(); // รอ DOM อัปเดตก่อน
  //   initCarousel();

  // await nextTick();
  // refreshFsLightbox();
});

// 6) compute a short getLang ("cn" instead of "zh-CN")
const getLang = computed(() =>
  locale.value === "zh-CN" ? "cn" : locale.value
);

// 7) localized getters for section1 & section2
const localizedDataSection1 = computed(() => {
  const t = `title_${getLang.value}`;
  const m = `title_mini_${getLang.value}`;
  return {
    title: responseDataSection1.value[t] ?? responseDataSection1.value.title_en,
    titleMini:
      responseDataSection1.value[m] ?? responseDataSection1.value.title_mini_en,
  };
});

const localizedDataSection2 = computed(() => {
  const lang = getLang.value;
  const titleKey = `title_${lang}`;
  const descKey = `description_${lang}`;
  const schedKey = `schedules_${lang}`;

  const schedules =
    responseDataSection2.value[schedKey] ||
    responseDataSection2.value.schedules_en ||
    [];

  return {
    title:
      responseDataSection2.value[titleKey] ||
      responseDataSection2.value.title_en,
    description:
      responseDataSection2.value[descKey] ||
      responseDataSection2.value.description_en,
    schedules,
  };
});

const firstMenuSection3 = computed<
  | (FoodMenuItem & {
      name: string;
      price: string;
      material: string;
      image: { path: string; name: string };
    })
  | null
>(() => {
  // ถ้าไม่มีข้อมูล หรือ ไม่มีแท็บ ให้ return null
  if (
    !localizedSection3Tabs.value ||
    localizedSection3Tabs.value.length === 0
  ) {
    return null;
  }
  // ดึงแท็บตัวแรก (index 0)
  const firstTab = localizedSection3Tabs.value[0];
  // ถ้า food_menus ว่าง หรือไม่มี ให้ return null
  if (!firstTab.food_menus || firstTab.food_menus.length === 0) {
    return null;
  }
  // คืนค่าตัวเมนูตัวแรก
  return firstTab.food_menus[0];
});

// 3. สร้าง computed เพื่อ localized tabs
//    แต่ละ tab จะถูก “map” ให้มี property ชุดเดียวกัน เช่น name, image, ฯลฯ
const localizedSection3Tabs = computed(
  (): Array<
    Tab & {
      name: string; // ฟิลด์ `name` ใหม่ (ชื่อแท็บตามภาษาปัจจุบัน)
      // นอกจากนี้แต่ละแท็บจะมี food_menus เป็นอาเรย์ของเมนูที่ "ถูกแปล" มาแล้ว
      food_menus: Array<
        FoodMenuItem & {
          name: string;
          price: string;
          material: string;
        }
      >;
    }
  > => {
    // ถ้า API ยังไม่มี data ให้คืนเป็นอาเรย์เปล่า
    if (!responseDataSection3.value) {
      return [];
    }

    const lang = getLang.value; // "en" / "cn" / "ru" / "zh-CN"
    // แปลง "zh-CN" เป็น "cn" เพื่อ match กับชื่อฟิลด์ใน interface (name_cn, price_cn, material_cn)
    const langKey = lang === "zh-CN" ? "cn" : lang;

    // ฟังก์ชันช่วยดึงค่า localized field (fallback ไปภาษาอังกฤษถ้าไม่มีข้อมูล)
    function getField(
      obj: Record<string, any>,
      fieldBase: "name" | "price" | "material"
    ): string {
      // fullKey เช่น "name_cn" หรือ "price_ru"
      const fullKey = `${fieldBase}_${langKey}`;
      if (obj[fullKey] != null && obj[fullKey].toString().trim() !== "") {
        return obj[fullKey];
      }
      // fallback ไปใช้ภาษาอังกฤษ
      return obj[`${fieldBase}_en`] || "";
    }

    // ทำการ map แต่ละ tab ใน responseDataSection3.value.tabs
    const responseTab3 = responseDataSection3.value.tabs.map((tab) => {
      // 2.1) หา `localizedName` สำหรับแต่ละแท็บ (fallback ไปแท็บภาษาอังกฤษ)
      const tabNameKey = `name_${langKey}` as keyof Pick<
        Tab,
        "name_en" | "name_cn" | "name_ru"
      >;
      const rawTabName = (tab[tabNameKey] as unknown as string) || "";
      const localizedTabName =
        rawTabName.trim() !== "" ? rawTabName : tab.name_en;

      // 2.2) แปล food_menus ภายในแท็บนั้น
      const localizedMenus = tab.food_menus.map((menu) => {
        return {
          ...menu,
          // เพิ่ม field ชื่อเดียว (name, price, material) ที่ถูกแปลเรียบร้อยแล้ว
          name: getField(menu, "name"),
          price: getField(menu, "price"),
          material: getField(menu, "material"),
        };
      });

      // 2.3) คืนค่าเป็น object เดิม (Tab) + ฟิลด์ name ใหม่ + แทนที่ food_menus ด้วย array ที่แปลแล้ว
      return {
        ...tab,
        // .name เป็นชื่อแท็บตามภาษาปัจจุบัน
        name: localizedTabName,
        // .food_menus เป็นเมนูที่แปลชื่อ/ราคา/วัตถุดิบมาแล้ว
        food_menus: localizedMenus,
      };
    });

    console.log("responseTab3 >>> ", responseTab3);
    return responseTab3;
  }
);

function getLocalizedField(obj: any, fieldBase: any) {
  // currentLang มีค่า เช่น "en", "cn", "ru"
  // ตรวจสอบรูปแบบ key ที่ใช้เช่น name_en, name_cn, name_ru
  // ถ้าใช้ key ภาษา "zh-CN" ให้เปลี่ยนเป็น "cn" (ถ้าคุณเก็บ JSON เป็น name_cn ไม่ใช่ name_zh-CN)
  const lang = getLang.value;

  // สร้างชื่อฟิลด์เต็ม เช่น "name_en", "price_cn", "material_ru"
  const fullField = `${fieldBase}_${lang}`;

  // ถ้าไม่มี key นั้น ให้ fallback ไปใช้ "fieldBase_en"
  if (obj[fullField] !== undefined && obj[fullField] !== null) {
    return obj[fullField];
  }

  // fallback เป็นฟิลด์ภาษาอังกฤษ (fieldBase_en) หรือเป็น empty string
  const fallback = `${fieldBase}_en`;
  return obj[fallback] !== undefined && obj[fallback] !== null
    ? obj[fallback]
    : "";
}

async function loadOtherSections() {
  const [
    sec0,
    //  sec1, sec2, sec3
  ] = await Promise.all([
    apiService.get(`/landingpage/content/${pageName}`),
    // apiService.get(`/api/page-info/content/section1/${pageId}`),
    // apiService.get(`/api/page-info/content/section2/${pageId}`),
    // apiService.get(`/api/page-info/content/section3/${pageId}`),
  ]);
  console.log("sec0 >> ", sec0);
  const data = sec0.data;
  responseDataSection1.value = data.section1;
  responseDataSection2.value = data.section2;
  responseDataSection3.value = data.section3;
}

// ฟังก์ชันสั่ง Bootstrap “อ่าน” tab ทั้งหมดใหม่
function initBootstrapTabs() {
  const tabEls = document.querySelectorAll('[data-bs-toggle="tab"]');
  if (tabEls.length > 0) {
    tabEls.forEach((tabEl) => {
      // Bootstrap v5
      // @ts-ignore
      bootstrap.Tab.getOrCreateInstance(tabEl).show();
    });
    bootstrap.Tab.getOrCreateInstance(tabEls[0]).show();
  }
}
// 1) ฟังก์ชันสร้าง carousel ใหม่
function initCarousel() {
  const $owl = $(".carousel_item_centered");

  $owl.owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    dots: false,
    center: true,
    navText: [
      "<i class='bi bi-arrow-left-short'></i>",
      "<i class='bi bi-arrow-right-short'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
}
</script>

<style scoped>
@media (max-width: 768px) {
  /* ซ่อนทั้ง carousel เมื่อความกว้างหน้าจอ <= 768px (มือถือ) */
  .fullscreen-btn {
    display: none !important;
  }
}
/* CSS ที่ใช้ทำให้รูปเป็นวงกลม */
.banner-figure {
  display: flex;
  align-items: center;
  justify-content: center;
  /* ถ้าต้องการเว้นระยะจากข้อความด้านซ้าย สามารถปรับ margin-left ได้ */
  margin-left: 2rem;
}

/* ทำให้ img มีขนาดเท่ากันทั้งกว้างและสูง แล้วตั้งเป็นวงกลม */
.circle-img {
  width: 250px;
  height: 250px;
  object-fit: cover; /* ตัดขอบรูปให้เต็มวงกลมอย่างเหมาะสม */
  border-radius: 50%; /* ทำให้ขอบเป็นวงกลม */
  display: block;
}
</style>
