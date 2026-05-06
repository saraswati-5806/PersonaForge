// TYPING EFFECT
const text = ["Full Stack Developer", "Cybersecurity Enthusiast"];
let i = 0, j = 0;

function type() {
    document.getElementById("typing").innerHTML = text[i].slice(0, j++);
    
    if (j > text[i].length) {
        i = (i + 1) % text.length;
        j = 0;
    }

    setTimeout(type, 120);
}
type();

// SCROLL ANIMATION
const fadeElements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    fadeElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
});

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.style.background = window.scrollY > 50 
        ? "rgba(18,24,38,0.9)" 
        : "transparent";
});