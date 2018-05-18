$(document).ready(function() {
	new WOW().init();
	if ($(window).width() <= 800) {  
		$('.col-event').removeClass('col-md-8').addClass('col-md-12')
	} 
	$(window).resize(function(){
		if ($(window).width() <= 800) {  
			$('.col-event').removeClass('col-md-8').addClass('col-md-12')
		} else if($(window).width() > 800){
			$('.col-event').removeClass('col-md-12').addClass('col-md-8')
		}   
	});
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
		autoplayHoverPause: true
	});
});