'use strict';

(function () {

  var COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];

  var EYES_COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];

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


  var wizard = {
    onEyesChange: function (color) {
      return color;
    },
    onCoatChange: function (color) {
      return color;
    }
  };

  var setup = document.querySelector('.setup');

  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
  var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = setup.querySelector('input[name="fireball-color"]');

  var wizardCoatClickHandler = function () {
    var newColor = getRandomCoat();
    wizardCoat.style.fill = newColor;
    wizardCoatInput.value = newColor;
    wizard.onCoatChange(newColor);
  };

  wizardCoat.addEventListener('click', wizardCoatClickHandler);


  var wizardEyesClickHandler = function () {
    var newColor = getRandomEyes();
    wizardEyes.style.fill = newColor;
    wizardEyesInput.value = newColor;
    wizard.onEyesChange(newColor);
  };

  wizardEyes.addEventListener('click', wizardEyesClickHandler);

  var wizardFireballClickHandler = function () {
    var randomFireball = window.colorize.getRandomFireball();
    wizardFireball.style.background = randomFireball;
    wizardFireballInput.style.background = randomFireball;
  };

  wizardFireball.addEventListener('click', wizardFireballClickHandler);

  window.colorize = {
    getRandomCoat: getRandomCoat,
    getRandomEyes: getRandomEyes,
    getRandomFireball: getRandomFireball,
    wizard: wizard
  };

})();
