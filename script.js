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


const spinner = document.getElementById("spinner");
const btnText = document.getElementById("btnText");

const toast = document.getElementById("toast");

function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // RESET ERRORS
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // VALIDATION
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    if (!email.value.includes("@")) {
        emailError.textContent = "Enter valid email";
        valid = false;
    }

    if (message.value.trim().length < 5) {
        messageError.textContent = "Message too short";
        valid = false;
    }

    if (!valid) return;

    // LOADING START
    spinner.style.display = "inline-block";
    btnText.textContent = "Sending...";

    setTimeout(() => {

        // SAVE LOCALLY
        const stored = JSON.parse(localStorage.getItem("messages")) || [];

        stored.push({
            name: name.value,
            email: email.value,
            message: message.value,
            time: new Date().toLocaleString()
        });

        localStorage.setItem("messages", JSON.stringify(stored));

        // RESET UI
        spinner.style.display = "none";
        btnText.textContent = "Send Message";

        form.reset();

        showToast("Message saved successfully!");

    }, 1500);
});