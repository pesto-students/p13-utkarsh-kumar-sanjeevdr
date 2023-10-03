/**
 * @param {number[]} arr
 * @return {number[]}
 */
function deleteDivisibleElements(arr) {
    // PLACEHOLDER_JAVASCRIPT_DELETE_DIVISIBLE_ELEMENTS_BODY
  
     for (let i = 0; i < arr.length; i++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]%2 === 0 || arr[i]%3 === 0) {
                arr.splice(i, 1);  
                i--;          
            }        
        }
      }
  
    return arr;
  }

  let arr = [2,4,6,8,10];
  console.log(deleteDivisibleElements(arr));