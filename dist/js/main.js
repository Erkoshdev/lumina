//Открыть меню на tablets
$('.show-header-nav').click(function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('.header-nav').addClass('show')
  } else {
    $('.header-nav').removeClass('show')
  }
})

$(document).ready(function () {
  //настройка меню на mobile
  if ($(window).width() < 767) {
    let height = $('header').height();
    let menuHeight = $(window).height() - height;
    $('.mobile-menu').css({
      'top': height,
      'height': menuHeight
    })
  }

  //добавление боковых отступов
  if ($(window).width() > 991) {
    $('.tide').addClass('container-cut')
  }

})

//Открыть меню на mobile
$('.show-mobile-menu').click(function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('.mobile-menu').addClass('show');
    $('body').addClass('scroll-locked')
  } else {
    $('.mobile-menu').removeClass('show')
    $('body').removeClass('scroll-locked')
  }
})