//static list vs live list

// querySelectorAll hamein static list degi
// getElementsBySomething hamein live list degi

// const listitems=document.querySelectorAll(".todo-list li");
const ul=document.querySelector(".todo-list")
const listItems =ul.getElementsByTagName("li");


const sixthli=document.createElement("li");
sixthli.textContent="item 6";
// const ul=document.querySelector(".todo-list")
ul.append(sixthli)
console.log(listItems)
