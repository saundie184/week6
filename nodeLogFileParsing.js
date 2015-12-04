//Construct an example that reads a file from your own filesystem.
//Why is the output from the example in the documentation so strange? Is there a "fix"?



// include the fs module

// node has built in utilities or libraries
//fs is one of them for file manipulation
//load the fs object and assign it to the variable fs
//fs is just an object to load to read and write files
var fs = require("fs");

// handle a command line argument for the filename
// var filename = 'eventLoopPractice.js';
//**** process is this current running node program ****
//to run this program type
//argv is an array of the actual command typed space delimited

//node nodeLogFileParsing.js fileYouWantToRead
//argv[0] = node
//argv[1]= nodeLogFileParsing.js
//argv[2]= fileYouWantToRead

var filename = process.argv[2];

//the first parameter to pass in is the path to the file we want to load
//the second parameter is a callback funciton that will be invoked once fs has finsished attempting to read the file

fs.readFile(filename, function(err, data) {
  if (err) throw err; //if err exists, it will be truthy; print error to console and stop the program
  fs.writeFile(filename + '.copy', data, function(err, data) {
      if (err) throw err;
      console.log('Success!!')
    })
    // what gets logged in each case?
    // console.log(data);
    //
    // console.log(data.toString());
});
