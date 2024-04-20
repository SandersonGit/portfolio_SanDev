
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Torna o header mais transparente ao rolar para baixo
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Restaura a opacidade total quando o scroll é no topo
    }
});

let i = 0;
const txt = 'Vamos trabalhar juntos?';
const speed = 100;

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



