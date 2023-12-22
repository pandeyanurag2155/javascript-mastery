//important array method

//for each 
//value aur index dono pass krta hai

const number=[4,3,2,8]
// function myfunc(number,index){
//     // console.log(`index is ${index} number is ${number} `);
//     // console.log(`${number}*2=${number*2}`);
// }

// multiplyBy2(number[0],0);
// for(let i=0;i<number.length;i++){
//   // console.log(i);
//   myfunc(number[i],i);
// }

// number.forEach(myfunc);

// number.forEach(function(number,index){
//   console.log(`index is ${index} number is ${number} `); 
// });

// number.forEach(function(number){
//   console.log(`number is ${number*2} `); 
// });

const users=[
  {firstname:"anurag",age:23},
  {firstname:"amrit",age:20},
  {firstname:"anu",age:21},
  {firstname:"a",age:24}
]

users.forEach(function(user){
  console.log(user.age);
})


