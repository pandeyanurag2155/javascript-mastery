const Allbutton=document.querySelectorAll(".mybutton button")

Allbutton.forEach((button)=>{
       button.addEventListener("click",(e)=>{
            //   console.log(e)
            e.target.style.backgroundColor="yellow";
             e.target.style.color="#333"
       })
})