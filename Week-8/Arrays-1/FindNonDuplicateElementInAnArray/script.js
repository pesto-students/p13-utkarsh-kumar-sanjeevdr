/**
 * @param {number[]} arr
 * @return {number}
 */
function findNonDuplicateElement(arr) {
    // PLACEHOLDER_JAVASCRIPT_FIND_NON_DUPLICATE_ELEMENT_BODY
    var n = arr.length;
     const m = new Map();
      for (var i = 0; i < n; i++) {
          if (m.has(arr[i])) {
              m.set(arr[i], m.get(arr[i]) + 1);
          }
          else {
              m.set(arr[i], 1);
          }
      }
      // Traverse array again and return
      // first element with count 1.
      for (var i = 0; i < n; i++)
          if (m.get(arr[i]) == 1)
              return arr[i];
      return -1;
  }
  
  
  
  var arr = [ 9, 4, 9, 6, 4 ];
  
  console.log(findNonDuplicateElement(arr)); 