$(document).ready(function() {
	$(function(){
		$('#gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery:{
				enabled: true
			}
		});
	});
	if ($(window).width() <= 800) {  
		$('.col-event').removeClass('col-md-8').addClass('col-md-12')
	} 
	if ($(window).width() <= 1025) {  
		$('#join-us-diagonal').css("display",'none');
	} 
	$(window).resize(function(){
		if ($(window).width() <= 800) {  
			$('.col-event').removeClass('col-md-8').addClass('col-md-12')
		} else if($(window).width() > 800){
			$('.col-event').removeClass('col-md-12').addClass('col-md-8')
		}   
	});
	var wHeight = $(window).height();
	var pborder = wHeight + 'px solid transparent';
	$('#join-us-diagonal').css("border-top",pborder);
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