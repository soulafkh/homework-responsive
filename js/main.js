$(function() {
	$('#hamburger').on('click', function() {
		$('.is-hidden').slideToggle();
	});

	$(window).on('resize', function() {
		if ($(window).width() >= 768 && !$('nav').is(':visible')) {
			$('nav').show();
		} else if ($(window).width() < 768 && $('nav').is(':visible')) {
			$('nav').hide();
					
		}
	});

})