// let answer = prompt('What is your name?');
// if (typeof(answer) === 'string') {
//     var h1 = document.createElement('h1')
//     h1.innerText = answer;
//     document.body.innerText = '';
//     document.body.appendChild(h1);
// }


var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

// when press enter the input displays
input.addEventListener('change', function() {
    console.log(input.value)
    const h2 = document.createElement('h2');
    h2.innerText = input.value;
    document.body.appendChild(h2);
})