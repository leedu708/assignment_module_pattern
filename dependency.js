var dependentModule = (function ( otherMod ) {

  var newVar = 5;

  var dependentMethod = function() {
    return otherMod.getPublicVar() * newVar;
  };

  return {
    dependentMethod: dependentMethod
  };

})(warmupModule);