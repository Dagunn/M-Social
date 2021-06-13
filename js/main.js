
$(document).ready(function () {
    
  $('.dropbtn').click(function(){
    $('.dropdown-content').toggleClass('show')


    $(document).mouseup(function(e) {
      var $target = $(e.target);
      if ($target.closest(".menu").length == 0) {
          $(".dropdown-content").removeClass("show");
      }
  });
   
   })




   $('.slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slider__btn slider-btnprev"><img src="images/arrow-pre.svg" alt="arrow"></button>',
    nextArrow: '<button class="slider__btn slider-btnnext"><img src="images/arrow-next.svg" alt="arrow"></button>',
    responsive: [
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
          dots: true
        }
  
      },
  
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
          dots: true
        }
      },
  
      {
        breakpoint: 421,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true
        }
      },
      
      ]
  
  });
  
  

});







