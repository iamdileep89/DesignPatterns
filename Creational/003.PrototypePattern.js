// This patten uses a sort of a skeleton of an existing object to create or instantiate new objects

// using object.create is recommended by es5 standard

const car = {
  noOfWheels :4,
  start(){
    return 'started'
  },
  stop(){
    return 'stopped'
  }
};

// Object.create(proto[, propertiesObject])
const myCar = Object.create(car, {
  owner: {
    value: 'john'
  }
})

console.log(myCar.__proto__ === car)