/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
    // TODO: Implement your code here
     let charArray = str.split("");
     reverseStringHelper(charArray, 0, charArray.length - 1);
     return charArray.join("");
  }
  
  function reverseStringHelper(charArray, start, end) {
      if (start > end) {
          return;
      }
      swap(charArray, start, end);
      reverseStringHelper(charArray, start + 1, end - 1);
  }
  
  function swap(charArray, start, end) {
      // using destructuring assignment to swap the characters
      [charArray[start], charArray[end]] = [charArray[end], charArray[start]];
  }
  
  