var jsAspect = require('js-aspect');

// console.log(jsAspect.Pointcut)

// Define behaviour of the afterAdvice
var afterAdviceBehaviour = function() {
    console.log("joinPoint", "after");
 };
 var afterAdvice =  new jsAspect.Advice.After(afterAdviceBehaviour, jsAspect.Pointcut.METHODS); //set the pointcut
 console.log(afterAdvice)

 var beforeAdviceBehaviour = function() {
    console.log("joinPoint", "before");
 };
 var beforeAdvice = new jsAspect.Advice.Before(beforeAdviceBehaviour, jsAspect.Pointcut.METHODS); //set the pointcut 
 var aspect = new jsAspect.Aspect(beforeAdvice, afterAdvice);
console.log(aspect)

function Target() {
    this.method1 = function() {
        return "method1value";
    };
}
var target = new Target();
//Apply aspect on the object instead of the prototype
aspect.applyTo(target);

target.method1();
 //Define behaviour of the beforeAdvice
//  var beforeAdviceBehaviour = function() {
//     console.log("joinPoint", "before");
//  };
//  var beforeAdvice = new jsAspect.Advice.Before(beforeAdviceBehaviour, jsAspect.POINTCUT.METHODS); //set the pointcut 
 
//  //create the aspect
//  var aspect = new jsAspect.Aspect(beforeAdvice, afterAdvice);
 
//  function Target() {
//      this.method1 = function() {
//          return "method1value";
//      };
//  }
//  var target = new Target();
//  //Apply aspect on the object instead of the prototype
//  aspect.applyTo(target);
 
//  target.method1();
 