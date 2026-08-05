/* ==============================
   INTRO TYPING
============================== */

const title = "One Night, Just Us 🌙";
const text =
"Even ordinary nights become magical when you're beside me...";

let t = 0;
let p = 0;

const titleEl = document.getElementById("title");
const textEl = document.getElementById("subtitle");

function typeTitle(){

    if(t < title.length){

        titleEl.innerHTML += title.charAt(t);

        t++;

        setTimeout(typeTitle,70);

    }

    else{

        typeText();

    }

}

function typeText(){

    if(p < text.length){

        textEl.innerHTML += text.charAt(p);

        p++;

        setTimeout(typeText,35);

    }

    else{

        document.getElementById("rooftop").classList.remove("hidden");

        document.getElementById("messageCard").classList.remove("hidden");

    }

}

typeTitle();

/* ==============================
   STAR MESSAGES
============================== */

const messages=[

"You make me feel safe. ❤️",

"You became my favourite person. 🌸",

"I still smile when I remember our first chat. ✨",

"Thank you for staying with me. 🤍",

"Let's keep making beautiful memories together. 🌙"

];

let opened=0;

function showStar(num){

    document.getElementById("messageText").innerHTML=messages[num-1];

    const star=document.querySelector(".s"+num);

    star.style.color="#ffd700";

    star.style.transform="scale(1.4)";

    star.style.pointerEvents="none";

    opened++;

    createHearts();

    if(opened===5){

        setTimeout(showEnding,1500);

    }

}

/* ==============================
   FLOATING HEARTS
============================== */

function createHearts(){

    const container=document.getElementById("heartContainer");

    for(let i=0;i<8;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=(40+Math.random()*20)+"%";

        heart.style.bottom="130px";

        heart.style.fontSize=(18+Math.random()*14)+"px";

        heart.style.animationDuration=(2+Math.random())+"s";

        container.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },3000);

    }

}

/* ==============================
   PET THE PUPPY
============================== */

function petDog(){

    const dog=document.getElementById("dog");

    dog.style.transform="translateX(-120px) scale(1.12)";

    createHearts();

    setTimeout(()=>{

        dog.style.transform="translateX(-120px)";

    },400);

}

/* ==============================
   PET THE KITTEN
============================== */

function petCat(){

    const cat=document.getElementById("cat");

    cat.style.transform="scale(1.12)";

    createHearts();

    setTimeout(()=>{

        cat.style.transform="scale(1)";

    },400);

}

/* ==============================
   FINAL MESSAGE
============================== */

function showEnding(){

    document.getElementById("messageCard").classList.add("hidden");

    document.getElementById("constellation").classList.add("hidden");

    document.getElementById("finalMessage").classList.remove("hidden");

}

/* ==============================
   NEXT PAGE
============================== */

function nextPage(){

    document.body.style.transition="1s";

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="page6.html";

    },900);

}
