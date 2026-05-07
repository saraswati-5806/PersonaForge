// MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if(hamburger){
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// MODAL - Fixed to handle links correctly
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
            <i class="fa-solid fa-file-pdf"></i> View Full Work 
        </a>
    `;

    modalDesc.innerHTML = contentHtml;
}
document.querySelector('.hero').classList.add('show');

// Ensure the close button works
document.getElementById("close").onclick = function() {
    document.getElementById("modal").style.display = "none";
};

// Close modal if user clicks outside the content box
window.onclick = (event) => {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Updated TYPING EFFECT
const text = ["Software Engineer", "Security Researcher", "Full-Stack Developer"];
let i = 0, j = 0;
let isDeleting = false; // Added for a smoother "typing" feel

function type() {
    const currentText = text[i];
    const typingElement = document.getElementById("typing");

    if (!typingElement) return; // Safety check

    if (isDeleting) {
        typingElement.innerHTML = currentText.slice(0, j--);
    } else {
        typingElement.innerHTML = currentText.slice(0, j++);
    }

    if (!isDeleting && j > currentText.length) {
        isDeleting = true;
        setTimeout(type, 1500); // Wait at the end of the word
    } else if (isDeleting && j < 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
        j = 0;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 60 : 120);
    }
}
type();


// FORM HANDLING
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

if(form) {
    form.addEventListener("submit", function(e){
        e.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        let valid = true;

        if(name.value === ""){
            document.getElementById("nameError").textContent = "Required";
            valid = false;
        }

        if(!email.value.includes("@")){
            document.getElementById("emailError").textContent = "Invalid email";
            valid = false;
        }

        if(message.value.length < 5){
            document.getElementById("messageError").textContent = "Too short";
            valid = false;
        }

        if(!valid) return;

        // Save to LocalStorage
        const stored = JSON.parse(localStorage.getItem("messages")) || [];
        stored.push({
            name: name.value,
            email: email.value,
            message: message.value,
            date: new Date().toISOString()
        });
        localStorage.setItem("messages", JSON.stringify(stored));

        form.reset();

        toast.textContent = "Message saved!";
        toast.classList.add("show");

        setTimeout(() => toast.classList.remove("show"), 3000);
    });
}

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
// Fade-in Animation on Scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade').forEach(el => observer.observe(el));