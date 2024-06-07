
let item = "shirt";

const collection = ["trousers", "saree", "shirt",item];

// print element of the array
console.log(collection[3]);
console.log(collection);

// swap values of the array
collection[2] = "skirt";
console.log(collection)

// add items to the end of the array
collection[collection.length] = "kurti";
console.log(collection)

// add item to the 10th index
collection[10] = "kurta";
console.log(collection)

// check 9 th index value
console.log(collection[9])  //display undefined

// print all the items in the array  as a string
console.log(collection.join(" , ")); // trousers , saree , skirt , shirt...

//add items to the end of the array using push method
collection.push("Jacket",12,true);
console.log(collection)

// add items to the start of the array using unshift method
collection.unshift("Jacket",12,true);
console.log(collection)

// remove items from the end of the array using pop method
collection.pop();
console.log(collection)

// print all items using forEach function
collection.forEach(function(element){
    console.log(element)
});

let longItem = collection.find(function(item){
    if (item.length>=4){
        return item
    }
});
console.log(longItem)

const arr = [1,2,3,4,5];
arr.push(6);
arr.unshift(7);
arr.pop();
arr.shift();
console.log(arr)
arr[8]=120;
console.log(arr);
arr[6]=200;
console.log(arr);