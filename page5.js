// ======================================
// PAGE 5 SCRIPT
// ======================================

const dog = document.getElementById("dog");
const cat = document.getElementById("cat");
const card = document.getElementById("messageCard");
const text = document.getElementById("messageText");
const finalMessage = document.getElementById("finalMessage");
const stars = document.querySelectorAll(".star");
const heartContainer = document.getElementById("heartContainer");

let dogClicked = false;
let catClicked = false;

// ======================================
// Floating Hearts
// ======================================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "%";

    heart.style.bottom = "0px";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    heartContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },3000);

}

// Hearts every second
setInterval(createHeart,1000);

// ======================================
// Puppy
// ======================================

dog.onclick = ()=>{

    dogClicked = true;

    text.innerHTML = `
    🐶<br><br>

    Hi!! 💛

    I know someone...

    who smiles a little brighter whenever you're around.

    <br><br>

    And I think...

    that someone is completely in love with you. ❤️
    `;

    for(let i=0;i<8;i++){

        setTimeout(createHeart,i*120);

    }

    checkFinished();

};

// ======================================
// Kitten
// ======================================

cat.onclick = ()=>{

    catClicked = true;

    text.innerHTML = `
    🐱<br><br>

    Meow... 🩷

    If love had a favorite place...

    it would be wherever you are.

    <br><br>

    You're someone's safe place,

    happiness,

    and forever. ✨
    `;

    for(let i=0;i<8;i++){

        setTimeout(createHeart,i*120);

    }

    checkFinished();

};

// ======================================
// Stars
// ======================================

stars.forEach(star=>{

    star.onclick=()=>{

        createHeart();

        star.style.transform="scale(1.6)";

        setTimeout(()=>{

            star.style.transform="scale(1)";

        },300);

    }

});

// ======================================
// Final Message
// ======================================

function checkFinished(){

    if(dogClicked && catClicked){

        setTimeout(()=>{

            finalMessage.classList.remove("hidden");

            window.scrollTo({

                top:document.body.scrollHeight,

                behavior:"smooth"

            });

        },1000);

    }

}

// ======================================
// Continue
// ======================================

function nextPage(){

    window.location.href="page6.html";

}
