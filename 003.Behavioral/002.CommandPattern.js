/*

This is a behavioural design pattern that aims to encapsulate actions or operations as objects. This pattern allows loose coupling of systems and classes by separating the objects that request an operation or invoke a method from the ones that execute or process the actual implementation.

*/

/*
In this example, we have a class called SpecialMath that has multiple methods and a Command class that encapsulates commands that are to be executed on its subject, i.e. an object of the SpecialMath class. The Command class also keeps track of all the commands executed, which can be used to extend its functionality to include undo and redo type operations.
*/


class SpecialMath {
  constructor(num) {
    this._num = num;
  }

  square() {
    return this._num ** 2;
  }

  cube() {
    return this._num ** 3;
  }

  squareRoot() {
    return Math.sqrt(this._num);
  }
}

class Command {
  constructor(subject) {
    this._subject = subject;
    this.commandsExecuted = [];
  }
  execute(command) {
    this.commandsExecuted.push(command);
    return this._subject[command]();
  }
}

// usage
const x = new Command(new SpecialMath(5));
x.execute('square');
x.execute('cube');

console.log(x.commandsExecuted); // ['square', 'cube']