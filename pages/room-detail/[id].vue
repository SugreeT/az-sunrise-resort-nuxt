<template>
  <main>
    <div class="hero medium-height jarallax" data-jarallax data-speed="0.2">
      <client-only>
        <img
          class="jarallax-img"
          :src="
            apiService.getImageUrl(
              localizedRoomTypesDetail?.image?.path,
              localizedRoomTypesDetail?.image?.thumbnail_name
            )
          "
          alt=""
        />
        <div
          class="wrapper opacity-mask d-flex align-items-center justify-content-center animate_hero"
          data-opacity-mask="rgba(0, 0, 0, 0.5)"
        >
          <div class="container">
            <div class="row justify-content-center justify-content-lg-start">
              <div class="col-sm-12 col-md-12 col-lg-10 static">
                <div class="slide-text white">
                  <small class="slide-animated one"> {{ localizedDataSection1.title }}</small>
                  <h1 class="slide-animated two">
                    {{ localizedDataSection1.titleMini }}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="mouse_wp slide-animated four">
            <a href="#first_section" class="btn_explore">
              <div class="mouse"></div>
            </a>
          </div>
        </div>
      </client-only>
    </div>
    <!-- 
<div class="hero full-height jarallax" data-jarallax data-speed="0.2">
    <img class="jarallax-img kenburns" src="/img/img_ex/1.jpg" alt="">
    <div class="wrapper opacity-mask d-flex align-items-center  text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <small class="slide-animated one"> {{ $t('experience_title') }}</small>
                    <h1 class="slide-animated two">{{ roomName }}</h1>
                    <p class="slide-animated three">{{ $t('room.furnishing') }}</p>
                </div>
            </div>
        </div>
        <div class="mouse_wp slide-animated four">
            <a href="#first_section" class="btn_explore">
                <div class="mouse"></div>
            </a>
        </div>
    </div>
</div> -->
    <!-- /Background Img Parallax -->

    <div class="bg_white" id="first_section">
      <div class="container pt-2 pb-2">
        <div class="row justify-content-between">
          <div class="col-lg-5 pt-3">
            <div class="title">
              <small class="title-small">A.Z. Sunrise Resort</small>
              <h2>{{ localizedRoomTypesDetail?.title }}</h2>
            </div>
            <p>
              {{ localizedRoomTypesDetail?.details }}
            </p>
          </div>
          <div class="col-lg-6">
            <div class="room_facilities_list">
              <ul data-cues="slideInLeft">
                <ul class="list-unstyled">
                  <li v-for="(f, fidx) in localizedRoomTypesDetail?.facilities" :key="fidx">
                    <i :class="f.icon"></i> {{ f.name }}
                  </li>
                  <!-- <li>
                    <i class="icon-hotel-double_bed_2"></i> {{ $t("room.bed") }}
                  </li>
                  <li>
                    <i class="icon-hotel-safety_box"></i>
                    {{ $t("room.safety") }}
                  </li>
                  <li>
                    <i class="icon-hotel-patio"></i> {{ $t("room.balcony") }}
                  </li>
                  <li><i class="icon-hotel-tv"></i> {{ $t("room.tv") }}</li>
                  <li>
                    <i class="icon-hotel-disable"></i> {{ $t("room.disable") }}
                  </li>
                  <li><i class="icon-hotel-dog"></i> {{ $t("room.pet") }}</li>
                  <li>
                    <i class="icon-hotel-bottle"></i> {{ $t("room.bottle") }}
                  </li>
                  <li><i class="icon-hotel-wifi"></i> {{ $t("room.wifi") }}</li>
                  <li>
                    <i class="icon-hotel-hairdryer"></i>
                    {{ $t("room.hairdryer") }}
                  </li>
                  <li>
                    <i class="icon-hotel-condition"></i> {{ $t("room.aircon") }}
                  </li>
                  <li>
                    <i class="icon-hotel-loundry"></i> {{ $t("room.laundry") }}
                  </li> -->
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /bg_white -->

    <div class="bg_white">
      <div class="container-fluid p-lg-0">
        <!-- {{ roomTypesGallery }} -->
        <div data-cues="zoomIn">
          <div class="owl-carousel owl-theme carousel_item_centered kenburns rounded-img">
            <div v-for="(gallery, idx) in roomTypesGallery?.galleries || []" :key="idx" class="item">
              <img :src="apiService.getImageUrl(gallery.image.path, gallery.image.thumbnail_name)" alt="" />
            </div>
          </div>
        </div>
        <!-- <div class="text-center mt-5">
          <a
            class="btn_1 outline"
            data-fslightbox="gallery_1"
            data-type="image"
            href="img/rooms/opt_5.jpg"
            >{{ $t("gallery.fullscreen") }}</a
          >
          <a
            data-fslightbox="gallery_1"
            data-type="image"
            href="img/rooms/opt_1.jpg"
          ></a>
          <a
            data-fslightbox="gallery_1"
            data-type="image"
            href="img/rooms/opt_4.jpg"
          ></a>
          <a
            data-fslightbox="gallery_1"
            data-type="image"
            href="img/rooms/opt_6.jpg"
          ></a>
        </div> -->
      </div>
    </div>
    <!-- /bg_white -->

    <div class="bg_white">
      <div class="container margin_120_95">
        <div data-cue="slideInUp">
          <div class="title">
            <small>A.Z. Sunrise Resort</small>
            <h2>{{ $t("room.similar") }}</h2>
          </div>
          <div class="row">
            <div
              class="col-xl-4 col-lg-6 col-md-6 col-sm-6"
              v-for="(roomOther, idx) in localizedRoomTypesDetailOther || []"
              :key="idx"
            >
              <a :href="'/room-detail/' + roomOther.id" class="box_cat_rooms">
                <figure>
                  <div
                    class="background-image"
                    :style="{
                      backgroundImage: `url(${apiService.getImageUrl(
                        roomOther.image.path,
                        roomOther.image.thumbnail_name
                      )})`,
                    }"
                  ></div>
                  <div class="info">
                    <small>{{ roomOther.titleMini }}</small>
                    <h3>{{ roomOther.title }}</h3>
                    <span>Read more</span>
                  </div>
                </figure>
              </a>
            </div>
            <!-- <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <a href="rooms" class="box_cat_rooms">
                <figure>
                  <div
                    class="background-image"
                    data-background="url(img/rooms/2.jpg)"
                  ></div>
                  <div class="info">
                    <small>From $190/night</small>
                    <h3>Deluxe Room</h3>
                    <span>Read more</span>
                  </div>
                </figure>
              </a>
            </div> -->
            <!-- <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <a href="rooms" class="box_cat_rooms">
                <figure>
                  <div
                    class="background-image"
                    data-background="url(img/img_ex/3.jpg)"
                  ></div>
                  <div class="info">
                    <small>From $240/night</small>
                    <h3>Superior Room</h3>
                    <span>Read more</span>
                  </div>
                </figure>
              </a>
            </div> -->
          </div>
          <!-- /row-->
        </div>
      </div>
    </div>
    <!-- /bg_white -->

    <div class="container margin_120_95" id="booking_section">
      <div class="row justify-content-between">
        <div class="col-xl-4">
          <div data-cue="slideInUp">
            <div class="title">
              <small>A.Z. Sunrise Resort</small>
              <h2>{{ $t("checkAvailability.title") }}</h2>
            </div>
            <!-- <p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu. </p> -->
            <p class="phone_element no_borders">
              <a href="tel://076643222"
                ><i class="bi bi-telephone"></i
                ><span
                  ><em>{{ $t("info.bookings") }}</em
                  >076643222
                </span></a
              >
            </p>
          </div>
        </div>
        <div class="col-xl-7">
          <div data-cue="slideInUp" data-delay="200">
            <div class="booking_wrapper">
              <div class="col-12">
                <input type="hidden" id="date_booking" name="date_booking" />
              </div>
              <!-- <div class="row">
                        <div class="col-lg-6">
                            <div class="custom_select">
                                <select class="wide">
                                    <option>Select Room</option>
                                    <option>Double Room</option>
                                    <option>Deluxe Room</option>
                                    <option>Superior Room</option>
                                    <option>Junior Suite</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-6">
                                    <div class="qty-buttons mb-3 version_2">
                                        <input type="button" value="+" class="qtyplus" name="adults_booking">
                                        <input type="text" name="adults_booking" id="adults_booking" value="" class="qty form-control" placeholder="Adults">
                                        <input type="button" value="-" class="qtyminus" name="adults_booking">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-3 qty-buttons mb-3 version_2">
                                        <input type="button" value="+" class="qtyplus" name="childs_booking">
                                        <input type="text" name="childs_booking" id="childs_booking" value="" class="qty form-control" placeholder="Childs">
                                        <input type="button" value="-" class="qtyminus" name="childs_booking">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
            </div>
            <!-- / row -->
            <p class="text-end mt-3">
              <a href="javascript:void(0);" @click.prevent="gotoBookDirect()" class="btn_1 outline">{{
                $t("menu.bookNow")
              }}</a>
            </p>
          </div>
        </div>
        <!-- /col -->
      </div>
      <!-- /row -->
    </div>
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
import { useRoute } from "vue-router";

const route = useRoute();
const routeId = route.params.id;
// 2) i18n
const { locale } = useI18n();

// 3) pageId constant
const pageId = 8;
const pageName = "room";

// 4) fetch main landing section via useAsyncData (runs before render)
const {
  data: responseDataSection,
  pending,
  error,
} = await useAsyncData("landing-section", () => apiService.get(`/api/landingpage/content/${pageId}`));

// 5) other sections loaded onMounted
const responseDataSection1 = ref<Record<string, any>>({});
const responseDataSection2 = ref<Record<string, any>>({});
const responseDataSection3 = ref<{ galleries: any[] }>({ galleries: [] });

onMounted(async () => {
  isMounted.value = true;

  // load sections 1–3
  await loadOtherSections();

  await nextTick(); // รอ DOM อัปเดตก่อน
  initCarousel();

  // sync locale from localStorage
  if (process.client) {
    const saved = localStorage.getItem("lang");
    if (saved) {
      locale.value = saved;
    }
  }

  await nextTick(); //
  setTimeout(() => {
    initDateBookingPicker();
  }, 2000);

  // re-init ScrollCue if provided
  if (window?.ScrollCue) {
    window.ScrollCue.update();
  }

  // await nextTick();
  // refreshFsLightbox();
});

// 6) compute a short getLang ("cn" instead of "zh-CN")
const getLang = computed(() => (locale.value === "zh-CN" ? "cn" : locale.value));

// 7) localized getters for section1 & section2
const localizedDataSection1 = computed(() => {
  const t = `title_${getLang.value}`;
  const m = `title_mini_${getLang.value}`;
  return {
    title: responseDataSection1.value[t] ?? responseDataSection1.value.title_en,
    titleMini: responseDataSection1.value[m] ?? responseDataSection1.value.title_mini_en,
  };
});

const localizedDataSection2 = computed(() => {
  const lang = getLang.value;
  const titleKey = `title_${lang}`;
  const descKey = `description_${lang}`;
  const schedKey = `schedules_${lang}`;

  const schedules = responseDataSection2.value[schedKey] || responseDataSection2.value.schedules_en || [];

  return {
    title: responseDataSection2.value[titleKey] || responseDataSection2.value.title_en,
    description: responseDataSection2.value[descKey] || responseDataSection2.value.description_en,
    schedules,
  };
});

const localizedRoomTypes = computed(() => {
  const lang = getLang.value; // 'en' | 'cn' | 'ru'
  const titleKey = `title_${lang}`;
  const titleMiniKey = `title_mini_${lang}`;
  const detailsKey = `details_${lang}`;

  // ถ้ามีฟิลด์อื่นที่ต้องแปล เช่น facilities, schedules ก็สร้าง key เพิ่มได้
  const facilitiesKey = `facilities_${lang}`;
  // const schedulesKey  = `schedules_${lang}`;

  // 1) ดึง array ดิบจาก responseDataSection2
  const rawList = responseDataSection2.value.room_types || [];

  // 2) map แต่ละ room_type ให้ได้โครงสร้างตามต้องการ
  return rawList.map((room: Record<string, any>) => {
    // 2.1) แปลง title และ details โดย fallback เป็น _en เสมอ
    const localizedTitle = room[titleKey] || room.title_en || "";
    const localizedTitleMini = room[titleMiniKey] || room.title_mini_en || "";
    const localizedDetails = room[detailsKey] || room.details_en || "";
    const localizedFacilities = room[facilitiesKey] || room.details_en || "";

    // 2.2) เอา galleries มาแบบดิบ ๆ จากฐานข้อมูล
    //      ไม่ต้องแปลงใด ๆ ให้เขียนตรงนี้เลย
    const galleriesArray = Array.isArray(room.galleries) ? room.galleries : [];

    return {
      id: room.id,
      title: localizedTitle,
      titleMini: localizedTitleMini,
      details: localizedDetails,
      facilities: localizedFacilities?.filter((item: any) => item.status === "Y"),
      image: galleriesArray.length > 0 ? galleriesArray[0].image : null,
      // ถ้ามี fields อื่น ๆ ที่อยากให้ส่งผ่านไปด้วย ก็เพิ่มได้ตรงนี้
      // facilities: room[facilitiesKey] || room.facilities_en || [],
      // schedules:  room[schedulesKey]  || room.schedules_en  || [],

      // 2.3) galleries ส่งแบบดิบ ๆ จาก DB
      galleries: galleriesArray?.slice(0, 3),
    };
  });
});

const localizedRoomTypesDetail = computed(() => {
  const idParam = route.params.id;
  // ปกติ route.params.id จะเป็น string ให้แปลงเป็น number
  const roomId = Number(idParam);

  // ต้องเข้าถึงค่า .value ของ localizedRoomTypes (เพราะมันเป็น computed)
  return localizedRoomTypes.value.find((item: any) => item.id === roomId) || null;
});

const localizedRoomTypesDetailOther = computed(() => {
  const idParam = route.params.id;
  // ปกติ route.params.id จะเป็น string ให้แปลงเป็น number
  const roomId = Number(idParam);

  // ต้องเข้าถึงค่า .value ของ localizedRoomTypes (เพราะมันเป็น computed)
  return localizedRoomTypes.value.filter((item: any) => item.id !== roomId) || [];
});

const roomTypesGallery = computed(() => {
  const idParam = route.params.id;
  // ปกติ route.params.id จะเป็น string ให้แปลงเป็น number
  // console.log(
  //   " responseDataSection2.value.room_types>>> ",
  //   responseDataSection2.value.room_types
  // );
  const roomId = Number(idParam);

  return responseDataSection2.value.room_types?.find((item: any) => item.id === roomId) || null;
});

// 1.2 ฟังก์ชันเช็กว่าข้อความยาวเกิน 100 ไหม
function isLong(text: string | null | undefined): boolean {
  if (!text) return false;
  return text.length > 100;
}

// 1.3 ฟังก์ชันตัดข้อความให้เหลือ 100 ตัวอักษร
function truncatedText(text: string | null | undefined): string {
  if (!text) return "";
  return text.length > 100 ? text.slice(0, 100) : text;
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
    navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
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

function initDateBookingPicker() {
  const DateTime = easepick.DateTime;

  const bookedDates = [["2023-09-01", "2023-09-04"], "2023-09-07", ["2023-10-11", "2023-10-17"]].map((d) => {
    if (Array.isArray(d)) {
      const start = new DateTime(d[0], "YYYY-MM-DD");
      const end = new DateTime(d[1], "YYYY-MM-DD");
      return [start, end];
    }
    return new DateTime(d, "YYYY-MM-DD");
  });

  const datePB = document.getElementById("date_booking");
  if (datePB) {
    new easepick.create({
      element: datePB,
      css: ["/css/daterangepicker_v2.css"],
      lang: "en-EN",
      format: "YYYY-MM-DD",
      calendars: 2,
      grid: 2,
      zIndex: 10,
      inline: true,
      plugins: ["LockPlugin", "RangePlugin"],
      RangePlugin: {
        tooltipNumber(num) {
          return num - 1;
        },
        locale: {
          one: "night",
          other: "nights",
        },
      },
      LockPlugin: {
        minDate: new Date(),
        minDays: 1,
        inseparable: false,
        filter(date, picked) {
          if (picked.length === 1) {
            const incl = date.isBefore(picked[0]) ? "[)" : "(]";
            return !picked[0].isSame(date, "day") && date.inArray(bookedDates, incl);
          }
          return date.inArray(bookedDates, "[)");
        },
      },
    });
  }
}

function goToRoomDetail(roomId: any) {
  localStorage.setItem("roomKey", roomId);
  window.location.href = "/room-detail/" + roomId;
}

function gotoBookDirect() {
  let date = $("#date_booking").val().split("-");
  let dateStr = "";
  if (date.length > 4) {
    let startDate = date[0] + "-" + date[1] + "-" + date[2];
    let endDate = date[3] + "-" + date[4] + "-" + date[5];
    dateStr = "&checkInDate=" + startDate + "&checkOutDate=" + endDate;
  }

  window.location.href = "https://book-directonline.com/properties/AZSunriseVillaDIRECT?locale=en" + dateStr;
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

<style>
.title-small {
  text-transform: uppercase;
  color: #978667;
  letter-spacing: 3px;
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
  font-size: 12px;
  font-size: 0.75rem;
}
</style>
