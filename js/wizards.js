'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];


  var WIZARDS_NUMBER = 4;

  var getName = function () {
    return window.util.getRandomElement(WIZARD_NAMES) + ' ' + window.util.getRandomElement(WIZARD_LAST_NAMES);
  };

  var createWizard = function () {
    var wizard = {};
    wizard.name = getName(WIZARD_NAMES, WIZARD_LAST_NAMES);
    wizard.colorCoat = window.colorize.getRandomCoat();
    wizard.eyesColor = window.colorize.getRandomEyes();
    return wizard;
  };
  createWizard();

  var getWizards = function () {
    var wizards = [];
    for (var j = 0; j < WIZARDS_NUMBER; j++) {
      wizards[j] = (createWizard());
    }
    return wizards;
  };

  window.wizards = {
    getWizards: getWizards,
    WIZARDS_NUMBER: WIZARDS_NUMBER,
  };
})();
