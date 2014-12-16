$(document).ready(function(){
	
	//configuration
	var width = 1800;
	var animationSpeed = 4000;
	var pause = 8000;
	var currentSlide = 1;

	//cache DOM for quicker referencing
	var $slider = $('#slider');
		//adding a question mark so we know that it is a jquery object
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	var interval;

	//set interval
		//animate margin-left
		//go to pos 1
	
	function startSlider(){
		interval = setInterval(function() {
			$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
				currentSlide++;
				if(currentSlide === $slides.length) {
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
		}, pause);
	}
	
	function stopSlider(){
		clearInterval(interval);
	}
	
	//listen for mouseenter and pause, resume on mouse leave
	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

	startSlider();

	$slider.click(function() {
		$slider.fadeOut(3000);
	});
	$slider.click(function() {
		$slider.fadeIn();
	});

	$("p").click(function(){
		$("p").hide().toggleClass('clicked');
	});

	$("p").click(function(){
		$("p").fadeIn(3000);
	});

});