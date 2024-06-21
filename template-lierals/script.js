// display both vaiables using template literals
let greet1 = "Hello";
let place1 = "World";
console.log(`${greet1} ${place1} !`)

// display both vaiables without using template literals
var greet2 = "Hello";
var place2 = "World";
console.log(greet2 + " " + place2 + "!");


//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 


// multiline template literals
let multiline = `
Hi
I'm Sadru Hansaka.
how are u?
`;

console.log(multiline)

// variable interpolation
let first = `"He said, Don't you know?, it's got some great features!"`;
let second = `"Wouldn't you want to learn more?", he asked.`;

console.log(`${first} - and I got curious. ${second}`);