
function createGenerator(strarray) {

    function* myGenerator() {
        for (nameVal of strarray) {
            const nameSymbol = Symbol(nameVal);
            yield nameSymbol;
        }
    }
    return myGenerator;
}

let strArray = ['hello', 'world', 'test'];
let myGenerator = createGenerator(strArray);

const iterator = myGenerator();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
