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

function openModal(title, desc, link) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");

    modal.style.display = "flex";
    modalTitle.innerText = title;

    // Using backticks (`) prevents most "Uncaught Syntax" errors in VS Code
    let contentHtml = `
        <p style="margin-bottom: 20px;">${desc}</p>
        <a href="${link}" target="_blank" class="btn" style="display: inline-block; text-decoration: none; color: black; font-weight: 600;">
            <i class="fa-solid fa-file-pdf"></i> Read Full Paper (Zenodo)
        </a>
    `;

    modalDesc.innerHTML = contentHtml;
}

// Ensure the close button works
document.getElementById("close").onclick = function() {
    document.getElementById("modal").style.display = "none";
};