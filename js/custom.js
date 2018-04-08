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
		autoplayHoverPause: true
	});
});