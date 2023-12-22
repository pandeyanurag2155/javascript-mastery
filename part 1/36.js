// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

 //const  pers = {name:"Harshit",age:22};
 const pers={name:"Harshit",
 age:22,
hobbies:["guitar","sleeping","listening music"]

}
  console.log(pers)

 //how to access data from objects
//  console.log(pers.name);
//  console.log(pers.age)
//  console.log(pers.hobbies)

 console.log(pers["name"]);
 console.log(pers["age"])
 console.log(pers["hobbies"])

 //how to add key value pair to object
//  pers.gender="male";
 pers["gender"]="male";
  console.log(pers);
