var WHACKAMOLE = WHACKAMOLE || {};

WHACKAMOLE.gameModule = (function() {

  // moles on board
  var numOfMoles;

  // game loop and interval
  var _playing;

  // timer for the moles
  var _moleTimer;

  // determines if there is an active mole
  var _activeMole;

  // current score
  var score;

  // current game timer
  var gameTimer;

  function init(num) {
    numOfMoles = num;
    _playing = false;
    WHACKAMOLE.moleModule.init();
    WHACKAMOLE.moleModule.buildMoles(numOfMoles);
    WHACKAMOLE.board.init();
    startGame();
  };

  // sets up variables and turns on the board
  function startGame() {
    score = 0;
    gameTimer = 0;
    _moleTimer = 0;
    WHACKAMOLE.board.controlsOn();
    _playing = setInterval(_gameloop, 1000)
  };

  // updates timers and toggles moles
  function _gameloop() {
    _moleTimer += 1000;
    gameTimer += 1.0;
    WHACKAMOLE.board.updateTimer();

    var chance = _moleTimer / (_moleTimer + 500);

    if (Math.random() < chance) {
      _toggleMole();
    };
  };

  // if activeMole, then turn off the mole
  function _toggleMole() {
    if (_activeMole) {
      _moleOff();
    }
    // turn on mole
    else {
      _moleOn();
    };
  };

  // if user clicks on mole that is on, increment score
  function userClick() {
    WHACKAMOLE.board.controlsOff();
    var moleID = $(event.target).index()
    if (WHACKAMOLE.moleModule.isOn(moleID)) {
      _moleOff();
      score += 1;
      WHACKAMOLE.board.updateScore(score);
    };
    setTimeout(WHACKAMOLE.board.controlsOn, 500);
  };

  // turns off the board, game is over
  function _gameOver() {
    WHACKAMOLE.board.controlsOff();
    clearInterval(_playing);
  }

  // turn mole on
  function _moleOn() {
    var moleID = WHACKAMOLE.moleModule.moleOn();
    WHACKAMOLE.board.moleOn(moleID);
    _activeMole = true;
  };

  // turn mole off
  function _moleOff() {
    WHACKAMOLE.moleModule.moleOff();
    WHACKAMOLE.board.moleOff();
    _activeMole = false;
  };

  function getNumOfMoles() {
    return numOfMoles;
  };

  // reset the game
  function reset() {
    score = 0;
    gameTimer = 0;
    WHACKAMOLE.board.updateScore(score);
    WHACKAMOLE.board.updateTimer();
  }

  // originally incremented timer at 0.5 since the game interval was 500ms
  function getTime() {
    return Math.floor(gameTimer);
  };

  return {
    init: init,
    getNumOfMoles: getNumOfMoles,
    userClick: userClick,
    reset: reset,
    getTime: getTime
  };

})();

$(document).ready(function() {
  WHACKAMOLE.gameModule.init(9);
})