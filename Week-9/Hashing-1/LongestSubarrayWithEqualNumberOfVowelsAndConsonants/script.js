
/**
   * @param {string} chars
   * @return {number}
   */
function longestSubarrayWithEqualVowelsAndConsonants(chars) {
    // TODO: Implement your code here
    let N = chars.length;
    let arr = Array.from({length: N}, (_, i) => 0);

    for(let i = 0; i < N; i++){
      if (chars[i] == 'a' || chars[i] == 'e' ||
          chars[i] == 'i' || chars[i] == 'o' ||
          chars[i] == 'u' || chars[i] == 'A' || chars[i] == 'E' ||
          chars[i] == 'I' || chars[i] == 'O' ||
          chars[i] == 'U' )
          arr[i] = 1;
      else
          arr[i] = -1;
    }

    // Initialize variable
    // to store result
    let maxLen = 0;
      
    // Stores the sum of subarray
    let curr_sum = 0;
      
    // Map to store indices of the sum
    let hash = new Map();

    for(let i = 0; i < N; i++)
    {
        curr_sum += arr[i];
          
        // If sum is 0
        if (curr_sum == 0){
          
            // Count of vowels and consonants
            // are equal
            maxLen = Math.max(maxLen, i + 1);
        }
              
        // Update the maximum length
        // of subString in HashMap
        if (hash.has(curr_sum)){
            maxLen = Math.max(maxLen,
                              i - hash.get(curr_sum));
        }                        
        // Store the index of the sum
        else{
          
            // hash[curr_sum] = i;
            hash.set(curr_sum, i);
            }
    }
      
    // Return the maximum
    // length of required subString
    return maxLen;

  }
  
  let chars = "abcdeiouiop";
  console.log(longestSubarrayWithEqualVowelsAndConsonants(chars));