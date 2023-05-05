
// slider section starts here

$(".slider").slick({
  touchMove: false,
    dots: false,
    arrows: false,
    draggable: false,
swipeToSlide: false,

    
  });
  $(".slider-nav .slider-prev").click(function () {
    $(".slider").slick("slickPrev");
  });
  
  $(".slider-nav .slider-next").click(function () {
    $(".slider").slick("slickNext");
    $('.slider-next').addClass('null')
  });
  
  $(".slider").on("afterChange", function (event, slick, currentSlide) {
    if (currentSlide === slick.slideCount - 1) {
      $(".slider-next").addClass("red");
    } else {
      $(".slider-next").removeClass("red");
    }
  
    if (currentSlide === 0) {
      $(".slider-prev").addClass("red null");
    } 
    else {
      $(".slider-prev").removeClass("red null");
    }
    var counter = $(".slider-nav .slider-counter");
    counter.text(currentSlide + 1 + " of " + slick.slideCount);
    if (currentSlide === 4 || currentSlide === 5 || currentSlide ===9) {
      $('.slider-nav').addClass('moveDown')
    }else{
      $('.slider-nav').removeClass('moveDown')
    }
  });
  
  
  // slider section ends here

  // slider nav
$('.slider-prev').click(()=>{
    $('.slider-next').removeClass('null');
  })

