<template>
  <div class="hero home-search full-height jarallax" data-jarallax data-speed="0.2">
        <img class="jarallax-img kenburns" src="~assets/img/banner/main/main1.jpg" alt="">
        <div class="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
            <div class="container-fluid">
                <div class="row vh-100 justify-content-center">
                    <div class="col-lg-8">
                        <div id="wrapper">
                            <div class="row countdown">
                                <div class="col-md-12">
                                    <img src="~assets/img/logo/AZ-sunrise-logo.png" class="az-logo" alt="AZ Sunrise Logo">
                                    <h1>We will be back soon!</h1>
                                    <p class="lead">It's very important to have a very good customer service, but it's worth it!</p>
                                </div>
                                <div id="countdown_wp">
                                    <div class="container_count">
                                        <div id="days">00</div>days
                                    </div>
                                    <div class="container_count">
                                        <div id="hours">00</div>hours
                                    </div>
                                    <div class="container_count">
                                        <div id="minutes">00</div>minutes
                                    </div>
                                    <div class="container_count last">
                                        <div id="seconds">00</div>seconds
                                    </div>
                                </div>
                            </div><!-- End Countdown-->
                        </div>
                    </div>
                </div>
            </div><!-- End Container--> 
        </div>
    </div>
  </template>
  
  <script setup>
  useHead({
    link: [
      {
        rel: 'stylesheet',
        href: '/coming_soon_assets/coming-soon.css', // ชี้ไปยังไฟล์ CSS เฉพาะเพจ
      },
    ],
  })
  </script>