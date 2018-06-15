/*Services*/
$(document).ready(function(){
	//animate on scroll
	new WOW().init();
});
/* Work */
$(function(){
	$('#work').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery:{
			enabled: true
		}
	});
});
/* team section */
$(function(){
	$("#team-members").owlCarousel({
		items:3,
		autoplay: true,
		smarthSpeed: 700,
		loop:true,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items: 1
			},
			480: {
				items: 2
			},
			768:{
				items: 3
			}
		}
	});
});
/* Testimonials*/
$(function(){
	$("#customers-testimonials").owlCarousel({
		items:1,
		autoplay: true,
		smarthSpeed: 700,
		loop:true,
		autoplayHoverPause: true
	});
});
/* counter */
$(function(){
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});
/* clients */
$(function(){
	$("#clients-list").owlCarousel({
		items:6,
		autoplay: true,
		smarthSpeed: 700,
		loop:true,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items: 1
			},
			480: {
				items: 3
			},
			768:{
				items: 5
			},
			992:{
				items:6
			}

		}
	});
});
/* Navigation */
$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()<50){
			$('nav').removeClass("vesco-top-nav");
			$('#back-to-top').fadeOut();
		}else{
			$('nav').addClass("vesco-top-nav");
			$('#back-to-top').fadeIn();
		}
	});
});
/* smooth scroling */
$(function(){
	$('a.smooth-scroll').click(function(event){
		event.preventDefault();
		//get section Id
		var section = $(this).attr("href");
		$('html,body').animate({
			scrollTop: $(section).offset().top-64
		}, 1250,"easeInOutExpo");
	});
});
// clise mobile menu
$(function(){
	$('.navbar-collapse ul li a').on("click touch",function(){
		$('.navbar-toggle').click();
	});
});