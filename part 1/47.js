//arrow function

const singhHappyBirthday=()=>{
    console.log("happy birthday to you")
}
singhHappyBirthday();


const sumThreeNumbers = (number1, number2, number3)=>{
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,4);
console.log(ans)

// const isEven = (number)=>{
//     return number % 2 === 0;
// }

const isEven = number => number % 2 === 0;
 console.log(isEven(2));