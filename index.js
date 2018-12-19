//LLAMAMOS JS-ASCPECT DE NODE_MODULES
var jsAspect = require('js-aspect');


// DEFINIMOS AFTER Y BEFOR DEVICE
var afterAdvice =  new jsAspect.Advice.After(function() {
    console.log("joinPoint", "after");
  });

var beforeAdvice = new jsAspect.Advice.Before(function() {
    console.log("joinPoint", "before");
    });


//CREAMOS ASPECTO
var aspect = new jsAspect.Aspect(beforeAdvice,  afterAdvice);
// console.log(aspect)

//PROBAMOS EL ASPECTO EN LA CLASE TARGET
//CLASS
function Target(){}

Target.prototype.method1 = function() {
    console.log("Method 1")
  return "method1value";
};

//aplicamos aspect a la clase target
aspect.applyTo(Target); 

var target = new Target();
target.method1(); 
