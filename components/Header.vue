<template>
  <!-- /Page Preload -->
  <!-- <div id="preloader">
        <div data-loader="circle-side"></div>
    </div> -->

  <!-- Opacity Mask -->
  <div id="preloader">
    <div data-loader="circle-side"></div>
  </div>
  <!-- /Page Preload -->

  <header class="fixed_header menu_v4 submenu_version">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-3">
          <a href="index" class="logo_normal"
            ><img
              src="/img/logo/AZ-sunrise-logo-h2.png"
              width="180"
              height="45"
              alt=""
          /></a>
          <a href="index" class="logo_sticky"
            ><img
              src="/img/logo/AZ-sunrise-logo-h2.png"
              width="180"
              height="45"
              alt=""
          /></a>
        </div>
        <div class="col-9">
          <div class="main-menu">
            <a href="#0" class="closebt open_close_menu"
              ><i class="bi bi-x"></i
            ></a>
            <div class="logo_panel">
              <img
                src="/img/logo/AZ-sunrise-logo-h2.png"
                width="135"
                height="45"
                alt=""
              />
            </div>
            <nav id="mainNav">
              <ul>
                <li>
                  <a href="index" class="link">{{
                    $t("menu.home", { name: "vue-i18n" })
                  }}</a>
                </li>
                <!-- <li class="submenu">
                                     <a href="#0" class="show-submenu">Rooms</a>
                                    <ul>
                                        <li><a href="room-list-1.html">Room list 1</a></li>
                                        <li><a href="room-list-2.html">Room list 2</a></li>
                                        <li><a href="room-list-3.html">Room list 3</a></li>
                                        <li><a href="room-details.html">Room details</a></li>
                                    </ul>
                                </li> -->
                <li>
                  <a href="rooms">{{
                    $t("menu.rooms", { name: "vue-i18n" })
                  }}</a>
                </li>
                <li>
                  <a href="restaurant">{{
                    $t("menu.restaurant", { name: "vue-i18n" })
                  }}</a>
                </li>
                <!-- <li class="submenu">
                                    <a href="#0" class="show-submenu">Other Pages</a>
                                    <ul>
                                        <li><a href="restaurant.html">Restaurant</a></li>
                                        <li><a href="fitness.html">Fitness Club </a></li>
                                        <li><a href="tour.html">Tour </a></li>
                                        <li><a href="diving.html">Diving </a></li>
                                        <li><a href="transportation.html">Transportation</a></li>
                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                        <li><a href="room-list-1.html">Room list 1</a></li>
                                        <li><a href="room-list-2.html">Room list 2</a></li>
                                        <li><a href="room-list-3.html">Room list 3</a></li>
                                        <li><a href="room-details.html">Room details</a></li>
                                  
                                    </ul>
                                </li> -->
                <li>
                  <a href="about">{{
                    $t("menu.about", { name: "vue-i18n" })
                  }}</a>
                </li>
                <li>
                  <a href="contact">{{
                    $t("menu.contact", { name: "vue-i18n" })
                  }}</a>
                </li>
                <li>
                  <a
                    href="https://book-directonline.com/properties/AZSunriseVillaDIRECT?locale=en"
                    class="btn_1"
                    >{{ $t("menu.bookNow", { name: "vue-i18n" }) }}</a
                  >
                </li>

                <li class="lang_top">
                  <i class="bi bi-globe"></i>
                  <span class="lang" @click="changeLanguage('en')">EN</span> -
                  <span class="lang" @click="changeLanguage('cn')">中国</span>
                  -
                  <span class="lang" @click="changeLanguage('ru')">Россия</span>
                </li>
              </ul>
            </nav>
          </div>
          <div class="hamburger_2 open_close_menu float-end">
            <div class="hamburger__box">
              <div class="hamburger__inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- container -->
  </header>
  <!-- End Header -->
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

// โหลด locale จาก localStorage เมื่อเข้า
if (process.client) {
  const storedLang = localStorage.getItem("lang");
  if (storedLang && storedLang !== locale.value) {
    locale.value = storedLang;
  }
}

function changeLanguage(lang) {
  locale.value = lang;
  localStorage.setItem("lang", lang);
}
</script>
