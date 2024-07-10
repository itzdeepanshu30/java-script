const arr =[1,2,3,4,5]
for (const num of arr) {
  // console.log(num);
} // for of loop

// MAPS


const map =new Map()
map.set('IN',"India")
map.set('USA',"United state of America")
console.log(map)// unquie key value
 for (const [key,value] of map) {
  // console.log(key,':-',value)
 }

 const myObject={
   game1:'NFS',
   gmae2:'spiderman'
 }
 for (const [key ,value] of myObject) {
  // console.log(key,':-',value) // not iterable
  
 }