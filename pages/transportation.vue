<template>
    <main>
        <div class="hero full-height jarallax" data-jarallax data-speed="0.2">
            <client-only>
                <img class="jarallax-img" src="~assets/img/bg_img/tran2.jpg" alt="">
                <div class="wrapper opacity-mask d-flex align-items-center justify-content-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                    <div class="container">
                        <div class="row justify-content-center justify-content-md-start">
                            <div class="col-lg-6 static">
                                <div class="slide-text white">
                                    <small class="slide-animated one">{{ $t('experience.transport') }}</small>
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
                <div class="owl-slide background-image cover" data-background="url(img/bg_img/tran2.jpg)">
                    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                        <div class="container">
                            <div class="row justify-content-center justify-content-md-start">
                                <div class="col-lg-6 static">
                                    <div class="slide-text white">
                                        <small class="owl-slide-animated owl-slide-title">Transportation Experience</small>
                                        <h2 class="owl-slide-animated owl-slide-title-2">A unique experience</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="owl-slide background-image cover" data-background="url(img/bg_img/tran1.jpg)">
                    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-6 static">
                                    <div class="slide-text white text-center">
                                        <small class="owl-slide-animated owl-slide-title">Transportation Experience</small>
                                        <h2 class="owl-slide-animated owl-slide-title-2">The experience of unique</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="owl-slide background-image cover" data-background="url(img/bg_img/tran2.jpg)">
                    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.6)">
                        <div class="container">
                            <div class="row justify-content-center justify-content-md-end">
                                <div class="col-lg-6 static">
                                    <div class="slide-text text-end white">
                                        <small class="owl-slide-animated owl-slide-title">Transportation Experience</small>
                                        <h2 class="owl-slide-animated owl-slide-title-2">The experience of unique</h2>
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
                <div class="col-lg-5">
                <div class="intro">
                    <div class="title">
                    <h2 data-cue="slideInLeft" data-duration="1000">{{ $t('transport.title') }}</h2>
                    </div>
                    <p class="lead" data-cue="slideInLeft" data-duration="1500">
                    {{ $t('transport.desc') }}
                    </p>
                    <p>
                    {{ $t('transport.highlight') }}
                    </p>
                    <!-- <p data-cue="slideInLeft" data-duration="2000">
                    <em>{{ $t('transport.signature') }}</em>
                    </p> -->
                </div>
                </div>

                <div class="col-lg-5">
                <div>
                    <ul class="list-unstyled mb-4">
                    <li class="d-flex justify-content-between mb-2 text-end" data-cue="slideInRight" data-duration="2000">
                        <strong>{{ $t('transport.airport') }}</strong>
                        <span>{{ $t('transport.time.airport') }}</span>
                    </li>
                    <li class="d-flex justify-content-between mb-2 text-end" data-cue="slideInRight" data-duration="2000">
                        <strong>{{ $t('transport.city') }}</strong>
                        <span>{{ $t('transport.time.city') }}</span>
                    </li>
                    <li class="d-flex justify-content-between mb-2 text-end" data-cue="slideInRight" data-duration="2000">
                        <strong>{{ $t('transport.evening') }}</strong>
                        <span>{{ $t('transport.time.evening') }}</span>
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
