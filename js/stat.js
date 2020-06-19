'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;

  var CLOUD_X = 100;
  var CLOUD_Y = 10;

  var TEXT_HEIGHT = 20;

  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var BAR_GAP = 50;

  var GAP = 10;

  var YOUR_COLOR = 'rgba(255, 0, 0, 1)';

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = Math.max.apply(null, arr);
    return maxElement;
  };

  var renderHeader = function (ctx) {
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', CLOUD_X + BAR_GAP, CLOUD_Y + GAP);
    ctx.fillText('Список результатов:', CLOUD_X + BAR_GAP, CLOUD_Y + GAP * 2 + TEXT_HEIGHT);
  };

  var renderName = function (ctx, players, i) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT + CLOUD_Y - GAP * 2);
  };

  var renderBar = function (ctx, players, i, times) {
    var maxTime = getMaxElement(times);
    var barHeight = BAR_HEIGHT * times[i] / maxTime;
    var time = Math.round(times[i]);
    ctx.fillText(time, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT + CLOUD_Y - GAP * 2 - barHeight - TEXT_HEIGHT * 2);

    var barRendomBlue = 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 50%)';
    var barColor = players[i] === 'Вы' ? YOUR_COLOR : barRendomBlue;
    ctx.fillStyle = barColor;
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT + CLOUD_Y - TEXT_HEIGHT * 2, BAR_WIDTH, -barHeight);
  };

  var renderBars = function (ctx, players, times) {
    for (var i = 0; i < players.length; i++) {
      renderName(ctx, players, i);

      renderBar(ctx, players, i, times);
    }
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    renderHeader(ctx);
    renderBars(ctx, players, times);
  };
})();
