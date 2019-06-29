$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

})

$(document).ready(function(){
	// super slider 

	$('#slides').superslides({
		'play': 3000,
		'pagination': false
	});

	// typed js

	var typed = new Typed(".typed", {
  // Waits 1000ms after typing "First"
  strings: ["Web app developer.", "Welcome to out site."],
  'loop': true,
  'typeSpeed': 80,
  'startDelay': 1000,
  'showCursor': false
});

	// owl carousel 

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

	// easy pie chart 

	

        var skillTopOffset = $('.skillsection').offset().top;
        $(window).scroll(function(){
        	if (window.pageYOffset > skillTopOffset - $(window).height()+200) {

        	$('.chart').easyPieChart({
            easing: 'easingInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 5,
            size: 152,
            onStep: function(from,to,percent){
            	$(this.el).find('.percent').text(Math.round(percent));
            }
        });
        	}
        
    });

        // fancy box 

        $("[data-fancybox]").fancybox();

        // isotope 

        $('.items').isotope({
            filter: '*',

            animationOptions: {
                easing: 'lenear',
                duration: 1500,
                queue: false
            }
        });

        // sort and filtering 

        $('.filters a').click(function(){
            $('.filters a').removeClass('current');
            $('.filters a').addClass('current');

            var selector = (this).attr('data-filter');

                $('.items').isotope({
                filter: selector,

                animationOptions: {
                    easing: 'lenear',
                    duration: 1500,
                    queue: false
            }
        });
        });

        // Smooth Scroll 

        $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

    });

});