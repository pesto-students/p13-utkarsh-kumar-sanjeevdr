/**
 * @param {number[]} arr
 * @return {number}
 */
function findLongestSubarray(arr) {
    // TODO: Implement your code here
      let n = arr.length;
  
    // Creates an empty hashMap hM
      const hM = new Map();
   
      // Initialize sum of elements
      let sum = 0;
   
      // Initialize result
      let max_len = 0;
      let ending_index = -1;
      let start_index = 0;
   
      for (let i = 0; i < n; i++) {
          arr[i] = (arr[i] == 0) ? -1 : 1;
      }
   
      // Traverse through the given array
      for (let i = 0; i < n; i++) {
          // Add current element to sum
          sum += arr[i];
   
          // To handle sum=0 at last index
          if (sum == 0) {
              max_len = i + 1;
              ending_index = i;
          }
   
          // If this sum is seen before,
          // then update max_len if required
          if (hM.has(sum)) {
              if (max_len < i - hM.get(sum)) {
                  max_len = i - hM.get(sum);
                  ending_index = i;
              }
          } else // Else put this sum in hash table
              hM.set(sum, i);
      }
   
      for (let i = 0; i < n; i++) {
          arr[i] = (arr[i] == -1) ? 0 : 1;
      }
   
      start_index = ending_index - max_len + 1;
//   console.log(`${start_index} to ${ending_index}`);
   
      return max_len;
  
  }
  
  let arr = [1,1,1,1,1,1,1,0,0,0,0];
  console.log(findLongestSubarray(arr));