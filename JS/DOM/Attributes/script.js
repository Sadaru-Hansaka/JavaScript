var attribute = document.querySelector("img").getAttribute("alt")
console.log(attribute)

// Set attributes
var setAttribute = document.querySelector("img").setAttribute("alt", "THis image should add")
console.log(setAttribute)

// add new attributes
var newAttribute = document.querySelector("img").setAttribute("tittle", "This is new attribute")
console.log(newAttribute)

// remove attributes
var removeAttribute = document.querySelector("img").removeAttribute("tittle")
console.log(removeAttribute)