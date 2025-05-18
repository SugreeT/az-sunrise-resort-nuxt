<template>
     <main>

<div class="hero small-height jarallax" >
    <img class="jarallax-img" src="/img/img_ex/3.jpg" alt="">
    <div class="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
        <div class="container">
            <small class="slide-animated one">{{ $t('hero.experience') }}</small>
            <h1 class="slide-animated two">{{ $t('hero.rooms') }}</h1>
        </div>
    </div>
</div>
<!-- /Background Img Parallax -->

<div class="container margin_120_95" id="first_section">
    <div class="row justify-content-between">
        <div class="col-xl-4 fixed_title">
            <div class="title">
                
                <small class="title-small ">A.Z. Sunrise Resort</small>
                <h2>{{ $t('section.ourRooms') }}</h2>
                <p class="lead" >
                    {{ $t('section.ourRooms.lead.part1') }}
                    <strong>{{ $t('section.ourRooms.lead.strong') }}</strong>
                    {{ $t('section.ourRooms.lead.part2') }}
                </p>

                <p><a href="#booking_section" class="btn_1 outline">{{ $t('button.bookNow') }}</a></p>
            </div>
        </div>
        <div class="col-xl-7">
            <div class="row_list_version_3" data-cue="fadeIn">

                <div class="owl-carousel owl-theme carousel_item_1 kenburns rounded-img">
                    <div class="item">
                        <a @click="goToRoomDetail('room.standardDouble')" style="cursor: pointer;"><img src="~assets/img/banner/rooms/room1.jpg" alt=""></a>
                    </div>
                    <div class="item">
                        <a @click="goToRoomDetail('room.standardDouble')" style="cursor: pointer;"><img src="/img/rooms/opt_1.jpg" alt=""></a>
                    </div>
                    <div class="item">
                        <a @click="goToRoomDetail('room.standardDouble')" style="cursor: pointer;"><img src="/img/rooms/opt_8.jpg" alt=""></a>
                    </div>
                </div>
                <!-- /carousel -->
                <div class="box_item_info" data-jarallax-element="-25">
                    <small>{{ $t('room.price150') }}</small>
                    <h2>{{ $t('room.standardDouble') }}</h2>
                    <p>{{ $t('room.description') }}</p>
                    <div class="facilities clearfix">
                        <ul>
                            <li>
                                <i class="customicon-double-bed"></i> {{ $t('room.bed') }}
                            </li>
                            <li>
                                <i class="customicon-television"></i> {{ $t('room.tv') }}
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- /box_item_info -->
            </div>
            <!-- /row_list_version_3 -->

            <div class="row_list_version_3" data-cue="fadeIn">
                <div class="owl-carousel owl-theme carousel_item_1 kenburns rounded-img">
                    <div class="item">
                        <a @click="goToRoomDetail('room.standardTwin')" style="cursor: pointer;"><img src="~assets/img/banner/rooms/room3.jpg" alt=""></a>
                    </div>
                    <div class="item">
                        <a @click="goToRoomDetail('room.standardTwin')" style="cursor: pointer;"><img src="/img/rooms/opt_2.jpg" alt=""></a>
                    </div>
                    <div class="item">
                        <a @click="goToRoomDetail('room.standardTwin')" style="cursor: pointer;"><img src="/img/rooms/opt_5.jpg" alt=""></a>
                    </div>
                </div>
                <!-- /carousel -->
                <div class="box_item_info" data-jarallax-element="-25">
                    <small>{{ $t('room.price150') }}</small>
                    <h2>{{ $t('room.standardTwin') }} </h2>
                    <p>{{ $t('room.description') }}</p>
                    <div class="facilities clearfix">
                        <ul>
                            <li>
                                <i class="customicon-double-bed"></i> {{ $t('room.bed') }}
                            </li>
                            <li>
                                <i class="customicon-television"></i> {{ $t('room.tv') }}
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- /box_item_info -->
            </div>
            <!-- /row_list_version_3 -->

            <div class="row_list_version_3" data-cue="fadeIn">
                <div class="owl-carousel owl-theme carousel_item_1 kenburns rounded-img">
                    <div class="item">
                        <a @click="goToRoomDetail('room.deluxeDouble')" style="cursor: pointer;"><img src="~assets/img/banner/rooms/room1.jpg" alt=""></a>
                    </div>
                    <div class="item">
                        <a @click="goToRoomDetail('room.deluxeDouble')" style="cursor: pointer;"><img src="/img/rooms/opt_3.jpg" alt=""></a>
                    </div>
                    <div class="item">
                        <a @click="goToRoomDetail('room.deluxeDouble')" style="cursor: pointer;"><img src="/img/rooms/opt_6.jpg" alt=""></a>
                    </div>
                </div>
                <!-- /carousel -->
                <div class="box_item_info" data-jarallax-element="-25">
                    <small>{{ $t('room.price230') }}</small>
                    <h2>{{ $t('room.deluxeDouble') }}</h2>
                    <p>{{ $t('room.description') }}</p>
                    <div class="facilities clearfix">
                        <ul>
                            <li>
                                <i class="customicon-double-bed"></i> {{ $t('room.bed') }}
                            </li>
                            <li>
                                <i class="customicon-television"></i> {{ $t('room.tv') }}
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- /box_item_info -->
            </div>
            <!-- /row_list_version_3 -->

            <div class="row_list_version_3" data-cue="fadeIn">
                <div class="owl-carousel owl-theme carousel_item_1 kenburns rounded-img">
                    <div class="item">
                        <a @click="goToRoomDetail('room.deluxeTwin')" style="cursor: pointer;"><img src="~assets/img/banner/rooms/room3.jpg" alt=""></a>
                    </div>
                    <div class="item">
                        <a @click="goToRoomDetail('room.deluxeTwin')" style="cursor: pointer;"><img src="/img/rooms/opt_3.jpg" alt=""></a>
                    </div>
                    <div class="item">
                        <a @click="goToRoomDetail('room.deluxeTwin')" style="cursor: pointer;"><img src="/img/rooms/opt_6.jpg" alt=""></a>
                    </div>
                </div>
                <!-- /carousel -->
                <div class="box_item_info" data-jarallax-element="-25">
                    <small>{{ $t('room.price230') }}</small>
                    <h2>{{ $t('room.deluxeTwin') }} </h2>
                    <p>{{ $t('room.description') }}</p>
                    <div class="facilities clearfix">
                        <ul>
                            <li>
                                <i class="customicon-double-bed"></i> {{ $t('room.bed') }}
                            </li>
                            <li>
                                <i class="customicon-television"></i> {{ $t('room.tv') }}
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- /box_item_info -->
            </div>

            <div class="row_list_version_3" data-cue="fadeIn">
                <div class="owl-carousel owl-theme carousel_item_1 kenburns rounded-img">
                    <div class="item">
                        <a @click="goToRoomDetail('room.family')" style="cursor: pointer;"><img src="~assets/img/banner/rooms/room1.jpg" alt=""></a>
                    </div>
                    <div class="item">
                        <a @click="goToRoomDetail('room.family')" style="cursor: pointer;"><img src="/img/rooms/opt_3.jpg" alt=""></a>
                    </div>
                    <div class="item">
                        <a @click="goToRoomDetail('room.family')" style="cursor: pointer;"><img src="/img/rooms/opt_6.jpg" alt=""></a>
                    </div>
                </div>
                <!-- /carousel -->
                <div class="box_item_info" data-jarallax-element="-25">
                    <small>{{ $t('room.price230') }}</small>
                    <h2>{{ $t('room.family') }} </h2>
                    <p>{{ $t('room.description') }}</p>
                    <div class="facilities clearfix">
                        <ul>
                            <li>
                                <i class="customicon-double-bed"></i> {{ $t('room.bed') }}
                            </li>
                            <li>
                                <i class="customicon-television"></i> {{ $t('room.tv') }}
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- /box_item_info -->
            </div>

        </div>
    </div>
</div>
<!-- /container-->

<div class="pinned-image pinned-image--medium">
    <div class="pinned-image__container">
       <img src="https://azsunriseresort.com/images/Garden/AZ Garden_8-topaz.jpg" alt="">
        <div class="pinned-image__container-overlay"></div>
    </div>
    <div class="pinned_over_content">
        <div class="title white center mb-5">
                <small data-cue="slideInUp">A.Z. Sunrise Resort</small>
                <h2 data-cue="slideInUp" data-delay="100"> {{ $t('facilities.title') }}</h2>
            </div>
        <div class="row mt-4">
            <div class="col-xl-3 col-lg-6 col-md-6 col-6">
                <div class="box_facilities white no-border" data-cue="slideInUp">
                    <i class="customicon-private-parking"></i>
                    <h3>{{ $t('facilities.privateParking') }}</h3>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6">
                <div class="box_facilities white" data-cue="slideInUp">
                    <i class="customicon-wifi"></i>
                    <h3>{{ $t('facilities.highSpeedWifi') }}</h3>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6">
                <div class="box_facilities white" data-cue="slideInUp">
                    <i class="customicon-cocktail"></i>
                    <h3>{{ $t('facilities.barAndRestaurant') }}</h3>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6">
                <div class="box_facilities white" data-cue="slideInUp">
                    <i class="customicon-swimming-pool"></i>
                    <h3>{{ $t('facilities.swimmingPool') }}</h3>
                </div>
            </div>
        </div>
        <!-- /Row -->
    </div>
</div>
<!-- /pinned-image -->

<div class="container pt-5" id="booking_section">
    <div class="row justify-content-between">
        <div class="col-xl-4">
            <div data-cue="slideInUp">
                <div class="title">
                    <small>A.Z. Sunrise Resort</small>
                    <h2>{{ $t('checkAvailability.title') }}</h2>
                </div>
                <!-- <p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu. </p> -->
                <p class="phone_element no_borders"><a href="tel://423424234"><i class="bi bi-telephone"></i><span><em>{{ $t('info.bookings') }}</em>076643222 </span></a></p>
            </div>
        </div>
        <div class="col-xl-7">
            <div data-cue="slideInUp" data-delay="200">
                <div class="booking_wrapper">
                    <div class="col-12">
                        <input type="hidden" id="date_booking" name="date_booking">
                    </div>
                    <!-- <div class="row">
                        <div class="col-lg-6">
                            <div class="custom_select">
                                <select class="wide">
                                    <option>Select Room</option>
                                    <option>room.standardDouble</option>
                                    <option>room.standardTwin</option>
                                    <option>room.standardDouble Double</option>
                                    <option>room.standardDouble Twin</option>
                                    <option>room.family</option>
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
                <p class="text-end mt-3"><a href="#0" class="btn_1 outline">{{ $t('menu.bookNow') }}</a></p>
            </div>
        </div>
        <!-- /col -->
    </div>
    <!-- /row -->
    <hr>
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
<script>
export default {
  data() {
    return {
        title: '', // ค่าเริ่มต้น
        test: 'TEST'
    };
  },
  mounted() {
    setTimeout(() => {
        this.initDateBookingPicker();    
    }, 2000);
  },
  methods: {
    initDateBookingPicker() {
      const DateTime = easepick.DateTime

      const bookedDates = [
        ['2023-09-01', '2023-09-04'],
        '2023-09-07',
        ['2023-10-11', '2023-10-17'],
      ].map(d => {
        if (Array.isArray(d)) {
          const start = new DateTime(d[0], 'YYYY-MM-DD')
          const end = new DateTime(d[1], 'YYYY-MM-DD')
          return [start, end]
        }
        return new DateTime(d, 'YYYY-MM-DD')
      })

      const datePB = document.getElementById('date_booking')
      if (datePB) {
        new easepick.create({
          element: datePB,
          css: ['/css/daterangepicker_v2.css'],
          lang: 'en-EN',
          format: 'DD/MM/YYYY',
          calendars: 2,
          grid: 2,
          zIndex: 10,
          inline: true,
          plugins: ['LockPlugin', 'RangePlugin'],
          RangePlugin: {
            tooltipNumber(num) {
              return num - 1
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
                const incl = date.isBefore(picked[0]) ? '[)' : '(]'
                return !picked[0].isSame(date, 'day') && date.inArray(bookedDates, incl)
              }
              return date.inArray(bookedDates, '[)')
            },
          },
        })
      }
    },
    goToRoomDetail(roomName) {
      localStorage.setItem('roomKey', roomName)
      window.location.href = '/room-detail';
    }
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