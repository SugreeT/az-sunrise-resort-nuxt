<template>
    <main>
      <div class="hero small-height jarallax" data-jarallax data-speed="0.2">
          <img class="jarallax-img" src="~assets/img/img_ex/hero_home_1.jpg" alt="">
          <div class="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
              <div class="container">
                  <small class="slide-animated one">Luxury Hotel Experience</small>
                  <h1 class="slide-animated two">About A.Z. SUNRISE Resort</h1>
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
                        <h2 data-cue="slideInUp">About Us</h2>
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
              <div>
                  <div class="row justify-content-between">
                      <div class="col-lg-5 fixed_title">
                          <div class="title">
                              <small>A.Z. Sunrise Resort</small>
                              <h2>Local attractions</h2>
                              <p>Discover the charm of our surroundings! Whether you’re a nature enthusiast, a culture explorer, or a foodie at heart, there’s something for everyone just a short distance away. Dive into the beauty and excitement of these must-visit places and make the most of your stay.</p>
                          </div>
                          <div class="list_ok">
                              <ul>
                                <li data-cue="slideInUp" data-delay="200">
                                    <h5>Big Buddha</h5>
                                    <p>A symbol of peace and serenity, the Big Buddha offers breathtaking panoramic views of the island. This 45-meter tall statue is a must-visit for those seeking tranquility.</p>
                                </li>
                                <li data-cue="slideInUp" data-delay="300">
                                    <h5>Old Phuket Town</h5>
                                    <p>Wander through the vibrant streets filled with Sino-Portuguese architecture, colorful buildings, and charming cafes. Perfect for history buffs and Instagram enthusiasts.</p>
                                </li>
                                <li data-cue="slideInUp" data-delay="400">
                                    <h5>Patong Beach</h5>
                                    <p>Known for its lively atmosphere, Patong Beach offers a mix of stunning sunsets, water sports, and vibrant nightlife, making it perfect for all types of travelers.</p>
                                </li>
                                <li data-cue="slideInUp" data-delay="500">
                                    <h5>Phang Nga Bay</h5>
                                    <p>Famous for its limestone cliffs and emerald waters, Phang Nga Bay is a paradise for kayaking and exploring hidden lagoons and caves.</p>
                                </li>
                                <li data-cue="slideInUp" data-delay="600">
                                    <h5>Wat Chalong</h5>
                                    <p>The largest and most revered Buddhist temple in Phuket, Wat Chalong is a place to learn about local culture and pay respects.</p>
                                </li>
                                <li data-cue="slideInUp" data-delay="700">
                                    <h5>Similan Islands</h5>
                                    <p>Known for their crystal-clear waters, diverse marine life, and pristine beaches, the Similan Islands are a diver's paradise.</p>
                                </li>
                                <li data-cue="slideInUp" data-delay="800">
                                    <h5>Promthep Cape</h5>
                                    <p>Catch the most stunning sunset in Phuket at Promthep Cape, a viewpoint offering unparalleled natural beauty.</p>
                                </li>
                                <li data-cue="slideInUp" data-delay="900">
                                    <h5>Phi Phi Islands</h5>
                                    <p>World-renowned for their stunning landscapes and crystal-clear waters, the Phi Phi Islands are ideal for snorkeling, diving, and relaxation.</p>
                                </li>

                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-6 ">
                          <div data-cue="fadeIn" data-delay="500">
                              <figure><img src="~assets/img/local_amenities_1.jpg" alt="" class="img-fluid rounded-img"></figure>
                          </div>
                          <div data-cue="fadeIn" data-delay="500">
                              <figure>
                                  <img src="~assets/img/local_amenities_2.jpg" alt="" class="img-fluid rounded-img">
                              </figure>
                          </div>
                          <div data-cue="fadeIn" data-delay="500">
                              <figure>
                                  <img src="~assets/img/local_amenities_3.jpg" alt="" class="img-fluid rounded-img">
                              </figure>
                          </div>
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
              <h2 data-cue="slideInUp" data-delay="100">Main Facilities</h2>
          </div>
          <div class="row mt-4">
              <div class="col-lg-3 col-md-6">
                  <div class="box_facilities no-border" data-cue="slideInUp">
                      <i class="customicon-private-parking"></i>
                      <h3>Private Parking</h3>
                      <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6">
                  <div class="box_facilities" data-cue="slideInUp">
                      <i class="customicon-wifi"></i>
                      <h3>High Speed Wifi</h3>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6">
                  <div class="box_facilities" data-cue="slideInUp">
                      <i class="customicon-cocktail"></i>
                      <h3>Bar & Restaurant</h3>
                      <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6">
                  <div class="box_facilities" data-cue="slideInUp">
                      <i class="customicon-swimming-pool"></i>
                      <h3>Swimming Pool</h3>
                      <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                  </div>
              </div>
          </div>
          <!-- /Row -->
          <hr class="more_margin">
          <div class="row justify-content-between ">
              <div class="col-lg-4">
                  <div class="title">
                      <small>A.Z. Sunrise Resort Faq</small>
                      <h3>Frequently Questions</h3>
                  </div>
                  <p>Can’t find your question in the list?
                      Let us know your questions.</p>
                  <p><a href="contact" class="animated_link"><strong>Contact Us <i class="bi bi-arrow-right"></i></strong></a></p>
              </div>
              <div class="col-lg-7">
                  <div role="tablist" class="mb-5 accordion" id="faq">
                      <div class="card">
                          <div class="card-header" role="tab">
                              <h5 class="mb-0">
                                  <a class="collapsed" data-bs-toggle="collapse" href="#collapseOne_product" aria-expanded="false">
                                      <i class="indicator bi-plus-lg"></i>Cancellation
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
                                      <i class="indicator bi-plus-lg"></i>Payments
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
                                      <i class="indicator bi-plus-lg"></i>Check In / Out Rules
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
                                      <i class="indicator bi-plus-lg"></i>Disable Access
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
