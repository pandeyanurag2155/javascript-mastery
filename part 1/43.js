//object inside array
//very useful in real world applications

const users=[
   { userId:1,firstName:'Anurag',gender:'male'},
   { userId:2,firstName:'Amrit',gender:'male'},
   { userId:3,firstName:'anshu',gender:'male'},
]
//console.log(users);
for(let user of users){
    console.log(user.userId)
}