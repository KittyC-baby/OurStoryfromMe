// =========================
// TEXTS
// =========================

const typing = document.getElementById("typing");
const book = document.getElementById("bookContainer");
const note = document.getElementById("hiddenNote");
const fade = document.getElementById("fade");

const firstText = "Loading memories...";
const secondText = `Some stories are written in books...

Ours was written in our hearts.

I'm opening my heart...

For one person,

Once again.

❤️ Her ❤️`;

let i = 0;

// =========================
// FIRST TYPING
// =========================

function typeFirst() {

    if (i < firstText.length) {

        typing.innerHTML += firstText.charAt(i);
        i++;

        setTimeout(typeFirst, 90);

    }

    else {

        setTimeout(() => {

            eraseText();

        }, 1500);

    }

}

typeFirst();

// =========================
// ERASE
// =========================

function eraseText() {

    let txt = typing.innerHTML;

    let erase = setInterval(() => {

        txt = txt.slice(0, -1);

        typing.innerHTML = txt;

        if (txt.length == 0) {

            clearInterval(erase);

            i = 0;

            typeSecond();

        }

    }, 25);

}

// =========================
// SECOND TYPING
// =========================

function typeSecond() {

    if (i < secondText.length) {

        let char = secondText.charAt(i);

        if (char === "\n") {

            typing.innerHTML += "<br>";

        }

        else {

            typing.innerHTML += char;

        }

        i++;

        setTimeout(typeSecond, 55);

    }

    else {

        setTimeout(() => {

            book.style.display = "block";

            book.classList.add("showBook");

        }, 800);

    }

}

// =========================
// NOTE
// =========================

setTimeout(() => {

    note.style.opacity = "1";

}, 15000);

// =========================
// OPEN BOOK
// =========================

function openBook() {

    fade.style.opacity = "1";

    setTimeout(() => {

        window.location.href = "page2.html";

    }, 1200);

}
