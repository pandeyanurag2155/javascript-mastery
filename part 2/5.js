//closures in javascript


//function can return function
// function myFunc(){
//     return [1,2];
// }
// const ans=myFunc();
// console.log(ans);


// function outerFunction(){
//     function innerFunction(){
//         console.log("Hello World")
//     }
//     return innerFunction;
// }
// const ans=outerFunction();
// //console.log(ans);
// ans();


function printFullName(firstName, lastName) {
    function printName() {
    console.log(firstName, lastName);
    }
    return printName;
    }
    const ans = printFullName("harshit", "sharma");
    // console.log(ans);
    ans();