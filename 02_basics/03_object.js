// Singleton

// object literals

const mysym=Symbol("key1");

const jsUser={
    name:"Deepanshu",
    "full name":"deepanshu singhal",// not access by Dot method
    [mysym]:"mykey1",
    age:20,
    email:"deepanshu@gmail.com",
    isloggedIn:false,
    location:"Noida",
    lastLoggedIn:["MOnday","Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
//console.log(jsUser["full name"]);
//  console.log(mysym);
//  console.log(typeof(mysym));
//console.log(jsUser.mysym);
// console.log(typeof(jsUser.mysym));
//console.log(jsUser[mysym]);
//console.log(typeof(jsUser[mysym]));
// jsUser.email="@gamil.com"
// console.log(jsUser)
// Object.freeze(jsUser);
// jsUser.email= "hbjn.gmail.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello Js User");
}
jsUser.greetingTwo=function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());

