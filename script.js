console.log("Welcome Aniket Tamang");

/* FLOATING PARTICLES */

const particles = document.querySelector(".particles");

for(let i=0;i<60;i++){

const particle = document.createElement("span");

particle.style.left =
Math.random()*100 + "%";

particle.style.animationDuration =
10 + Math.random()*20 + "s";

particle.style.animationDelay =
Math.random()*10 + "s";

particle.style.opacity =
Math.random();

particles.appendChild(particle);
}

/* LOADING MESSAGE */

window.addEventListener("load",()=>{

setTimeout(()=>{

alert(
"⚔️ WELCOME ANIKET TAMANG ⚔️\n\nMYTHICAL DEVELOPER ONLINE"
);

},1000);

});

/* EASTER EGG */

let clicks = 0;

document.querySelector(".rank-badge")
.addEventListener("click",()=>{

clicks++;

if(clicks===5){

alert(
"🔥 DEVELOPER MODE ACTIVATED 🔥"
);

document.body.style.boxShadow=
"inset 0 0 100px cyan";

}
});

/* SECTION FADE IN */

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const top =
section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

section.style.opacity = "1";
section.style.transform =
"translateY(0px)";
}

});
});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform=
"translateY(50px)";

section.style.transition=
"all 1s ease";

});
