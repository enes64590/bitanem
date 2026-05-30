//////////////////////////////////////////////////
// ŞİFRE
//////////////////////////////////////////////////

const password = "11 nisan";

function checkPassword() {

    const input =
        document.getElementById("passwordInput").value;

    const error =
        document.getElementById("error");

    if (
        input.toLowerCase().trim()
        ===
        password.toLowerCase()
    ) {

        document.getElementById("login-screen")
            .style.display = "none";

        document.getElementById("main-content")
            .style.display = "block";

        window.scrollTo(0,0);

    } else {

        error.innerText =
            "Yanlış cevap ❤️";

    }

}

//////////////////////////////////////////////////
// SAYAÇ
//////////////////////////////////////////////////

const startDate =
new Date("2026-04-11T00:00:00");

function updateCounter(){

    const now = new Date();

    const diff =
    now - startDate;

    const days =
    Math.floor(
        diff / (1000*60*60*24)
    );

    const hours =
    Math.floor(
        (diff % (1000*60*60*24))
        /
        (1000*60*60)
    );

    const minutes =
    Math.floor(
        (diff % (1000*60*60))
        /
        (1000*60)
    );

    const seconds =
    Math.floor(
        (diff % (1000*60))
        /
        1000
    );

    document.getElementById("days")
        .innerText = days;

    document.getElementById("hours")
        .innerText = hours;

    document.getElementById("minutes")
        .innerText = minutes;

    document.getElementById("seconds")
        .innerText = seconds;

}

setInterval(updateCounter,1000);
updateCounter();

//////////////////////////////////////////////////
// MÜZİK
//////////////////////////////////////////////////

const audio =
document.getElementById("audio");

const playBtn =
document.getElementById("playBtn");

const record =
document.querySelector(".record");

let playing = false;

playBtn.addEventListener("click",()=>{

    if(!playing){

        audio.play();

        playBtn.innerText =
        "⏸ Duraklat";

        record.style.animationPlayState =
        "running";

        playing = true;

    }else{

        audio.pause();

        playBtn.innerText =
        "▶ Oynat";

        record.style.animationPlayState =
        "paused";

        playing = false;

    }

});

//////////////////////////////////////////////////
// MEKTUP
//////////////////////////////////////////////////

const envelope =
document.getElementById("envelope");

const letter =
document.querySelector(".letter");

const front =
document.querySelector(".envelope-front");

const closeLetter =
document.getElementById("closeLetter");

front.addEventListener("click",()=>{

    letter.style.display =
    "block";

    front.style.display =
    "none";

});

closeLetter.addEventListener("click",(e)=>{

    e.stopPropagation();

    letter.style.display =
    "none";

    front.style.display =
    "block";

});

//////////////////////////////////////////////////
// KALP YAĞMURU
//////////////////////////////////////////////////

function createHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.top = "-50px";

    heart.style.fontSize =
    (15 + Math.random()*25) + "px";

    heart.style.zIndex = "-1";

    heart.style.pointerEvents =
    "none";

    document.body.appendChild(heart);

    let pos = -50;

    const timer =
    setInterval(()=>{

        pos += 3;

        heart.style.top =
        pos + "px";

        if(pos > window.innerHeight){

            clearInterval(timer);

            heart.remove();

        }

    },20);

}

setInterval(createHeart,500);

//////////////////////////////////////////////////
// FOTOĞRAF BÜYÜTME
//////////////////////////////////////////////////

const photos =
document.querySelectorAll(
".photo-card img"
);

photos.forEach(photo=>{

    photo.addEventListener(
    "click",()=>{

        photo.classList.toggle(
        "zoom"
        );

    });

});