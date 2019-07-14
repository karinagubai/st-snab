// toggle menu
$(document).ready(function() {
    $('.bars').on('click', function(){
        if ( $('.header-menu').css('display') === 'none') {
            $('.header-menu').css('display', 'block');
            $('.bars').toggleClass('open-nav close-nav');
        } else {
            $('.header-menu').css('display', 'none');
            $('.bars').toggleClass('open-nav close-nav');
        }
    });
    $( window ).resize(function() {
        if ( $(window).width() > 767 ) {
            $('.header-menu').css('display', 'block');
        } else {
            $('.header-menu').css('display', 'none');
        }
    });
});

// modal window

$(document).ready(function() {
  $('.open-modal').on('click', function(event){
    event.preventDefault();
    $('.modal').css('display', 'flex');
  });

  $('.close').on('click', function(){
    $('.modal').css('display', 'none');
  });
});

// show hidden blocks

$(document).ready(function() {
  $('.showBtn').on('click', function(event){
    event.preventDefault();
    $('.hide').css('display', 'block');
    $(this).hide();
  });
});

// carousel for works

$(document).ready(function(){
  $('.works').slick({
  arrows: true,
  appendArrows: '.works-count',
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,

  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 911,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '50%'
      }
    }
  ]
  });
});

// carousel for certificates

$(document).ready(function(){
  $('.certif-list').slick({
  arrows: true,
  appendArrows: '.certif-count',
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,

  responsive: [
    {
      breakpoint: 1125,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 585,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '50%'
      }
    }
  ]
  });
});

// inputmask

$(document).ready(function(){
  $('input[type="tel"]').inputmask("+7 (999) 999-99-99");
});
