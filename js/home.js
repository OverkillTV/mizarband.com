$(function() {
	var textSliderOptions = {
		type: 'loop',
		cover : true,
		fixedHeight: 750,
		arrows: false,
		pagination: false,
		autoplay: true,
		interval: 3000,
		width: 320
	}

	if (!/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
		//PC
		textSliderOptions = {
			type: 'loop',
			cover : true,
			fixedHeight: 750,
			arrows: true,
			pagination: true,
			autoplay: true,
			interval: 3000,
			width: 650
		};
	}
	
	new Splide('.slider', textSliderOptions).mount();
});