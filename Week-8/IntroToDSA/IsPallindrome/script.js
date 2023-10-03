/**
 * @param {number} number
 * @return {boolean}
 */
function isPalindrome(number) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
  
    let string1 = number.toString();
  
    var len = string1.length;
       
      // Traversing through the string 
      // upto half its length
      for (var i = 0; i < len / 2; i++) {
           
          // Comparing ith character 
          // from starting and len-ith
          // character from end
          if (string1[i] != string1[len - i - 1])
              return false;
      }
       
      // If the above loop doesn't return then it is
      // palindrome
      return true;
  }
  

  console.log(isPalindrome(12345));
  console.log(isPalindrome(12321));