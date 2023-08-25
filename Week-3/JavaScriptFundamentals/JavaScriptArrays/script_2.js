// Put your solution here

let nums = [4, 2, 9, 1, 8];

function divideArray(nums) {

    function filterEvenNums(value) {
        return (value % 2 == 0);
    }

    const evenNumsSorted = nums.filter(filterEvenNums).sort(function (a, b) { return a - b });

   // const evenNumsSorted = evenNums.sort(function (a, b) { return a - b });

    function filterOddNums(value) {
        return (value % 2 !== 0);
    }

    const oddNumsSorted = nums.filter(filterOddNums).sort(function (a, b) { return a - b });

   // const oddNumsSorted = oddNums.sort(function (a, b) { return a - b });

    if (evenNumsSorted.length) {
        console.log("Even numbers:");
        for (let x of evenNumsSorted) {
            console.log(x);
        }
    } else {
        console.log("Even numbers: None");
    }

    if (oddNumsSorted.length) {
        console.log("Odd numbers:");
        for (let y of oddNumsSorted) {
            console.log(y);
        }
    } else {
        console.log("Odd numbers: None");
    }

}


divideArray(nums);