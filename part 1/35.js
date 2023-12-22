//array destructuring
// const myArray=["value1","value2"];
const myArray = ["value1", "value2", "value3","value4"];
// // let a=myArray[0];
// // let b=myArray[1];
// // console.log("value of myvar1", myvar1);
// // console.log("value of myvar2", myvar2);
// let [myvar1,myvar2]=myArray;
//  console.log("value of myvar1", myvar1);
//  console.log("value of myvar2", myvar2);
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);