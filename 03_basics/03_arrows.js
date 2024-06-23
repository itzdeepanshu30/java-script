// const user={
//     username:"deepanshu",
//     price:999,
//     welcomeMessage:function(){
   
//         console.log(`${this.username},Weclome to website`)
//         console.log(this)
//     }


// }
//  user.welcomeMessage();
//  user.username="sam";
// user.welcomeMessage();
// console.log(this);// yaha  par ye hai Empty object {}// but browser par global jo hai vo windows hai

// function chai(){
//     //let username="dev"
  // console.log(this)   // yaha par this empty object nhi aayega

//     console.log(this.username);   // function mai this ko use nhi krte 

// }
// chai();


const chai=()=>{                  // this is arrow function
    let username="Deepanshu"
    console.log(this)
}
//chai();     // yaha par this hai jo empty object aayega 


// const addTwo=(num1,num2)=>{
//       return num1+num2
// }
 //const addTwo=(num1,num2) => num1+num2 // implicit return ka tarika 
//  const addTwo=(num1,num2) => (num1+num2) // agar curly barckets use kroge toh return likna pageda
const addTwo=(num1,num2) => ({user:"deep"})


console.log(addTwo(3,4))


const myArray=[2,3,4,5,6,7]
//myArray.forEach()