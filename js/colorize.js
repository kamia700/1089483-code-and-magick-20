'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var getRandomCoat = function () {
    return window.util.getRandomElement(COAT_COLORS);
  };
  var getRandomEyes = function () {
    return window.util.getRandomElement(EYES_COLORS);
  };
  var getRandomFireball = function () {
    return window.util.getRandomElement(FIREBALL_COLORS);
  };

  window.colorize = {
    getRandomCoat: getRandomCoat,
    getRandomEyes: getRandomEyes,
    getRandomFireball: getRandomFireball,
  };

})();
