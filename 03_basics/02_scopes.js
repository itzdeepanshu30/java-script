 //var c =300
 let a =300
 {
    let a=10
    const b=20           
    //var c =3
   // console.log("INNER:",a)
 }
 //console.log(a);
 //console.log(b);
 //console.log(c);
  // global scope is differnt in node or inspect // imp for interview


  function one(){
   const username="hitesh"
   function two(){
      const  website="youtube"
     console.log(username); 
   }
  // console.log(website)
   two()
  }
 // one()


  ///////////////////////////////////////////
  addOne(5) // yaha par koi error nhi aayega
  function addOne(num){
   return num+1
  }
 // addtwo(6) // yaha error aayga

  const addtwo=function(num){
   return num+1
  }
  addtwo