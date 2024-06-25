console.log("Convert JSON strings to JS using parse method");
console.log("");
// create a JSON string
const jsonString = '{ "name": "John", "age": 30, "city": "New York" }';

// parse the JSON string
const person = JSON.parse(jsonString);

// access the values
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York

// change values
person.name = "Jane";
console.log(person.name); // Output: Jane

console.log("");

// use stringyfy method to convert JS object to JSON string
console.log("Convert JS object to JSON string using stringify method");
console.log("");

const data = {
    name: "Sadaru",
    age : 19,
    city : "Sri Jayawardenepura Kotte",
    country : "Sri Lanka",
}

const json = JSON.stringify(data);
console.log(json)