
const tempData = {
    temperatureData: {
        'New York': 20,
        'London': 18,
        'Paris': 22,
        'Tokyo': 25,
        'Sydney': 28,
    }
};

const tempFunc = {
    temperatureData: {},
    getTemp: function (countryCode) {
        return this.temperatureData[countryCode];
    },
};

function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key] + " (retrieved from cache)";
        } else {
            const result = func.apply(tempData, args);
            cache[key] = result;
            return result;
        }
    };
}

const args1 = ["Tokyo"];
const args2 = ["Sydney"];

const memoizedGetTemperature = memoize(tempFunc.getTemp);

console.log(memoizedGetTemperature(args1));
console.log(memoizedGetTemperature(args1));
console.log(memoizedGetTemperature(args2));
console.log(memoizedGetTemperature(args2));