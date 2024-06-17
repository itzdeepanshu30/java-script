// console.log("2">1)
// console.log("02">1)
// console.log(2>"1")
console.log(null>0) // false
console.log(null==0)// false
console.log(null>=0) // true



 // reason is that eqaulity check == and comparison >< >= <= work differnently
 //compariosn convert null to a number ,treating it as 0.
 // that why (3) null>=0 is true and null>0 is false.


 // 
 console.log(undefined>0) // false
 console.log(undefined==0)// false
 console.log(undefined>=0) // false

 // === or strick check

console.log("2"===2);
// clean code is must



