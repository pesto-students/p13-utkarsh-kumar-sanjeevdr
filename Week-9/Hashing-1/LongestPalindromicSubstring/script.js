/**
   * @param {string} s
   * @return {string}
   */
function longestPalindromicSubstring(s) {
    // TODO: Implement your code here

    const n = s.length;
    let start = 0, end = 1;
    let low, hi;
 
    // Traverse the input string
    for (let i = 0; i < n; i++) {
 
        // Find the longest palindromic substring of even size
        low = i - 1;
        hi = i;
 
        // Expand substring while it is a palindrome
        // and in bounds
        while (low >= 0 && hi < n && s[low] === s[hi]) {
 
            // Update the maximum length and starting index
            if (hi - low + 1 > end) {
                start = low;
                end = hi - low + 1;
            }
            low--;
            hi++;
        }
 
        // Find the longest palindromic substring of odd size
        low = i - 1;
        hi = i + 1;
 
        // Expand substring while it is a palindrome
        // and in bounds
        while (low >= 0 && hi < n && s[low] === s[hi]) {
 
            // Update the maximum length and starting index
            if (hi - low + 1 > end) {
                start = low;
                end = hi - low + 1;
            }
            low--;
            hi++;
        }
    }     
    
    return s.slice(start, start + end);

  }

  let s = "babad";
  console.log(longestPalindromicSubstring(s));
  