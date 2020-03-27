// function add(num1, num2) {
//     return num1 + num2;
// }
// const total = add(12, 25);

// console.log(total);


// Old Method function calling

// function add(num1, num2) {
//     if (num2 == undefined) {
//         num2 = 5;
//     }
//     return num1 + num2;
// }

// const total = add(12);

// console.log(total);


// 1st ways of ES6

// function add(num1, num2) {
//     num2 = num2 || 12;
//     return num1 + num2;
// }

// const total = add(12);



// console.log(total);

//2nd way of ES6

function add(num1, num2 = 5) {

    return num1 + num2;
}

const total = add(12, 17);

console.log(total);