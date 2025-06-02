<template>
  <main>
    <div class="hero medium-height jarallax" data-jarallax data-speed="0.2">
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
    <!-- /Background Img Parallax -->

    <div class="container margin_120_95">
      <div class="row justify-content-between">
        <div class="col-xl-4 col-lg-5 order-lg-2">
          <div class="contact_info">
            <ul class="clearfix">
              <li>
                <i class="bi bi-geo-alt"></i>
                <h4>{{ $t("contact_address_title") }}</h4>
                <div>{{ $t("contact_address_value") }}</div>
              </li>
              <li>
                <i class="bi bi-envelope-paper"></i>
                <h4>{{ $t("contact_email_title") }}</h4>
                <p>
                  <a href="#0"
                    >rsvn@azsunriseresort.com<br /><small>&nbsp;</small></a
                  >
                </p>
              </li>
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
        <div class="col-xl-7 col-lg-7 order-lg-1">
          <div class="mt-4">
            <div class="row justify-content-between">
              <div class="col-lg-12">
                <div class="title">
                  <small>A.Z. Sunrise Resort {{ $t("faq.mini") }}</small>
                  <h3>{{ localizedDataSection2.title }}</h3>
                </div>
                <p>{{ localizedDataSection2.description }}</p>
              </div>
              <div class="col-lg-12">
                <div role="tablist" class="mb-5 accordion" id="faq">
                  <div
                    class="card"
                    v-for="(schedule, idx) in localizedDataSection2.schedules ||
                    []"
                    :key="idx"
                  >
                    <div class="card-header" role="tab">
                      <h5 class="mb-0">
                        <a
                          class="collapsed"
                          data-bs-toggle="collapse"
                          :href="'#collapseOne_product' + idx"
                          aria-expanded="false"
                        >
                          <i class="indicator bi-plus-lg"></i
                          >{{ schedule.question }}
                        </a>
                      </h5>
                    </div>
                    <div
                      :id="'collapseOne_product' + idx"
                      class="collapse"
                      role="tabpanel"
                      data-bs-parent="#faq"
                    >
                      <div class="card-body">
                        <p>{{ schedule.answer }}</p>
                      </div>
                    </div>
                  </div>

                  <!-- /card -->
                </div>
                <!-- /accordion -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /row -->
    </div>
    <!--/container -->

    <div class="map_contact pt-2 pb-4">
      <iframe
        src="https://www.google.com/maps?q=8.0247537,98.2969785&z=15&output=embed"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <!--/map_contact -->

    <!-- <div class="container margin_120_95" id="booking_section">
    <div class="row justify-content-between">
        <div class="col-xl-4">
            <div data-cue="slideInUp">
                <div class="title">
                    <small>A.Z. Sunrise Resort</small>
                    <h2>{{ $t('checkAvailability.title') }}</h2>
                </div>
                <p class="phone_element no_borders"><a href="tel://423424234"><i class="bi bi-telephone"></i><span><em>{{ $t('info.bookings') }}</em>076643222 </span></a></p>
            </div>
        </div>
        <div class="col-xl-7">
            <div data-cue="slideInUp" data-delay="200">
                <div class="booking_wrapper">
                    <div class="col-12">
                        <input type="hidden" id="date_booking" name="date_booking">
                    </div>
                </div>
                <p class="text-end mt-2"><a href="#0" class="btn_1 outline">{{ $t('menu.bookNow') }}</a></p>
            </div>
        </div>
    </div>
</div> -->
    <!-- /container -->
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
const pageId = 10;
const pageName = "contact";

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

  // await nextTick(); // รอ DOM อัปเดตก่อน
  // initCarousel();

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
  const schedKey = `questions_${lang}`;

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
  responseDataSection2.value = data.section5;
  // responseDataSection3.value = data.section3;
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
