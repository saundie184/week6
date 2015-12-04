// //Closure constructor format (don’t need to use the new keyword):
//
// //closure - store something and keeps it in memory
//
// var CookableObject = function(name, status, cookFunction) {
//   //we can store items up here and not return them; the outside world cannot access them
//   var _status = status;
//   var _name = name;
//   var _eaten = false;
//
//   //Interface:
//   //this is what is the interface, what the outside world sees
//   //bridge to your program and the outside world
//   return {
//     cook: function() {
//       _status = 'toasted';
//     },
//
//     //getters or accessors
//     getStatus: function() {
//       return _status;
//     },
//     getName: function() {
//         return _name;
//       }
//       //a getter for a boolean is to use "is"
//     isEaten: function() {
//       return _eaten;
//     },
//     //a setter or mutator
//     setEaten: function(newVal) {
//       _eaten = newVal;
//     }
//   }
// };


//Polymorphism

var Shape = function(newSize, newColor) {
  //call super constructor
  var _size = newSize;
  var _color = newColor;
  return {
    getArea: function() {
      console.log('ERR: not implemented');
    },
    getSize: function() {
      return _size;
    },
    getColor: function() {
      return _color;
    }
  };
};

var Circle = function(newSize, newColor) {
  var self = Shape(newSize, newColor);
  //override parent function
  self.getArea = function() {
    return 3.14 * self.getSize() * self.getSize();
  }
  return self;
};

var Square = function(newSize, newColor) {
  var self = Shape(newSize, newColor);
  //override parent function
  self.getArea = function() {
    return self.getSize() * self.getSize();
  }
  return self;
};

var myCircle = Circle(5, 'white');
console.log(myCircle.getArea());

var mySquare = Square(5, 'black');
console.log(mySquare.getArea());
