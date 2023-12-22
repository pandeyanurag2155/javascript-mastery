const todoform = document.querySelector(".form-todo")
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList =document.querySelector(".todo-list")

// console.log(todoform)
// console.log(todoInput)
todoform.addEventListener("submit", (e) => {
    e.preventDefault() //page refresh nhi hoga
    // console.log(todoInput.value)
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li")
    const newLiInnerHTML = `<span class="text">${newTodoText}</span>
     <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn Remove">Remove</button>
     </div>`
   newLi.innerHTML=newLiInnerHTML
//    console.log(newLi)
   todoList.append(newLi)
    todoInput.value = ""

})

todoList.addEventListener("click",(e)=>{
     console.log(e.target)
    //  console.log(e.target.classList)
  if(e.target.classList.contains("Remove")){
    // console.log("you want to remove Something ?")
    const taregetedLi=e.target.parentNode.parentNode
    taregetedLi.remove()
  }  
  if(e.target.classList.contains("done")){
    // console.log("great !!!")
    const lispan=e.target.parentNode.previousElementSibling
    lispan.style.textDecoration="line-through"
  }   
})