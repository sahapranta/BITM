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
});
