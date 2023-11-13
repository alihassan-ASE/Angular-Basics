// : number in the function is to tell the return of (return num1+num2)

function add(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(12, 25));

// Other syntax
const subtract = (num1: number, num2: number): number => num1 - num2;
console.log(subtract(10, 11));

const multiplication = function (num1: number, num2: number) {
  return num1 * num2;
};

console.log(multiplication(5, 16));

// we dont need to use ? in parameter with rest operator because rest operator allows zero or more values
const add2 = function (num1: number, num2: number, ...num3: number[]): number {
  return num3
    ? num1 + num2 + num3.reduce((acc, num) => acc + num, 0)
    : num1 + num2;
};

console.log(add2(2, 3, 12, 45));
