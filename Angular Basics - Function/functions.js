"use strict";
// : number in the function is to tell the return of (return num1+num2)
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(12, 25));
// Other syntax
const subtract = (num1, num2) => num1 - num2;
console.log(subtract(10, 11));
const multiplication = function (num1, num2) {
    return num1 * num2;
};
console.log(multiplication(5, 16));
const add2 = function (num1, num2, ...num3) {
    return num3.length > 0 ? num1 + num2 + num3.reduce((acc, num) => acc + num, 0) : num1 + num2;
};
console.log(add2(2, 3, 12, 45));
