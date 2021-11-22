export const initHeader = () => {
  initToggleHeaderNavHandlerListener();
  initToggleSearchHandlerListener();
};

const initToggleHeaderNavHandlerListener = () => {
  $(".js--header-nav-toggle").on("click", toggleHeaderNavHandler);
};
const toggleHeaderNavHandler = () => {
  $(".js--header-nav").toggleClass("show");
  $("body").toggleClass("no-scroll");
};

const initToggleSearchHandlerListener = () => {
  $(".js--toggle-search").on("click", toggleSearchHandler);
};
const toggleSearchHandler = (evt) => {
  $(".js--header-search").toggleClass("show");
  if ($(".js--header-search").hasClass("show")) {
    setTimeout(function () {
      $(".js--header-search-input").focus();
    }, 300);
  }
};
