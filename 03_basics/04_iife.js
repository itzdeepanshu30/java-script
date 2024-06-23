// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named iffe
    console.log('DB CONNECTED')
})();

((num1)=>{
    console.log(`DB CONNECTED TWO ${num1}`)
})(4)