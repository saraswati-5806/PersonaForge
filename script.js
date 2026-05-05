// MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if(hamburger){
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// MODAL - Updated to ensure smooth opening
function openModal(title, desc, link){
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");

    modal.style.display = "flex";
    modalTitle.innerText = title;
    
    // This allows us to put a button inside the description
    let contentHtml = `<p style="margin-bottom: 20px;">${desc}</p>`;
    
    if(link) {
        contentHtml += `
            <a href="${link}" target="_blank" class="btn" style="display: inline-block; text-decoration: none; color: black; font-weight: 600;">
                <i class="fa-solid fa-file-pdf"></i> Read Full Paper (DOI)
            </a>`;
    }
    
    modalDesc.innerHTML = contentHtml;
}
// CLOSE MODAL
document.getElementById("close").onclick = () => {
    document.getElementById("modal").style.display = "none";
};

// TYPING EFFECT
const text = ["Software Engineer", "Security Researcher", "Full-Stack Developer"];
let count = 0, index = 0;

(function type(){
    let current = text[count];
    const typingElement = document.getElementById("typing");
    if(typingElement) {
        typingElement.textContent = current.slice(0, ++index);
        if(index === current.length){
            count = (count + 1) % text.length;
            index = 0;
            setTimeout(type, 1500);
        } else {
            setTimeout(type, 100);
        }
    }
})();

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