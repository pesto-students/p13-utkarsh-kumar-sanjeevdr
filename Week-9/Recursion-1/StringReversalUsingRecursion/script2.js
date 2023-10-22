// Recursive JavaScript function to reverse a string
function recursiveReverse(str, i = 0) {
	const n = str.length;
	if (i >= Math.floor(n / 2))
		return str;

    // Swap the i and n-i-1 characters
	str = str.substring(0, i) + str[n - i - 1] + str.substring(i + 1, n - i - 1) + str[i] + str.substring(n - i);
	    
    // Call Recursive function after incrementing i.
	return recursiveReverse(str, i + 1);
}

function reverseString(str) {
	// TODO: Implement your code here
	return recursiveReverse(str, i = 0)
}
  

// Driver program
	let str = "abcdefghij";	
	str = reverseString(str);
	console.log(str);

    