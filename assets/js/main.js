/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. custom Js
03. tp-home-service-active
04. tp-testimonial-slider-active
05. tp-portfolio-slider-active
06. Body overlay Js
07. mobile menu Js
08. magnificPopup video view
09. light-dark-active
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	$(window).on('load', function () {
		$(".preloader").fadeOut(500);
	});
  
	////////////////////////////////////////////////////
	// 02. custom Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});



    ////////////////////////////////////////////////////
	// 03. tp-home-service-active
    var tp_service_slide = new Swiper(".tp-home-service-active", {
		slidesPerView: 1,
		speed: 700,
		spaceBetween: 5,
		centeredSlides:true,
		loop: true,
		pagination: {
			el: ".tp-home-service-pagination",
			clickable: true,
		},
    });	

    ////////////////////////////////////////////////////
	// 04. tp-testimonial-slider-active
    var tp_service_slide = new Swiper(".tp-testimonial-slider-active", {
		slidesPerView: 1,
		speed: 700,
		spaceBetween: 24,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'991': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
    });	

    ////////////////////////////////////////////////////
	// 05. tp-portfolio-slider-active
    var tp_service_slide = new Swiper(".tp-portfolio-slider-active", {
		slidesPerView: 1,
		speed: 700,
		spaceBetween: 40,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'991': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
    });	

	// 06. Body overlay Js
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".tp-offcanvas-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".tp-offcanvas-close-btn").on("click", function () {
		$(".tp-offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

	$(".body-overlay").on("click", function () {
		$(".tp-offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 07. mobile menu Js
	var tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
	var tpSideMenu = $('.tp-offcanvas-menu nav');
	tpSideMenu.append(tpMenuWrap);
	if ($(tpSideMenu).find('.tp-submenu').length != 0) {
		$(tpSideMenu).find('.tp-submenu').parent().append('<button class="tp-menu-close"><i class="far fa-chevron-right"></i></button>');
	}
	var sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a');
	$(sideMenuList).on('click', function (e) {
		e.preventDefault();
		if (!($(this).parent().hasClass('active'))) {
			$(this).parent().addClass('active');
			$(this).siblings('.tp-submenu').slideDown();
		} else {
			$(this).siblings('.tp-submenu').slideUp();
			$(this).parent().removeClass('active');
		}
	});


	////////////////////////////////////////////////////
	// 08. magnificPopup video view
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 09. light-dark-active

	$('body').toggleClass(localStorage.toggled);

	function tpdarkLight() {
		if (localStorage.toggled != 'tp-dark-mode') {
			$('body').toggleClass('tp-dark-mode', true);
			localStorage.toggled = "tp-dark-mode";
		} else {
			$('body').toggleClass('tp-dark-mode', false);
			localStorage.toggled = "";
		}
	}

	$(".tp-dark-switch").on("click", function () {
		tpdarkLight();
	});

	////brand-slider
	var postbox = new Swiper('.postbox__thumb-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		effect: 'fade',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.postbox-arrow-next',
			prevEl: '.postbox-arrow-prev',
		},
		a11y: false,
	});



})(jQuery);