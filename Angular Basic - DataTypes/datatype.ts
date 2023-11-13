// In typescript you cant change the datatype in this way
// fname = 10;


// String
let fname = 'Ali Hassan';

let lname : string;
lname = "Mughal";

let dob : string;
dob = "25";

// Numebers
let age : number;
age = 10.00;
age = 2;

let result = parseInt(dob);

// Boolean
let isValid : boolean = true;

// Array
let stringValues : string[];
stringValues = ['Ali', 'Hassan', 'Maria'];

// Another Syntax for Array
let numberValues : Array<number> = [23, 54];

// console.log(numberValues);


// Enum
// To avoid long function in js file after converting this file in js then use const while using enum
const enum Color {
    Red,
    Blue,
    Green
}

let c: Color = Color.Green;


// Tuple
let swapNumbers : [firstNumber: number, secondNumber: number];
// more than 2 number not accepted in this array
swapNumbers = [1, 2];

function swapNums(num1:number, num2:number):[number, number] {
    return [num2, num1];
}

// console.log(swapNums(10, 20));