var WHACKAMOLE = WHACKAMOLE || {};

WHACKAMOLE.moleModule = (function() {

  var _next_id;
  var moles;

  // holds ID of mole that is on
  var _activeMoleID;

  function init() {
    _next_id = 0;
    moles = [];
  };

  // mole object with ID, and on state
  function _Mole() {
    this.id = _next_id;
    this.on = false;
    _next_id++;
  };

  // set current mole to on and return the mole
  _Mole.prototype.turnOn = function() {
    this.on = true;
    _activeMoleID = this.id;
    return this;
  };

  // turn off current mole
  _Mole.prototype.turnOff = function() {
    this.on = false;
    _activeMoleID = -1;
  };

  // builds moles
  function buildMoles(num) {
    for (var i = 0; i < num; i++) {
      var newMole = new _Mole();
      moles.push(newMole);
    };
    return moles;
  };

  // turns random mole on and returns its ID
  function moleOn() {
    var i = Math.floor(Math.random() * moles.length);
    var mole = moles[i].turnOn();
    return mole.id;
  };

  // turns off mole
  function moleOff() {
    moles[_activeMoleID].turnOff();
  };

  // checks if moleID is the same as the one that's on
  function isOn(moleID) {
    return (moleID === _activeMoleID);
  };

  function getMoles() {
    return moles;
  };


  return {
    init: init,
    buildMoles: buildMoles,
    moleOn: moleOn,
    moleOff: moleOff,
    getMoles: getMoles,
    isOn: isOn
  };

})();