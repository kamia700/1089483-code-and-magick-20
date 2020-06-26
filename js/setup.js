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
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var successHandler = function () {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.wizards.WIZARDS_NUMBER; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  var form = userDialog.querySelector('.setup-wizard-form');

  var submitHandler = function (evt) {
    window.backend.save(new FormData(form), function () {
      window.dialog.closePopup();
    });
    evt.preventDefault();
  };
  form.addEventListener('submit', submitHandler);


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
