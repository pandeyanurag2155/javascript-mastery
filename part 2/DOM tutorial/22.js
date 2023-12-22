//event object

// const firstbutton=document.querySelector("#one");


// firstbutton.addEventListener("click", function(event){
//     console.log(event);
// })

//jab bhi mai kisi bhi element pe event listener add hoga
//js engine--- line by line execute karta hai
//browser--js engine + extra feature(web api)

//jab browser ko pata chaala ki user ne event perfor kia
//jo hum listen kar rahe hai
// browser 2
// 1.) callback function hai vo js Engine ko degi
// 2.) callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi


const AllButton=document.querySelectorAll(".mybutton button");

for(let button of AllButton){
    button.addEventListener("click",(e)=>{
        // console.log("you clicked me!!!")
        console.log(e)
        console.log(e.currentTarget)
    })
}