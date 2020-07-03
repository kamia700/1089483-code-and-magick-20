'use strict';
(function () {
  var setup = document.querySelector('.setup');

  var userDialog = document.querySelector('.setup');

  document.querySelector('.setup-similar').classList.remove('hidden');

  var form = userDialog.querySelector('.setup-wizard-form');

  var submitHandler = function (evt) {
    window.backend.save(new FormData(form), function () {
      window.dialog.closePopup();
    });
    evt.preventDefault();
  };
  form.addEventListener('submit', submitHandler);


  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  var wizardFireballInput = setup.querySelector('input[name="fireball-color"]');

  var wizardFireballClickHandler = function () {
    var randomFireball = window.colorize.getRandomFireball();
    wizardFireball.style.background = randomFireball;
    wizardFireballInput.style.background = randomFireball;
  };

  wizardFireball.addEventListener('click', wizardFireballClickHandler);

  var wiz = [];
  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render.addWizards(wiz.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.colorize.wizard.onEyesChange = window.debounce.setDebounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.colorize.wizard.onCoatChange = window.debounce.setDebounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var successHandler = function (data) {
    wiz = data;
    updateWizards();
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
})();
