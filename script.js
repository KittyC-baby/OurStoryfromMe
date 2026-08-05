// ===========================
// Typing Animation
// ===========================

const message = `Sometimes...

The most beautiful stories begin with a single heart. ❤️`;

const typing = document.getElementById("typing");
const hiddenNote = document.getElementById("hiddenNote");
const openBtn = document.getElementById("openHeartBtn");
const fade = document.getElementById("fade");

let index = 0;

function typeWriter() {
    if (index < message.length) {
        typing.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 60);
    } else {
        setTimeout(() => {
            hiddenNote.classList.add("show");
            openBtn.classList.remove("hidden");
        }, 800);
    }
}

window.onload = () => {
    typeWriter();
};

// ===========================
// Open Heart Button
// ===========================

function openBook() {

    fade.style.opacity = "1";

    setTimeout(() => {
        window.location.href = "page2.html";
    }, 1000);

}
