import "slick-carousel";

export const initSliders = () => {
  initMpTopSlider();
  initMpStarsSlider();
  initMpMobileSlider();
  initCardSlider();
  initReccomendSlider();
  initDoublePromoSlider();
};

const initMpTopSlider = () => {
  $(".js--mp-top-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: $(".js--mp-top-dots"),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          dots: false,
        },
      },
    ],
  });
};

const initMpStarsSlider = () => {
  $(".js--mp-stars-slider").slick({
    centerMode: true,
    variableWidth: true,
    infinite: true,
    arrows: false,
    dots: false,
    touchThreshold: 20,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          dots: true,
        },
      },
    ],
  });
};

const initMpMobileSlider = () => {
  $(window).on("load resize orientationchange", function () {
    $(".js--mp-mobile-slider").each(function () {
      var $carousel = $(this);
      /* Initializes a slick carousel only on mobile screens */
      // slick on mobile
      if ($(window).width() >= 1000) {
        if ($carousel.hasClass("slick-initialized")) {
          $carousel.slick("unslick");
        }
      } else {
        if (!$carousel.hasClass("slick-initialized")) {
          $carousel.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            dots: false,
          });
        }
      }
    });
  });
};
const initDoublePromoSlider = () => {
  $(window).on("load resize orientationchange", function () {
    $(".js--double-promo-slider").each(function () {
      var $carousel = $(this);
      /* Initializes a slick carousel only on mobile screens */
      // slick on mobile
      if ($(window).width() >= 1000) {
        if ($carousel.hasClass("slick-initialized")) {
          $carousel.slick("unslick");
        }
      } else {
        if (!$carousel.hasClass("slick-initialized")) {
          $carousel.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            dots: false,
            responsive: [
              {
                breakpoint: 750,
                settings: {
                  slidesToShow: 1,
                },
              },
            ],
          });
        }
      }
    });
  });
};

const initCardSlider = () => {
  $(".js--product-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    asNavFor: ".js--product-nav-slider",
    infinite: false,
  });
  $(".js--product-nav-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: ".js--product-slider",
    dots: false,
    arrows: false,
    verticalSwiping: true,
    focusOnSelect: true,
    infinite: false,
  });
};

const initReccomendSlider = () => {
  $(".js--reccomend-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  });
};
