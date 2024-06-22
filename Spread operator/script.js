const cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"];

function logCities(...city){
    for(var i =1 ; i<=cities.length;i++){
        console.log(i,city[i-1]);
    }
}

logCities(...cities)
console.log("");

// oncatanate two arrays using spread operator
console.log("Concatanate two arrays using spread operator");
const fruits = ["apple","mango","banana"];
const berry = ["blueberry", "raspberry"];

const concate = [...fruits, ...berry];
console.log(concate);
console.log("");

// use spread operator to objects
console.log("Use spread operator to objects");
const name = {name : "Sadaru"};
const age = {age : 19};
const gender = {gender : "Male"};
const person = {...name, ...age, ...gender};
console.log(person);
console.log("");

// use spread operator to combine objects
console.log("Combine objects using spread operator");
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combined = { ...obj1, ...obj2 }; // Output: { a: 1, b: 2, c: 3, d: 4 }

console.log(combined);
console.log("");

// add new elements to array using spread operator
console.log("Add new elements to array using spread operator");
const array = [1, 2, 3];
console.log(array);
const newArray = [...array, 4, 5];
console.log(newArray);
console.log("");

// convert string to an array
console.log("Convert string to an array");
const string = "Hello";
const asd = [...string];
console.log(asd);
console.log("");