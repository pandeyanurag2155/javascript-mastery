//function inside  function

function app(){
    const myfun= ()=>{
        console.log("hello from myfunc")
    }

    const addtwo=(num1,num2)=>{
       return num1+num2;
    }

    const mul=(num1,num2)=>num1*num2;
    console.log("inside app")
    myfun();
}
app();