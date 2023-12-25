//understand callback
//A callback function is a function that is passed as an argument to another function. It is then invoked inside the outer function to complete a routine or action.
// function myFunc(){
//     console.log("Function is doing some task");
// }
// function myFunc2(){
//     console.log("FUNCTION IS DOING TASK 2")
// }

// myFunc();
// myFunc2();

// function myFunc(callback){
//     console.log("Function is doing some task");
//     callback();
// }
// // function myFunc2(){
// //     console.log("Function is doing task 2")
// // }

// // myFunc(myFunc2);
// // myFunc(function()=>{
// //     console.log("function is doing task 2")
// // });
// myFunc(()=>{
//     console.log("function is doing task 2")
// });
// function getTwoNumbersAndadd(number1,number2,callback){
//     // console.log(number1,number2);
//     if(typeof number1 === "number" && typeof number2 === "number"){
//     callback(number1,number2)
//     }else{
//         console.log("wrong Data Type");
//     }
// }

function getTwoNumbersAndadd(number1, number2, onSuccess, onfailure) {
    // console.log(number1,number2);
    if (typeof number1 === "number" && typeof number2 === "number") {
        onSuccess(number1, number2)
    } else {
        onfailure();
    }
}



// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }

// getTwoNumbersAndadd(4,5,addTwoNumbers)
//  getTwoNumbersAndadd(4,"5",(num1,num2)=>{
//     console.log(num1+num2);
//  })
getTwoNumbersAndadd(4,
    "5",
    (num1, num2) => {
        console.log(num1 + num2);
    },
    () => {
        console.log("wrong data type");
        console.log("please pass number only")
    })


