let a = 5;
let b = 10;
let c = 2.6;

console.log(`Let a : ${a} -(${typeof a})`);
console.log(`Let a : ${b} -(${typeof b})`);
console.log(`Let a : ${b} -(${typeof c})`);

let result = a + b;
console.log(`Addition : ${result}`);

result = a - b;
console.log(`Subtraction : ${result}`); 

result = a * b;
console.log(`Multiplication : ${result}`);

result = a / b;
console.log(`Division : ${result}`);

result = a % b;
console.log(`Remainder : ${result}`);

// increase number by 1 before display
let num = 12;
console.log(`Increase by 1 : ${++num}`);

// decrease number by 1 before display
console.log(`Decrease by 1 : ${--num}`);

// increase number by 1 after display
console.log(`Increase by 1 : ${num++}`);
console.log("Increase by 1 : " , num);

gf = 12;
console.log(`gf : ${typeof gf}`)

let sum = 23.95;
let tip = "3";

console.log("the total is $"+sum+tip+".")