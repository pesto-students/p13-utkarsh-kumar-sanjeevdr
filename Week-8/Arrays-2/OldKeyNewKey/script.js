/**
 * @param {string[]} arr
 * @param {string} oldKey
 * @param {string} newKey
 * @return {string[]}
 */
function replaceKey(arr, oldKey, newKey) {
    // PLACEHOLDER_JAVASCRIPT_REPLACE_KEY_BODY
  let n = arr.length;
   for (var i = 0; i < n; i++)
        {
           if(arr[i]==oldKey){
            arr[i]=newKey;
           }
        }
    return arr;
  }
  
  let arr = [10,20,30,40,50, 30];
  console.log(replaceKey(arr, 30, 35));