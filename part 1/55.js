//function returning function

// function myFunc(){
//     function hello(){
//         return "hello world"
//     }
//     return hello;
// }

//  const ans = myFunc();
// console.log(ans());
//  ans();

function magic() {
    return function calc(x) {
      return x * 42;
    };
  }
  
  const answer = magic();
//   answer(1337); 
console.log(answer(2))