// =========================
// Musik
// =========================

const music = document.getElementById("bgMusic");

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    music.play().catch(() => {});

    showPage("pinPage");

});

// =========================
// PIN
// =========================

const pinBtn = document.getElementById("pinBtn");

pinBtn.addEventListener("click", () => {

    const pin = document.getElementById("pinInput").value;

    if(pin === "290324"){

        showPage("giftPage");

    }else{

        document.getElementById("pinError").innerHTML =
        "PIN salah ❤️";

    }

});

// tekan Enter

document
.getElementById("pinInput")
.addEventListener("keypress",function(e){

if(e.key==="Enter"){

pinBtn.click();

}

});

// =========================
// Gift
// =========================


// =========================
// Lanjut Gallery
// =========================

document
.getElementById("galleryBtn")
.addEventListener("click",()=>{

showPage("galleryPage");

});

// =========================
// Gallery
// =========================

const photos=[

"photo1.jpg",

"photo2.jpg"

];

let current=0;

const photo=document.getElementById("photo");

document
.getElementById("nextBtn")
.addEventListener("click",()=>{

current++;

if(current>=photos.length){

current=0;

}

photo.src=photos[current];

});

document
.getElementById("prevBtn")
.addEventListener("click",()=>{

current--;

if(current<0){

current=photos.length-1;

}

photo.src=photos[current];

});

// =========================
// Ganti Halaman
// =========================

function showPage(id){

document.querySelectorAll(".page").forEach(page=>{

page.classList.remove("active");

});

document
.getElementById(id)
.classList.add("active");

}

// =========================
// Musik Loop
// =========================

music.volume=0.6;

music.loop=true;

// Coba autoplay lagi saat user menyentuh layar
document.body.addEventListener("click",()=>{

if(music.paused){

music.play().catch(()=>{});

}

},{once:true});
// ===========================
// Floating Hearts
// ===========================

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},600);


// ===========================
// Gift Animation
// ===========================

document
.getElementById("giftBox")
.addEventListener("click",function(){

this.classList.add("open");

setTimeout(()=>{

showPage("letterPage");

},600);

});
{window.addEventListener("load",()=>{      setTimeout(()=>{          document         .getElementById("loading")         .classList.add("hide");      },1500);  });}

{`function confetti(){

    for(let i=0;i
    
