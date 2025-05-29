(function ($) {

	
	"use strict";
	// Preload
	$(window).on('load', function () { // makes sure the whole site is loaded
		setTimeout(() => {
			$('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
			$('#preloader').addClass('loaded');
			$('.animate_hero').addClass('is-transitioned');
			

			//Header Reveal On Scroll
			$("header.reveal_header").headroom({
				"offset": 50,
				"tolerance": 5,
				"classes": {
					"initial": "animated",
					"pinned": "slideDown",
					"unpinned": "slideUp"
				}
			});

			// Opacity mask
			$('.opacity-mask').each(function(){
				$(this).css('background-color', $(this).attr('data-opacity-mask'));
			});

			// Data Background
			$('.background-image').each(function(){
				$(this).css('background-image', $(this).attr('data-background'));
			});
			

			
			// Sticky Header
			$(window).on('scroll', function () {
				if ($(this).scrollTop() > 1) {
					$('.fixed_header').addClass("sticky");
				} else {
					$('.fixed_header').removeClass("sticky");
				}
			});
			$(window).scroll();

			// Scroll animation
			scrollCue.init({
				percentage : 0.85
			});


			// Button scroll to
			$('a[href^="#"].btn_scrollto').on('click', function (e) {
					e.preventDefault();
					var target = this.hash;
					var $target = $(target);
					$('html, body').stop().animate({
						'scrollTop': $target.offset().top -60
					}, 300, 'swing', function () {
						window.location.hash = target;
				});
			});

			scrollCue.update();
		}, 500);
	})




	setTimeout(() => {
		// Pinned content
	const pinnedImages = document.querySelectorAll('.pinned-image');
	pinnedImages.forEach(pinnedImage => {
		console.log('pinnedImages >> '+ pinnedImages)
	    const container = pinnedImage.querySelector('.pinned-image__container');
	    // const image = container.querySelector('img');
	    const overlay = container.querySelector('.pinned-image__container-overlay');
	    const content = pinnedImage.querySelector('.pinned_over_content');
	    const tl = gsap.timeline({paused: true});
	    tl.to(container, {
	        scale: 1.0,
	    }, 0);
	    tl.from(content, {
	        autoAlpha: 0,
	    }, 0);
	    tl.from(overlay, {
	        autoAlpha: 0,
	    }, 0);
	    const trigger = ScrollTrigger.create({
	        animation: tl,
	        trigger: pinnedImage,
	        start: "top center",
	        markers: false,
	        pin: false,
	        scrub: false,
	    });
	});


	// Video Play on scroll
	var $win = $(window);
	var $sectionvideo = $('#section_video video');
    var elementTop, elementBottom, viewportTop, viewportBottom;

    function isScrolledIntoView(elem) {
      elementTop = $(elem).offset().top;
      elementBottom = elementTop + $(elem).outerHeight();
      viewportTop = $win.scrollTop();
      viewportBottom = viewportTop + $win.height();
	//   console.log((viewportTop))
	//   console.log((elementBottom))
	//   console.log((elementBottom > viewportTop))
	//   console.log((elementTop < viewportBottom))
	//   console.log((elementBottom > viewportTop && elementTop < viewportBottom))
      return (elementBottom > viewportTop && elementTop < viewportBottom);
    }
    
    if($sectionvideo.length){

      var loadVideo;

    //   $sectionvideo.each(function(){
    //     $(this).attr('webkit-playsinline', '');
    //     $(this).attr('playsinline', '');
    //     $(this).attr('muted', 'muted');

    //     $(this).attr('id','loadvideo');
    //     loadVideo = document.getElementById('loadvideo');
    //     loadVideo.load();
    //   });

	  $sectionvideo.each(function(){
		this.setAttribute('webkit-playsinline', '');
		this.setAttribute('playsinline', '');
		this.setAttribute('muted', 'muted');
		this.playbackRate = 0.5; // 👈 บังคับชัดเจน
		this.load();
	  });

      $win.scroll(function () { // video to play when is on viewport 
      
        $sectionvideo.each(function(){
          if (isScrolledIntoView(this) == true) {
              $(this)[0].play();
          } else {
              $(this)[0].pause();
          }
        });
      
      });
    }
	
	// Menu sidebar panel v1
	$('.open_close_nav_panel').on("click", function () {
		$('.nav_panel').toggleClass('show');
		$('.layer').toggleClass('layer-is-visible');
	});

	$(".sidebar-navigation nav li a").on('click', function(){		
		var parentLevel = $(this).parents('ul').length -1;
		var currentMenu = $(this).closest('ul');
		var currentListItem = $(this).parent('li');
		var parentMenu = $('.level-' + parentLevel);
		var subMenu = $(this).next('ul');
		if(currentListItem.hasClass('back')) {
			// back button hit	
			currentMenu.removeClass('active');
			parentMenu.removeClass('hidden');
		} else if (currentListItem.children('ul').length > 0) {
			// menu item has children - expand the menu
			subMenu.toggleClass('active');
			currentMenu.addClass('hidden');
		}
	});

	// Menu sidebar panel v2
	$('.open_close_menu').on("click", function () {
		$('.main-menu').toggleClass('show');
		$('.layer').toggleClass('layer-is-visible');
	});

	// Menu overaly paner panel
	$('.menu_open').on("click", function () {
		$('.hamburger').toggleClass('is-active');
		$('.panel_menu').toggleClass('active');
		$('body').toggleClass('no_scroll');
		$('header').toggleClass('header_color');
	});
	
	// Menu hover images
	$(".wrapper_menu ul li a").each(function() {
	    $(this).on("mouseover", function() {
	        $(".wrapper_menu").addClass("hover");
	        $(".container-item").removeClass("active");
	        $(this).parent().addClass("active");
	    }).on("mouseleave", function() {
	        $(".wrapper_menu").removeClass("hover");
	    });
	});

	// Menu v4 + submenu
	$('a.show-submenu').on("click", function () {
		$(this).toggleClass("show_normal");
	});

	// Carousel items 1
	$('.carousel_item_1').owlCarousel({
	    center: true,
	    items:1,
	    loop:false, 
	    addClassActive: true,
	    margin:0,
	    autoplay:false,
	    autoplayTimeout:3000,
		autoplayHoverPause:true,
		animateOut: 'fadeOut',
	    responsive:{
	    	0:{
	            dots:true
	        },
	        991:{
	            dots:true
	        }
	    }
	});

	// Carousel items centererd generals
	// $('.carousel_item_centered').owlCarousel({    
	//     loop:true,
	//     margin:5,
	//     nav:true,
	//     dots:false,
	//     center:true,
	//     navText: ["<i class='bi bi-arrow-left-short'></i>","<i class='bi bi-arrow-right-short'></i>"],
	//     responsive:{
	//         0:{
	//             items:1
	//         },
	//         600:{
	//             items:2
	//         },
	//         1000:{
	//             items:2
	//         }
	//     }
	// });

	// Carousel items centered rooms
	$('.carousel_item_centered_rooms').owlCarousel({    
	    loop:true,
	    margin:5,
	    nav:true,
	    dots:false,
	    center:true,
	    navText: ["<i class='bi bi-arrow-left-short'></i>","<i class='bi bi-arrow-right-short'></i>"],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        991:{
	            items:2
	        }
	    }
	});


	// Carousel items 3
	$('.carousel_item_3').owlCarousel({    
	    loop:false,
	    margin:15,
	    nav:true,
	    dots:false,
	    center:false,
	    navText: ["<i class='bi bi-arrow-left-short'></i>","<i class='bi bi-arrow-right-short'></i>"],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	// Carousel testimonials
	$('.carousel_testimonials').owlCarousel({
	 	items:1,
	    loop:true,
		autoplay:false,
	    animateIn: 'flipInX',
		margin:40,
    	stagePadding:30,
	    smartSpeed:300,
	    autoHeight:true,
	    dots:true,
		responsiveClass:true,
	    responsive:{
	        600:{
	            items:1
	        },
			 1000:{
	            items:1,
				nav:false
	        }
	    }
	});

	// Sticky titles
	$('.fixed_title').theiaStickySidebar({
		minWidth: 991,
		additionalMarginTop: 120
	});

	// Jquery select
	$('.custom_select select').niceSelect();

	// Footer reveal 
	if ($(window).width() >= 1024) {
		$('footer.revealed').footerReveal({
		shadow: false,
		opacity:0.6,
		zIndex: 1
	});
	};

	// Links footer hover effect
    $(".footer_links > ul > li").hover(function() {
	  $(this).siblings().stop().fadeTo(300, 0.6);
	  $(this).parent().siblings().stop().fadeTo(300, 0.3); 
	}, function() { // Mouse out
	  $(this).siblings().stop().fadeTo(300, 1);
	  $(this).parent().siblings().stop().fadeTo(300, 1);
	});

	//Scroll back to top
	var progressPath = document.querySelector('.progress-wrap path');
	if (progressPath) {
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function() {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		
		$(window).scroll(updateProgress);
	}

	var offset = 50;
	var duration = 550;
	$(window).on('scroll', function() {
	    if (jQuery(this).scrollTop() > offset) {
	        jQuery('.progress-wrap').addClass('active-progress');
	    } else {
	        jQuery('.progress-wrap').removeClass('active-progress');
	    }
	});
	$('.progress-wrap').on('click', function(event) {
	    event.preventDefault();
	    jQuery('html, body').animate({ scrollTop: 0 }, duration);
	    return false;
	});	


	document.addEventListener('DOMContentLoaded', function () {
		function updatePinnedImageClass() {

			const container = document.getElementById('image-container');
			if (!container) {
			//   console.warn('Element with id "image-container" not found!');
			  return;
			}
		  
			if (window.innerWidth < 992) {
			  container.classList.remove('pinned-image--medium');
			  container.classList.add('pinned-image--small');
			} else {
			  container.classList.remove('pinned-image--small');
			  container.classList.add('pinned-image--medium');
			}
		  }
		  
		  // เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเว็บ
		  updatePinnedImageClass();
		  
		  // อัปเดตคลาสเมื่อเปลี่ยนขนาดหน้าจอ
		  window.addEventListener('resize', updatePinnedImageClass);
	});


	// เลือกทุก <span> ที่มี class .lang
	const langSpans = document.querySelectorAll('.lang_top .lang');

	// เพิ่ม event listener ให้กับแต่ละ <span>
	langSpans.forEach(span => {
		span.addEventListener('click', () => {
			// ลบ class active ออกจาก span อื่น ๆ
			langSpans.forEach(s => s.classList.remove('active'));
			
			// เพิ่ม class active ให้กับ span ที่ถูกคลิก
			span.classList.add('active');
		});
	});

	const facilities = document.querySelectorAll('.main-index .box_facilities');
	const carouselLinks = document.querySelectorAll('.content-section .owl-carousel .item a');
	const sections = document.querySelectorAll('.content-section');

	// ฟังก์ชันสำหรับอัปเดตลิงก์ใน carousel
	function updateCarouselLinks(link) {
		carouselLinks.forEach(carouselLink => {
			carouselLink.setAttribute('href', link);
		});
	}
	
	// ตั้งค่า default link และ active state
	const defaultFacility = document.querySelector('.box_facilities[data-link="restaurant"]');
	if (defaultFacility) {
		defaultFacility.classList.add('active'); // เพิ่มสถานะ active ให้กับ Restaurant
		const defaultLink = defaultFacility.getAttribute('data-link');
		updateCarouselLinks(defaultLink); // ตั้งค่าเริ่มต้นของ carousel links
	}

	// ฟังก์ชันสำหรับซ่อนทุก Section
	function hideAllSections() {
		sections.forEach(section => {
			section.style.display = 'none';
		});
	}

	// ตั้งค่าเริ่มต้น (แสดง Restaurant)
	const defaultSection = document.getElementById('restaurant');
	if (defaultSection) {
		defaultSection.style.display = 'block';
	}


	
	// เพิ่ม event listener ให้กับทุกไอคอน
	facilities.forEach(facility => {
		facility.addEventListener('mouseover', () => {
			facility.querySelector('h3').style.color = '#ff6f61'; // Highlight เมื่อ hover
		});
	
		facility.addEventListener('mouseout', () => {
			facility.querySelector('h3').style.color = ''; // Reset สีเมื่อออก
		});
	
		facility.addEventListener('click', () => {
			// ลบ class active จากทุกองค์ประกอบ
			facilities.forEach(f => f.classList.remove('active'));
	
			// เพิ่ม class active ให้กับองค์ประกอบที่ถูกคลิก
			facility.classList.add('active');
	
			// ดึงลิงก์จาก data-link ขององค์ประกอบที่ถูกคลิก
			const link = facility.getAttribute('data-link');
	
			// อัปเดตลิงก์ของ carousel
			updateCarouselLinks(link);

			// ซ่อนทุก Section
			hideAllSections();

			// ดึง ID จาก data-link และแสดง Section ที่ตรงกัน
			const sectionId = facility.getAttribute('data-link').split('.')[0]; // เช่น "restaurant"
			const sectionToShow = document.getElementById(sectionId);
			if (sectionToShow) {
				sectionToShow.style.display = 'block';
			}

			// ตั้งค่า active class
			facilities.forEach(f => f.classList.remove('active'));
			facility.classList.add('active');
		});
	});

	}, 1000);
	


})(jQuery);

