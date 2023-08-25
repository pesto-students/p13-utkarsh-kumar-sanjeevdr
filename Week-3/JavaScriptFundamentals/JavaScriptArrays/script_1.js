// Put your solution here

let nums = [4, 2, 9, 1, 8];

function divideArray(nums) {

    const evenNums = [];
    const oddNums = [];

    for (let x of nums) {
           if(x % 2 == 0){
            evenNums.push(x);
           } else{
            oddNums.push(x);
           }
    }    

    const evenNumsSorted = evenNums.sort(function (a, b) { return a - b });    

    const oddNumsSorted = oddNums.sort(function (a, b) { return a - b });

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