//keypress event
//mouseover event

// const body=document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e)
// })

const button=document.querySelector(".btn-headline")
// console.log(button)
 
button.addEventListener("mouseover",()=>{
     console.log("mouseover event occur" )
 })

button.addEventListener("mouseleave",()=>{
    console.log("mouseleave event occur")
})
