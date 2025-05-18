<template>
    <main>
      <div class="hero small-height jarallax" >
          <img class="jarallax-img" src="https://azsunriseresort.com/images/Garden/AZ Garden_8-topaz.jpg" alt="">
          <div class="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
              <div class="container">
                  <small class="slide-animated one">{{ $t('experience_title') }}</small>
                  <h1 class="slide-animated two">A.Z. SUNRISE Resort</h1>
              </div>
          </div>
      </div>
      <!-- /Background Img Parallax -->

      <div class="container margin_120_95">
          <div class="row justify-content-between align-items-center">
              <div class="col-lg-6">
                  <div class="parallax_wrapper">
                      <img src="https://azsunriseresort.com/images/Garden/AZ Garden_3-topaz.jpg" alt="" class="img-fluid rounded-img">
                      <!-- <div data-cue="slideInUp" class="img_over"><span data-jarallax-element="-30"><img src="~assets/img/banner/main/main4.jpg" alt="" class="rounded-img"></span></div> -->
                  </div>
              </div>
              <div class="col-lg-6">
                  <div class="intro">
                    <div class="title">
                        <!-- <small>About US</small> -->
                        <h2 data-cue="slideInUp">{{ $t('about-us') }}</h2>
                    </div>
                    <!-- <p class="lead" data-cue="slideInUp">{{ $t('welcome-message', { name: 'vue-i18n' }) }}</p> -->
                    <p class="lead" data-cue="slideInUp">{{ $t('resort.description', { name: 'vue-i18n' }) }}</p>
                            <!-- <p data-cue="slideInUp">{{ $t('details-message', { name: 'vue-i18n' }) }}</p> -->
                            <!-- <p data-cue="slideInUp"><em>{{ $t('extraordinary-message', { name: 'vue-i18n' }) }}</em></p> -->
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
                            <small>{{ $t('section.hotel') }}</small>
                            <h2>{{ $t('attractions.title') }}</h2>
                            <p>{{ $t('attractions.intro') }}</p>
                        </div>

                        <div class="list_ok">
                            <ul>
                            <li data-cue="slideInUp" >
                                <h5>{{ $t('attractions.bigBuddha.title') }}</h5>
                                <p>{{ $t('attractions.bigBuddha.desc') }}</p>
                            </li>
                            <li data-cue="slideInUp" >
                                <h5>{{ $t('attractions.oldPhuket.title') }}</h5>
                                <p>{{ $t('attractions.oldPhuket.desc') }}</p>
                            </li>
                            <li data-cue="slideInUp" >
                                <h5>{{ $t('attractions.patong.title') }}</h5>
                                <p>{{ $t('attractions.patong.desc') }}</p>
                            </li>
                            <li data-cue="slideInUp" >
                                <h5>{{ $t('attractions.phangnga.title') }}</h5>
                                <p>{{ $t('attractions.phangnga.desc') }}</p>
                            </li>
                            <li data-cue="slideInUp" >
                                <h5>{{ $t('attractions.chalong.title') }}</h5>
                                <p>{{ $t('attractions.chalong.desc') }}</p>
                            </li>
                            <li data-cue="slideInUp" >
                                <h5>{{ $t('attractions.similan.title') }}</h5>
                                <p>{{ $t('attractions.similan.desc') }}</p>
                            </li>
                            <li data-cue="slideInUp" >
                                <h5>{{ $t('attractions.promthep.title') }}</h5>
                                <p>{{ $t('attractions.promthep.desc') }}</p>
                            </li>
                            <li data-cue="slideInUp">
                                <h5>{{ $t('attractions.phiphi.title') }}</h5>
                                <p>{{ $t('attractions.phiphi.desc') }}</p>
                            </li>
                            </ul>
                        </div>
                    </div>

                      <div class="col-lg-6 ">
                          <div data-cue="fadeIn" >
                              <figure><img src="~assets/img/bg_img/ab1.jpg" alt="" class="img-fluid rounded-img"></figure>
                          </div>
                          <div data-cue="fadeIn" >
                              <figure>
                                  <img src="~assets/img/bg_img/ab2.jpeg" alt="" class="img-fluid rounded-img">
                              </figure>
                          </div>
                          <div data-cue="fadeIn" >
                              <figure>
                                  <img src="~assets/img/bg_img/ab1.jpg" alt="" class="img-fluid rounded-img">
                              </figure>
                          </div>
                      </div>
                  </div>
              <!-- <hr class="more_margin"> -->
          </div>
          <!-- /container-->
      </div>
      <div class="bg_white add_bottom_120">
            <div class="container">
                <div class="title text-center ">
                    <small data-cue="slideInUp">A.Z. Sunrise Resort</small>
                    <h2 data-cue="slideInUp" data-delay="100">Hotel Gallery</h2>
                </div>
                <div class="container-fluid p-lg-0">
                    <div data-cues="zoomIn">
                        <div class="owl-carousel owl-theme carousel_item_centered kenburns rounded-img">
                      
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/Lobby/AZ Lobby_2-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/Lobby/AZ Lobby_3-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/Lobby/AZ Lobby_4-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/Lobby/AZ Lobby_5-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/restaurant/AZ%20restaurant_1-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/restaurant/AZ%20restaurant_2-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/restaurant/AZ%20restaurant_3-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/restaurant/AZ%20restaurant_4-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/Fitness/AZ%20Fitness_1-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/Fitness/AZ%20Fitness_4-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/Fitness/AZ%20Fitness_6-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/Fitness/AZ%20Fitness_7-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/Garden/AZ Garden_8-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/Garden/AZ Garden_6-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/Garden/AZ Garden_7-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/car/Hotel Car_1-topaz-sharpen-denoise.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/car/Hotel Car_2-topaz-sharpen-denoise.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/car/Hotel Car_3-topaz-sharpen-denoise.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/Spa/AZ Spa_3-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/Spa/AZ Spa_4-topaz.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="https://azsunriseresort.com/images/Spa/AZ Spa_5-topaz.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>

      <!-- /bg_white -->

      <!-- <div class="parallax_section_1 jarallax" data-jarallax data-speed="0.2">
          <img class="jarallax-img" src="~assets/img/hero_home_1.jpg" alt="">
          <div class="wrapper opacity-mask d-flex align-items-center justify-content-center text-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-lg-8">
                          <div class="title white">
                              <small class="mb-1">Testimonials</small>
                              <h2>What Clients Says</h2>
                          </div>
                          <div class="carousel_testimonials owl-carousel owl-theme nav-dots-orizontal">
                              <div>
                                  <div class="box_overlay">
                                      <div class="pic">
                                          <figure><img src="~assets/img/testimonial_1.jpg" alt="" class="img-circle">
                                          </figure>
                                          <h4>Roberta<small>12 Oct</small></h4>
                                      </div>
                                      <div class="comment">
                                          "Mea ad postea meliore fuisset. Timeam repudiare id eum, ex paulo dictas elaboraret sed, mel cu unum nostrud."
                                      </div>
                                  </div>
                              </div>
                              <div>
                                  <div class="box_overlay">
                                      <div class="pic">
                                          <figure><img src="~assets/img/testimonial_1.jpg" alt="" class="img-circle">
                                          </figure>
                                          <h4>Roberta<small>2 Nov</small></h4>
                                      </div>
                                      <div class="comment">
                                          "Mea ad postea meliore fuisset. Timeam repudiare id eum, ex paulo dictas elaboraret sed, mel cu unum nostrud."
                                      </div>
                                  </div>
                              </div>
                              <div>
                                  <div class="box_overlay">
                                      <div class="pic">
                                          <figure><img src="~assets/img/testimonial_1.jpg" alt="" class="img-circle">
                                          </figure>
                                          <h4>Roberta<small>3 Dec</small></h4>
                                      </div>
                                      <div class="comment">
                                          "Mea ad postea meliore fuisset. Timeam repudiare id eum, ex paulo dictas elaboraret sed, mel cu unum nostrud."
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div> -->
      <!-- /parallax_section_1-->

      <div class="container ">
          <div class="title text-center mb-5">
              <small data-cue="slideInUp">A.Z. Sunrise Resort</small>
              <h2 data-cue="slideInUp" data-delay="100">{{ $t('facilities.title') }}</h2>
          </div>
          <div class="row mt-4">
              <div class="col-lg-3 col-md-6">
                  <div class="box_facilities no-border" data-cue="slideInUp">
                      <i class="customicon-private-parking"></i>
                      <h3>{{ $t('facilities.privateParking') }}</h3>
                      <p>{{ $t('facilities.parking.desc') }}</p>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6">
                  <div class="box_facilities" data-cue="slideInUp">
                      <i class="customicon-wifi"></i>
                      <h3>{{ $t('facilities.highSpeedWifi') }}</h3>
                      <p>{{ $t('facilities.wifi.desc') }}</p>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6">
                  <div class="box_facilities" data-cue="slideInUp">
                      <i class="customicon-cocktail"></i>
                      <h3>{{ $t('facilities.barAndRestaurant') }}</h3>
                      <p>{{ $t('facilities.bar.desc') }}</p>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6">
                  <div class="box_facilities" data-cue="slideInUp">
                      <i class="customicon-swimming-pool"></i>
                      <h3>{{ $t('facilities.swimmingPool') }}</h3>
                      <p>{{ $t('facilities.pool.desc') }}</p>
                  </div>
              </div>
          </div>
          <!-- /Row -->
          <hr class="more_margin">

          <!-- /Row -->
      </div>
      <!-- /container -->
      <div class="container mt-4">
            <div class="row justify-content-center" >
                <div class="title mb-3 text-center">
                    <!-- <small data-cue="slideInUp">Contact Us</small> -->
                    <h2 data-cue="slideInUp" data-delay="200">{{ $t('contact_title') }}</h2>
                </div>
                <div class="col-xl-4 col-lg-4 order-lg-2">
                    <div class="contact_info" data-cue="slideInUp" data-delay="200">
                        <ul class="clearfix">
                            <li>
                                <i class="bi bi-telephone"></i>
                                <h4>{{ $t('contact_phone_title') }}</h4>
                                <div>{{ $t('contact_phone_value') }} <br>
                                <small>{{ $t('contact_phone_note') }}</small></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 order-lg-2">
                    <div class="contact_info" data-cue="slideInUp" data-delay="200">
                        <ul class="clearfix">
                            <li>
                                <i class="bi bi-envelope-paper"></i>
                                <h4>{{ $t('contact_email_title') }}</h4>
                                <p><a href="#0">rsvn@azsunriseresort.com<br><small>&nbsp;</small></a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 order-lg-2">
                    <div class="contact_info" data-cue="slideInUp" data-delay="200">
                        <ul class="clearfix">
                            <li>
                                <i class="bi bi-geo-alt"></i>
                                <h4>{{ $t('contact_address_title') }}</h4>
                                <div>{{ $t('contact_address_value') }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
          
            </div>
        </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true

  // re-initialize cue-based animation if needed
  if (window?.ScrollCue) {
    window.ScrollCue.update()  // หรือ .init() แล้วแต่ lib
  }
})
</script>


