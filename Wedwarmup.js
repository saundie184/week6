'use strict';
//A function called "intersection" that takes two arrays as arguments and returns
//an array of the items that are in both input arrays.
//For example intersection([1,2,3], [1,3,5]) should return [1,3].

function intersection(array1, array2) {
  var newArray = [];
  //loop through the first array and compare each index to each index in array2
  array1.forEach(function(x) {
    for (var i = 0; i < array2.length; i++) {
      if (array2[i] === x) {
        newArray.push(array2[i]);
      }
    }
  })
  console.log(newArray);
}

intersection([1,2,3], [1,3,5]);

//A function caleed "union" that takes two arrays as arguments and returns
// an array of items from both arrays.
//For example, union([1,2,3], [4,5,6]) should return [1,2,3,4,5,6].
//
function union(arrayOne, arrayTwo){
  console.log(arrayOne.concat(arrayTwo));
}
union([1,2,3], [4,5,6]);


//A function called "zip" that takes two arrays as arguments and returns
//an array of items from both arrays combined in an alternating manner. F
//or example, zip([1,2,3], [4,5,6]) should return [1,4,2,5,3,6].

function zip(array1, array2) {
  var zippedArray = [];
  var counter = 0;
  if (array1.length > array2.length) {
    counter = array1.length;
  } else {
    counter = array2.length;
  }
  //make an for loop that goes through the number of times that there are longest array items
  for (var i = 0; i < counter; i++) {
    var shifted1 = array1.shift();
    var shifted2 = array2.shift();
    if (shifted2 !== undefined && shifted1 !== undefined) {
      zippedArray.push(shifted1);
      zippedArray.push(shifted2);
    }
  }
  //take array1, run shift, put shifted item in new array
  //take array2, run shift, put shifted item in new array
  console.log(zippedArray);
}

zip([1, 2, 3, 8, 9], [4, 5, 6]);

function setVal(value){
  this.value = value;
}
console.log(setVal(1));
