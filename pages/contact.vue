<template>
  <main>
    <div class="hero medium-height jarallax">
      <img
        class="jarallax-img"
        src="~assets/img/img_ex/hero_home_2.jpg"
        alt=""
      />
      <div
        class="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero"
        data-opacity-mask="rgba(0, 0, 0, 0.5)"
      >
        <div class="container">
          <small class="slide-animated one">{{ $t("experience_title") }}</small>
          <h1 class="slide-animated two">{{ $t("contact_title") }}</h1>
        </div>
      </div>
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
                  <small>A.Z. Sunrise Resort Faq</small>
                  <h3>{{ $t("faq.title") }}</h3>
                </div>
                <p>{{ $t("faq.sub") }}</p>
              </div>
              <div class="col-lg-12">
                <div role="tablist" class="mb-5 accordion" id="faq">
                  <div class="card">
                    <div class="card-header" role="tab">
                      <h5 class="mb-0">
                        <a
                          class="collapsed"
                          data-bs-toggle="collapse"
                          href="#collapseOne_product"
                          aria-expanded="false"
                        >
                          <i class="indicator bi-plus-lg"></i
                          >{{ $t("faq.cat.cancellation") }}
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseOne_product"
                      class="collapse"
                      role="tabpanel"
                      data-bs-parent="#faq"
                    >
                      <div class="card-body">
                        <p>.....</p>
                      </div>
                    </div>
                  </div>
                  <!-- /card -->
                  <div class="card">
                    <div class="card-header" role="tab">
                      <h5 class="mb-0">
                        <a
                          class="collapsed"
                          data-bs-toggle="collapse"
                          href="#collapseTwo_product"
                          aria-expanded="false"
                        >
                          <i class="indicator bi-plus-lg"></i
                          >{{ $t("faq.cat.payments") }}
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo_product"
                      class="collapse"
                      role="tabpanel"
                      data-bs-parent="#faq"
                    >
                      <div class="card-body">
                        <p>.....</p>
                      </div>
                    </div>
                  </div>
                  <!-- /card -->
                  <div class="card">
                    <div class="card-header" role="tab">
                      <h5 class="mb-0">
                        <a
                          class="collapsed"
                          data-bs-toggle="collapse"
                          href="#collapseThree_product"
                          aria-expanded="false"
                        >
                          <i class="indicator bi-plus-lg"></i
                          >{{ $t("faq.cat.checkin") }}
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseThree_product"
                      class="collapse"
                      role="tabpanel"
                      data-bs-parent="#faq"
                    >
                      <div class="card-body">
                        <p>.....</p>
                      </div>
                    </div>
                  </div>
                  <!-- /card -->
                  <div class="card">
                    <div class="card-header" role="tab">
                      <h5 class="mb-0">
                        <a
                          class="collapsed"
                          data-bs-toggle="collapse"
                          href="#collapseFour_product"
                          aria-expanded="false"
                        >
                          <i class="indicator bi-plus-lg"></i
                          >{{ $t("faq.cat.access") }}
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseFour_product"
                      class="collapse"
                      role="tabpanel"
                      data-bs-parent="#faq"
                    >
                      <div class="card-body">
                        <p>test</p>
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
<script>
export default {
  data() {
    return {
      title: "", // ค่าเริ่มต้น
      test: "TEST",
    };
  },
  mounted() {
    setTimeout(() => {
      this.initDateBookingPicker();
    }, 2000);
  },
  methods: {
    initDateBookingPicker() {
      const DateTime = easepick.DateTime;

      const bookedDates = [
        ["2023-09-01", "2023-09-04"],
        "2023-09-07",
        ["2023-10-11", "2023-10-17"],
      ].map((d) => {
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
          format: "DD/MM/YYYY",
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
                return (
                  !picked[0].isSame(date, "day") &&
                  date.inArray(bookedDates, incl)
                );
              }
              return date.inArray(bookedDates, "[)");
            },
          },
        });
      }
    },
  },
  computed: {
    // progressClass() {
    //   return this.isActive ? 'progress-wrap active-progress' : 'progress-wrap';
    // },
  },
  created() {
    this.title = this.$t("slide-title", { name: "vue-i18n" });
  },
};
</script>
