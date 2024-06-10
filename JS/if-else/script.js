
const aMan = {
    name: "Sadaru Hansaka",
    age: 15,
    weight : 60,
    gender : "Male",
}

const content = `
    <h1 class="title">People Biodata</h1>
    <ul>
        <li>Name: ${aMan.name}</li>
        <li>Age: ${aMan.age}</li>
        <li> ${aMan.weight}</li>
        <li>Gender: ${aMan.gender}</li>
    </ul>
`;

const main = document.querySelector(".main");

const newArticle = document.createElement("article");
newArticle.classList.add("name");
newArticle.setAttribute("id", "name");
newArticle.innerHTML = content;

main.append(newArticle);

// if
if (aMan.age >= 18) {
    let status = "Adult";
    const newStatus = document.createElement("h2");
    newStatus.classList.add("status");
    newStatus.innerHTML = status;
    newArticle.append(newStatus);
}else{
    let status = "Not Adult";
    const newStatus = document.createElement("h2");
    newStatus.classList.add("status");
    newStatus.innerHTML = status;
    newArticle.append(newStatus);
}

// and
if (aMan.weight >= 50 && aMan.age >=18) {
    let status = "You are a fucking adult pig";

    const newStatus = document.createElement("h2");
    newStatus.classList.add("status");
    newStatus.innerHTML = status;
    newArticle.append(newStatus);
}

// or
if (aMan.weight >= 50 || aMan.age >=18) {
    let status = "You are a fucking mature pig";

    const newStatus = document.createElement("h2");
    newStatus.classList.add("status");
    newStatus.innerHTML = status;
    newArticle.append(newStatus);
}