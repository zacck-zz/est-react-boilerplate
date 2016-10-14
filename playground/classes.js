//a classs ins a function that creates a reusable object
//classes allow individual instances to have unique properties

class Person {
  //body of a class
  //contructor is called automatically when you make a new instance
  constructor (name = 'Anon', age = 0) {
    this.name = name;
    this.age = age;
  }

  //reusable method
  getGreeting (){
    return `Hi I'm ${this.name}.`;
  }

  //print desc
  printDescription() {
    return `${this.name} is ${this.age} and likes coding`;
  }

  //override an existing method
  toString () {
    return this.getGreeting();
  }
}


//instance
var me = new Person('Zacck', 26);
var anon = new Person();

console.log(me.getGreeting());
console.log('toString call', me.toString());


console.log('anon calls', anon.getGreeting());
console.log('anon calls', anon.printDescription());


//challenge add a variable to constructor and log a result from it
