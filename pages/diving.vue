<template>
  <main>
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
    <!-- <div id="carousel-home">
            <div class="owl-carousel owl-theme kenburns">
                <div class="owl-slide background-image cover" data-background="url(img/banner/fitness/f1.jpg)">
                    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                        <div class="container">
                            <div class="row justify-content-center justify-content-md-start">
                                <div class="col-lg-6 static">
                                    <div class="slide-text white">
                                        <small class="owl-slide-animated owl-slide-title">Fitness Experience</small>
                                        <h2 class="owl-slide-animated owl-slide-title-2">A unique experience</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mouse_wp">
                <a href="#first_section" class="btn_scrollto">
                    <div class="mouse"></div>
                </a>
            </div>
        </div> -->
    <!--/carousel-->
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
              <a href="tel://076643222">
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

    <!-- /container -->

    <div class="bg_white pt-4">
      <div class="container-fluid p-lg-0">
        <div data-cues="zoomIn">
          <div
            class="owl-carousel owl-theme carousel_item_centered kenburns rounded-img"
          >
            <div
              v-for="(gallery, idx) in responseDataSection3.galleries || []"
              :key="idx"
              class="item"
            >
              <img
                :src="
                  apiService.getImageUrl(
                    gallery.image.path,
                    gallery.image.thumbnail_name
                  )
                "
                alt=""
              />
            </div>
            <!-- <div class="item">
              <img
                src="https://azsunriseresort.com/images/media/fitness/mqwXAbtWVZQrvrK.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://azsunriseresort.com/images/media/fitness/mqwXAbtWVZQrvrK.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://azsunriseresort.com/images/media/fitness/mqwXAbtWVZQrvrK.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://azsunriseresort.com/images/Fitness/AZ Fitness_4-topaz.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://azsunriseresort.com/images/Fitness/AZ Fitness_5-topaz.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://azsunriseresort.com/images/Fitness/AZ Fitness_6-topaz.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://azsunriseresort.com/images/Fitness/AZ Fitness_7-topaz.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://azsunriseresort.com/images/Fitness/AZ Fitness_8-topaz.jpg"
                alt=""
              />
            </div> -->
          </div>
        </div>
        <!-- <div class="text-center mt-5">
          <a
            class="btn_1 outline"
            data-fslightbox="gallery_1"
            data-type="image"
            href="https://azsunriseresort.com/images/Fitness/AZ Fitness_1-topaz.jpg"
            >{{ $t("gallery.fullscreen") }}</a
          >
          <a
            data-fslightbox="gallery_1"
            data-type="image"
            href="https://azsunriseresort.com/images/Fitness/AZ Fitness_2-topaz.jpg"
          ></a>
          <a
            data-fslightbox="gallery_1"
            data-type="image"
            href="https://azsunriseresort.com/images/Fitness/AZ Fitness_3-topaz.jpg"
          ></a>
          <a
            data-fslightbox="gallery_1"
            data-type="image"
            href="https://azsunriseresort.com/images/Fitness/AZ Fitness_4-topaz.jpg"
          ></a>
          <a
            data-fslightbox="gallery_1"
            data-type="image"
            href="https://azsunriseresort.com/images/Fitness/AZ Fitness_5-topaz.jpg"
          ></a>
          <a
            data-fslightbox="gallery_1"
            data-type="image"
            href="https://azsunriseresort.com/images/Fitness/AZ Fitness_6-topaz.jpg"
          ></a>
          <a
            data-fslightbox="gallery_1"
            data-type="image"
            href="https://azsunriseresort.com/images/Fitness/AZ Fitness_7-topaz.jpg"
          ></a>
          <a
            data-fslightbox="gallery_1"
            data-type="image"
            href="https://azsunriseresort.com/images/Fitness/AZ Fitness_8-topaz.jpg"
          ></a>
        </div> -->
      </div>
      <div class="marquee">
        <div class="track">
          <div class="content">
            &nbsp;Relax Enjoy Luxury Holiday Travel Discover Experience Relax
            Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury
            Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel
            Discover Experience
          </div>
        </div>
      </div>
    </div>

    <div class="pinned-image pinned-image--medium pt-3">
      <div class="pinned-image__container" id="section_video">
        <video loop="loop" muted="muted" id="video_home">
          <source
            src="https://azsunriseresort.com/video/sunrise__V1-0004.mp4"
            type="video/mp4"
          />
          <!-- <source src="https://azsunriseresort.com/video/swimming_pool_2a.webm" type="video/webm">
                <source src="https://azsunriseresort.com/video/swimming_pool_2.ogv" type="video/ogg"> -->
        </video>
        <div class="pinned-image__container-overlay"></div>
      </div>
      <div class="pinned_over_content">
        <div class="title white">
          <small data-cue="slideInUp">{{ $t("experience_title") }}</small>
          <h2 data-cue="slideInUp">{{ $t("experience_subtitle") }}</h2>
        </div>
      </div>
    </div>

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

// 1) Simple mount flag + ScrollCue
const isMounted = ref(false);

// 2) i18n
const { locale } = useI18n();

// 3) pageId constant
const pageId = 6;
const pageName = "diving";

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
const responseDataSection3 = ref<{ galleries: any[] }>({ galleries: [] });

onMounted(async () => {
  isMounted.value = true;

  // re-init ScrollCue if provided
  if (window?.ScrollCue) {
    window.ScrollCue.update();
  }

  // load sections 1–3
  await loadOtherSections();

  // sync locale from localStorage
  if (process.client) {
    const saved = localStorage.getItem("lang");
    if (saved) {
      locale.value = saved;
    }
  }

  await nextTick(); // รอ DOM อัปเดตก่อน
  initCarousel();

  //   await nextTick();
  //   refreshFsLightbox();
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
</style>
