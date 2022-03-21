// This is a class based design pattern
// Constructors are special functions that are used to instantiate new objects with methods and properties defined in it


// function based syntax
function Hero(name, specialAbility){
  //properties
  this.name = name;
  this.specialAbility = specialAbility;
  
  //methods
  this.getDetails = function(){
    return this.name+' can '+this.specialAbility;
  }
}


// ES6 class based syntax
class Hero {
  constructor(name, specialAbility){
    this.name = name;
    this.specialAbility=specialAbility
  }

  getDetails = function(){
    return `${this.name} can ${this.specialAbility}`
  }
}

// creating instance 
const IronMan = new Hero('Iron man', 'fly');
console.log(IronMan.getDetails());