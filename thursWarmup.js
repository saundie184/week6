var Distance = function(x){
  return {
    x: x,
    subtract: function(mileage){
      return new Distance(this.x - mileage.x);
    },
    add: function(mileage){
      return new Distance(this.x + mileage.x);
    }
  }
};

var myDistance = new Distance(100);
var yourDistance = new Distance(30);

var subtractedDistance = myDistance.subtract(yourDistance);
var totalDistance = myDistance.add(yourDistance);
// console.log(totalDistance.x);


// Create a constructor function and call it Vector2.
// It should take x and y as parameters.
var Vector2 = function(xArg, yArg) {
  //sometimes you put logic up here
  //
  return {
    // It should assign the parameters as properties to itself.
    x: xArg,
    y: yArg,
    // Give the Vector2 object 2 methods, subtract and add
    // subtract and add each take one parameter and will assume it is another vector2. E.g. myVector.subtract(otherVector)
    // subtract should return a new Vector2 with its x set to this.x - otherVector.x and its y set to this.y - otherVector.y
    subtract: function(vector2) {
      //create a new object that takes 2 parameters
      //important to call a contructor so that you can call subtract on it
      //want it to do everything Vector2 can do
       return new Vector2(this.x - vector2.x, this.y - vector2.y);
    },
    // add should return a new Vector2 with its x set to this.x + otherVector.x and its y set to this.y + otherVector.y
    add: function(vector2) {
      return new Vector2(this.x + vector2.x, this.y + vector2.y);
    },
    multiply: function(vector2){
      return new Vector2(this.x * vector2.x, this.y * vector2.y);
    },
    divide: function(vector2){
      return new Vector2(this.x / vector2, this.y / vector2);
      return new Vector2(this.x / vector2, this.y / vector2);

    }
  }
};


var myVector = new Vector2(20, 40);
var otherVector = new Vector2(5, 10);

var subtractedVector = myVector.subtract(otherVector);
var addedVector = myVector.add(otherVector);
var multipliedVector = myVector.multiply(otherVector);
var dividedVector = myVector.divide(otherVector);

// console.log(subtractedVector.x, subtractedVector.y);
// console.log(addedVector.x, addedVector.y);
// console.log(multipliedVector.x, multipliedVector.y);
// console.log(dividedVector.x, dividedVector.y);
