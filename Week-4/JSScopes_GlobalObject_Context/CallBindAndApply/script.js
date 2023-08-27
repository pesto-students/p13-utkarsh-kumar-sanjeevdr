class Calculator {

    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        return num1 / num2;
    }

}

class ScientificCalculator extends Calculator {
    
    square(num) {
        return num * num;
    }

    cube(num) {
        return num * num * num;
    }

    power(num1, num2) {
        return Math.pow(num1, num2);
    }

    multiplyByTwo(num1) {
        return num1/2;
    }

    powerOfThree(num1){
        return Math.pow(num1, 3);
    }
}

const calc = new ScientificCalculator();

let addNum = calc.add.call({},10,5);
let subNum = calc.subtract.apply({},[10,5]);
let multiby2 = calc.multiplyByTwo.bind({},5);
let powerOf3 = calc.powerOfThree.bind({},2);

console.log("Added Number : "+addNum);
console.log("Subtracted Number : "+subNum);
console.log("Multiply Number by 2 : "+multiby2());
console.log("Power Of Three : "+powerOf3());