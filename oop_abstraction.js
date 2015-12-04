'use strict';

//capitalize constructor functions, continue camelcase
var Vehicle = function() {

  var _horn = 'honk';
  var _moving = 'driving';
  var _minSpeed = 50;
  //Interface:
  return {
    // minSpeed: 50,
    wheels: 4,
    passengers: 2,
    getHorn: function() {
      return _horn;
    },
    getMoving: function() {
      return _moving;
    },
    setMoving: function(newMove) {
      _moving = newMove;
    },
    move: function(speed) {
      return speed - _minSpeed;
    }
  };
};

var Car = function() {
  var car = new Vehicle();
  return car;
};

var Plane = function() {
  var plane = new Vehicle();
  plane.setMoving('flying');
  plane.passengers = 300;
  plane.move = function(speed) {
    return speed * 10000;
  };
  return plane;
};

var Bike = function() {
  var bike = new Vehicle();
  bike.setMoving('cruising');
  bike.passengers = 0;
  bike.move = function(speed) {
    return speed - 4;
  };
  return bike;
};

var myPlane = new Plane();
var myBike = new Bike();
var myCar = new Car();

console.log('The plane is ' + myPlane.getMoving() + ' at ' + myPlane.move(80) + ' mph with ' + myPlane.passengers + ' passengers.');
console.log('The bike is ' + myBike.getMoving() + ' at ' + myBike.move(10) + ' mph with ' + myBike.passengers + ' passengers.');
console.log('The car is ' + myCar.getMoving() + ' at ' + myCar.move(100) + ' mph with ' + myCar.passengers + ' passengers.');
