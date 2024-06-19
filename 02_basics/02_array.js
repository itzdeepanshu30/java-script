const marvel_heroes=["thor","Ironman","Spiderman"]
const dc_heroes=["Superman","flash ","batman"]
//marvel_heroes.push(dc_heroes)
 //console.log(marvel_heroes);
 //console.log(marvel_heroes[3]);

//  const newarr=marvel_heroes.concat(dc_heroes) 
// console.log(newarr);


//const all_new_heroes=[...marvel_heroes,...dc_heroes]
 //console.log(all_new_heroes);

 const another_array=[1,2,3,[4,5,6],7,[4,5]]

 const real_another_array= another_array.flat(Infinity)
 console.log(real_another_array);


 console.log(Array.isArray("Deepanshu"));
 console.log(Array.from("Deepanshu"));
 console.log(Array.from({name:"hitesh"}))// insteresting for interview purpose

let score1=50;
let score2=90;
let score3=40;
console.log(Array.of(score1,score2,score3))



