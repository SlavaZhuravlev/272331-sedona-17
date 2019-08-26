var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var sendLink = document.querySelector('.form-emotions__btn--send');
var sendPopup = document.querySelector('.modal-review');
var sendClose = sendPopup.querySelector('.modal-review__exit');

sendLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  sendPopup.classList.add('modal-show');
});

sendClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  sendPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (sendPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      sendPopup.classList.remove('modal-show');
    }
  }
});
