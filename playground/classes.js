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


//NEw class that extends another
class Child extends Person {
  //override existing class
  constructor(name, age, like) {
    super(name, age);
    this.like = like;
  }
  getGreeting() {
    return `Hiiiiiiiii! my name is ${this.name} and I like ${this.like}.`;
  }

  //new methods

}


//challenge class
class Baby extends Person {
  getGreeting() {
    return 'Waaaaaaaaahhhhhhhhh';
  }
}

//instance
var me = new Person('Zacck', 26);
var anon = new Child('Mike', 4, 'cars');
var baby = new Baby('Wendy', 1);

console.log(me.getGreeting());
console.log(me.printDescription());


console.log('child calls', anon.getGreeting());
console.log('baby calls', baby.getGreeting());







//challenge add a variable to constructor and log a result from it
