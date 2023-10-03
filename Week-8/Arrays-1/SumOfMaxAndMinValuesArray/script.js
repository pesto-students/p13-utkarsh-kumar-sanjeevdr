/**
 * @param {number[]} arr
 * @return {number}
 */
function findSumOfMaxAndMin(arr) {
    // PLACEHOLDER_JAVASCRIPT_FIND_SUM_OF_MAX_AND_MIN_BODY
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return (max + min);
}

console.log(findSumOfMaxAndMin([5,2,9,1,7]));


