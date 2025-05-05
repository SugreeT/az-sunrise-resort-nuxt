<template>
    <main>
        <div class="hero full-height jarallax" data-jarallax data-speed="0.2">
            <client-only>
                <img class="jarallax-img" src="~assets/img/banner/spa/spa4.jpg" alt="">
                <div class="wrapper opacity-mask d-flex align-items-center justify-content-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                    <div class="container">
                        <div class="row justify-content-center justify-content-md-start">
                            <div class="col-lg-6 static">
                                <div class="slide-text white">
                                    <small class="slide-animated one">{{ $t('experience.spa') }}</small>
                                    <h1 class="slide-animated two">{{ $t('experience.headline') }}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </client-only>
          
        </div>
        <!-- <div id="carousel-home">
            <div class="owl-carousel owl-theme kenburns">
                <div class="owl-slide background-image cover" data-background="url(img/banner/spa/spa4.jpg)">
                    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                        <div class="container">
                            <div class="row justify-content-center justify-content-md-start">
                                <div class="col-lg-6 static">
                                    <div class="slide-text white">
                                        <small class="owl-slide-animated owl-slide-title">Spa Experience</small>
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

        <div class="container margin_120_95" id="first_section">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5">
                <div class="intro">
                    <div class="title">
                    <h2 data-cue="slideInLeft" data-duration="1000">{{ $t('spa.title') }}</h2>
                    </div>
                    <p class="lead" data-cue="slideInLeft" data-duration="1500">
                    {{ $t('spa.desc') }}
                    </p>
                    <p>
                    {{ $t('spa.highlight') }}
                    </p>
                    <!-- <p data-cue="slideInLeft" data-duration="2000">
                    <em>{{ $t('spa.signature') }}</em>
                    </p> -->
                </div>
                </div>

                <div class="col-lg-5">
                <div>
                    <ul class="list-unstyled mb-4">
                    <li class="d-flex justify-content-between mb-2 text-end" data-cue="slideInRight" data-duration="2000">
                        <strong>{{ $t('spa.open') }}</strong>
                        <span>{{ $t('spa.time.open') }}</span>
                    </li>
                    <li class="d-flex justify-content-between mb-2 text-end" data-cue="slideInRight" data-duration="2000">
                        <strong>{{ $t('spa.massage') }}</strong>
                        <span>{{ $t('spa.time.massage') }}</span>
                    </li>
                    <li class="d-flex justify-content-between mb-2 text-end" data-cue="slideInRight" data-duration="2000">
                        <strong>{{ $t('spa.evening') }}</strong>
                        <span>{{ $t('spa.time.evening') }}</span>
                    </li>
                    </ul>

                    <p class="phone_element" data-cue="slideInUp" data-duration="2000">
                    <a href="tel://423424234">
                        <i class="bi bi-telephone"></i>
                        <span>
                        <em>{{ $t('experience.reservations') }}</em> 076643222
                        </span>
                    </a>
                    </p>
                </div>
                </div>
            </div>
        </div>

      <!-- /container -->

      <div class="bg_white add_bottom_120">
        <div class="container-fluid p-lg-0">
            <div data-cues="zoomIn">
                <div class="owl-carousel owl-theme carousel_item_centered kenburns rounded-img">
                    <div class="item">
                        <img src="~assets/img/banner/spa/spa3.jpg" alt="">
                    </div>
                    <div class="item">
                        <img src="~assets/img/banner/spa/spa4.jpg" alt="">
                    </div>
                    <div class="item">
                        <img src="~assets/img/banner/spa/spa5.jpg" alt="">
                    </div>
                    <div class="item">
                        <img src="~assets/img/banner/spa/spa6.jpg" alt="">
                    </div>
                    <div class="item">
                        <img src="~assets/img/banner/spa/spa7.jpg" alt="">
                    </div>
                    <div class="item">
                        <img src="~assets/img/banner/spa/spa8.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <a class="btn_1 outline" data-fslightbox="gallery_1" data-type="image" href="img/rooms/opt_5.jpg">{{ $t('gallery.fullscreen') }}</a>
                <a data-fslightbox="gallery_1" data-type="image" href="img/rooms/opt_1.jpg"></a>
                <a data-fslightbox="gallery_1" data-type="image" href="img/rooms/opt_4.jpg"></a>
                <a data-fslightbox="gallery_1" data-type="image" href="img/rooms/opt_6.jpg"></a>
            </div>
        </div>
    </div>

      <div class="pinned-image pinned-image--medium pt-3">
        <div class="pinned-image__container" id="section_video">
            <video loop="loop" muted="muted" id="video_home">
                <source src="https://azsunriseresort.com/video/swimming_pool_2a.mp4" type="video/mp4">
                <source src="https://azsunriseresort.com/video/swimming_pool_2a.webm" type="video/webm">
                <source src="https://azsunriseresort.com/video/swimming_pool_2.ogv" type="video/ogg">
            </video>
            <div class="pinned-image__container-overlay"></div>
        </div>
        <div class="pinned_over_content">
            <div class="title white">
                <small data-cue="slideInUp">{{ $t('experience_title') }}</small>
                <h2 data-cue="slideInUp">{{ $t('experience_subtitle') }}</h2>
            </div>
        </div>
    </div>

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
