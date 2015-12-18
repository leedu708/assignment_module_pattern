var WHACKAMOLE = WHACKAMOLE || {};

WHACKAMOLE.board = (function() {

  var $board;
  var $scoreboard;

  // build board
  function init() {
    $board = $('.container');
    $scoreboard = $('.score-container');
    $scoreboard.children('#reset-score').click( WHACKAMOLE.gameModule.reset );

    var numOfMoles = WHACKAMOLE.gameModule.getNumOfMoles();
    for (var i = 0; i < numOfMoles; i++) {
      _drawMole(i);
    };
  };

  // div with class "mole"
  function _drawMole(i) {
    var $mole = $("<div class='mole'></div>");
    $mole.appendTo($board);
  };

  // adds click listener
  function controlsOn() {
    $board.on('click', WHACKAMOLE.gameModule.userClick)
  };

  function controlsOff() {
    $board.off('click');
  };

  // adds class "on"
  function moleOn(moleID) {
    $board.children().eq(moleID).addClass("on");
  };

  // removes class "on"
  function moleOff(){
    $board.children().removeClass("on");
  };

  // update score text
  function updateScore(score) {
    $scoreboard.children('.score').text("Score: " + score);
  };

  // update timer text
  function updateTimer() {
    $scoreboard.children('.timer').text("Time: " + WHACKAMOLE.gameModule.getTime() );
  };


  return {
    init: init,
    controlsOn: controlsOn,
    controlsOff: controlsOff,
    moleOn: moleOn,
    moleOff: moleOff,
    updateScore: updateScore,
    updateTimer: updateTimer
  };

})();