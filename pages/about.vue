<template>
  <main>
    <div class="hero small-height jarallax">
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
        class="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero"
        data-opacity-mask="rgba(0, 0, 0, 0.5)"
      >
        <div class="container">
          <small class="slide-animated one">
            {{ localizedDataSection1.title }}</small
          >
          <h1 class="slide-animated two">
            {{ localizedDataSection1.titleMini }}
          </h1>
        </div>
      </div>
    </div>
    <!-- /Background Img Parallax -->

    <div class="container margin_120_95">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-6">
          <div class="parallax_wrapper">
            <!-- <img src="https://azsunriseresort.com/images/Garden/AZ Garden_3-topaz.jpg" alt="" class="img-fluid rounded-img"> -->
            <img
              :src="
                apiService.getImageUrl(
                  responseDataSection2.image?.path,
                  responseDataSection2.image?.thumbnail_name
                )
              "
              alt=""
              class="img-fluid rounded-img"
            />
            <!-- <div data-cue="slideInUp" class="img_over"><span data-jarallax-element="-30"><img src="~assets/img/banner/main/main4.jpg" alt="" class="rounded-img"></span></div> -->
          </div>
        </div>
        <div class="col-lg-6">
          <div class="intro">
            <div class="title">
              <h2 data-cue="slideInUp">{{ localizedDataSection2.title }}</h2>
            </div>
            <p class="lead" data-cue="slideInUp">
              {{ localizedDataSection2.description }}
            </p>
          </div>
        </div>
      </div>
      <!-- /Row -->
    </div>
    <!-- /container -->

    <div class="bg_white">
      <div class="container margin_120_95">
        <div class="row justify-content-between" v-if="isMounted">
          <div class="col-lg-5 fixed_title">
            <div class="title">
              <small>{{ $t("section.hotel") }}</small>
              <h2>{{ $t("attractions.title") }}</h2>
              <p>{{ $t("attractions.intro") }}</p>
            </div>

            <div class="list_ok">
              <ul>
                <li data-cue="slideInUp">
                  <h5>{{ $t("attractions.bigBuddha.title") }}</h5>
                  <p>{{ $t("attractions.bigBuddha.desc") }}</p>
                </li>
                <li data-cue="slideInUp">
                  <h5>{{ $t("attractions.oldPhuket.title") }}</h5>
                  <p>{{ $t("attractions.oldPhuket.desc") }}</p>
                </li>
                <li data-cue="slideInUp">
                  <h5>{{ $t("attractions.patong.title") }}</h5>
                  <p>{{ $t("attractions.patong.desc") }}</p>
                </li>
                <li data-cue="slideInUp">
                  <h5>{{ $t("attractions.phangnga.title") }}</h5>
                  <p>{{ $t("attractions.phangnga.desc") }}</p>
                </li>
                <li data-cue="slideInUp">
                  <h5>{{ $t("attractions.chalong.title") }}</h5>
                  <p>{{ $t("attractions.chalong.desc") }}</p>
                </li>
                <li data-cue="slideInUp">
                  <h5>{{ $t("attractions.similan.title") }}</h5>
                  <p>{{ $t("attractions.similan.desc") }}</p>
                </li>
                <li data-cue="slideInUp">
                  <h5>{{ $t("attractions.promthep.title") }}</h5>
                  <p>{{ $t("attractions.promthep.desc") }}</p>
                </li>
                <li data-cue="slideInUp">
                  <h5>{{ $t("attractions.phiphi.title") }}</h5>
                  <p>{{ $t("attractions.phiphi.desc") }}</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6">
            <div data-cue="fadeIn">
              <figure>
                <img
                  src="~assets/img/bg_img/ab1.jpg"
                  alt=""
                  class="img-fluid rounded-img"
                />
              </figure>
            </div>
            <div data-cue="fadeIn">
              <figure>
                <img
                  src="~assets/img/bg_img/ab2.jpeg"
                  alt=""
                  class="img-fluid rounded-img"
                />
              </figure>
            </div>
            <div data-cue="fadeIn">
              <figure>
                <img
                  src="~assets/img/bg_img/ab3.jpg"
                  alt=""
                  class="img-fluid rounded-img"
                />
              </figure>
            </div>
          </div>
        </div>
        <!-- <hr class="more_margin"> -->
      </div>
      <!-- /container-->
    </div>
    <br /><br />
    <div class="bg_white pt-2 pb-5">
      <!-- <div class="container"> -->
      <div class="title text-center">
        <small data-cue="slideInUp">A.Z. Sunrise Resort</small>
        <h2 data-cue="slideInUp" data-delay="100">
          {{ $t("section_gallery") }}
        </h2>
      </div>
      <div class="container-fluid p-lg-0">
        <div data-cues="zoomIn">
          <div
            class="owl-carousel carousel_item_centered2 kenburns2 rounded-img"
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
          </div>
        </div>
        <div class="text-center mt-5 fullscreen-btn">
          <a
            v-for="(gallery, idx) in responseDataSection3.galleries || []"
            :key="idx"
            :class="idx === 0 ? 'btn_1 outline' : ''"
            data-fslightbox="gallery_1"
            data-type="image"
            :href="
              apiService.getImageUrl(
                gallery.image.path,
                // ใช้ชื่อไฟล์เต็มขนาด ถ้าต้องการ thumbnail ให้เปลี่ยนเป็น gallery.image.thumbnail_name
                gallery.image.thumbnail_name
              )
            "
          >
            <!-- แสดงปุ่ม fullscreen เฉพาะ item แรก -->
            <span v-if="idx === 0">{{ $t("gallery.fullscreen") }}</span>
          </a>
        </div>
      </div>
      <!-- </div> -->
    </div>

    <div class="container">
      <div class="title text-center pt-2 mb-5">
        <small data-cue="slideInUp">A.Z. Sunrise Resort</small>
        <h2 data-cue="slideInUp" data-delay="100">
          {{ $t("facilities.title") }}
        </h2>
      </div>
      <div class="row mt-4">
        <div class="col-lg-3 col-md-6">
          <div class="box_facilities no-border" data-cue="slideInUp">
            <i class="customicon-private-parking"></i>
            <h3>{{ $t("facilities.privateParking") }}</h3>
            <p>{{ $t("facilities.parking.desc") }}</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="box_facilities" data-cue="slideInUp">
            <i class="customicon-wifi"></i>
            <h3>{{ $t("facilities.highSpeedWifi") }}</h3>
            <p>{{ $t("facilities.wifi.desc") }}</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="box_facilities" data-cue="slideInUp">
            <i class="customicon-cocktail"></i>
            <h3>{{ $t("facilities.barAndRestaurant") }}</h3>
            <p>{{ $t("facilities.bar.desc") }}</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="box_facilities" data-cue="slideInUp">
            <i class="customicon-swimming-pool"></i>
            <h3>{{ $t("facilities.swimmingPool") }}</h3>
            <p>{{ $t("facilities.pool.desc") }}</p>
          </div>
        </div>
      </div>
      <!-- /Row -->
      <hr class="more_margin" />

      <!-- /Row -->
    </div>
    <!-- /container -->
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
const pageId = 9;
const pageName = "about";

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
  initCarousel(); // เรียก re-init carousel
  await nextTick();
  refreshFsLightbox();
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
  const t = `title_${getLang.value}`;
  const d = `description_${getLang.value}`;
  return {
    title: responseDataSection2.value[t] ?? responseDataSection2.value.title_en,
    description:
      responseDataSection2.value[d] ??
      responseDataSection2.value.description_en,
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
  const $owl = $(".carousel_item_centered2");

  $owl.owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    dots: false,
    center: true,
    // navText: [
    //   "<i class='bi bi-arrow-left-short'></i>",
    //   "<i class='bi bi-arrow-right-short'></i>",
    // ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 4,
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

<!-- <script setup>
import { ref, onMounted } from "vue";
import apiService from "@/services/apiService";
// import { useI18n } from "vue-i18n";

const isMounted = ref(false);
// const { locale } = useI18n();

onMounted(() => {
  isMounted.value = true;

  // re-initialize cue-based animation if needed
  if (window?.ScrollCue) {
    window.ScrollCue.update(); // หรือ .init() แล้วแต่ lib
  }
});
</script>
<script>
import apiService from "@/services/apiService";
import { useI18n } from "vue-i18n";

export default {
  data() {
    return {
      pageId: 9,
      responseDataSection: {},
      responseDataSection1: {},
      responseDataSection2: {},
      responseDataSection3: {},
      pageName: "",
      pages: [],
      responseData: {
        title: "",
        titleMini: "",
      }, // Store selected images and previews
    };
  },
  async created() {
    console.log("222222222222222 >> ");
    await this.callServiceSection3();
  },
  async mounted() {
    console.log("333333333333333 >> ");
    // await this.callServicePageInfo();
    await this.callServiceSection1();
    await this.callServiceSection2();
    console.log("responseDataSection >> ", this.responseDataSection);
  },
  computed: {
    getLang() {
      return this.$i18n.locale == "zh-CN" ? "cn" : this.$i18n.locale;
    },
    localizedDataSection1() {
      const title = `title_${this.getLang}`;
      const titleMini = `title_${this.getLang}`;
      return {
        title:
          this.responseDataSection1[title] ||
          this.responseDataSection1.title_en,
        titleMini:
          this.responseDataSection1[titleMini] ||
          this.responseDataSection1.title_mini_en,
      };
    },
    localizedDataSection2() {
      const title = `title_${this.getLang}`;
      const description = `description_${this.getLang}`;
      return {
        title:
          this.responseDataSection2[title] ||
          this.responseDataSection2.title_en,
        description:
          this.responseDataSection2[description] ||
          this.responseDataSection2.description_en,
      };
    },
  },
  methods: {
    async callServicePageInfo() {
      const response = await apiService.callServiceInfo();
      if (response) {
        this.pages = response;
        const data = this.pages.find((p) => p.id === this.pageId);
        this.pageName = data?.description;
      }
    },
    async callServiceSection1() {
      try {
        const response = await apiService.get(
          "/api/page-info/content/section1/" + this.pageId
        );

        this.responseDataSection1 = response;

        console.log("res >", this.responseDataSection1);
      } catch (err) {
        console.error("Error loading landing page:", err);
      }
    },
    async callServiceSection2() {
      try {
        const response = await apiService.get(
          "/api/page-info/content/section2/" + this.pageId
        );

        this.responseDataSection2 = response;
        // สมมติ this.pages เป็น array ของ { id, name, ... }
        console.log("this.pages >", this.pages);
        console.log("res >", this.responseDataSection2);
      } catch (err) {
        console.error("Error loading landing page:", err);
      }
    },
    async callServiceSection3() {
      try {
        const response = await apiService.get(
          "/api/page-info/content/section3/" + this.pageId
        );

        this.responseDataSection3 = response;
        // สมมติ this.pages เป็น array ของ { id, name, ... }
        console.log("res >", this.responseDataSection3);
      } catch (err) {
        console.error("Error loading landing page:", err);
      }
    },
  },
};
</script>
<style scoped></style> -->
