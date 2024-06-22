const top7 = ["Sadaru", "Ronaldo","Nethra","Kodagoda","Gamage","Hafiz","Hansaka"];

// rest operator
const [] = top7;
const [first, second, third, ...rest] = top7;

console.log(top7);
console.log(first);
console.log(rest);

// use rest operator to functions

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6, 7)); 
