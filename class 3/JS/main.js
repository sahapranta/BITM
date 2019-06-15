$(document).ready(function() {
  $('h1').show(1000);
  $('h1').hide(1000);
  $('h1').fadeIn(3000);
  $('h1').fadeOut(5000);

  $('#b1').hover(function() {
    $('div.one').toggle(2000);
    $('div.one').fadeToggle(2000);
    $('div.one')
      .stop()
      .slideToggle(200);
  });

  $('a').mouseover(function() {
    $(this)
      .stop()
      .animate(
        {
          width: '500px'
        },
        1000
      );
  });
  $('a').mouseout(function() {
    $(this)
      .stop()
      .animate(
        {
          width: '150px'
        },
        1000
      );
  });

  color = $('#colors').val();
  $('body').css('background', color);
  $('#colors').change(function() {
    color = $('#colors').val();
    $('body').css('background', color);
  });

  $('li:even').addClass('even');
  $('li:odd').addClass('odd');
});
