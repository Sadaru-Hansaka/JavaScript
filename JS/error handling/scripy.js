try{
    console.log(a+b);
}catch(err){
    console.log(err);
    console.log("There is a error")
}

console.log("It comes to here");


// throw error

try{
    // A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere.
    throw new ReferenceError();
}catch(err){
    console.log(err);
    console.log("There is a Referanceerror")
}

console.log("It comes to here");


// typeError
try{
    // A TypeError is thrown when, for example, trying to run a method on a non-supported data type.
    throw new TypeError();
    "hello".pop();
}catch(err){
    console.log(err);
    console.log("There is a TypeError");
}

console.log("It comes to here")

// range error
try{
    throw new RangeError();
    let num = (10).toString(100);
}catch(err){
    console.log(err);
    console.log("There is a RangeError");
}

console.log("It comes to here")