//event bubbling /event prpogation
// event capturing
//event delegation

// console.log("hello world")
const grandparent=document.querySelector(".grandparent")
// const parent=document.querySelector(".parent")
// const child=document.querySelector(".child")

//event capturing
// child.addEventListener("click",(e)=>{
//     console.log("you clicked on child!!!")
// },true)

// parent.addEventListener("click",(e)=>{
//     console.log("you clicked on parent")
// },true)

// grandparent.addEventListener("click",(e)=>{
//     console.log("you clicked on grandparent")
// },true)

// document.body.addEventListener("click",(e)=>{
//     console.log("you clicked on body")
// },true)


// child.addEventListener("click",(e)=>{
//     console.log("you clicked on child!!!")
// })

// parent.addEventListener("click",(e)=>{
//     console.log("you clicked on parent")
// })

// grandparent.addEventListener("click",(e)=>{
//     console.log("you clicked on grandparent")
// })

// document.body.addEventListener("click",(e)=>{
//     console.log("you clicked on body")
// })

//event delegation
grandparent.addEventListener("click",(e)=>{
    // console.log("you clicked something!!!")
    // console.log(e.target.textContent)
    console.log(e.target)
})