/**
 * @param {number[][]} matrix
 * @return {string}
 */
function spiralOrderTraversal(matrix) {
    // PLACEHOLDER_JAVASCRIPT_SPIRAL_ORDER_TRAVERSAL_BODY
    let i, k = 0, l = 0;
    let m = matrix.length;
    let n = matrix[0].length;
    let result = '';
      /*
          k - starting row index
          m - ending row index
          l - starting column index
          n - ending column index
          i - iterator 
      */
   
      while (k < m && l < n) {
          // print the first row from the remaining rows
          for (i = l; i < n; ++i) {
             
              result += matrix[k][i] + ' ';
          }
          k++;
   
          // print the last column from the remaining columns
          for (i = k; i < m; ++i) {
              
              result += matrix[i][n - 1] + ' ';
          }
          n--;
   
          // print the last row from the remaining rows
          if (k < m) {
              for (i = n - 1; i >= l; --i) {
                 
                  result += matrix[m - 1][i] + ' ';
              }
              m--;
          }
   
          // print the first column from the remaining columns
          if (l < n) {
              for (i = m - 1; i >= k; --i) {                
                  result += matrix[i][l] + ' ';
              }
              l++;
          }
      }
    return result;
  
  }

  let matrix = [[1,    2,   3,   4],
                [5,    6,   7,   8],
                [9,   10,  11,  12],
                [13,  14,  15,  16 ]];

  console.log(spiralOrderTraversal(matrix));
  
  