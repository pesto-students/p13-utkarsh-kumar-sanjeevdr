function indicesRecursive(arr, target, index) {
 
    // If the start index reaches the
           // length of the array, then
           // return empty array
           if (index == arr.length) 
           {
               let ans = new Array(0); // empty array
               return ans;
           }
      
           // Getting the recursive answer in
           // smallIndex array
           let smallIndex = indicesRecursive(arr, target, index + 1);
      
            console.log(smallIndex);

           // If the element at start index is equal
           // to target then
           // (which is the answer of recursion) and 
           // then (which came through recursion)
           if (arr[index] == target)
           {
               let myAns = new Array(smallIndex.length + 1);
      
               // Put the start index in front
               // of the array
               myAns[0] = index;
               for (let i = 0; i < smallIndex.length; i++)
               {
                      
                   // Shift the elements of the array
                   // one step to the right
                   // and putting them in
                   // myAns array
                   myAns[i + 1] = smallIndex[i];
               }
               return myAns;
           }
           else
           {
                  
               // If the element at start index is not
               // equal to target then just simply return the
               // answer which came from recursion.
               return smallIndex;
           }
   }
   
   let arr = [1,2,3,2,4,2,5];
   let target = 2;

   function indicesMain(arr, target) {   
      return indicesRecursive(arr, target, 0);
   }
   
console.log(indicesMain(arr, target));   