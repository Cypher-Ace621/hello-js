// math.js(express a function)
function add(a,b){
   if(typeof a !== 'number' || typeof b !== 'number'){
      throw new Error('Inputs must be numbers!'); // Error handling addition
   }
   return a + b;
}
function subtraction(a, b){
   return a - b;
}
module.exports = {add, subtraction} // Export object