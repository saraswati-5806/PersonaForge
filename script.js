// MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// MODAL
function openModal(title, desc, link){
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-desc").innerText = desc;
    document.getElementById("modal-link").href = link;
}

document.getElementById("close").onclick = () => {
    document.getElementById("modal").style.display = "none";
};

// TYPING
const text = ["Frontend Developer", "Web Designer"];
let count = 0, index = 0;

(function type(){
    let current = text[count];
    document.getElementById("typing").textContent = current.slice(0, ++index);

    if(index === current.length){
        count = (count + 1) % text.length;
        index = 0;
        setTimeout(type, 1000);
    } else {
        setTimeout(type, 100);
    }
})();
// CONTACT FORM HANDLER
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    message.textContent = "Message sent successfully!";
    message.style.color = "lightgreen";

    form.reset();
});