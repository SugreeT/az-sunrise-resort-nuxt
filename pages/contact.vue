<template>

<main>

<div class="hero medium-height jarallax">
    <img class="jarallax-img" src="~assets/img/img_ex/hero_home_2.jpg" alt="">
    <div class="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
        <div class="container">
            <small class="slide-animated one">{{ $t('experience_title') }}</small>
            <h1 class="slide-animated two">{{ $t('contact_title') }}</h1>
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
                        <h4>{{ $t('contact_address_title') }}</h4>
                        <div>{{ $t('contact_address_value') }}</div>
                    </li>
                    <li>
                        <i class="bi bi-envelope-paper"></i>
                        <h4>{{ $t('contact_email_title') }}</h4>
                        <p><a href="#0">rsvn@azsunriseresort.com<br><small>&nbsp;</small></a></p>
                    </li>
                    <li>
                        <i class="bi bi-telephone"></i>
                        <h4>{{ $t('contact_phone_title') }}</h4>
                        <div>{{ $t('contact_phone_value') }} <br>
                        <small>{{ $t('contact_phone_note') }}</small></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-xl-7 col-lg-7 order-lg-1">
            <h3 class="mb-3">{{ $t('contact.title2') }}</h3>
            <div id="message-contact"></div>
            <form method="post" action="phpmailer/contact_template_email.php" id="contactform" autocomplete="off">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-floating mb-4">
                            <input class="form-control" type="text" id="name_contact" name="name_contact" placeholder="Name">
                            <label for="name_contact">{{ $t('contact.firstName') }}</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-floating mb-4">
                            <input class="form-control" type="text" id="lastname_contact" name="lastname_contact" placeholder="Last Name">
                            <label for="lastname_contact">{{ $t('contact.lastName') }}</label>
                        </div>
                    </div>
                </div>
                <!-- /row -->
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-floating mb-4">
                            <input class="form-control" type="email" id="email_contact" name="email_contact" placeholder="Email">
                            <label for="email_contact">{{ $t('contact.email') }}</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-floating mb-4">
                            <input class="form-control" type="text" id="phone_contact" name="phone_contact" placeholder="Telephone">
                            <label for="phone_contact">{{ $t('contact.telephone') }}</label>
                        </div>
                    </div>
                </div>
                <!-- /row -->
                <div class="form-floating mb-4">
                    <textarea class="form-control" placeholder="Message" id="message_contact" name="message_contact"></textarea>
                    <label for="message_contact">{{ $t('contact.message') }}</label>
                </div>
                <!-- <div class="row">
                    <div class="col-md-6">
                        <div class="form-floating mb-4">
                            <input class="form-control" type="text" id="verify_contact" name="verify_contact" placeholder="Are you human? 3 + 1 =">
                            <label for="verify_contact">Are you human? 3 + 1 =</label>
                        </div>
                    </div>
                </div> -->
                <p class="mt-3"><input type="submit" :value="$t('contact.submit')" class="btn_1 outline" id="submit-contact"></p>
            </form>
        </div>
    </div>
    <!-- /row -->
</div>
<!--/container -->

<div class="map_contact">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15808.448834120329!2d98.38166882574546!3d7.883327479196846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031fd2d6380a3%3A0x8df88000bd82f66b!2z4LmA4LiX4Lio4Lia4Liy4Lil4LiZ4LiE4Lij4Lig4Li54LmA4LiB4LmH4LiVIOC4reC4s-C5gOC4oOC4reC5gOC4oeC4t-C4reC4h-C4oOC4ueC5gOC4geC5h-C4lSDguKDguLnguYDguIHguYfguJUgODMwMDA!5e0!3m2!1sth!2sth!4v1732901655738!5m2!1sth!2sth" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>
<!--/map_contact -->
    <div class="container mt-4">
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
    </div>
    

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
