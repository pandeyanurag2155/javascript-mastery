//functions in javascript
function singhhappyBirthday(){
    console.log("happy birthday to you...")

}
singhhappyBirthday();

function sumTwoNumbers(number1,number2){
   // console.log(2+4);
   return number1+number2;
}

const returnedValue= sumTwoNumbers(4,5);
//  console.log(twoPlusFour());
console.log(returnedValue);


function isEven (number){
    if(number%2==0){
        return true;
    }
}

const ans=isEven(4);
console.log(ans)

const firstChar = function(anyString){
    return anyString[0];
}

console.log(firstChar("zbc"));

const findTarget = function(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray=[1,3,8,90]
const answer=findTarget(myArray,4);
console.log(answer);
