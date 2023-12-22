//this keyword

const btn=document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
   console.log("you clicked me !!!!");
   console.log("Value of this")
   console.log(this)
})



//in this case of arrow function this keyword refers window object
// btn.addEventListener("click",()=>{
//     console.log("you clicked me !!!!");
//     console.log("Value of this");
//     console.log(this);
//  })