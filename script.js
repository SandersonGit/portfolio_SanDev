
let i = 0;
const txt = 'Sou SANDERSON, um desenvolvedor apaixonado por criar soluções inovadoras.';
const speed = 20;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
});



