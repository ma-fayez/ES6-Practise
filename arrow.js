// function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = function myFun(num) {
//     return num * 2;
// }

// Function Declaration easy way with ES6
// const function_name = parameters => return value;

const doubleIt = num => num * 2;

const result = doubleIt(5);
console.log(result);

const add = (x, y) => x * y;
const multiplication = add(5, 7);
console.log(multiplication);


// Multi_line arrow function

const multiLine = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const results = sum * diff;
    return results;

}
const value = multiLine(40, 15);
console.log(value);