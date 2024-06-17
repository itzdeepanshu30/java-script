//Return type of variables in JavaScript
// Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object

// java script is dymaically typed language
// non primitive ka data type jo object (function object )
// function ka data type function hi hai (function object)
//Primitive datatypes:
// String - string
// Number - number
// Boolean - Boolean
// Null - object(****)
// Undefined - undefined
// BigInt - bigint

// Non-primitive datatypes:
// Array - object
// Function - function(object)
// Object - object

//+++++++++++++++++++++++++++++++++++++++++++++++//
//stack(primitive) and  Heap (Non Primitive )
 let name1="Deepanshu "
 let anothername=name1;
 anothername="dubey"; // use of satck meemory in which copy is formed
 console.log(anothername);
  let user1={
    name:"Deepanshu",
    Email:"dev@gmail.com"
  }
let user2 =user1;

user2.name="dev";
console.log(user1)// here we use heap memory and the refernce .