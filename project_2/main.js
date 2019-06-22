$('document').ready(() => {
  setTimeout(() => {
    $('.preloader').fadeOut(200);
  }, 3000);
  var typed = new Typed('.name', {
    strings: ['Developer', 'Designer', 'Programmer'],
    typeSpeed: 100,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity
  });

  var cont = $('.portfolioContainer');
  cont.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });

  $('.portfolioFilter a').click(function() {
    $('.portfolioFilter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    cont.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });
});
