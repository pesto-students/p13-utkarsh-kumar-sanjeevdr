
let rightOrDown="";

function mazePathRecursive(row, col, numRows, numCols, currentPath, result) {	

	// If it's the bottom-right cell, print the path
	if (row == numRows - 1 && col == numCols - 1) {		
		currentPath.push(rightOrDown);		
		result.push(currentPath.join(""));
		currentPath.pop();		
		return;
	}

	// Boundary cases: Check if we are out of the matrix
	if (row < 0 || row >= numRows || col < 0 || col >= numCols) {
		return;
	}
	
	// Include the current cell in the path	
	currentPath.push(rightOrDown);
	
	// Move right in the matrix
	if (col + 1 < numCols) {
		rightOrDown='R';		
		mazePathRecursive(row, col + 1, numRows, numCols, currentPath, result);		
	}

	
	// Move down in the matrix
	if (row + 1 < numRows) {
		rightOrDown='D';		
		mazePathRecursive(row + 1, col, numRows, numCols, currentPath, result);		
	}
	
	// Backtrack: Remove the current cell from the current path	
	currentPath.pop();	

 }
 
 function mazePathMain(numRows, numCols) {
	 //TODO: Implement the mazePathMain funtion
	 let row=0;
	 let col=0;
	 let currentPath=[];
	 let result=[];

	 mazePathRecursive(row, col, numRows, numCols, currentPath, result)

	 return result;
 }

 console.log(mazePathMain(3,3));

//  ["RRDD", "RDRD", "RDDR", "DRRD", "DRDR", "DDRR"]

 