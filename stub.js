var stubModule = (function() {

  var stub = {};
  var _privateVar = 10;
  var publicVar = 15;

  var _privateMethod = function() {
    return _privateVar * 2;
  };

  stub.getPublicVar = function() {
    return publicVar;
  };

  stub.setPublicVar = function(input) {
    publicVar = input;
  };

  stub.publicMethod = function() {
    return _privateMethod() * stub.getPublicVar();
  };

  return stub;

})();