let resultArray = [];
let orgStr='';

function subsequenceRecursive(str, index){
    //TODO: Implement the subsequenceRecursive function
   
    if (index == orgStr.length) {		
        resultArray.unshift(str)        
		return;
	}	
   
    subsequenceRecursive(str+orgStr.charAt(index), index + 1);
    subsequenceRecursive(str, index + 1);    
	
}

function subsequenceMain(str) {
   //TODO: Implement the subsequenceMain function   
	let f = "";	
    orgStr=str;
	subsequenceRecursive(f, 0);
    return resultArray;
}
