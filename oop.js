'use strict';

//capitalize constructor functions, continue camelcase
var Vehicle = function() {

  var _maxSpeed = 50;

  //Interface:
  return {
    horn: 'honk',
    moving: 'steady',
    // maxSpeed: 50,
    wheels: 4,
    passengers: 2,
    move: function(speed) {
      // this.maxSpeed = speed;
      _maxSpeed = speed;
    }
  }
};

var Car = function() {
  var car = Vehicle();
  car.passengers = 5;
  car.move = function(speed) {
      this.maxSpeed = speed + 10;
    }
    car.noise = function(sound) {
      this.horn = sound;
    }
  return car;
};

var myCar = Car();
myCar.move(89);
myCar.noise('hooonnnnkkk');

console.log(myCar.horn);

// var bike = {
//   moving: 'cruise',
//   locked: false,
//   move: function(speed){
//     this.moving = speed;
//   }
// };
//
// var skateboard = {
//   moving: 'fast',
//   mode: 'kick',
//   move: function(speed){
//     this.moving = speed;
//   }
// };
//
// var person = {
//   name: 'Bob',
//   ride: function(vehicle, speed){
//     vehicle.move(speed);
//   }
// };
//
// person.ride(bike, 'super slow');
// // skateboard.toStart('slow');
// console.log(bike.moving);



//
// var bike = {
//   moving: true,
//   locked: false,
//   tireState: 'full',
//   ride: function(person) {
//     if (this.locked === true) {
//       return person + " needs a key to unlock the bike.";
//     } else if (this.tireState === 'flat') {
//       return person + " needs a tire pump."
//     } else if (this.moving) {
//       return person + " is riding a bike."
//     } else {
//       return 'The bike is parked.'
//     }
//   }
// };
//
// // bike.tireState = 'flat';
// // console.log(bike.ride('Bob'));
