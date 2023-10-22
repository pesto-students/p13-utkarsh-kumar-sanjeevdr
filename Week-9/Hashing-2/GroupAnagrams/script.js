
function generateKey(str){
    return str.split("").sort().join("");
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
  let anagramMap = new Map();
    for(let i=0;i<strs.length;i++){
        let key = generateKey(strs[i]);
        if(anagramMap.has(key)){
            let anagramArr = anagramMap.get(key);
            anagramArr.push(strs[i]);
            anagramMap.set(key,anagramArr);
        } else {
            let anagramArr = [strs[i]];
            anagramMap.set(key,anagramArr);
        }
    }

     let anagramArrMain = [];
    for(let [key,val] of anagramMap.entries()){
        anagramArrMain.push(val.sort());        
    }

    return anagramArrMain;

}

let strs = ['eat','tea','tan','ate','nat','bat'];
console.log(groupAnagrams(strs));

