//const tinderUser=new Object() // singleotn object
 
const tinderUser ={}
 tinderUser.id="de23"
 tinderUser.name="Deepanshu"

//console.log(tinderUser);

const regularUser={
    email:"Somil@gamil.com",
    fullname: {
       userfullname: {
        firstnmae:"Deepanshu",
        lastname:"Singhal"
       }
    }
}
//console.log(regularUser.fullname.userfullname.lastname)
const obj1={1:"a",2:"b",3:"c"}
const obj2= {3:"a",4:"b"}
//const obj3={obj1,obj2}
//console.log(obj3)

// const obj3=Object.assign({},obj1,obj2) 
// console.log(obj3)

const obj3={...obj1,...obj2}
 console.log(obj3)



 //console.log(Object.keys(tinderUser))// important
 //console.log(tinderUser.hasOwnProperty('id'))


 const course={
    cousename:"computer scinence",
    price:"999",
    courseInstructor:"hitesh"
 }
 const{courseInstructor:instructor}=course
 console.log(instructor)

//  {
//     "name":"Deepanshu"



//  }
 [
    {},
    {},
    {}
 ]