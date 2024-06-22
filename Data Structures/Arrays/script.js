// used forEach to read each element of the array
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
console.log(" ");

// pass array and index as a argument to parameters
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});
console.log(" ");

// filter() method
const nums = [0,10,20,30,40,50];
const filterNums = nums.filter( function(num) {
    return num > 20;
});
console.log(filterNums);
console.log(" ");

// map() method
let result = [0,10,20,30,40,50].map( function(num) {
    return num / 10
});
console.log(result);
console.log(" ");

// sets 
const oldSet = ['apple','pear','apple','pear','plum', 'apple'];
const unique = new Set(oldSet);
console.log(unique);
