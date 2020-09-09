$(document).ready(function () {
	// Burger Start
	$('.burger').click(function () {
		$('.burger, .header__menu').toggleClass('burger-active');

		// Close menu on click outside of menu.
		$(document).on('click.body', function (e) {
			var active = $('.burger, .header__menu'); // active elements
			if (
				!active.is(e.target) && // if click not on active elements
				active.has(e.target).length === 0
			) {
				// and not on their children - remove their class burger-active
				$('.burger, .header__menu').removeClass('burger-active');
				$(document).off('click.body'); // remove event handler
			}
		});
	});

	// Close menu on ESC
	$('body').keydown(function (event) {
		if (
			event.which == 27 &&
			$('.burger, .header__menu').has('.burger-active')
		) {
			$('.burger, .header__menu').removeClass('burger-active');
		}
	});
	// Burger End

	// Scroll to top Start
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop').fadeIn('slow');
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	$('.scrollToTop').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 800);
		return false;
	});
	// Scroll to top End

	// Slider Start
	$('.slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 5,
		infinite: true,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 2000,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	// Slider will not appear before code is loaded.
	$('.slider').removeClass('visually-hidden');
	// Slider End

	$('.button, a, button').mouseup(function () {
		$(this).blur();
	});

	// Sticky menu
	$(window).scroll(function () {
		var menu = document.getElementById('mainMenu');
		var sticky = menu.offsetTop;

		if (window.pageYOffset > sticky) {
			menu.classList.add('main-menu--sticky');
		} else {
			menu.classList.remove('main-menu--sticky');
		}
	});

	// Progress bar
	$(window).scroll(function () {
		var winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		var height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementById('menuBar').style.width = scrolled + '%';
	});
});
