// ===============================
// PAGE 5 - ONE NIGHT, JUST US
// ===============================

// ---------- Typing Intro ----------

const titleText = "One Night, Just Us...";
const subtitleText =
"If I could pause one moment forever... I'd choose a quiet night with you. 🌙❤️";

let t = 0;
let s = 0;

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

function typeTitle(){

    if(t < titleText.length){

        title.innerHTML += titleText.charAt(t);

        t++;

        setTimeout(typeTitle,80);

    }else{

        setTimeout(typeSubtitle,500);

    }

}

function typeSubtitle(){

    if(s < subtitleText.length){

        subtitle.innerHTML += subtitleText.charAt(s);

        s++;

        setTimeout(typeSubtitle,35);

    }else{

        setTimeout(()=>{

            document.getElementById("rooftop").classList.remove("hidden");

        },700);

    }

}

typeTitle();


// ---------- Wishes ----------

const wishes=[

"🌸 Thank you for making my world brighter.",

"💖 You always find a way to make me smile.",

"🌙 I hope we keep making memories together.",

"💌 You're my favorite notification.",

"✨ I'll always be cheering for you.",

"🤍 You make ordinary moments feel extraordinary.",

"❤️ I'll choose you again and again."

];

function showWish(number){

    const box=document.getElementById("wishBox");

    document.getElementById("wishTitle").innerHTML=
    "Star "+number;

    document.getElementById("wishText").innerHTML=
    wishes[number-1];

    box.style.display="block";

    setTimeout(()=>{

        box.style.display="none";

    },5000);

}


// ---------- Secret Star ----------

function secretWish(){

    const star=document.getElementById("shootingStar");

    star.style.display="block";

    star.style.left="85%";
    star.style.top="10%";

    star.animate([

        {
            transform:"translate(0,0)"
        },

        {
            transform:"translate(-900px,400px)"
        }

    ],{

        duration:1200

    });

    setTimeout(()=>{

        star.style.display="none";

        document.getElementById("wishBox").style.display="block";

        document.getElementById("wishTitle").innerHTML=
        "🌠 My Wish";

        document.getElementById("wishText").innerHTML=
        "If I ever wished upon a star... I'd wish to keep writing our story together. ❤️";

    },1200);

}


// ---------- Dog & Cat ----------

let dogTouched=false;
let catTouched=false;

function touchDog(){

    dogTouched=true;

    document.getElementById("dog").style.left="36%";

    checkLove();

}

function touchCat(){

    catTouched=true;

    document.getElementById("cat").style.right="36%";

    checkLove();

}


// ---------- Hearts ----------

function checkLove(){

    if(dogTouched && catTouched){

        for(let i=0;i<18;i++){

            setTimeout(createHeart,i*120);

        }

    }

}

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=(48+Math.random()*4)+"%";

    heart.style.bottom="180px";

    document.getElementById("floatingHearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },2500);

}


// ---------- Next Page ----------

function nextPage(){

    document.body.style.transition=".8s";

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="page6.html";

    },800);

}
