// for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

// for (const index in fruits) {
//    console.log(index)
// }
for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);