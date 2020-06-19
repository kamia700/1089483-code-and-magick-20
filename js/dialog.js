'use strict';

(function () {
  var POPUP_POSITION_TOP = 80 + 'px';
  var POPUP_POSITION_LEFT = 50 + '%';

  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');

  var setupUserName = setup.querySelector('.setup-user-name');

  var PopupEscPressHandler = function (evt) {
    if (evt.key === 'Escape' && setupUserName !== document.activeElement) {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    setup.style.top = POPUP_POSITION_TOP;
    setup.style.left = POPUP_POSITION_LEFT;

    document.addEventListener('keydown', PopupEscPressHandler);
  };

  var closePopup = function () {
    setup.classList.add('hidden');

    document.removeEventListener('keydown', PopupEscPressHandler);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });


  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });
})();
