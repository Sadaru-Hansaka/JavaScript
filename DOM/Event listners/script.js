const button = document.querySelector(".btn");
const greet = document.querySelector(".greet");

let greeted = false;

button.addEventListener("click", () => {
    if (!greeted) {
        greet.innerHTML = "Hello World";
        button.innerHTML="close";
        greeted = true;
    } else {
        button.innerHTML="click";
        greet.innerHTML = "";
        greeted = false;
    }
});

function handleclick(){
    greet.innerHTML="You clicked the h2 tag";
    let h2 = false;
    if(!h2){
        button.innerHTML="close";
        h2 = true;
        next = true;
    }
    


}
