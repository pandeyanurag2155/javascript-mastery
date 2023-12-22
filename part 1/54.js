//call back function

// function myFunc2(name){
//     console.log("inside my func 2")
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//     console.log("hello there I am a func and I can..")
//     callback("anurag");
// }


// myFunc(myFunc2);

function greeting(name) {
    console.log(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    console.log("Please enter your name.");
    callback("anurag");
  }
  
  processUserInput(greeting);
  