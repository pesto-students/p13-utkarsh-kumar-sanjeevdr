/**
 * @param {number[]} heights
 * @return {number}
 */
function trapRainWater(heights) {
    // PLACEHOLDER_JAVASCRIPT_TRAP_RAIN_WATER_BODY
    let N = heights.length;
    let maxLeft = new Array(N).fill(0);// prefix
    let maxRight = new Array(N).fill(0); // suffix
  
      maxLeft[0]=heights[0];
      for(let i=1;i<N;i++){
          maxLeft[i] = Math.max(maxLeft[i-1],heights[i]);
      }
      maxRight[N-1]=heights[N-1];
      for(let i=N-2;i>=0;i--){
          maxRight[i] = Math.max(maxRight[i+1],heights[i]);
      }
      let waterTrapped = 0;
      for(let i=1;i<N-1;i++){
          if(Math.min(maxLeft[i-1],maxRight[i+1]) - heights[i]>0){
              waterTrapped = waterTrapped + Math.min(maxLeft[i-1],maxRight[i+1]) - heights[i];
          }
      }
      return waterTrapped;
  
  }

  console.log(trapRainWater([4,2,0,3]));