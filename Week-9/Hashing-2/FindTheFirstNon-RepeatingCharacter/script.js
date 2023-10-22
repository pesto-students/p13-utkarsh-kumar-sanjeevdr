/**
 * @param {string} str
 * @return {string}
 */
function findFirstNonRepeatingCharacter(str) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
    let N = str.length;
      let map = new Map();
  
      for(let i =0;i<N;i++){
        if(map.has(str[i])){
          let count = map.get(str[i]);
          map.set(str[i],count+1);
        }
        else{
          map.set(str[i],1);
        }
      }
  
      for(let i=0;i<N;i++){
        if(map.get(str[i])==1){
          return str[i];
        }
  
      }
        return '';
  }
  