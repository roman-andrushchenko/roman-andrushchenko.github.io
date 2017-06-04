
$(document).ready(function() {
new WOW ().init();

$('#js-modal-show').click( function(event){ 
// $('.modal__speaker-photo').append('<video autoplay><source src="assets/video/blondie.mp4"></video>');        
      event.preventDefault(); // выключaем стaндaртную рoль элементa
      $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку

        function(){ // пoсле выпoлнения предъидущей aнимaции
           $('#modal').css('display', 'block')              
              // убирaем у мoдaльнoгo oкнa display: none;
              .animate({opacity: 1, top: '40%'}, 500); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
      });

   });
   /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
   $('#modal-close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('video').remove();
      $('#modal')
        .animate({opacity: 0, top: '0%'}, 100,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
           function(){ // пoсле aнимaции
              $(this).css('display', 'none'); // делaем ему display: none;
              $('#overlay').fadeOut(300); // скрывaем пoдлoжку
           }
        );
   });

// my-menu
  $('#my-menu').mmenu({
    extensions: ['theme-black', 'pagedim-black'],
    navbar: {
      title: '<div class="header__nav">Собачья<span>Pадость</span></div>'
    },
    offCanvas: {
      position: 'right'
    }
  });
  var api = $('#my-menu').data('mmenu');

  api.bind('open:finish', function(){
    $('.hamburger').addClass('is-active');
  });
  
  api.bind('close:finish', function(){
    $('.hamburger').removeClass('is-active');

  });

// инициализация owl-carousel с микрозадержкой загрузки
$('.owl-carousel').on('initialized.owl.carousel', function(){
  setTimeout(function(){
    carouselService()
  },100);
});
// настройка owl-carousel
$('.owl-carousel').owlCarousel({
  mouseDrag: false,
  loop: false,
  nav: true,
  smartSpeed: 700,
  navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
  responsiveClass: true,
  responsive: {
    0:{
      items: 1
    }, 
        700: {
      items: 2
    },
    1100: {
      items: 3
    },
    1600: {
      items: 4
    }
  }
});
// выравнивание блоков карусели по высоте
function carouselService(){
  $('.carousel-services-item').each(function(){
   var heightCarousel = $(this);
   var heightTime = heightCarousel.find('.carousel-services-content').outerHeight();
       heightCarousel.find('.carousel-services-img').css('min-height',heightTime);

  });
}carouselService();
// меняем стили для первого слова текста с помощью регулярного выражения
// $('.carousel-services-composition .h3').each(function(){
//    var ths = $(this);
//    ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
//   });
// $('section .h2').each(function(){
//    var ths = $(this);
//    ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
//   });


$('select').selectize();


// выравнивание внутреннего контента с помощью плагина equalHeights
// весь контент выравнивается по максимальному
function onResize(){
  $('.carousel-services-content').equalHeights();
}onResize();
window.onResize = function() {onResize()};

});


// переключатель tab для section-3
   $('.section-3 .tab__list a').click( function(e){
      e.preventDefault();
      $('.section-3  .tab__list .active').removeClass('active');
      $(this).addClass('active');
      var tab = $(this).attr('href');
      $('.section-3  .tab').not(tab).css({'display':'none'});
      $(tab).fadeIn(400);
   });


// accordion для section-3
$('.accordion >li p').is( ":hidden" );
$('.accordion >li >div').click(function() {
  if(false == $(this).next().is(':visible')){
    $('.accordion p').slideUp(); //закрывает открытый слайд
  }
// + и - 
var $currIcon = $(this).find('span.the-btn > i')
$('span.the-btn > i').not($currIcon).addClass('fa-plus-circle').removeClass('fa-minus-circle');
$currIcon.toggleClass("fa-minus-circle fa-plus-circle");


$(this).next().slideToggle();
$('.accordion >li >div').removeClass('active');
$(this).addClass('active');


});

// код для кнопки "навех", блок .top
// условие для появления кнопки в зависимости от высоты скролла
$(window).scroll(function(){
     if ($(this).scrollTop() > $(this).height()) {
        $('.top').addClass('top-active');
     } 
     else{
      $('.top').removeClass('top-active');
     }
});
// перемещение -  "скролл на самый верх" при нажатии на кнопку-блок .top
$('.top').click(function(){
  $('html, body').stop().animate({scrollTop: 0},'slow','swing');
});

// for preloader
$(window).on('load', function(){
  $('.preloader').delay(300).fadeOut('slow');
});




