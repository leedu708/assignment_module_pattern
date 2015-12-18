var warmupModule = (function() {

  var _privateVar = 10;
  var publicVar = 15;

  var _privateMethod = function() {
    return _privateVar * 2;
  };

  var getPublicVar = function() {
    return publicVar;
  };

  var setPublicVar = function(input) {
    publicVar = input;
  };

  var publicMethod = function() {
    return getPublicVar() + _privateMethod();
  };

  return {
    getPublicVar: getPublicVar,
    setPublicVar: setPublicVar,
    publicMethod: publicMethod
  };

})();