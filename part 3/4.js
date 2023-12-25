//callbacks,callback hell, pyramid of doom
//asynchronous programming

// console.log("hello world")
const heading1 = document.querySelector(".heading-1")
const heading2 = document.querySelector(".heading-2")
const heading3 = document.querySelector(".heading-3")
const heading4 = document.querySelector(".heading-4")
const heading5 = document.querySelector(".heading-5")
const heading6 = document.querySelector(".heading-6")
const heading7 = document.querySelector(".heading-7")
const heading8 = document.querySelector(".heading-8")
const heading9 = document.querySelector(".heading-9")
const heading10= document.querySelector(".heading-10")

// setTimeout(()=>{
//    heading1.textContent="Heading 1"
//    heading1.style.color="Red"
// },1000)

// setTimeout(()=>{
//     heading2.textContent="Heading 2"
//     heading2.style.color="Purple"
//  },2000)

//callback hell
// setTimeout(() => {
//     heading1.textContent = "one"
//     heading1.style.color = "violet"
//     setTimeout(() => {
//         heading2.textContent = "two"
//         heading2.style.color = "purple"
//         setTimeout(() => {
//             heading3.textContent = "three"
//             heading3.style.color = "red"
//             setTimeout(() => {
//                 heading4.textContent = "four"
//                 heading4.style.color = "pink"
//                 setTimeout(() => {
//                     heading5.textContent = "five"
//                     heading5.style.color = "green"
//                     setTimeout(() => {
//                         heading6.textContent = "six"
//                         heading6.style.color = "blue"
//                         setTimeout(() => {
//                             heading7.textContent = "seven"
//                             heading7.style.color = "brown"
//                         }, 2000)
//                     }, 3000)
//                 }, 2000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// }, 1000)


function changeText(element,text,color,time,onSuccessCallback,onfailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent=text;
            element.style.color=color;
            if(onSuccessCallback){
                onSuccessCallback()
            }
        }else{
            if(onfailureCallback){
                onfailureCallback();
            }
        }
    },time)
}

// changeText(heading1,"one","violet",2000,()=>{
//     changeText(heading2,"two","green",1000)
// })


//pyramid of dom
changeText(heading1,"one","violet",2000,()=>{
    changeText(heading2,"Two","red",1000,()=>{
        changeText(heading3,"three","green",1000,()=>{
            changeText(heading4,"four","pink",1000,()=>{
                changeText(heading5,"five","brown",1000,()=>{
                    changeText(heading6,"six","purple",1000,()=>{
                        changeText(heading7,"seven","grey",1000,()=>{
                            changeText(heading8,"eight","cyan",2000,()=>{
                                changeText(heading9,"nine","orange",1000,()=>{
                                    changeText(heading10,"Ten","orangered",1000,()=>{
                                      console.log("done")
                                    },()=>{console.log("Heading7 does not exist")})
                                },()=>{console.log("Heading7 does not exist")})
                            },()=>{console.log("Heading7 does not exist")})
                        },()=>{console.log("Heading7 does not exist")})
                    },()=>{console.log("Heading6 does not exist")})
                },()=>{console.log("Heading5 does not exist")})
            },()=>{console.log("Heading4 does not exist")})
        },()=>{console.log("Heading3 does not exist")})
    },()=>{console.log("Heading2 does not exist")})
},()=>{console.log("Heading1 does not exist")})