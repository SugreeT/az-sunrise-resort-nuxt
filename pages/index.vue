<template>
      <main>
        <div class="hero home-search full-height jarallax" data-jarallax data-speed="0.2">
            <client-only>
            <img class="jarallax-img kenburns" src="~assets/img/banner/main/new-lobby.jpg" alt="">
                <div class="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                <div class="container">
                    <!-- <small class="slide-animated one"> Unwind in Luxury </small> -->
                    <small class="slide-animated one"> {{ $t('slide-title', { name: 'vue-i18n' }) }} </small>
                    <h3 class="slide-animated two">{{ $t('slide_title_2') }}</h3>
                    <!-- <div class="row justify-content-center slide-animated three">
                        <div class="col-xl-10">
                            <div class="row g-0 booking_form">
                                <div class="col-lg-4 ">
                                    <div class="form-group">
                                        <input class="form-control" type="text" name="dates" id="dates" :placeholder="$t('input_placeholder_dates')" readonly="readonly">
                                        <i class="bi bi-calendar2"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 pe-lg-0 pe-sm-1">
                                    <div class="qty-buttons">
                                        <label>{{ $t('label_adults') }}</label>
                                        <input type="button" value="-"  class="qtyplus" name="childs" @click="adults++">
                                        <input type="text" :value="adults" readonly class="qty form-control" />
                                        <input type="button" value="+" class="qtyminus" name="childs" @click="adults = Math.max(adults - 1, 0)">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 ps-lg-0 ps-sm-1">
                                    <div class="qty-buttons">
                                        <label>{{ $t('label_childs') }}</label>
                                        <input type="button" value="+" class="qtyplus" name="childs" @click="childs++">
                                        <input type="text" :value="childs" name="childs" class="qty form-control">
                                        <input type="button" value="-" class="qtyminus" name="childs" @click="childs = Math.max(childs - 1, 0)">
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <input type="submit" class="btn_search" :value="$t('button_check')">
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
                <div class="mouse_wp slide-animated four">
                    <a href="#first_section" class="btn_scrollto">
                        <div class="mouse"></div>
                    </a>
                </div>
            </div>
        </client-only>
           
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
                            <p class="lead" data-cue="slideInUp">{{ $t('resort.description', { name: 'vue-i18n' }) }}</p>
                            <!-- <p data-cue="slideInUp">{{ $t('details-message', { name: 'vue-i18n' }) }}</p> -->
                            <!-- <p data-cue="slideInUp"><em>{{ $t('extraordinary-message', { name: 'vue-i18n' }) }}</em></p> -->
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <!-- <div class="pinned-image rounded_container mb-4" id="image-container" data-size="medium">
                            <div class="pinned-image__container">
                                <img src="/img/img_ex/hero_home_2.jpg" alt="">
                            </div>
                        </div> -->
                        <div class="parallax_wrapper" data-cue="slideInUp" data-delay="200">
                            <!-- <img src="~assets/img/banner/main/new-lobby-about.jpg" alt="" class="img-fluid rounded-img"> -->
                            <img src="~assets/img/banner/main/garden3.jpg" alt="" class="img-fluid rounded-img">
                            <!-- <div data-cue="slideInUp" class="img_over"><span data-jarallax-element="-30"><img src="img/home_1.jpg" alt="" class="rounded-img"></span></div> -->
                        </div>
                    </div>
                </div>

            </div>

                <!-- /Row -->

            <div class="container main-index">

                <div class="title text-center mb-1">
                    <h2 data-cue="slideInUp" data-delay="100">{{ $t('serviceItems.title', { name: 'vue-i18n' }) }}</h2>
                </div>
    
                <div class="row justify-content-center mt-1">
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="box_facilities no-border active" data-cue="slideInUp" style="cursor: pointer;" data-link="restaurant">
                            <i class="icon-hotel-restaurant" data-cues="zoomOut"></i>
                            <h3 >{{ $t('serviceItems.barAndRestaurant', { name: 'vue-i18n' }) }}</h3>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6" >
                        <div class="box_facilities" data-cue="slideInUp" style="cursor: pointer;" data-link="fitness">
                            <i class="customicon-gym"></i>
                            <h3>{{ $t('serviceItems.fitnessClub', { name: 'vue-i18n' }) }}</h3>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="box_facilities" data-cue="slideInUp" style="cursor: pointer;" data-link="tour">
                            <i class="icon-spa-airplane"></i>
                            <h3>{{ $t('serviceItems.tour', { name: 'vue-i18n' }) }}</h3>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="box_facilities" data-cue="slideInUp" style="cursor: pointer;" data-link="transportation">
                            <i class="icon-spa-bus"></i>
                            <h3>{{ $t('serviceItems.transportation', { name: 'vue-i18n' }) }}</h3>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="box_facilities" data-cue="slideInUp" style="cursor: pointer;" data-link="diving">
                            <i > <img src="~assets/img/icon/driving2.png" alt="Diving Icon" style="width: 80px; height: 40px;"></i>
                           
                            <h3>{{ $t('serviceItems.diving', { name: 'vue-i18n' }) }}</h3>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="box_facilities" data-cue="slideInUp" style="cursor: pointer;" data-link="spa">
                            <!-- <i class="icon-spa-oil"></i> -->
                            <i > <img src="~assets/img/icon/spa2.png" alt="Diving Icon" style="width: 60px; height: 40px;"></i>
                            <h3>{{ $t('serviceItems.spa', { name: 'vue-i18n' }) }}</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-section" style="display: none;background-color: #faf8f5;" id="restaurant">
                <div class="container-fluid p-lg-0">
                    <div data-cues="zoomIn">
                        <div class="owl-carousel owl-theme carousel_item_centered kenburns rounded-img ">
                            <div class="item">
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/restaurant/AZ%20restaurant_1-topaz.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/restaurant/AZ%20restaurant_2-topaz.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/restaurant/AZ%20restaurant_3-topaz.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/restaurant/AZ%20restaurant_4-topaz.jpg" alt=""></a>
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
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/Fitness/AZ%20Fitness_1-topaz.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/Fitness/AZ%20Fitness_4-topaz.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/Fitness/AZ%20Fitness_6-topaz.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/Fitness/AZ%20Fitness_7-topaz.jpg" alt=""></a>
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
                            <!-- <div class="item">
                                <a href="javascript:void(0);"><img src="/img/rooms/opt_4.jpg" alt=""></a>
                            </div> -->
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
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/Garden/AZ Garden_8-topaz.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/Garden/AZ Garden_6-topaz.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/Garden/AZ Garden_7-topaz.jpg" alt=""></a>
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
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/car/Hotel Car_1-topaz-sharpen-denoise.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/car/Hotel Car_2-topaz-sharpen-denoise.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/car/Hotel Car_3-topaz-sharpen-denoise.jpg" alt=""></a>
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
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/Spa/AZ Spa_3-topaz.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/Spa/AZ Spa_4-topaz.jpg" alt=""></a>
                            </div>
                            <div class="item">
                                <a href="javascript:void(0);"><img src="https://azsunriseresort.com/images/Spa/AZ Spa_5-topaz.jpg" alt=""></a>
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
            <div class="pinned-image pinned-image--medium pt-4 pb-2"  >
                <div class="pinned-image__container" id="section_video">
                    <video loop="loop" muted="muted" id="video_home">
                        <source src="https://azsunriseresort.com/video/sunrise__V1-0004.mp4" type="video/mp4">
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

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import apiService from '@/services/apiService'

export default {
    
  data() {
    return {
        title: '',
        adults: '',
        childs: '',
        section1: null,
        section2: null
    };
  },
  computed: {
    // progressClass() {
    //   return this.isActive ? 'progress-wrap active-progress' : 'progress-wrap';
    // },
  },
  mounted() {
    this.initPage()

    this.callServiceMain()
  },
  created() {
    this.title = this.$t('slide-title', { name: 'vue-i18n' });
  },
 methods: {
    initPage() {
        setTimeout(() => {
            this.initPicker();  
            
        }, 2000);

        gsap.registerPlugin(ScrollTrigger)

        // -----------------------
        // Animate pinned image
        // -----------------------
        const pinnedImages = document.querySelectorAll('.pinned-image')
        pinnedImages.forEach(pinnedImage => {
        const container = pinnedImage.querySelector('.pinned-image__container')
        const overlay = container?.querySelector('.pinned-image__container-overlay')
        const content = pinnedImage.querySelector('.pinned_over_content')

        const tl = gsap.timeline({ paused: true })
        if (container) tl.to(container, { scale: 1.05 }, 0)
        if (content) tl.from(content, { autoAlpha: 0 }, 0)
        if (overlay) tl.from(overlay, { autoAlpha: 0 }, 0)

        ScrollTrigger.create({
            animation: tl,
            trigger: pinnedImage,
            start: 'top center',
            scrub: false,
            pin: false,
            markers: false
        })
        })

        // -----------------------
        // Video autoplay on scroll
        // -----------------------
        const video = document.getElementById('video_home')
        if (video) {
        video.setAttribute('playsinline', '')
        video.setAttribute('muted', 'muted')
        video.setAttribute('webkit-playsinline', '')
        video.load()

        video.addEventListener('loadeddata', () => {
            ScrollTrigger.refresh() // ensure layout is recalculated
        })
        }

        const checkVideoVisibility = () => {
        if (!video) return
        const rect = video.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isVisible) {
            video.play()
        } else {
            video.pause()
        }
        }

        window.addEventListener('scroll', checkVideoVisibility, { passive: true })
        checkVideoVisibility()

        // fallback: refresh ScrollTrigger in case of layout shift
        this.$nextTick(() => {
            setTimeout(() => {
                ScrollTrigger.refresh()
            }, 1000)
        })
    },
    async callServiceMain() {
        try {
            const response = await apiService.get('/landingpage/content/main')
            this.section1 = response.section1
            this.section2 = response.section2
            console.log(' this.section1  ',  this.section1 )
            console.log(' this.section2  ',  this.section2 )
        } catch (err) {
            console.error('Error loading landing page:', err)
        }
    },
  initPicker() {
    const DateTime = easepick.DateTime;
    const bookedDates = [
      ['2023-09-01', '2023-09-04'],
      '2023-09-07',
      ['2023-10-11', '2023-10-17'],
    ].map(d => {
      if (Array.isArray(d)) {
        return [new DateTime(d[0], 'YYYY-MM-DD'), new DateTime(d[1], 'YYYY-MM-DD')];
      }
      return new DateTime(d, 'YYYY-MM-DD');
    });
    console.log('testttttttttttttttttttttt > ',  document.getElementById('dates'))
    const dateP = document.getElementById('dates');
    if (dateP) {
      new easepick.create({
        element: dateP,
        css: ['/css/daterangepicker_v2.css'],
        lang: 'en-EN',
        format: 'MM/DD/YYYY',
        calendars: 2,
        grid: 2,
        zIndex: 99999,
        plugins: ['LockPlugin', 'RangePlugin'],
        RangePlugin: {
          tooltipNumber(num) {
            return num - 1;
          },
          locale: {
            one: 'night',
            other: 'nights',
          },
        },
        LockPlugin: {
          minDate: new Date(),
          minDays: 1,
          inseparable: false,
          filter(date, picked) {
            if (picked.length === 1) {
              const incl = date.isBefore(picked[0]) ? '[)' : '(]';
              return !picked[0].isSame(date, 'day') && date.inArray(bookedDates, incl);
            }
            return date.inArray(bookedDates, '[)');
          },
        },
      });
    }
  }
}
};
</script>

<style>
.hero.home-search {
  position: relative;
  z-index: 2;
  overflow: hidden;
}

.wrapper.opacity-mask {
  position: relative;
  z-index: 3;
}

.jarallax-img.kenburns {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

</style>