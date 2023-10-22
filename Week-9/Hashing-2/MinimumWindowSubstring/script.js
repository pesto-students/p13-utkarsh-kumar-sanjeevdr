


function minWindowSubstring(str1, str2)
{
    let no_of_chars = 256;
	let len1 = str1.length;
	let len2 = str2.length;

	// Check if string's length is 
	// less than pattern's
	// length. If yes then no such 
	// window can exist
	if (len1 < len2) {		
		return "";
	}

	let hash_pat = Array.from({length: no_of_chars}, (_, i) => 0);
	let hash_str = Array.from({length: no_of_chars}, (_, i) => 0);

	// Store occurrence ofs 
	// characters of pattern
	for (let i = 0; i < len2; i++)
		hash_pat[str2.charAt(i).charCodeAt(0)]++;

        let start = 0, start_index = -1,
		min_len = Number.MAX_VALUE;

	// Start traversing the string
	// Count of characters
	let count = 0; 
	for (let j = 0; j < len1; j++) {
	
		// Count occurrence of characters 
		// of string
		hash_str[str1.charAt(j).charCodeAt(0)]++;

		// If string's char matches 
		// with pattern's char
		// then increment count
		if (hash_str[str1.charAt(j).charCodeAt(0)]
			<= hash_pat[str1.charAt(j).charCodeAt(0)])
			count++;

		// If all the characters are matched
		if (count == len2) {
		
			// Try to minimize the window
			while (hash_str[str1.charAt(start).charCodeAt(0)]
					> hash_pat[str1.charAt(start).charCodeAt(0)]
				|| hash_pat[str1.charAt(start).charCodeAt(0)]
						== 0) {

				if (hash_str[str1.charAt(start).charCodeAt(0)]
					> hash_pat[str1.charAt(start).charCodeAt(0)])
					hash_str[str1.charAt(start).charCodeAt(0)]--;
				start++;
			}

			// update window size
			let len_window = j - start + 1;
			if (min_len > len_window) {
				min_len = len_window;
				start_index = start;
			}
		}
	}

	// If no window found
	if (start_index == -1) {		
		return "";
	}

	// Return substring starting 
	// from start_index
	// and length min_len
	return str1.substring(start_index,
						start_index + min_len);
}

// Driver Method
let str = "this is a test string";
let pat = "tist";

console.log(minWindowSubstring(str, pat));

let strg1 = "ADOBECODEBANC";
let patern1 = "ABC";

console.log(minWindowSubstring(strg1, patern1));
