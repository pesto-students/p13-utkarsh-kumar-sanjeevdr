
function counterCall() {
    let count = 0;
    function counter(){
        return ++count;
    }
    return counter;
}

let firstCounter  =  counterCall();
let secondCounter =  counterCall();

let firstValues = [];
let secondValues = [];

firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());

secondValues.push(secondCounter());
secondValues.push(secondCounter());
secondValues.push(secondCounter());

console.log(firstValues);
console.log(secondValues);



