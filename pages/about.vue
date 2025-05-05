<template>
    <main>
      <div class="hero small-height jarallax" >
          <img class="jarallax-img" src="~assets/img/img_ex/hero_home_1.jpg" alt="">
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
              <div class="col-lg-5">
                  <div class="parallax_wrapper inverted">
                      <img src="~assets/img/banner/main/main2.jpg" alt="" class="img-fluid rounded-img">
                      <div data-cue="slideInUp" class="img_over"><span data-jarallax-element="-30"><img src="~assets/img/banner/main/main4.jpg" alt="" class="rounded-img"></span></div>
                  </div>
              </div>
              <div class="col-lg-5">
                  <div class="intro">
                    <div class="title">
                        <!-- <small>About US</small> -->
                        <h2 data-cue="slideInUp">{{ $t('about-us') }}</h2>
                    </div>
                    <p class="lead" data-cue="slideInUp">{{ $t('welcome-message', { name: 'vue-i18n' }) }}</p>
                            <!-- <p data-cue="slideInUp">{{ $t('details-message', { name: 'vue-i18n' }) }}</p> -->
                            <p data-cue="slideInUp"><em>{{ $t('extraordinary-message', { name: 'vue-i18n' }) }}</em></p>
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
                              <figure><img src="~assets/img/local_amenities_1.jpg" alt="" class="img-fluid rounded-img"></figure>
                          </div>
                          <div data-cue="fadeIn" >
                              <figure>
                                  <img src="~assets/img/local_amenities_2.jpg" alt="" class="img-fluid rounded-img">
                              </figure>
                          </div>
                          <div data-cue="fadeIn" >
                              <figure>
                                  <img src="~assets/img/local_amenities_3.jpg" alt="" class="img-fluid rounded-img">
                              </figure>
                          </div>
                      </div>
                  </div>
              <hr class="more_margin">
          </div>
          <!-- /container-->
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
          <div class="row justify-content-between ">
              <div class="col-lg-4">
                  <div class="title">
                      <small>A.Z. Sunrise Resort Faq</small>
                      <h3>{{ $t('faq.title') }}</h3>
                  </div>
                  <p>{{ $t('faq.sub') }}</p>
                  <p><a href="contact" class="animated_link"><strong>{{ $t('faq.contact') }}<i class="bi bi-arrow-right"></i></strong></a></p>
              </div>
              <div class="col-lg-7">
                  <div role="tablist" class="mb-5 accordion" id="faq">
                      <div class="card">
                          <div class="card-header" role="tab">
                              <h5 class="mb-0">
                                  <a class="collapsed" data-bs-toggle="collapse" href="#collapseOne_product" aria-expanded="false">
                                      <i class="indicator bi-plus-lg"></i>{{ $t('faq.cat.cancellation') }}
                                  </a>
                              </h5>
                          </div>
                          <div id="collapseOne_product" class="collapse" role="tabpanel" data-bs-parent="#faq">
                              <div class="card-body">
                                  <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                              </div>
                          </div>
                      </div>
                      <!-- /card -->
                      <div class="card">
                          <div class="card-header" role="tab">
                              <h5 class="mb-0">
                                  <a class="collapsed" data-bs-toggle="collapse" href="#collapseTwo_product" aria-expanded="false">
                                      <i class="indicator bi-plus-lg"></i>{{ $t('faq.cat.payments') }}
                                  </a>
                              </h5>
                          </div>
                          <div id="collapseTwo_product" class="collapse" role="tabpanel" data-bs-parent="#faq">
                              <div class="card-body">
                                  <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                              </div>
                          </div>
                      </div>
                      <!-- /card -->
                      <div class="card">
                          <div class="card-header" role="tab">
                              <h5 class="mb-0">
                                  <a class="collapsed" data-bs-toggle="collapse" href="#collapseThree_product" aria-expanded="false">
                                      <i class="indicator bi-plus-lg"></i>{{ $t('faq.cat.checkin') }}
                                  </a>
                              </h5>
                          </div>
                          <div id="collapseThree_product" class="collapse" role="tabpanel" data-bs-parent="#faq">
                              <div class="card-body">
                                  <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                              </div>
                          </div>
                      </div>
                      <!-- /card -->
                      <div class="card">
                          <div class="card-header" role="tab">
                              <h5 class="mb-0">
                                  <a class="collapsed" data-bs-toggle="collapse" href="#collapseFour_product" aria-expanded="false">
                                      <i class="indicator bi-plus-lg"></i>{{ $t('faq.cat.access') }}
                                  </a>
                              </h5>
                          </div>
                          <div id="collapseFour_product" class="collapse" role="tabpanel" data-bs-parent="#faq">
                              <div class="card-body">
                                  <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                              </div>
                          </div>
                      </div>
                      <!-- /card -->
                  </div>
                  <!-- /accordion -->
              </div>
          </div>
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


