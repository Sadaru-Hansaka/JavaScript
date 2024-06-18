var counter = 3;

function example(counter){
    console.log(counter);
    counter = counter - 1;
    if(counter > 0) {
        example(counter);
    }
}

example(counter)

// --------------------------------------
console.log("Second example")
var counter2 = 3;

function example2(counter2){
    console.log(counter2);
    counter2 = counter2 - 1;
    if(counter2 == 0) return;
    example(counter2);

}

example2(counter2)