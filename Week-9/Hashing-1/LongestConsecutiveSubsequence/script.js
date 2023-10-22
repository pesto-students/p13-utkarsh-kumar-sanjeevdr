/**
   * @param {number[]} arr
   * @return {number}
   */
function findLongestConsecutiveSubsequence(arr) {
    // TODO: Implement your code here
    let n = arr.length;

    let set1 = new Set();
    let ans = 0;

    for(let i=0;i<n;i++){
      set1.add(arr[i]);
    }

    for(let i=0;i<n;i++){
      if(!set1.has(arr[i]-1)){

          let j = arr[i];
          while(set1.has(j)){
            j++;
          }

          ans = Math.max(j-arr[i],ans);
      }
    }
    return ans;

  }

  let arr = [10,5,7,3,4,8,9];

  console.log(findLongestConsecutiveSubsequence(arr));
  
 