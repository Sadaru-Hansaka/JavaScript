
// Create an array
const things = ["Pen","Ruller","Pencil","Eraser","Bottle"];

const nestedObjects = {
    item01: {
      name: "pen",
      type: "toy",
    },
    item02: {
      name: "Ruller",
      type: "equipment",

    },
    item03: {
      name: "pencil",
      type: "tool",
    },
    item04: {
      name: "Eraser",
      type: "tool",

    },
    item05: {
      name: "Bottle",
      type: "equipment",
    },
};


// ----------------------------------------------------------
const loop1 = document.querySelector(".loops1");
// create unorderd list
let thingsList = document.createElement("ul")

let head1 = document.createElement("h1");
head1.innerHTML= "For loop";
loop1.append(head1);
// *********************************************************
// for loop  
for (let i = 0; i<things.length ; i++){
    // create list item element
    let listItems = document.createElement("li")
    // assign each item to li
    listItems.innerHTML=things[i];
    // add tho UL
    thingsList.append(listItems);
}
loop1.append(thingsList);
// -------------------------------------------------------

// -------------------------------------------------------------
const loop2 = document.querySelector(".loops2");
let UL = document.createElement("ul");

let head2 = document.createElement("h1");
head2.innerHTML= "For... of loop and arrays";
loop2.append(head2);
// ***************************************************
// for ... of loop and arrays
for (const items of things){
    let litems = document.createElement("li")
    litems.innerHTML = items;
    UL.append(litems);
} 

loop2.append(UL);

// --------------------------------------------------------------------

// ------------------------------------------------------------------------
const loop3 = document.querySelector(".loops3");
let UL3 = document.createElement("ul");

let head3 = document.createElement('h1');
head3.innerHTML = "Foreach array method";
loop3.append(head3);
// ********************************************************************
// foreach array method
things.forEach((items)=>{
    let  itemlist = document.createElement("li");
    itemlist.innerHTML=items;
    UL3.append(itemlist);
});

loop3.append(UL3);

// ----------------------------------------------------------------------
const loop4 = document.querySelector(".loops4");
let UL4 = document.createElement("ul");

let head4 = document.createElement('h1');
head4.innerHTML = "for .. in loop and objects";
loop4.append(head4);
// *******************************************************************
// for in loop
for (const singleObject in nestedObjects){
    let itemlist2 = document.createElement("li");
    itemlist2.innerHTML=`Name : ${nestedObjects[singleObject].name}`;
    UL4.append(itemlist2);
}
loop4.append(UL4);




// nested for loops
for (var year = 2023; year<2025;year++){
    console.log(year);
    for(var month=1;month<13;month++){
        console.log("--------------------",month);
    }
}

// add css to the for loop
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}