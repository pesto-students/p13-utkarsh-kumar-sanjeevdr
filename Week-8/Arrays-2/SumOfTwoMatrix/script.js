function sumOfTwoMatrices(rows, cols, array1, array2) {

  if (array1.length !== array2.length) {
    return 'Arrays must have the same dimensions.';
  }

  let result = [];
  let resultRow = new Array(cols);
  let j = 0;
  
  for (let i = 0; i < array1.length; i++) {

    resultRow[j] = (array1[i] + array2[i]);

    if (j == cols - 1) {
      result.push(resultRow);
      resultRow = new Array(cols);
      j = 0;
    } else {
      j++;
    }

  }
  return result;
}

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [7, 8, 9, 10, 11, 12];

let rows = 2;
let cols = 3;

console.log(sumOfTwoMatrices(rows, cols, array1, array2));

