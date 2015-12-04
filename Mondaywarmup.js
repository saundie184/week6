//Write a function called parseQueryString which takes a URL string as an argument and returns
// a Javascript object containing the key-value pairs from the query string.

function parseQueryString(x) {
  var newObj = {};
  var arrayQuery = x.split("?");
  //create new array and then parse by the &
  var arrayPairs = arrayQuery[1].split("&");
  //write a for  loop that runs for each index, split and then make it the key-value
  for (var i = 0; i < arrayPairs.length; i++) {
    //  console.log(arrayPairs[i].split('=')[0]);
    //set up the key and value
     newObj[arrayPairs[i].split('=')[0]] = (arrayPairs[i].split('=')[1])
  }
  console.log(newObj);
}

parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week");

//try an accumulator method pattern to solve it a different way
function parseQueryString2 (stg){
  var obj = {};
  for(var i = 0; i < string.length; i ++){
    stg[i]
    
  }
}

key += url[i]
