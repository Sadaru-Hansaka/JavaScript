document.addEventListener('DOMContentLoaded', () => {
    const text = "Your Topic Goes Here";
    let index = 0;
    const speed = 100; // typing speed in milliseconds
    const typewriterElement = document.getElementById('typewriter');

    function type() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
});
