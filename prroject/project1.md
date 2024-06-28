// project1

``` javascript
const buttons=document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id
    }
    
  })
});


```
// soution 2
``` javascript
const form = document.querySelector('form')
// this use case will give empty value
//  const height= parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
  e.preventDefault();
 const height= parseInt(document.querySelector('#height').value)
 const weight= parseInt(document.querySelector('#weight').value)
 const res= document.querySelector('#results')
 if(height===''||height<0 || isNaN(height)){
    res.innerHTML=`PLese give a valid height ${height}`

 }
 else if(weight===''||weight<0 || isNaN(weight)){
  res.innerHTML=`PLese give a valid weight ${weight}`
}
else{
  const bmi=(weight/((height*height)/10000)).toFixed(2);
  res.innerHTML=`<span>${bmi}</span>`;
}
})

```


// project 3
``` javascript
const clock = document.getElementById('clock')

let date=new Date();
console.log(date.toLocaleTimeString())

setInterval(function(){
  let date=new Date();
//console.log(date.toLocaleTimeString())
clock.innerHTML=date.toLocaleTimeString()
},1000)
```



// project 4

```javascript
let ran=(Math.round(Math.random()*100+1))

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
let guessSlot=document.querySelector('.guesses')
let rema=document.querySelector('.lastResult')
const lowOrhi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');
const p= document.createElement('p');

let preGuess=[]

let numGuess=1;
let gamePlay =true;
if(gamePlay){
    submit.addEventListener('click',function(e){
      e.preventDefault()
      const guess=parseInt(userInput.value)
      //console.log(guess)
      validateGuess(guess)
    });
}
function validateGuess(guess){
      if(isNaN(guess)){
        alert('please Enter the valid Number')
      }
      else if(guess<1){
        alert('please Enter the number greater than 1')
      }
      
     else if(guess>100){
        alert('please Enter the number less than 100')
      }
      else{
        preGuess.push(guess);
        if(numGuess===11){
          cleanupGuess(guess)
          displayMessage(`Game over...Random number is ${ran}`)
          endGame();
        }
        else{
          cleanupGuess(guess)
          checkGuess(guess)
        }

      }
      
      
}
function checkGuess(guess){
  if(guess===ran)  {
    displayMessage(`you Gussed is right`)
    endGame()
  }
  else if(guess<ran){
    displayMessage(`Number is TOOO Low`)
  }
  else{
    displayMessage(`Number is TOOO High`)
  }

}
function cleanupGuess(guess){
  userInput.value='';
  guessSlot.innerHTML+=`${guess} `
  numGuess++;
  rema.innerHTML=`${11-numGuess}`;

}
function displayMessage(message){
  lowOrhi.innerHTML=`<h2>${message}</h2>`
}
function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    ran = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    rema.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    gamePlay = true;
  });
}
function endGame(){
   userInput.value='';
   userInput.setAttribute('disabled','')
   p.classList.add('button');
   p.innerHTML=`<h2 id="newGame">
   start new Game</h2>`
    startOver.appendChild(p);
    gamePlay=false
    newGame();
}


```