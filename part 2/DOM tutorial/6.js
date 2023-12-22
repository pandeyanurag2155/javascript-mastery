//get and set attributes

const link=document.querySelector("a")
 console.log(link.getAttribute("href").slice(1));
link.setAttribute("href","https://codprog.com");
console.log(link.getAttribute("href"));


// const inputelement=document.querySelector(".form-todo input")
// console.log(inputelement.getAttribute("type"))
