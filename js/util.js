'use strict';

(function () {
  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var isEscEvent = function (evt, action) {
    if (evt.key === 'Enter') {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === 'Escape') {
      action();
    }
  };

  window.util = {
    getRandomElement: getRandomElement,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
  };
})();
