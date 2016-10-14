//higher order functions

function one(name, location) {
  //console.log(`Hi my name is ${name} and I a from ${location}`);
}

function two() {
  //arguments keyword stores all the args passed into a function
  //console.log('Args', arguments);
  one.apply(undefined, arguments);
}

two('Zacck', 'Capetown');
two.apply(undefined, ['Jen', 'Atlanta']);


//higher order  example
var add = (a, b) => a + b;

//create a square func
var square =  (a) => a * a;

//actual higher order function
var callAndLog = (func) => {
  return function() {
    //lets call the function above with arguments that will be supplied later
    var res = func.apply(undefined, arguments);
    console.log(`Result is ${res}`);
    return res;
  }
};
console.log(add(99,1));

//compose the funtion
var addAndLog = callAndLog(add);

//call composed function
addAndLog(4,5);

var squareAndLog = callAndLog(square);
 squareAndLog(4);

 squareAndLog(7);
