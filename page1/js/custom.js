$(document).ready(function() {
	$('.item').css("height",$( window ).height()),
	$('.item').css("width",$( window ).width()),
	$('.out').css("width",$( window ).width()),
	$('.active').css("width",$( window ).width()),
	console.log($(".col-event").height()),
	$('.owl-carousel').owlCarousel({
		loop:true,
		padding:0,
		margin:0,
		navigation:false,
		items:1,
		dots:false,
		//autoplay:true,
		//autoplaySpeed:100
	})
});