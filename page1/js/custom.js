$(document).ready(function() {
	$('.item').css("height",$( window ).height()),
	$('.item').css("width",$( window ).width()),
	$('.out').css("width",$( window ).width()),
	$('.active').css("width",$( window ).width()),
	console.log($(".transbox").height()),
	$('.owl-carousel').owlCarousel({
		loop:true,
		padding:0,
		margin:15,
		navigation:false,
		items:1,
		dots:false,
		//autoplay:true,
		//autoplaySpeed:100
	})
});