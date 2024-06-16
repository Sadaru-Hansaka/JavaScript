// objects literals and dot notation

// object declaration method
var table = {
    legs: 4,
    color: "red",
    price: 100,
}

console.log(table);
console.log(table.color);

// another wayy to build objects
var table2 = {};
table2.width = 100;
table2.height = 50;
table2.color = "black";

console.log(table2);
console.log(table2.height);
// ---------------------------------------------------------------------

// object literals and bracket notation

var house = {};
house["rooms"] = 12;
house["color"] = "red";
house["price"] = 10000;
house.numberOfDoors = 5;

console.log(house)


// ---------------------------------------------------------------------

var arrayOfKeys = ["legs", "color", "price"];
var table3 = {
    legs: 4,
    color: "red",
    price: 100,
};

for(var i = 0; i<arrayOfKeys.length; i++){
    console.log(table3[arrayOfKeys[i]])
}

// arrays are also objects
function arrayBuilder(one, two, three) {
    var arr = [];
    // add elements to the array
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
    // remove elements from array
    arr.pop(two);
}

arrayBuilder(1, 2, 3);