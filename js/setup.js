'use strict';
(function () {
  var setup = document.querySelector('.setup');

  var userDialog = document.querySelector('.setup');

  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var wizards = window.wizards.getWizards();
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var addWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };
  addWizards(wizards);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
  var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = setup.querySelector('input[name="fireball-color"]');


  var wizardCoatClickHandler = function () {
    wizardCoat.style.fill = window.colorize.getRandomCoat();
    wizardCoatInput.value = wizardCoat.style.fill;
  };

  var wizardEyesClickHandler = function () {
    wizardEyes.style.fill = window.colorize.getRandomEyes();
    wizardEyesInput.value = wizardEyes.style.fill;
  };

  var wizardFireballClickHandler = function () {
    var randomFireball = window.colorize.getRandomFireball();
    wizardFireball.style.background = randomFireball;
    wizardFireballInput.style.background = randomFireball;
  };

  wizardCoat.addEventListener('click', wizardCoatClickHandler);
  wizardEyes.addEventListener('click', wizardEyesClickHandler);
  wizardFireball.addEventListener('click', wizardFireballClickHandler);
})();
