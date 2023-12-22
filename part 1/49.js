//lexical scope


function myapp() {
    const myvar="value1";
    function myfunc() {
        const myvar="value59"
        console.log("my func1",myvar)
     };
//    const myfunc2=function(){}
//    const myfunc3=()=>{}
   console.log(myvar);
   myfunc();

}
myapp();