const buttonPopupOpen = document.querySelector(
  ".page-header__nav-about-button"
);
const buttonPopupClose = document.querySelector(".popup__wrapper-close");
const buttonMenuOpenClose = document.querySelector(".page-header__tab");
const navMenu = document.querySelector(".page-header__nav");
const popup = document.querySelector(".popup");
const productionNav = document.querySelector(
  ".page-header__nav-about-item--production"
);
const dryersList = document.querySelector(".page-header__nav-about-item-list");
const ESC_KEYCODE = 27;

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

buttonPopupOpen.addEventListener("click", function () {
  if (!popup.classList.contains("popup--opened")) {
    addClass(popup, "popup--opened");
  }
});

productionNav.addEventListener("click", function () {
  toggleClass(dryersList, "page-header__nav-about-item-list--opened");
  toggleClass(productionNav, "page-header__nav-about-item--opened");
});

buttonMenuOpenClose.addEventListener("click", function () {
  toggleClass(navMenu, "page-header__nav--opened");
});

window.addEventListener("click", function (e) {
  if (e.target === popup) {
    removeClass(popup, "popup--opened");
  }
});

document.addEventListener("keydown", function (e) {
  if ((e.keyCode === ESC_KEYCODE) & popup.classList.contains("popup--opened")) {
    removeClass(popup, "popup--opened");
  }
});

buttonPopupClose.addEventListener("click", function () {
  if (popup.classList.contains("popup--opened")) {
    removeClass(popup, "popup--opened");
  }
});