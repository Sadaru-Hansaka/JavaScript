
let color = "red";
document.querySelector(".first").style.color = color;

color = "blue";
document.querySelector(".second").style.color = color;

color = "green";
function changeColor(){
    let color = "skyblue";
    document.querySelector(".first").style.backgroundColor = color
}
changeColor();

document.querySelector(".second").style.backgroundColor = color