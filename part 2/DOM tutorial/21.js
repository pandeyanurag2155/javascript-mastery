//click event on multiple event

// const firstButton=document.querySelector("#one");
// firstButton.addEventListener("click",function(){
//       console.log("you Clicked Me!!!")
// })
const AllButton=document.querySelectorAll(".mybutton button");
// console.log(AllButton)
// for(let button of AllButton){
//     button.addEventListener("click",function(){
//         // console.log("you clicked me!!!")
//         console.log(this.textContent)
//     })
// }

// for(let i = 0; i< AllButton.length; i++){
//     AllButton[i].addEventListener("click", function(){
// console.log(this);
// })

// }

AllButton.forEach(function(button){
    button.addEventListener("click",function(){
        console.log(this)
    })
})
