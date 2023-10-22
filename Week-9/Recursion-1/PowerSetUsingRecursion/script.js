/**
 * Generate the power set of a given array.
 *
 * @param {number[]} nums - The input array.
 * @return {number[][]} The power set of the input array.
 */
function powerSetRecursive(nums, index, subset, powerSet) {
    // TODO: Implement the recursive power set generation
      let n = nums.length;
  
      // base case
      if (index == n) {
          // powerSet.unshift(subset);
          powerSet.push(subset);
          return;
      }
  
      // Two cases for every character
      // (i) We consider the character
      // as part of current subset
      // (ii) We do not consider current
      // character as part of current
      // subset    
  
      
      powerSetRecursive(nums, index + 1, subset, powerSet);
      powerSetRecursive(nums, index + 1, [...subset, nums[index]], powerSet);
      return powerSet;
  }
  
  /**
   * Main function to generate the power set of a given array.
   *
   * @param {string} input - The input array elements (space-separated).
   * @return {number[][]} The power set of the input array.
   */
  function powerSetMain(input) {
    // TODO: Implement the main function to generate the power set
      let nums = input.split(' ').map(Number);
      let index = 0;
      let subset = [];
      let powerSet = [];    
      return powerSetRecursive(nums, index, subset, powerSet);
  }  

let input1 = "4 7 1 9";
console.log(powerSetMain(input1));
