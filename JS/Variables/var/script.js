// Create a variable

var name = "Sadaru Hansaka";

document.querySelector(".element").innerHTML = name;

name = "Kodagoda Gamage";

document.querySelector(".element").innerHTML = name;

var x = 5 , y = 10;

document.querySelector(".numbers").innerHTML = x;  //displays 5
document.querySelector(".numbers").innerHTML = y; //displays 10
document.querySelector(".numbers").innerHTML=x+y;  //displays 15


var colour = "red";
document.querySelector(".element2").style.color = colour;

// change the color using functions
function changeColor(){
    colour="skyblue"
    document.querySelector(".element2").style.backgroundColor=colour
}
changeColor();


// scope of variables
var colour = "red"; //color -> red

function changeColor2(){
    colour="skyblue"  //color -> skyblue
    document.querySelector(".element3").style.backgroundColor=colour
}
//if I call this function after change the color, the color will be red & bg color will be skyblue
// changeColor2();

//color -> skyblue
document.querySelector(".element3").style.color = colour;

changeColor2();   

// var is a global scope variable