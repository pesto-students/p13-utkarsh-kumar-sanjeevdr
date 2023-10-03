function transposeMatrix(matrix) {
    // PLACEHOLDER_JAVASCRIPT_TRANSPOSE_MATRIX_BODY
    let N = matrix.length;
    let M = matrix[0].length;
  
    for (i = 0; i < N; i++){
              for (j = i + 1; j < M; j++) {
                  var temp = matrix[i][j];
                  matrix[i][j] = matrix[j][i];
                  matrix[j][i] = temp;
              }
         }     
    return matrix;
  }

  var A = [ [ 1, 1, 1, 1 ],
            [ 2, 2, 2, 2 ],
            [ 3, 3, 3, 3 ],
            [ 4, 4, 4, 4 ] ];
 
console.log(transposeMatrix(A));