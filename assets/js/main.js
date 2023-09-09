(function ($) {
	"use strict";

	// back to top start
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
		$('.backtotop:hidden').stop(true, true).fadeIn();
		} else {
		$('.backtotop').stop(true, true).fadeOut();
		}
	});
	$(function() {
		$(".scroll").on('click', function() {
		$("html,body").animate({scrollTop: 0}, "slow");
		return false
		});
	});

	// sticky header
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 120) {
		$('.header_area').addClass("sticky-header")
		} else {
		$('.header_area').removeClass("sticky-header")
		}
	});

	// preloader js start
	function loader() {
		$(window).on('load', function () {
			$('#ctn-preloader').addClass('loaded');
			$("#loading").fadeOut(500);
			// Una vez haya terminado el preloader aparezca el scroll

			if ($('#ctn-preloader').hasClass('loaded')) {
				// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
				$('#preloader').delay(900).queue(function () {
					$(this).remove();
				});
			}
		});
	}
	loader();

	// active mobile-menu
	jQuery('#mobile-menu').meanmenu({
		meanScreenWidth: '991',
		meanMenuContainer: '.mobile-menu'
	});

	// toggle search bar
	$('.search .search__trigger .open').click(function () {
		$(".search .search__trigger .open").hide();
		$(".search .search__trigger .close").show();
		$('.search__form').addClass('active');
	});
	$('.search .search__trigger .close').click(function () {
		$(".search .search__trigger .open").show();
		$(".search .search__trigger .close").hide();
		$('.search__form').removeClass('active');
	});

	// Side menu info
	$(".hamburger-trigger").on("click", function (e) {
		e.preventDefault();
		$(".side-info-wrapper").toggleClass("show");
		$("body").addClass("on-side");
		$('.overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".side-info__close > a").on("click", function (e) {
		e.preventDefault();
		$(".side-info-wrapper").removeClass("show");
		$("body").removeClass("on-side");
		$('.overlay').removeClass('active');
		$('.hamburger-trigger').removeClass('active');
	});

	$('.overlay').on('click', function () {
		$(this).removeClass('active');
		$(".side-info-wrapper").removeClass("show");
		$("body").removeClass("on-side");
		$('.hamburger-trigger').removeClass('active');
	});

	// slider start
    function homeSlider() {
        var slider = $('.slider__active');
        slider.owlCarousel({
            loop: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            autoplay: true,
            nav: true,
            dots: false,
            navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
            smartSpeed: 1200,
            autoplayTimeout: 9000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        slider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var slider_animation = $(this).data('animation');
                $(this).removeClass('animated ' + slider_animation).css('opacity', '0');
            });
        });
        $("[data-delay]").each(function () {
            var animation_delay = $(this).data('delay');
            $(this).css('animation-delay', animation_delay);
        });
        $("[data-duration]").each(function () {
            var animation_dutation = $(this).data('duration');
            $(this).css('animation-duration', animation_dutation);
        });
        slider.on('translated.owl.carousel', function () {
            var layer = slider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var slider_animation = $(this).data('animation');
                $(this).addClass('animated ' + slider_animation).css('opacity', '1');
            });
        });
    }
    homeSlider();
	// slider end

	//data background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ") ")
	})

	// data bg color
	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));

	});

	// testimonial start
	$('.testimonial__active').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		margin: 30,
		autoplayTimeout: 6000,
		navText:['<i class="fal fa-long-arrow-left"></i>','<i class="fal fa-long-arrow-right"></i>'],
		nav: true,
		dots: false,
		items: 1,
	});

	// portfolio-active
	$('.portfolio__active').owlCarousel({
		loop: true,
		margin: 30,
		items: 1,
		autoplay: true,
		autoplayTimeout:5000,
		smartSpeed: 800,
		autoplayHoverPause:true,
		navText:['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>'],
		nav: true,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:1
			},
			992:{
				items:2
			},
			1200:{
				items:2
			}
		}
	});

	// portfolio-active
	$('.portfolio__active--2').owlCarousel({
		loop: true,
		margin: 30,
		items: 3,
		autoplay: true,
		autoplayTimeout:5000,
		smartSpeed: 800,
		autoplayHoverPause:true,
		navText:['<i class="far fa-chevron-double-left"></i>Prev','Next<i class="far fa-chevron-double-right"></i>'],
		nav: true,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});
	
	// gallery post start
	$('.gallery_post-active').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		navText: ['<i class="far fa-chevron-left"></i>', '<i class="far fa-chevron-right"></i>'],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			}
		}
	})

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

	
	// isotop
	$('.grid').imagesLoaded( function() {
		// init Isotope
		var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item',
		}
		});

	// filter items on button click
		$('.portfolio-menu').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
	});

	//for menu active class
	$('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	// Active Odometer Counter 
	jQuery('.odometer').appear(function (e) {
		var odo = jQuery(".odometer");
		odo.each(function () {
			var countNumber = jQuery(this).attr("data-count");
			jQuery(this).html(countNumber);
		});
	});

	// Accordion Box
	if ($(".accordion-box").length) {
		$(".accordion-box").on("click", ".acc-btn", function () {
		var outerBox = $(this).parents(".accordion-box");
		var target = $(this).parents(".accordion");

		if ($(this).next(".acc-content").is(":visible")) {
			$(this).removeClass("active");
			$(this).next(".acc-content").slideUp(300);
			$(outerBox).children(".accordion").removeClass("active-block");
		} else {
			$(outerBox).find(".accordion .acc-btn").removeClass("active");
			$(this).addClass("active");
			$(outerBox).children(".accordion").removeClass("active-block");
			$(outerBox).find(".accordion").children(".acc-content").slideUp(300);
			target.addClass("active-block");
			$(this).next(".acc-content").slideDown(300);
		}
		});
	}

	// range slider activation start
	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 100,
		values: [0, 70],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});

	$("#amount").val("$" + $("#slider-range").slider("values", 0) +
	" - $" + $("#slider-range").slider("values", 1));

	// shop cart start
	var CartPlusMinus = $('.cart-plus-minus');
	CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
	CartPlusMinus.append('<div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() === "+") {
		var newVal = parseFloat(oldValue) + 1;
		} else {
		// Don't allow decrementing below zero
		if (oldValue > 1) {
			var newVal = parseFloat(oldValue) - 1;
		} else {
			newVal = 1;
		}
		}
		$button.parent().find("input").val(newVal);
	});

	$('.main-menu nav > ul > li').slice(-3).addClass('menu-last');




})(jQuery);