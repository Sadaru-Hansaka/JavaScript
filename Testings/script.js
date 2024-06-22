
//  var sqrt = (function(x) {
//   console.log(x*x);
//  })(my_number)

//  my_number = 5;

//  const myArray = [1, 2, 3, 4]
// myArray.forEach( (item, index) => {
//     myArray[index] = ++item;
// });

// console.log(myArray)

// const myFunction = (data) => {
//     return;
//     let newData = data + 1;
//     return newData;
//  }
 
//  console.log(myFunction(5));

// function myfunc(x,y) {
//     return(x+y);
//    }
//    console.log(myfunc(2,myfunc(5,-2)));

// try{
//     console.log("Hello");
// }catch(err){
//     console.log("bye");
// }

// var x;

// if(x === null) {
//   console.log("null");
// } else if(x === undefined) {
//   console.log("undefined");
// } else {
//   console.log("ok");
// }

// var x = null;
// console.log(x);


// throw new Error();
// console.log("Hello");

// try {
//     throw new Error();
//     console.log('Hello');
// } catch(err) {
//     console.log('Goodbye');
// }


// var globalVar = 77;

// function scopeTest() {
//     var localVar = 88;
// }

// console.log(localVar);

// function meal(animal) {
//     animal.food = animal.food + 10;
// }

// var dog = {
//     food: 10
// };
// meal(dog);
// meal(dog);

// console.log(dog.food);


// function two() {
//     return 2;
// }

// function one() {
//     return 1;
// }

// function calculate(initialValue, incrementValue) {
//     return initialValue() + incrementValue() + incrementValue();
// }

// console.log(calculate(two, one));


// class Animal {
//     constructor(lg) {
//         this.legs = lg;
//     }
// }

// class Dog extends Animal {
//     constructor() {
//         super(4);
//     }
// }

// var result = new Dog();
// console.log(result.legs);


// class Animal {

// }

// class Cat extends Animal {
//   constructor() {
//     super();
//     this.noise = "meow";
//   }
// }

// var result = new Animal();
// console.log(result.noise);



// class Person {
//     sayHello() {
//         console.log("Hello");
//     }
// }

// class Friend extends Person {
//     sayHello() {
//         console.log("Hey");
//     }
// }

// var result = new Friend();
// result.sayHello();

const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);
