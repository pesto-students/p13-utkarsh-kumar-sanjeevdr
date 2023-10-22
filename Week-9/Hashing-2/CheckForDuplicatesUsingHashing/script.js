/**
 * @param {number[]} array
 * @return {boolean}
 */
function checkDuplicates(array) { 
    /* Your JavaScript function body for checking duplicates goes here */ 
    let mapv = new Set();
    for(let i =0;i<array.length;i++){
        if(mapv.has(array[i])){            
            return true;
        }else{
            mapv.add(array[i]);
        }
    }
    
    return false;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
console.log(checkDuplicates(array));