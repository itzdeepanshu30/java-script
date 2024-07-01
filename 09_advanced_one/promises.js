const promiseOne= new Promise(function(resolve,reject){
      // DB an async task
      // DB calls, cryptography, network
      setTimeout(()=>{
        console.log('Async task is Complete');
        resolve();
      },1000)


});

promiseOne.then(()=>{
    console.log('Promise Consumed');
});


new Promise((resolve,reject)=>{
    setTimeout(()=>{
  console.log('Aysnc 2 resolved')
  resolve();
    },1000)
}).then(()=>{
    console.log('promise2 consumed');
})

const promiseThree=new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve({username:"DEEPANSHU",email:"doit@example.com"})
},1000)
}).then((user)=>{
  console.log(user);
});


const promiseFour=new Promise(function(resolve,reject){
setTimeout(function(){
      let error= true
      if(!error){
        resolve({username:"ram",pasword:"1234"})
      }
      else{
        reject('ERROR:Something went Wrong')
      }
     resolve();    
},1000)
})

const username=promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((name)=>{
 console.log(name);
}).catch((error)=>{
console.log(error)
}).finally(()=>{
    console.log("promise is either is resolve or reject")
})

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error= true
        if(!error){
          resolve({username:"MERN",asword:"12"})
        }
        else{
          reject('ERROR:MERN went Wrong')
        }
       resolve();    
  },1000)
});
  
async function consumePromise(){
    try {
        const response=await promiseFive
        console.log(response)
    } catch (error) {
           console.log(error)
    }
}
 consumePromise()
// async function getAllUsers(){
//     try {
//         const respone =await fetch('https://jsonplaceholder.typicode.com/users')
//         //console.log(respone)
//     const data= await respone.json()
//     console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
     return response.json();
}).then((data)=>{
  console.log(data)
})
.catch((error)=>console.log(error))