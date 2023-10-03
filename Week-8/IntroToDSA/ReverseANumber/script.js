/**
 * @param {number} number
 * @return {number}
 */
function reverse(number) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY

    if(number==0){
        return number;
    }

    let rev1 = 0;
    let rev2 = 0;
    let size = Math.floor(Math.log10(number)) + 1;
    let mid = Math.floor(size / 2);

    // Divide the number into two parts
    let firstHalf = Math.floor(number / 10 ** mid);
    let secondHalf = number % 10 ** mid;

    // Reverse the first half and second half digits
    // concurrently
    for (let i = 0; i < mid; i++) {
        let rem = firstHalf % 10;
        rev1 = rev1 * 10 + rem;
        let rem2 = secondHalf % 10;
        rev2 = rev2 * 10 + rem2;
        firstHalf = Math.floor(firstHalf / 10);
        secondHalf = Math.floor(secondHalf / 10);
    }

    // Concatenate the last half with the first half

    if (size % 2 == 0) {
        return rev2 * 10 ** mid + rev1;
    }
    else {
        return (rev2 * 10 ** mid + rev1) * 10 + firstHalf;
    }

}

console.log(reverse(987654321));