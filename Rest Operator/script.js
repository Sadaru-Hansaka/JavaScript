const top7 = ["Sadaru", "Ronaldo","Nethra","Kodagoda","Gamage","Hafiz","Hansaka"];
console.log("Array destructuring")
// rest operator
const [] = top7;
const [first, second, third, ...rest] = top7;

console.log(top7);
console.log(first);
console.log(rest);
console.log(" ")

// use rest operator to functions
console.log("Function Parameters")
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6, 7)); 
console.log(" ")

// object destructuring
console.log("Object destructuring")
const { a, b, ...rest1 } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest1); // Output: { c: 3, d: 4 }
