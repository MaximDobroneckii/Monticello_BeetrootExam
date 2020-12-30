$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		autoplay: true,
		speed: 1200,
		autoplaySpeed: 1200,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	// второй слайдер
	$('.news-slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

});

function initMap() {
	let opt = {
		center: { lat: 46.469212, lng: 30.731564 },
		zoom: 12,
		mapId: '83bc26096cf2e82b',


	}
	let map = new google.maps.Map(document.getElementById("map"), opt);
}

$(document).ready(function () {
	$('.menu-burger').click(function (event) {
		$('.menu-burger,.menu-nav').toggleClass('active');
	});

});



