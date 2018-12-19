var jsAspect = require('js-aspect');


function Class(){}
Class.prototype.__name = "Clase Prueba"; 
Class.prototype.method1 = function(param1) {
  return param1 + "-method1";
};

var beforeAdviceBehaviour = function(context) {
   console.log("Rastro:", context.target.__name, "-->", context.method.name, " con parametro");
   console.log(context.method.arguments);
};



new jsAspect.Aspect(
  new jsAspect.Advice.Before(beforeAdviceBehaviour)
).applyTo(Class);


var class2 = new Class();
class2.method1("metodo1");