/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function findIntersection(arr1, arr2) {
    // PLACEHOLDER_JAVASCRIPT_FIND_INTERSECTION_BODY
  
    let n1 = arr1.length;
    let n2 = arr2.length;
    let intersectionArray=[];
  
    // Defining set container s
      let s = new Set();
       
      //  Insert the elements of arr1[] to set s
      for (var i = 0; i < n2; i++)
      {
          s.add(arr2[i]);
      }
       
     
       
      for (var i = 0; i < n1; i++)
      {
          // If element is present in set then
          if(s.has(arr1[i]))
          {
            if(!intersectionArray.includes(arr1[i])){
               intersectionArray.push(arr1[i]); 
            }                 
          }
      }
  
      return intersectionArray;
  }

  
let array1 = [1,2,3,4,5];

let array2 = [4,3,2,1];

console.log(findIntersection(array1,array2));