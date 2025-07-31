(function($) {
    "use strict";
	/*----------------------------
    START - Menubar scroll animation
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 40) {
			$('.menubar .navbar').addClass("sticky");
		} else {
			$('.menubar .navbar').removeClass("sticky");
		}
	});
	
	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
    $('.menu li a, .navbar-brand').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 2000);
		   return false;
		  }
		}
	});
	
	/*----------------------------
    START - Menu collapse
    ------------------------------ */
	$('.menu li a').on('click', function () {
		$('.collapse').removeClass('in');
	});
	
	/*----------------------------
    START - Counterup
    ------------------------------ */
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	$('.counterup').parallax({
		imageSrc: 'images/process-counter.png'
	});
	
	/*----------------------------
    START - Slider animation
    ------------------------------ */
	//experience section slider
	$('.experience-slide').owlCarousel({
		nav:true,
		loop:true,
		autoplay: true,
		autoplayTimeout:4000,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		items:1,
	});
	//review section slider
	$('.review-slider').owlCarousel({
		loop:true,
		autoplay: true,
		autoplayTimeout:4000,
		items:1,
	});
	
	/*----------------------------
    START - Tab panel
    ------------------------------ */
	$('.collapse.in').prev('.panel-heading').addClass('active');
	$('#accordion, #bs-collapse')
	.on('show.bs.collapse', function(a) {
		$(a.target).prev('.panel-heading').addClass('active');
	})
	.on('hide.bs.collapse', function(a) {
		$(a.target).prev('.panel-heading').removeClass('active');
	});
	
	/*----------------------------
    START - Progress bar animation
    ------------------------------ */
	var bar1 = new ProgressBar.Line(progress1, {
	  strokeWidth: 5,
	  easing: 'easeInOut',
	  duration: 2000,
	  color: '#353C68',
	  trailColor: '#E9ECFB',
	  trailWidth: 5,
	  svgStyle: {width: '100%', height: '100%'}
	});
	bar1.animate(0.64);
	var bar2 = new ProgressBar.Line(progress2, {
	  strokeWidth: 5,
	  easing: 'easeInOut',
	  duration: 2000,
	  color: '#353C68',
	  trailColor: '#E9ECFB',
	  trailWidth: 5,
	  svgStyle: {width: '100%', height: '100%'}
	});
	bar2.animate(0.74);
	var bar3 = new ProgressBar.Line(progress3, {
	  strokeWidth: 5,
	  easing: 'easeInOut',
	  duration: 2000,
	  color: '#353C68',
	  trailColor: '#E9ECFB',
	  trailWidth: 5,
	  svgStyle: {width: '100%', height: '100%'}
	});
	bar3.animate(0.49);
	var bar4 = new ProgressBar.Line(progress4, {
	  strokeWidth: 5,
	  easing: 'easeInOut',
	  duration: 2000,
	  color: '#353C68',
	  trailColor: '#E9ECFB',
	  trailWidth: 5,
	  svgStyle: {width: '100%', height: '100%'}
	});
	bar4.animate(0.89);  // Number from 0.0 to 1.0

	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
    $(window).on('scroll', function() {
		if ($(this).scrollTop() > 600) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').on('click', function () {
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
    // call the_farm_house method & init preloader when window load
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });
	
	/*----------------------------
    START - Pricing area animation
    ------------------------------ */
    $('.pricing-first').on('mouseover', function () {
		$(".pricing-left").show();
		$(".pricing-main").hide();
	});
	$('.pricing-first2').on('mouseleave', function () {
		$(".pricing-left").hide();
		$(".pricing-main").show();
	});
	$('.pricing-second').on('mouseover', function () {
		$(".pricing-right").show();
		$(".pricing-main").hide();
	});
	$('.pricing-second2').on('mouseleave', function () {
		$(".pricing-right").hide();
		$(".pricing-main").show();
	});
	
	/*----------------------------
    START - WOW JS animation
    ------------------------------ */
	new WOW().init();
	
	/*----------------------------
    START - Lightbox effect animation
    ------------------------------ */
	$('.lb-outerContainer').css({
		'width':'auto'
	});


    /* =================================
    ===  CONTACT FORM          ====
    =================================== */
    $("#contact-form").on('submit', function(e) {
        e.preventDefault();
        var name = $("#first_name").val() + " " + $("#last_name").val() + " (" + $("#phone_number").val() + ")";
        var email = $("#email_address").val();
        var subject = $("#contact_reason").val();
        var message = $("#message").val();
        var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };

        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST",
                url: "php/sendmail.php",
                data: dataString,
                success: function() {
                    $('.success').fadeIn(1000);
                    $('.error').fadeOut(500);
                    $("#contact-form")[0].reset();
                }
            });
        } else {
            $('.error').fadeIn(1000);
            $('.success').fadeOut(500);
        }

        return false;
    });

})(jQuery);