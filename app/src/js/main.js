import $ from "jquery";
window.jQuery = $;
window.$ = $;
import { initSliders } from "./common/sliders";
import noUiSlider from "nouislider";
require("@fancyapps/fancybox");
window.noUiSlider = noUiSlider;

document.addEventListener("DOMContentLoaded", function () {
  initSliders();
});
