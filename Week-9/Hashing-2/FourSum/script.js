/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    // Your JavaScript function body for fourSum goes here
    // Store sums of all pairs in a hash table
    let n = nums.length;
    let mp = new Map();
    for (let i = 0; i < n - 1; i++)
        for (let j = i + 1; j < n; j++)
            mp.set(nums[i] + nums[j], [i, j]);

    let quadruplet = [];
    let mapv = new Set();
    // Traverse through all pairs and search
    // for X - (current pair sum).
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = nums[i] + nums[j];

            // If X - sum is present in hash table,
            if (mp.has(target - sum)) {

                // Making sure that all elements are
                // distinct array elements and an
                // element is not considered more than
                // once.
                let p = mp.get(target - sum);
                if (p[0] != i && p[0] != j
                    && p[1] != i && p[1] != j) {
                    let array = [];
                    array.push(nums[i]);
                    array.push(nums[j]);
                    array.push(nums[p[0]]);
                    array.push(nums[p[1]]);

                    array.sort();
                    let arrJoin = array.join("");

                    if (!mapv.has(arrJoin)) {
                        quadruplet.push(array);
                        mapv.add(arrJoin);
                    }
                }
            }
        }
    }
    return quadruplet;
}


let nums = [1, 0, -1, 0, -2, 2];
let target = 0;
console.log(fourSum(nums, target));