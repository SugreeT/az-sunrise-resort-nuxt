<template>
    <div id="preloader">
        <div data-loader="circle-side"></div>
    </div><!-- /Page Preload -->
    <section class="menu-section">
        <div class="full-container">
            <div class="intro p-3"><img src="~assets/img/logo/AZ-sunrise-logo.png" width="150" height="150" alt="" class="mb-3"><br>Menu of the Day<span>Maiores eos labore ratione illum excepturi neque</span></div>
        </div>
    </section> <!-- End  menu-section-->

    <section class="menu-section">
        <div class="full-container">
            <div class="half-container"></div>

            <div class="half-container">
                <div class="txt_container">
                    <div class="m_title">
                        <h2>Starters</h2>
                        <p>A dish of your choice from the list below</p>
                    </div>
                    <ul>
                        <li>
                            <h3>Marinated Shrimp</h3>
                            <p>Fresh Shrimp, Oive Oil, Tomato Sauce</p>
                        </li>
                         <li>
                            <h3>Avocado & Mango</h3>
                            <p>Avocado, Mango, Tomatoes</p>
                        </li>
                         <li>
                            <h3>Cream of Asparagus</h3>
                            <p>Asparagus, Ootato, Celery, Onion</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section> <!-- End  menu-section-->

    <section class="menu-section">
        <div class="full-container">
            <div class="half-container"></div>

            <div class="half-container">
                <div class="txt_container">
                    <div class="m_title">
                        <h2>Main Dishes</h2>
                        <p>A dish of your choice from the list below</p>
                    </div>
                    <ul>
                        <li>
                            <h3>Prime Rib</h3>
                            <p>Rib, Rosemary, Black pepper</p>
                        </li>
                        <li>
                            <h3>Sriracha Beef</h3>
                            <p>Avocado, Mango, Tomatoes</p>
                        </li>
                        <li>
                            <h3>Soft shell crab</h3>
                            <p>Chicken, Potato, Salad</p>
                        </li>
                        <li>
                            <h3>Chicken with Garlic</h3>
                            <p>Chicken, Cherry tomatoes, Olive oil</p>
                        </li>
                        <li>
                            <h3>Turkey Chili</h3>
                            <p>Turkey, Oregano, Tomato paste</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section> <!-- End  menu-section-->

   <section class="menu-section">
        <div class="full-container">
            <div class="half-container"></div>
            <div class="half-container">
                <div class="txt_container">
                    <div class="m_title">
                        <h2>Desserts</h2>
                        <p>A dish of your choice from the list below</p>
                    </div>
                    <ul>
                        <li>
                            <h3>Chocolate Cupcakes</h3>
                            <p>Chocolate, Eggs, Vanilla</p>
                        </li>
                        <li>
                            <h3>Summer Berry</h3>
                            <p>Raspberries, Blackberries</p>
                        </li>
                        <li>
                            <h3>Coconut Tart</h3>
                            <p>Blueberries, Graham cracker crumbs</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section><!-- End  menu-section-->
    
    <section class="menu-section">
        <div class="full-container">
            <div class="half-container"></div>
            <div class="half-container">
                <div class="txt_container">
                    <div class="m_title">
                        <h2>Drinks</h2>
                        <p>A dish of your choice from the list below</p>
                    </div>
                    <ul>
                        <li>
                            <h3>Glass Red Wine</h3>
                            <p>Montepulciano - Italy</p>
                        </li>
                        <li>
                            <h3>Glass White Wine</h3>
                            <p>Verdejo - Spain</p>
                        </li>
                        <li>
                            <h3>Bottle of Beer</h3>
                            <p>Belgian Beer</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section><!-- End  menu-section-->
    
    <section class="menu-section">
        <div class="full-container">
            <div class="half-container"></div>

            <div class="half-container">
                <div class="txt_container">
                    <h3>Reserve a Table</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eos labore ratione illum excepturi neque sunt blanditiis ducimus soluta quae illum excepturi neque!</p>
                    <p class="phone_us">Call Us <a href="tel://424342332">424 654831</a></p>
                </div>
            </div>
        </div>
    </section> <!-- End  menu-section-->

    <nav>
        <ul class="vertical-nav">
            <li><a href="#0" class="prev inactive">Next</a></li>
            <li><a href="#0" class="next">Prev</a></li>
        </ul>
    </nav> <!-- End vertical-nav-->
    
    <nav>
        <ul class="top-nav">
            <li><a href="index" class="back"><i class="bi bi-arrow-90deg-left"></i></a></li>
        </ul>
    </nav> <!-- End top-nav-->

    <div class="progress-wrap">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
    <!-- /back to top -->


  </template>


<script setup>
useHead({
    script: [
    { src: '/js/common_scripts.js', type: 'text/javascript', defer: true  },
    { src: '/js/common_functions.js', type: 'text/javascript', defer: true  },
    { src: '/phpmailer/validate.js', type: 'text/javascript', defer: true  },
    { src: '/js/day_menu.js', type: 'text/javascript', defer: true  },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: '/css/day_menu.css', // ชี้ไปยังไฟล์ CSS เฉพาะเพจ
    },
  ],
})
</script>
<style scoped>
      @media (prefers-reduced-motion: no-preference) {
          :root {
            scroll-behavior: inherit;
          }
        }
</style>