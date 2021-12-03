import $ from "jquery";
window.jQuery = $;
window.$ = $;
import { initHeader } from "./common/header";
import { initSliders } from "./common/sliders";
import noUiSlider from "nouislider";
import CounterNumber from "./common/counter";
require("@fancyapps/fancybox");
require("~/node_modules/country-select-js/build/js/countrySelect.js");
window.noUiSlider = noUiSlider;

document.addEventListener("DOMContentLoaded", function () {
  initSliders();
  initHeader();
  new CounterNumber();
  initToggleTabListeners();
  initRemoveCheckSiderbarListeners();
  showCommentBtnHandler();
  initToggleFilterPopupHandlerListener();
  initCountrySelect();
  initToggleLkSpoilerHandlerListener();
  initFileInputListener();
  initLikeBtnListener();
  initBaskedPopupListener();
  initPartnersPopupListener();
});

const initPartnersPopupListener = () => {
  $(".js--partners-popup-toggle").on("click", togglePartnersPopupHandler);
};
const togglePartnersPopupHandler = () => {
  $(".js--partners-popup").toggleClass("show");
};
const initBaskedPopupListener = () => {
  $(".js--baket-popup-toggle").on("click", toggleBasketPopupHandler);
};
const toggleBasketPopupHandler = () => {
  $(".js--baket-popup").toggleClass("show");
  $("body").toggleClass("no-scroll");
};
const initFileInputListener = () => {
  $(".js--fileinput").on("change", (evt) => {
    if (!$(evt.currentTarget)[0].files[0]) {
      return;
    }
    const input = $(evt.currentTarget)[0].files[0];
    const maxSize = 5242880;
    const nameSelector = $(".js--fileinput-name");
    nameSelector.removeClass("error");
    nameSelector.text(input.name);
    if (maxSize < input.size) {
      nameSelector.addClass("error");
      nameSelector.text("Ошибка");
    }
  });
};

const initCountrySelect = () => {
  $(".js--country-select").countrySelect({
    defaultCountry: "ru",
    preferredCountries: [""],
  });
};

const initToggleTabListeners = () => {
  $(".js--toggle-tab-input").on("change", toggleTabHandler);
};

const toggleTabHandler = (evt) => {
  const tabId = $(evt.currentTarget).data("tabId");
  const tabName = $(evt.currentTarget).attr("name");
  $(`[data-tab-name=${tabName}]`).removeClass("show");
  $(`[data-tab=${tabId}]`).addClass("show");
};

const initRemoveCheckSiderbarListeners = () => {
  $(".js--sidebar-checkbox-remove").on("click", removeCheckSiderbarHandler);
};

const removeCheckSiderbarHandler = () => {
  $(".js--sidebar-checkbox").prop("checked", false);
};

const showCommentBtnHandler = () => {
  $(".js--toggle-comment-btn").on("click", showCommentHandler);
};
const showCommentHandler = (evt) => {
  const btn = $(evt.currentTarget);
  const parent = btn.parents(".js--comment-parent");
  const anotherBtn = parent.children(
    ".js--toggle-comment-btn.comment__btn_hide"
  );
  const textField = parent.children(".js--comment-field");
  btn.toggleClass("comment__btn_hide");
  anotherBtn.toggleClass("comment__btn_hide");
  textField.toggleClass("comment__text-field_show");
};

const initToggleFilterPopupHandlerListener = () => {
  $(".js--filter-toggle").on("click", toggleFilterPopupHandler);
};

const toggleFilterPopupHandler = () => {
  $(".js--filter-popup").toggleClass("show");
  $("body").toggleClass("no-scroll");
};

const initToggleLkSpoilerHandlerListener = () => {
  $(".js--toggle-lk-spoiler").on("click", toggleLkSpoilerHandler);
};

const toggleLkSpoilerHandler = (evt) => {
  $(evt.currentTarget).toggleClass("lk__sidebar-btn-spoiler_opened");
  $(".js--lk-spoiler").slideToggle(300);
};

const initLikeBtnListener = () => {
  $(".js--post-like-btn").on("click", toggleLikeBtnHandler);
};

const toggleLikeBtnHandler = (evt) => {
  $(evt.currentTarget).toggleClass("post__footer__like-btn_active");
};
