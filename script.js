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

function openModal(title, desc, link){
    const modal = document.getElementById("modal");
    modal.style.display = "flex";

    document.getElementById("modal-title").innerText = title;

    let html = `
        <p style="margin-bottom:20px;">${desc}</p>
        <a href="${link}" target="_blank" class="btn" style="text-decoration:none;">
            View Project →
        </a>
    `;

    document.getElementById("modal-desc").innerHTML = html;
}

// CLOSE
document.getElementById("close").onclick = () => {
    document.getElementById("modal").style.display = "none";
};

// OUTSIDE CLICK CLOSE
window.onclick = (e) => {
    const modal = document.getElementById("modal");
    if(e.target == modal){
        modal.style.display = "none";
    }
};