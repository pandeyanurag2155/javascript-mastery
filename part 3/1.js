//synchronous programming vs asynchronous programming
// synchronous programming


//javascript is a synchronous programming and singke thread launguage haiii
//jitni programming hamne abhi tk part 1 and 2 me ki haii wo synchronous programming hi haii
// console.log("script start")

// for(let i=1;i<1000;i++){
//     console.log("inside for loop");
// }

// console.log("script end");

//setTimeout


//GEC create hoga aur web api provided by browser callbackqueue hoga aur eventloop
//1 line execute hogi uske baad settimeout wala function jo ki web api provide krta haii settimeout usme chala jayega aur wait krega ki 1 sec kb hoga tb tk aage file execute hogi
//line 3 execute hogi aur jb ek sec khtm hoga tb browser settime out wale function ko call back queue me bhejega
//aur jbtk gec khali nhi hoga tb tk fuction callback queue me hi rahega jb callback queue khali hojayega to
//event loop callback queue se function ko gec me bhejega aur execution hoga first come first serve basis pe

// console.log("script start") //1
// function hello(){   //2
//     console.log("inside set timeout") 
// }
// setTimeout(hello,1000) //3
// console.log("script end")

console.log("script start") 

const id=setTimeout(()=>{              //ye hamare aage wale ko code ko block nhi kr rha ye kam side by side ho rha haii 
    console.log("inside set timeout") 
},0) 
//settimeout rturn me ek id deta haii
for(let i=0;i<100;i++){
    console.log("....")
}
console.log("settimeout id is ",id);
clearTimeout(id) //yaha settimeout print nhi hoga 
console.log("script end")

