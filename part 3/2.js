//set interval
// console.log("script start");
// // setInterval(()=>{
// //     console.log(Math.random());
// // },1000)
// console.log("script end");

//1st line execute hogi uske baad setInterval wala function haii wo web api ko milega kyoki wo browser ka function hai na ki javascript ka
//phir 3 line execute hogi agar tb tk setinterval wala function execute ho gya hoga to wo usko call back queue me daal dega aur jb tk Global execution
//context khali nhi hoga tb tk event loop uss callbackqueue ko GEC me push nhi hoga aur callback queue se ek ek karke jayenge 
//fhir unka execution start hoga


// console.log("script start")
// // setInterval(()=>{
// //   let total=0;
// //   for(let i=0;i<10000000;i++){
// //     total+=i;
// //   }
// //   console.log(total);
// //   console.log(Math.random())
// // },500)
// console.log("script end")

const body=document.body;
const button=document.querySelector("button");
const intervalId= setInterval(()=>{
    const red=Math.floor(Math.random()*126)
    const green=Math.floor(Math.random()*126)
    const blue=Math.floor(Math.random()*126)
    const rgb=`rgb(${red},${green},${blue})`
    // console.log(rgb);
    body.style.background=rgb;

},1000)

button.addEventListener("click",()=>{
    clearInterval(intervalId);
    button.textContent=body.style.background;
})