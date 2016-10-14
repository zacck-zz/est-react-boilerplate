var obj = {
  name: 'Zacck',
  printName: function () {
    console.log(`my name is ${this.name}`)
  }
};

//run auto bound func
obj.printName();

//failing callback
//this binding has already moved on
setTimeout(obj.printName.bind({name: 'Osiemo'}), 1000);
