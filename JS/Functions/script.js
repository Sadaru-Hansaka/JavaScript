
// function declaration
function doMAth(a, b){
    let c = a+b;
    return c;
}

// function expression  *can't override
const doMoreMAth = function (a, b){
    let c = a*b;
    return c;
}

console.log("DO math -", doMAth(10,13));
console.log("DO more math -", doMoreMAth(10,13))

// Immediately Invoked Function Expression(IIFE)
(function (){
    let a = 5;
    let b=12;
    let c= doMAth(a, b);
    console.log("The sum =", c)
})();