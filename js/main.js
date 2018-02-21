$(document).on('ready', function() {
    $('.slider__frame').slick({
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $('#mobile__btn').click(function(){
      $('#nav').toggle('slow');
    })
  });