
// change the background colour when mouse hover
const container = document.querySelector(".container");

container.addEventListener("mouseenter", () => {
    container.style.backgroundColor = "red";
});
container.addEventListener("mouseleave", () => {
    container.style.backgroundColor = "";
});

// ------------------------------------------

const gridcell = document.querySelectorAll(".cell");

gridcell.forEach((cell)=>{

    // change the background colour when mouse hover
    cell.addEventListener("mouseenter", (event)=>{
        console.log(event);
        cell.style.backgroundColor = "red";
    });
    // remove hover colour
    cell.addEventListener("mouseleave", (event)=>{
        console.log(event);
        cell.style.backgroundColor = "";
    });

    // change bg colour when click
    cell.addEventListener("click", ()=>{
        if(cell.style.backgroundColor){
            cell.style.backgroundColor = "";
        }else{
            cell.style.backgroundColor="blue";
        }
        
    });
    
});