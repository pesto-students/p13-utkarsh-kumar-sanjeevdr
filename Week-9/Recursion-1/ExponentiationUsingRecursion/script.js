/**
 * @param {number} x
 * @param {number} p
 * @return {number}
 */
function exponentiation(x, p) {
    // TODO: Implement your code here
    if (p === 0) 
     {
      return 1;
      }
  
    if (p > 0)
    {
      return x * exponentiation(x, p-1);
    }  
  
    return 1.0 / exponentiation(x, -p);           
  
}

console.log(exponentiation(-3, 4));

console.log(exponentiation(10, -2));