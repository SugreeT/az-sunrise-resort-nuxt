<template>
    <!-- /Page Preload -->
    <!-- <div id="preloader">
        <div data-loader="circle-side"></div>
    </div> -->

    <!-- Opacity Mask -->
    <div class="layer"></div>

    <header class="reveal_header">
        <div class="container-fluid">
            <div class="row align-items-center">
                 <div class="col-6">
                    <NuxtLink to="/" class="logo_normal">
                        <img src="/img/logo/AZ-sunrise-logo-h2.png" width="180" height="45" alt="Logo" />
                    </NuxtLink>
                    <NuxtLink to="/" class="logo_sticky">
                        <img src="/img/logo/AZ-sunrise-logo-h2.png" width="180" height="45" alt="Logo Sticky" />
                    </NuxtLink>
                </div>
                <div class="col-6">
                    <nav>
                        <ul>
                            <li><a href="#booking_section" class="btn_1">Book Now</a></li>
                            <li> 
                                <a href="javascript:void(0);" class="menu_open">
                                   <div class="hamburger hamburger--spin">
                                        <div class="hamburger-box">
                                            <div class="hamburger-inner"></div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div><!-- container -->
    </header><!-- End Header -->

    <div class="panel_menu">
        <div class="panel__content">
            <div class="panel__content_wrapper">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-5">
                            <nav class="wrapper_menu ">
                                <ul class="" id="main-menu" data-cues="slideInDown" data-duration="1000">
                                    <li>
                                        <div class="container-item">
                                            <a href="index.html" class="link">Home</a>
                                            <!-- <div class="image">
                                                <img src="img/hero_home_1.jpg" alt="">
                                            </div> -->
                                        </div>
                                    </li>
                                    <li>
                                        <div  class="container-item ">
                                            <a href="javascript:void(0);" id="rooms-menu">Rooms & Suites&nbsp;&nbsp;&nbsp;<i class="bi bi-chevron-right"></i></a>
                                            <!-- <div class="image">
                                                <img src="img/hero_home_1.jpg" alt="">
                                            </div> -->
                                        </div>
                                    </li>
                                    <li>
                                        <div class="container-item">
                                            <a href="about.html">About</a>
                                            <!-- <div class="image">
                                                <img src="img/rooms/2.jpg" alt="">
                                            </div> -->
                                        </div>
                                    </li>
                                    <li>
                                        <div class="container-item">
                                            <a href="news-1.html">News & Events</a>
                                            <!-- <div class="image">
                                                <img src="img/img_ex/3.jpg" alt="">
                                            </div> -->
                                        </div>
                                    </li>
<li>
                                        <div class="container-item">
                                            <a href="restaurant.html">Restaurant</a>
                                            <!-- <div class="image">
                                                <img src="img/img_ex/3.jpg" alt="">
                                            </div> -->
                                        </div>
                                    </li>
                                    <li>
                                        <div class="container-item">
                                            <a href="contacts.html">Contacts</a>
                                            <!-- <div class="image">
                                                <img src="img/rooms/4.jpg" alt="">
                                            </div> -->
                                        </div>
                                    </li>
                                    <li>
                                        <div class="container-item">
                                            <a href="coming-soon.html">Coming Soon</a>
                                            <!-- <div class="image">
                                                <img src="img/rooms/opt_7.jpg" alt="">
                                            </div> -->
                                        </div>
                                    </li>
                                </ul>
                                <ul id="rooms-submenu" class="submenu shidden"  >
                                    <div data-cues="slideInDown" data-duration="1000">
                                        <li>
                                            <div class="container-item">
                                                <a href="room-list-1.html" class="submenu-link">Room list 1</a>
                                                <!-- <div class="image">
                                                    <img src="img/hero_home_1.jpg" alt="">
                                                </div> -->
                                            </div>
                                        </li>
                                        <li>
                                            <div class="container-item">
                                                <a href="room-list-2.html" class="submenu-link">Room list 2</a>
                                                <!-- <div class="image">
                                                    <img src="img/hero_home_1.jpg" alt="">
                                                </div> -->
                                            </div>
                                        </li>
                                        <li>
                                            <div class="container-item">
                                                <a href="room-list-3.html" class="submenu-link">Room list 3</a>
                                                <!-- <div class="image">
                                                    <img src="img/hero_home_1.jpg" alt="">
                                                </div> -->
                                            </div>
                                        </li>
                                        <li>
                                            <div class="container-item">
                                                <a href="room-details.html" class="submenu-link">Room details</a>
                                                <!-- <div class="image">
                                                    <img src="img/hero_home_1.jpg" alt="">
                                                </div> -->
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div class="container-item">
                                                <a href="javascript:void(0);" class="submenu-link" id="back-to-main">Back</a>
                                            </div>
                                        </li>
                                    </div>
                                    
                                </ul>
                            </nav><!-- /wrapper_menu -->
                        </div>
                        <div class="col-lg-6 d-flex align-items-center">
                            <div class="menu_panel_details">
                                <div class="row justify-content-between">
                                    <div class="col-lg-6 mb-lg-0 mb-4">
                                        <h5>Address</h5>
                                        <p>97845 Baker Street 56<br>London UK</p>
                                        <div class="styled-select lang-selector">
                                            <select>
                                                <option value="English" selected="">English</option>
                                                <option value="Chinese">Chinese</option>
                                                <option value="Russian">Russian</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 mb-lg-0 mb-4">
                                        <h5>Contacts</h5>
                                        <div class="contacts">
                                            <ul>
                                                <li><a href="tel://61280932400">+ 61 23 8093 3400</a></li>
                                                <li><a href="mailto:info@redose.com">info@Paradise.com</a></li>
                                            </ul>
                                        </div>
                                        <div class="social">
                                            <ul>
                                                <li><a href="#0"><i class="bi bi-instagram"></i></a></li>
                                                <li><a href="#0"><i class="bi bi-whatsapp"></i></a></li>
                                                <li><a href="#0"><i class="bi bi-facebook"></i></a></li>
                                                <li><a href="#0"><i class="bi bi-twitter-x"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /row -->
                </div>
                <!-- /container-fluid -->
            </div><!-- end wrap -->
        </div>
    </div>
    <!-- /panel_menu  -->
  </template>
  