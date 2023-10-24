
let rightOrDown="";

function mazePathRecursive(row, col, numRows, numCols, currentPath, result) {	

	console.log('1');

	// If it's the bottom-right cell, print the path
	if (row == numRows - 1 && col == numCols - 1) {		
		currentPath.push(rightOrDown);
		console.log(currentPath);
		result.push(currentPath.join(""));
		currentPath.pop();
		console.log('2');
		return;
	}

	// Boundary cases: Check if we are out of the matrix
	if (row < 0 || row >= numRows || col < 0 || col >= numCols) {
		return;
	}

	console.log('3');
	// Include the current cell in the path	
	currentPath.push(rightOrDown);
	console.log(currentPath);

	console.log("col: "+col);
	// Move right in the matrix
	if (col + 1 < numCols) {
		rightOrDown='R';
		console.log('4');
		mazePathRecursive(row, col + 1, numRows, numCols, currentPath, result);
		console.log('5');
	}

	console.log('6');
	console.log("row: "+row);
	// Move down in the matrix
	if (row + 1 < numRows) {
		rightOrDown='D';
		console.log('7');
		mazePathRecursive(row + 1, col, numRows, numCols, currentPath, result);
		console.log('8');
	}

	console.log('9');
	// Backtrack: Remove the current cell from the current path	
	currentPath.pop();
	console.log(currentPath);
	console.log('10');

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

 