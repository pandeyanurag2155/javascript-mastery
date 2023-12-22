//object destructuring
const band={
    bandName:"led zepplin",

   famousSong:"stair to heaven ",
   year:1968,
   anotherFamousSong:"kashmir"
};

// const bandName=band.bandName
// const famousSong=band.famousSong;
// // bandName="queen";
// console.log(bandName,famousSong)

const{ bandName:var1,famousSong:var2}=band;//uper char line ka code ek line me 
const{ bandName,famousSong,...restProps}=band;
// console.log(bandName,famousSong);
console.log(var1,var2)
console.log(restProps)