// ============================
// LOADER
// ============================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "1s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 2500);
});


// ============================
// TYPING EFFECT
// ============================

const heroTitle = document.querySelector(".hero h3");

const texts = [
    "Thunder Breathing First Form",
    "Zenitsu Inspired Portfolio",
    "AI Explorer & Creator",
    "Future Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    heroTitle.textContent = letter;

    if (letter.length === currentText.length) {

        count++;

        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 80);

    }

})();


// ============================
// SCROLL REVEAL
// ============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// ============================
// CURSOR GLOW
// ============================

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// ============================
// THUNDER FLASH EFFECT
// ============================

setInterval(() => {

    const flash = document.createElement("div");

    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.background = "white";
    flash.style.opacity = "0.15";
    flash.style.pointerEvents = "none";
    flash.style.zIndex = "999";

    document.body.appendChild(flash);

    setTimeout(() => {
        flash.remove();
    }, 150);

}, 12000);


// ============================
// PARTICLES
// ============================

for (let i = 0; i < 60; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "vw";

    particle.style.animationDuration =
        (Math.random() * 10 + 8) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    document.body.appendChild(particle);

}


// ============================
// NAVBAR SHADOW
// ============================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background =
            "rgba(0,0,0,0.8)";

        nav.style.boxShadow =
            "0 0 20px rgba(255,215,0,0.4)";

    } else {

        nav.style.background =
            "rgba(0,0,0,0.4)";

        nav.style.boxShadow = "none";

    }

});


// ============================
// PROJECT CARD TILT EFFECT
// ============================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 20;

        const rotateX =
            ((y / rect.height) - 0.5) * -20;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.05)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


// ============================
// SCROLL PROGRESS BAR
// ============================

const progressBar =
    document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "#FFD700";
progressBar.style.zIndex = "9999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.body.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width =
        progress + "%";

});
