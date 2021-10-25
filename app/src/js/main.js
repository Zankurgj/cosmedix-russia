import $ from "jquery";
window.jQuery = $;
window.$ = $;
import { initSliders } from "./common/sliders";
import noUiSlider from "nouislider";
import CounterNumber from "./common/counter";
require("@fancyapps/fancybox");
window.noUiSlider = noUiSlider;

document.addEventListener("DOMContentLoaded", function () {
  initSliders();
  new CounterNumber();
  initToggleTabListeners();
});

const initToggleTabListeners = () => {
  $(".js--toggle-tab-input").on("change", toggleTabHandler);
};

const toggleTabHandler = (evt) => {
  const tabId = $(evt.currentTarget).data("tabId");
  const tabName = $(evt.currentTarget).attr("name");
  $(`[data-tab-name=${tabName}]`).removeClass("show");
  $(`[data-tab=${tabId}]`).addClass("show");
};
