/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
function hasSubarrayWithSumK(arr, k) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
    let indexSet = new Set();
      for(let i=0;i<arr.length;i++){
          if(indexSet.has(k-arr[i])){
              return true;
          } else {
              indexSet.add(arr[i]);
          }
      }
      return false;
  }
  
  let arr = [3, 4, 7, 2, -3, 1, 4, 2];
  let k = 7;
  console.log(hasSubarrayWithSumK(arr, k));