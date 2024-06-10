function people(name,age,gender,height,weight){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
}

const person1 = new people("Sadaru",19,"Male",5.5,50);
const person2 = new people("Hafiz",18,"Male",6,50); 

const Con = `
    <h1>People Biodata</h1>
    <ul>
        <li>Name: ${person1.name}</li>
        <li>Age: ${person1.age}</li>
        <li>Gender: ${person1.gender}</li>
        <li>Height: ${person1.height}</li>
        <li>Weight: ${person1.weight}</li>
    </ul>
`



const main = document.querySelector(".main");

const content = document.createElement("article");
content.classList.add("Person1");
content.innerHTML = Con;

main.append(content)

switch (true) {
    case person1.age >= 18:
        console.log("Adult");
        break;

    case person1.age < 18 || person1.weight >= 50:
        console.log("Not Adult");
        break; 
}