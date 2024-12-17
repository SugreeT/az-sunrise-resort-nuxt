<template>
      <main>
        <div class="hero home-search full-height jarallax" data-jarallax data-speed="0.2">
            <img class="jarallax-img kenburns" src="~assets/img/banner/main/main1.jpg" alt="">
            <div class="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                <div class="container">
                    <small class="slide-animated one"> Unwind in Luxury</small>
                    <h3 class="slide-animated two">Embrace Unique Experiences<br>Where Memories Are Made</h3>
                    <div class="row justify-content-center slide-animated three">
                        <div class="col-xl-10">
                            <div class="row g-0 booking_form">
                                <div class="col-lg-4 ">
                                    <div class="form-group">
                                        <input class="form-control" type="text" name="dates" id="dates" placeholder="Check in / Check out" readonly="readonly">
                                        <i class="bi bi-calendar2"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 pe-lg-0 pe-sm-1">
                                    <div class="qty-buttons">
                                        <label>Adults</label>
                                        <input type="button" value="+" class="qtyplus" name="adults">
                                        <input type="text" name="adults" id="adults" value="" class="qty form-control">
                                        <input type="button" value="-" class="qtyminus" name="adults">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 ps-lg-0 ps-sm-1">
                                    <div class="qty-buttons">
                                        <label>Childs</label>
                                        <input type="button" value="+" class="qtyplus" name="childs">
                                        <input type="text" name="childs" id="childs" value="" class="qty form-control">
                                        <input type="button" value="-" class="qtyminus" name="childs">
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <input type="submit" class="btn_search" value="Check">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mouse_wp slide-animated four">
                    <a href="#first_section" class="btn_scrollto">
                        <div class="mouse"></div>
                    </a>
                </div>
            </div>
        </div>

        <div class="pattern_2">
            <div class="container margin_120_95">
                <div class="row justify-content-between flex-lg-row-reverse align-items-start">
                   
                    <div class="col-lg-6">
                        <div class="intro">
                            <div class="title">
                                <!-- <small>About US</small> -->
                                <h2 data-cue="slideInUp">{{ $t('about-us', { name: 'vue-i18n' }) }}</h2>
                            </div>
                            <!-- <p class="lead" data-cue="slideInUp">Welcome to A.Z. Sunrise Resort, where luxury meets comfort. Nestled in the heart of Phuket, our hotel offers world-class amenities, exceptional service, and a serene ambiance tailored to provide you with an unforgettable experience.</p>
                            <p data-cue="slideInUp">Whether you're visiting for business or leisure, our spacious rooms, exquisite dining options, and modern facilities ensure your stay is nothing short of perfect. Explore nearby attractions or relax in our spa and wellness center, designed to rejuvenate your body and soul. </p>
                            <p data-cue="slideInUp"><em>Let us make your stay extraordinary.</em></p> -->
                            <p class="lead" data-cue="slideInUp">{{ $t('welcome-message', { name: 'vue-i18n' }) }}</p>
                            <!-- <p data-cue="slideInUp">{{ $t('details-message', { name: 'vue-i18n' }) }}</p> -->
                            <p data-cue="slideInUp"><em>{{ $t('extraordinary-message', { name: 'vue-i18n' }) }}</em></p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <!-- <div class="pinned-image rounded_container mb-4" id="image-container" data-size="medium">
                            <div class="pinned-image__container">
                                <img src="/img/img_ex/hero_home_2.jpg" alt="">
                            </div>
                        </div> -->
                        <div class="parallax_wrapper" data-cue="slideInUp" data-delay="200">
                            <img src="~assets/img/banner/main/main3.jpg" alt="" class="img-fluid rounded-img">
                            <!-- <div data-cue="slideInUp" class="img_over"><span data-jarallax-element="-30"><img src="img/home_1.jpg" alt="" class="rounded-img"></span></div> -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="container main-index">

                <div class="title text-center mb-1">
                    <h2 data-cue="slideInUp" data-delay="100">Service Items</h2>
                </div>
    
                <div class="row justify-content-center mt-1">
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="box_facilities no-border active" data-cue="slideInUp" style="cursor: pointer;" data-link="restaurant">
                            <i class="icon-hotel-restaurant" data-cues="zoomOut"></i>
                            <h3 >Bar & Restaurant</h3>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6" >
                        <div class="box_facilities" data-cue="slideInUp" style="cursor: pointer;" data-link="fitness">
                            <i class="customicon-gym"></i>
                            <h3>Fitness Club</h3>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="box_facilities" data-cue="slideInUp" style="cursor: pointer;" data-link="tour">
                            <i class="icon-spa-airplane"></i>
                            <h3>Tour</h3>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="box_facilities" data-cue="slideInUp" style="cursor: pointer;" data-link="transportation">
                            <i class="icon-spa-bus"></i>
                            <h3>Transportation</h3>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="box_facilities" data-cue="slideInUp" style="cursor: pointer;" data-link="diving">
                            <i > <img src="~assets/img/icon/driving2.png" alt="Diving Icon" style="width: 80px; height: 40px;"></i>
                           
                            <h3>Diving</h3>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="box_facilities" data-cue="slideInUp" style="cursor: pointer;" data-link="spa">
                            <!-- <i class="icon-spa-oil"></i> -->
                            <i > <img src="~assets/img/icon/spa2.png" alt="Diving Icon" style="width: 60px; height: 40px;"></i>
                            <h3>Spa</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-section" style="display: none;background-color: #faf8f5;" id="restaurant">
                <div class="container-fluid p-lg-0">
                    <div data-cues="zoomIn">
                        <div class="owl-carousel owl-theme carousel_item_centered kenburns rounded-img ">
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/img_ex/slide_1.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/img_ex/slide_2.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/rooms/opt_6.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/img_ex/slide_3.jpg" alt=""></a>
                            </div>
                         
                        </div>
                    </div>
                </div>
                <div class="marquee">
                    <div class="track">
                        <div class="content">&nbsp;Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience</div>
                    </div>
                </div>
            </div>

            <div class="content-section" style="display: none;background-color: #faf8f5;" id="fitness">
                <div class="container-fluid p-lg-0">
                    <div data-cues="zoomIn">
                        <div class="owl-carousel owl-theme carousel_item_centered kenburns rounded-img">
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/banner/fitness/f1.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/banner/fitness/f2.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/banner/fitness/f3.jpg" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="marquee">
                    <div class="track">
                        <div class="content">&nbsp;Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience</div>
                    </div>
                </div>
            </div>

            <div class="content-section" style="display: none;background-color: #faf8f5;" id="tour">
                <div class="container-fluid p-lg-0">
                    <div data-cues="zoomIn">
                        <div class="owl-carousel owl-theme carousel_item_centered kenburns rounded-img">
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/bg_img/tour1.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/bg_img/tour2.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="/img/rooms/opt_4.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/bg_img/tour3.jpg" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="marquee">
                    <div class="track">
                        <div class="content">&nbsp;Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience</div>
                    </div>
                </div>
            </div>

            <div class="content-section" style="display: none;background-color: #faf8f5;" id="diving">
                <div class="container-fluid p-lg-0">
                    <div data-cues="zoomIn">
                        <div class="owl-carousel owl-theme carousel_item_centered kenburns rounded-img">
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/bg_img/driving1.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/bg_img/driving2.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="/img/rooms/opt_4.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/bg_img/driving3.jpg" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="marquee">
                    <div class="track">
                        <div class="content">&nbsp;Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience</div>
                    </div>
                </div>
            </div>

            <div class="content-section" style="display: none;background-color: #faf8f5;" id="transportation">
                <div class="container-fluid p-lg-0">
                    <div data-cues="zoomIn">
                        <div class="owl-carousel owl-theme carousel_item_centered kenburns rounded-img">
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/bg_img/tran3.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="/img/rooms/opt_5.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="/img/rooms/opt_1.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="/img/rooms/opt_4.jpg" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="marquee">
                    <div class="track">
                        <div class="content">&nbsp;Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience</div>
                    </div>
                </div>
            </div>

            <div class="content-section" style="display: none;background-color: #faf8f5;" id="spa">
                <div class="container-fluid p-lg-0">
                    <div data-cues="zoomIn">
                        <div class="owl-carousel owl-theme carousel_item_centered kenburns rounded-img">
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/banner/spa/spa3.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/banner/spa/spa10.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="~assets/img/banner/spa/spa5.jpg" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="marquee">
                    <div class="track">
                        <div class="content">&nbsp;Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience</div>
                    </div>
                </div>
            </div>
          
              <!-- /Row -->
              <div class="pinned-image pinned-image--medium pt-4 pb-2" id="image-container" >
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
                        <small data-cue="slideInUp" data-delay="200">Luxury Hotel Experience</small>
                        <h2 data-cue="slideInUp" data-delay="300">Enjoy in a very<br> Immersive Relax</h2>
                    </div>
                </div>
            </div>
        </div>


        <div class="container mt-4">
            <div class="row justify-content-center" >
                <div class="title mb-3 text-center">
                    <!-- <small data-cue="slideInUp">Contact Us</small> -->
                    <h2 data-cue="slideInUp" data-delay="200">Contact Us</h2>
                </div>
                <div class="col-xl-4 col-lg-4 order-lg-2">
                    <div class="contact_info" data-cue="slideInUp" data-delay="200">
                        <ul class="clearfix">
                            <li>
                                <i class="bi bi-telephone"></i>
                                <h4>Telephone</h4>
                                <div>076643222 <br><small>Monday to Friday 9am - 7pm</small></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 order-lg-2">
                    <div class="contact_info" data-cue="slideInUp" data-delay="200">
                        <ul class="clearfix">
                            <li>
                                <i class="bi bi-envelope-paper"></i>
                                <h4>Email address</h4>
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
                                <h4>Address</h4>
                                <div>18 Moo 6 Cherngtalay, Thalang, Phuket 83110</div>
                            </li>
                        </ul>
                    </div>
                </div>
          
            </div>
        </div>

    </main>
  </template>

<script>
export default {
  data() {
    return {
        title: '', // ค่าเริ่มต้น
    };
  },
  computed: {
    // progressClass() {
    //   return this.isActive ? 'progress-wrap active-progress' : 'progress-wrap';
    // },
  },
  created() {
    this.title = this.$t('slide-title', { name: 'vue-i18n' });
  },
};
</script>