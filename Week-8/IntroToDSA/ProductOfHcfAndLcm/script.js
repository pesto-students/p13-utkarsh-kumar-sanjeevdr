/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function calculateHCF(a, b) {
    // PLACEHOLDER_JAVASCRIPT_CALCULATE_HCF_BODY
     for (let temp = b; b !== 0;) {
          b = a % b;  
          a = temp;   
          temp = b;   
      }
      return a;
  }
  
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  function calculateLCM(a, b) {
    // PLACEHOLDER_JAVASCRIPT_CALCULATE_LCM_BODY
    const hcfValue = calculateHCF( a, b );
      return (a * b) / hcfValue;
  }
  

let num1 = 12;
let num2 = 18;
let hcf = calculateHCF(num1, num2);
let lcm = calculateLCM(num1, num2);
console.log(hcf*lcm);

