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
  $(".js--toggle-search").toggleClass("show");
  $(".js--search-btn").toggleClass("show");
  $(".js--header-search").toggleClass("show");
  $(evt.currentTarget).removeClass("show");
};
