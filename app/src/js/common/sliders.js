import "slick-carousel";

export const initSliders = () => {
  initMpTopSlider();
  initMpStarsSlider();
};

const initMpTopSlider = () => {
  $(".js--mp-top-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         arrows: true,
    //       },
    //     },
    //   ],
  });
};

const initMpStarsSlider = () => {
  $(".js--mp-stars-slider").slick({
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    arrows: false,
    dots: false,
  });
};
