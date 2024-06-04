const content = 

`<h1 class="title">Sadaru Hansaka</h1><main class="main_content">
<h1 class="title">Sadaru Hansaka</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores cum quasi, incidunt magnam maiores at iure doloremque facilis quos natus ipsam tenetur voluptas labore. Assumenda in quisquam animi tempore possimus?</p>

</main>
`;

const main = document.querySelector(".main_content");

let element = document.createElement("h1", "Sadaru Hansaka");
element.classList.add("title");
element.setAttribute("id", "title")
element.innerHTML=content;