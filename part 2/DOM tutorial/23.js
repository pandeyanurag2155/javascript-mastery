console.log("script start")
const allbuttons=document.querySelectorAll(".mybutton button")
console.log(allbuttons)

allbuttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e)
        let num=0;
        for(let i=0;i<=1000000000;i++){
            num+=i;
        }
         console.log(e.currentTarget.textContent)
    })
})

let outerVar=0;
for(let i=0;i<=10000000;i++){
    outerVar+=i;
}

console.log("value of outer variable is", outerVar)
console.log("script end!!!")