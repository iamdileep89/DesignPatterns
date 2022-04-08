/*
This pattern provides a chain of loosely coupled objects, each of these objs can choose to act on or handle the request of the client

In this example, we create a class CumulativeSum, which can be instantiated with an optional initialValue. It has a method add that adds the passed value to the sum attribute of the object and returns the object itself to allow chaining of add method calls.

*/


class Cumulative {
  constructor(initialValue = 0){
    this.sum = initialValue
  }

  add(value){
    this.sum+=value
    return this
  }
}


const sum1 = new Cumulative()
console.log(sum1.add(10).sum(20).sum(3).sum)