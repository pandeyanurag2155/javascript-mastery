//nested destructuring

const users=[
    { userId:1,firstName:'Anurag',gender:'male'},
    { userId:2,firstName:'Amrit',gender:'male'},
    { userId:3,firstName:'anshu',gender:'male'},
 ]

 const[{firstName}, , {gender}]=users
 console.log(firstName);
 console.log(gender);