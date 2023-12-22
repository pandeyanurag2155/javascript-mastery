// array push pop 

// array shift unshift 


let fruits=["apple","mango","grapes"];
console.log(fruits);

//push (add in last position)

fruits.push("banana");
console.log(fruits);

//pop

//fruits.pop();
//console.log(fruits.pop());
let poppedFruit = fruits.pop();
console.log(fruits);
console.log(poppedFruit);

//unshift(add element in starting)
fruits.unshift("banana")
fruits.unshift("orange")
console.log(fruits)

//shift
 let removedFruit = fruits.shift();
 console.log(fruits);
 console.log("removed fruits is ", removedFruit);