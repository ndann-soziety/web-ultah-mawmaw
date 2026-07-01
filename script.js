// =========================
// Ambil Elemen
// =========================

const music = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");
const pinBtn = document.getElementById("pinBtn");
const giftBox = document.getElementById("giftBox");
const galleryBtn = document.getElementById("galleryBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const photo = document.getElementById("photo");

// =========================
// Ganti Halaman
// =========================

function showPage(id) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

// =========================
// Loading
// =========================

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    if (loading) {
        setTimeout(() => {
            loading.classList.add("hide");
        }, 1000);
    }

});

// =========================
// Tap To Open
// =========================

startBtn.addEventListener("click", () => {

    music.play().catch(() => {});

    showPage("pinPage");

});

// =========================
// PIN
// =========================

pinBtn.addEventListener("click", () => {

    const pin = document.getElementById("pinInput").value;

    if (pin === "290324") {

        showPage("giftPage");

    } else {

        document.getElementById("pinError").textContent =
            "PIN salah ❤️";

    }

});

document.getElementById("pinInput").addEventListener("keydown", function(e){

    if(e.key==="Enter"){

        pinBtn.click();

    }

});

// =========================
// Gift
// =========================

giftBox.addEventListener("click", () => {

    showPage("letterPage");

});

// =========================
// Gallery
// =========================

galleryBtn.addEventListener("click", () => {

    showPage("galleryPage");

});

const photos = [

    "photo1.jpg",
    "photo2.jpg"

];

let current = 0;

nextBtn.addEventListener("click", () => {

    current++;

    if(current >= photos.length){

        current = 0;

    }

    photo.src = photos[current];

});

prevBtn.addEventListener("click", () => {

    current--;

    if(current < 0){

        current = photos.length - 1;

    }

    photo.src = photos[current];

});

// =========================
// Floating Hearts
// =========================

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}, 700);

// =========================
// Volume Musik
// =========================

music.loop = true;
music.volume = 0.6;
