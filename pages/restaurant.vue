<template>
    <main>
        <!-- <div id="carousel-home"> -->
            <!-- <div class="owl-carousel owl-theme kenburns">
                <div class="owl-slide background-image cover" data-background="url(img/img_ex/slide_1.jpg)">
                    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                        <div class="container">
                            <div class="row justify-content-center justify-content-md-start">
                                <div class="col-lg-6 static">
                                    <div class="slide-text white">
                                        <small class="owl-slide-animated owl-slide-title">Restaurant Experience</small>
                                        <h2 class="owl-slide-animated owl-slide-title-2">A unique experience where to eat</h2>
                                        <div class="owl-slide-animated owl-slide-title-3"><a class="btn_1 outline white mt-3" href="#first_section">Read more</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!--/owl-slide-->
                <!-- <div class="owl-slide background-image cover" data-background="url(img/img_ex/slide_2.jpg)">
                    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-6 static">
                                    <div class="slide-text white text-center">
                                        <small class="owl-slide-animated owl-slide-title">Restaurant Experience</small>
                                        <h2 class="owl-slide-animated owl-slide-title-2">A truly taste experience</h2>
                                        <div class="owl-slide-animated owl-slide-title-3"><a class="btn_1 outline white mt-3" href="#first_section">Read more</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!--/owl-slide-->
                <!-- <div class="owl-slide background-image cover" data-background="url(img/img_ex/slide_3.jpg)">
                    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.6)">
                        <div class="container">
                            <div class="row justify-content-center justify-content-md-end">
                                <div class="col-lg-6 static">
                                    <div class="slide-text text-end white">
                                        <small class="owl-slide-animated owl-slide-title">RestaurantExperience</small>
                                        <h2 class="owl-slide-animated owl-slide-title-2">The experience of unique dishes</h2>
                                        <div class="owl-slide-animated owl-slide-title-3"><a class="btn_1 outline white mt-3" href="#first_section">Read more</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div> -->
                    <!--/owl-slide-->
            <!-- </div> -->
            <!-- <div class="mouse_wp">
                <a href="#first_section" class="btn_scrollto">
                    <div class="mouse"></div>
                </a>
            </div> -->
            <!-- / mouse -->
        <!-- </div> -->
        <!--/carousel-->
        <div class="hero full-height jarallax" data-jarallax data-speed="0.2">
            <client-only>
                <img class="jarallax-img" src="~assets/img/img_ex/slide_1.jpg" alt="">
                <div class="wrapper opacity-mask d-flex align-items-center justify-content-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                    <div class="container">
                        <div class="row justify-content-center justify-content-md-start">
                            <div class="col-lg-6 static">
                                <div class="slide-text white">
                                    <small class="slide-animated one">{{ $t('restaurant-banner-subtitle') }}</small>
                                    <h1 class="slide-animated two">{{ $t('restaurant-banner-title') }}</h1>
                                    <div class="owl-slide-animated owl-slide-title-3"><a class="btn_1 outline white mt-3" href="#first_section">{{ $t('restaurant-banner-button') }}</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </client-only>
          
        </div>
<!-- 
        <div class="hero home-search full-height jarallax" >
            <client-only>
            <img class="jarallax-img kenburns" src="~assets/img/img_ex/slide_1.jpg" alt="">
                <div class="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero" >
                <div class="container">
                    <small class="owl-slide-animated owl-slide-title">Restaurant Experience</small>
                    <h2 class="owl-slide-animated owl-slide-title-2">A unique experience where to eat</h2>
                    <div class="owl-slide-animated owl-slide-title-3"><a class="btn_1 outline white mt-3" href="#first_section">Read more</a></div>
                </div>
                <div class="mouse_wp slide-animated four">
                    <a href="#first_section" class="btn_scrollto">
                        <div class="mouse"></div>
                    </a>
                </div>
            </div>
            </client-only>
           
        </div> -->


       <div class="container margin_120_95">
          <div class="row justify-content-between align-items-center">
              <div class="col-lg-5">
                  <div class="intro">
                      <div class="title">
                          <!-- <small>A.Z. Sunrise Resort</small> -->
                          <h2 data-cue="slideInLeft"  data-duration="1000">{{ $t('restaurant-title') }}</h2>
                      </div>
                      <p class="lead" data-cue="slideInLeft"  data-duration="1500">{{ $t('restaurant-intro-description') }}</p>
                      <p data-cue="slideInLeft"  data-duration="1500">{{ $t('restaurant-intro-detail') }} </p>
                      <!-- <p data-cue="slideInLeft"  data-duration="2000"><em>Enjoy...the Chef</em></p> -->
                  </div>
              </div>
            <div class="col-lg-5">
                <div>
                    <ul class="list-unstyled mb-4">
                        <li class="d-flex justify-content-between mb-2 text-end" data-cue="slideInRight" data-duration="2000">
                            <strong>{{ $t('menu.breakfast') }}</strong> <span>{{ $t('menu.breakfast-time') }}</span>
                        </li>
                        <li class="d-flex justify-content-between mb-2 text-end" data-cue="slideInRight" data-duration="2000">
                            <strong>{{ $t('menu.lunch') }}</strong>  <span>{{ $t('menu.breakfast-time') }}</span>
                        </li>
                        <li class="d-flex justify-content-between mb-2 text-end" data-cue="slideInRight" data-duration="2000">
                            <strong>{{ $t('menu.dinner') }}</strong>  <span>{{ $t('menu.dinner-time') }}<br><small>{{ $t('menu.dinner-note') }}</small></span>
                        </li>
                    </ul>
                    <p class="phone_element" data-cue="slideInUp" data-duration="2000"><a href="tel://423424234"><i class="bi bi-telephone"></i><span><em>{{ $t('menu.reservations') }}</em>076643222 </span></a></p>
                </div>
              </div>
          </div>
          <!-- /Row -->
      </div>
      <!-- /container -->

        <div class="pattern_3">
            <div class="container margin_120_95" id="first_section">
                <div class="title text-center mb-5">
                      <small data-cue="slideInUp">A.Z. Sunrise Resort</small>
                      <h2 data-cue="slideInUp" data-delay="100">{{ $t('restaurant-menu-title') }}</h2>
                </div>
              <div class="tabs_menu" data-cue="slideInUp" data-delay="200">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a id="tab-A" href="#pane-A" class="nav-link active" data-bs-toggle="tab" role="tab">{{ $t('menu.tab.starters') }}</a>
                        </li>
                        <li class="nav-item">
                            <a id="tab-B" href="#pane-B" class="nav-link" data-bs-toggle="tab" role="tab">{{ $t('menu.tab.main') }}</a>
                        </li>
                         <li class="nav-item">
                            <a id="tab-C" href="#pane-C" class="nav-link" data-bs-toggle="tab" role="tab">{{ $t('menu.tab.desserts') }}</a>
                        </li>
                        <li class="nav-item">
                            <a id="tab-D" href="#pane-D" class="nav-link" data-bs-toggle="tab" role="tab">{{ $t('menu.tab.drinks') }}</a>
                        </li>
                    </ul>
                    <div class="tab-content add_bottom_25" role="tablist">
                        <div id="pane-A" class="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">
                            <div class="card-header" role="tab" id="heading-A">
                                <h5>
                                    <a class="collapsed" data-bs-toggle="collapse" href="#collapse-A" aria-expanded="true" aria-controls="collapse-A">
                                        {{ $t('menu.tab.starters') }}
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-A" class="collapse" role="tabpanel" aria-labelledby="heading-A">
                                <div class="card-body">
                                    <div class="banner background-image" data-background="url(img/restaurant/banner_bg_2.jpg)">
                                        <div class="wrapper d-flex align-items-center justify-content-between opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
                                            <div>
                                               <small>Starters Special Offer</small>
                                                <h3>Mix Starters Menu $18 only</h3>
                                                <p>Hamburgher, Chips, Mix Sausages, Beer, Muffin</p>
                                                <a href="menu-of-the-day" class="btn_1">{{ $t('menu.view') }}</a>
                                            </div>
                                            <!-- <figure class="d-none d-lg-block"><img src="/img/restaurant/banner.svg" alt="" width="200" height="200" class="img-fluid"></figure> -->
                                        </div>
                                        <!-- /wrapper -->
                                    </div>
                                    <!-- /banner -->
                                    <div class="row magnific-gallery add_top_30">
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/1.jpg" title="Soft shell crab" data-fslightbox="gallery_1" data-type="image">
                                                        <img src="/img/restaurant/1.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Soft shell crab</h3><em>$14</em>
                                                </div>
                                                <p>Chicken, Potato, Salad</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/2.jpg" title="Marinated Grilled" data-fslightbox="gallery_1" data-type="image">
                                                        <img src="/img/restaurant/2.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Marinated Grilled Shrimp</h3><em>$11</em>
                                                </div>
                                                <p>Fresh Shrimp, Oive Oil, Tomato Sauce</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/3.jpg" title="Avocado & Mango Salsa" data-fslightbox="gallery_1" data-type="image">
                                                        <img src="/img/restaurant/3.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Avocado & Mango Salsa</h3><em>$16</em>
                                                </div>
                                                <p>Avocado, Mango, Tomatoes</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/4.jpg" title="Baked Potato Skins" data-fslightbox="gallery_1" data-type="image">
                                                        <img src="/img/restaurant/4.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Baked Potato Skins</h3><em>$10</em>
                                                </div>
                                                <p>Potatoes, Oil, Garlic</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/5.jpg" title="Braised Pork Chops" data-fslightbox="gallery_1" data-type="image">
                                                        <img src="/img/restaurant/5.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Braised Pork Chops</h3><em>$12</em>
                                                </div>
                                                <p>Pork chops, Olive oil, Garlic</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/6.jpg" title="Cream of Asparagus" data-fslightbox="gallery_1" data-type="image">
                                                        <img src="/img/restaurant/6.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Cream of Asparagus</h3><em>$14</em>
                                                </div>
                                                <p>Asparagus, Ootato, Celery, Onion</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /row -->
                                </div>
                                <!-- /card-body -->
                            </div>
                        </div>
                        <!-- /tab -->
                        <div id="pane-B" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
                            <div class="card-header" role="tab" id="heading-B">
                                <h5>
                                    <a class="collapsed" data-bs-toggle="collapse" href="#collapse-B" aria-expanded="false" aria-controls="collapse-B">
                                        {{ $t('menu.tab.main') }}
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-B" class="collapse" role="tabpanel" aria-labelledby="heading-B">
                                <div class="card-body">
                                    <div class="banner background-image" data-background="url(img/restaurant/banner_bg.jpg)">
                                        <div class="wrapper d-flex align-items-center justify-content-between opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                                            <div>
                                                <small>Special Offer</small>
                                                <h3>Burgher Menu $14 only</h3>
                                                <p>Hamburgher, Chips, Mix Sausages, Beer, Muffin</p>
                                                <a href="menu-of-the-day" class="btn_1">{{ $t('menu.view') }}</a>
                                            </div>
                                            <!-- <figure class="d-none d-lg-block"><img src="/img/restaurant/banner.svg" alt="" width="200" height="200" class="img-fluid"></figure> -->
                                        </div>
                                        <!-- /wrapper -->
                                    </div>
                                    <!-- /banner -->
                                    <div class="row magnific-gallery add_top_30">
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/7.jpg" title="Prime Rib" data-fslightbox="gallery_2" data-type="image">
                                                        <img src="/img/restaurant/7.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Prime Rib</h3><em>$18</em>
                                                </div>
                                                <p>Rib, Rosemary, Black pepper</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/8.jpg" title="Coconut Fried Chicken" data-fslightbox="gallery_2" data-type="image">
                                                        <img src="/img/restaurant/8.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Coconut Fried Chicken</h3><em>$14</em>
                                                </div>
                                                <p>8 chicken pieces, Coconut milk</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/9.jpg" title="Sriracha Beef Skewers" data-fslightbox="gallery_2" data-type="image">
                                                        <img src="/img/restaurant/9.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Sriracha Beef Skewers</h3><em>$12</em>
                                                </div>
                                                <p>Beef, Garlic, Sesame oil</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/10.jpg" title="Chicken with Garlic" data-fslightbox="gallery_2" data-type="image">
                                                        <img src="/img/restaurant/10.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Chicken with Garlic</h3><em>$10</em>
                                                </div>
                                                <p>Chicken, Cherry tomatoes, Olive oil</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/11.jpg" title="Soft shell crab" data-fslightbox="gallery_2" data-type="image">
                                                        <img src="/img/restaurant/11.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Soft shell crab</h3><em>$14</em>
                                                </div>
                                                <p>Chicken, Potato, Salad</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/1.jpg" title="Terrific Turkey Chili" data-fslightbox="gallery_2" data-type="image">
                                                        <img src="/img/restaurant/1.jpg" class="lazy" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Terrific Turkey Chili</h3><em>$18</em>
                                                </div>
                                                <p>Turkey, Oregano, Tomato paste</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /row -->
                                </div>
                            </div>
                        </div>
                        <!-- /tab -->
                        <div id="pane-C" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">
                            <div class="card-header" role="tab" id="heading-C">
                                <h5>
                                    <a class="collapsed" data-bs-toggle="collapse" href="#collapse-C" aria-expanded="false" aria-controls="collapse-C">
                                        {{ $t('menu.tab.desserts') }}
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-C" class="collapse" role="tabpanel" aria-labelledby="heading-C">
                                <div class="card-body">
                                    <div class="banner background-image" data-background="url(img/restaurant/banner_bg_3.jpg)">
                                        <div class="wrapper d-flex align-items-center justify-content-between opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                                            <div>
                                                <small>Desserts Special Offer</small>
                                                <h3>Mix Cakes $12 only</h3>
                                                <p>Cheese cake, Muffin, Sweet bred</p>
                                                <a href="menu-of-the-day" class="btn_1">{{ $t('menu.view') }}</a>
                                            </div>
                                            <!-- <figure class="d-none d-lg-block"><img src="/img/restaurant/banner.svg" alt="" width="200" height="200" class="img-fluid"></figure> -->
                                        </div>
                                        <!-- /wrapper -->
                                    </div>
                                    <!-- /banner -->
                                    <div class="row magnific-gallery add_top_30">
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/3.jpg" title="Summer Berry" data-fslightbox="gallery_3" data-type="image">
                                                        <img src="/img/restaurant/3.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Summer Berry</h3><em>$8</em>
                                                </div>
                                                <p>Raspberries, Blackberries</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/4.jpg" title="Coconut Tart" data-fslightbox="gallery_3" data-type="image">
                                                        <img src="/img/restaurant/4.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Coconut Tart</h3><em>$10</em>
                                                </div>
                                                <p>Blueberries, Graham cracker crumbs</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/5.jpg" title="Pumpkin Cookies" data-fslightbox="gallery_3" data-type="image">
                                                        <img src="/img/restaurant/5.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Pumpkin Cookies</h3><em>$11</em>
                                                </div>
                                                <p>Pumpkin, Sugar, Butter</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/6.jpg" title="Cookies Cream Cheese" data-fslightbox="gallery_3" data-type="image">
                                                        <img src="/img/restaurant/6.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Cookies Cream Cheese</h3><em>$14</em>
                                                </div>
                                                <p>Sugar, Butter, Eggs</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/8.jpg" title="Chocolate Cupcakes" data-fslightbox="gallery_3" data-type="image">
                                                        <img src="/img/restaurant/8.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Chocolate Cupcakes</h3><em>$14</em>
                                                </div>
                                                <p>Chocolate, Eggs, Vanilla</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/9.jpg" title="Chocolate Cupcakes" data-fslightbox="gallery_3" data-type="image">
                                                        <img src="/img/restaurant/9.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Chocolate Cupcakes</h3><em>$14</em>
                                                </div>
                                                <p>Chocolate, Eggs, Vanilla</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /row -->
                                </div>
                            </div>
                        </div>
                        <!-- /tab -->
                        <div id="pane-D" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-D">
                            <div class="card-header" role="tab" id="heading-D">
                                <h5>
                                    <a class="collapsed" data-bs-toggle="collapse" href="#collapse-D" aria-expanded="false" aria-controls="collapse-D">
                                        {{ $t('menu.tab.desserts') }}
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-D" class="collapse" role="tabpanel" aria-labelledby="heading-D">
                                <div class="card-body">
                                    <div class="banner background-image" data-background="url(img/restaurant/banner_bg_3.jpg)">
                                        <div class="wrapper d-flex align-items-center justify-content-between opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                                            <div>
                                                <small>Desserts Special Offer</small>
                                                <h3>Mix Cakes $12 only</h3>
                                                <p>Cheese cake, Muffin, Sweet bred</p>
                                                <a href="menu-of-the-day" class="btn_1">{{ $t('menu.view') }}</a>
                                            </div>
                                            <!-- <figure class="d-none d-lg-block"><img src="/img/restaurant/banner.svg" alt="" width="200" height="200" class="img-fluid"></figure> -->
                                        </div>
                                        <!-- /wrapper -->
                                    </div>
                                    <!-- /banner -->
                                    <div class="row magnific-gallery add_top_30">
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/3.jpg" title="Summer Berry" data-fslightbox="gallery_3" data-type="image">
                                                        <img src="/img/restaurant/3.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Summer Berry</h3><em>$8</em>
                                                </div>
                                                <p>Raspberries, Blackberries</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/4.jpg" title="Coconut Tart" data-fslightbox="gallery_3" data-type="image">
                                                        <img src="/img/restaurant/4.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Coconut Tart</h3><em>$10</em>
                                                </div>
                                                <p>Blueberries, Graham cracker crumbs</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/5.jpg" title="Pumpkin Cookies" data-fslightbox="gallery_3" data-type="image">
                                                        <img src="/img/restaurant/5.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Pumpkin Cookies</h3><em>$11</em>
                                                </div>
                                                <p>Pumpkin, Sugar, Butter</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/6.jpg" title="Cookies Cream Cheese" data-fslightbox="gallery_3" data-type="image">
                                                        <img src="/img/restaurant/6.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Cookies Cream Cheese</h3><em>$14</em>
                                                </div>
                                                <p>Sugar, Butter, Eggs</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/8.jpg" title="Chocolate Cupcakes" data-fslightbox="gallery_3" data-type="image">
                                                        <img src="/img/restaurant/8.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Chocolate Cupcakes</h3><em>$14</em>
                                                </div>
                                                <p>Chocolate, Eggs, Vanilla</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="menu_item">
                                                <figure>
                                                    <a href="img/restaurant/large/9.jpg" title="Chocolate Cupcakes" data-fslightbox="gallery_3" data-type="image">
                                                        <img src="/img/restaurant/9.jpg" alt="">
                                                    </a>
                                                </figure>
                                                <div class="menu_title">
                                                    <h3>Chocolate Cupcakes</h3><em>$14</em>
                                                </div>
                                                <p>Chocolate, Eggs, Vanilla</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /row -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /tab-content -->
              </div>
              <!-- /tabs_menu-->

                <p class="text-center mt-5"><a href="menu-of-the-day" class="btn_1 outline">{{ $t('menu.view-day-menu') }}</a></p>
            </div>
            <!-- /container -->
        </div>
        <!-- /pattern -->

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
