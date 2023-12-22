//param destructuring

//object
//react

const person={
    firstName:"harshit",
    gender:"male",
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

function printDetails({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
}

printDetails(person);