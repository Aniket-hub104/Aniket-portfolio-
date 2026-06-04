/* FLOATING PARTICLES */

const particles = document.querySelector('.particles');

for(let i=0;i<70;i++){

    const p = document.createElement('div');

    p.classList.add('particle');

    p.style.left = Math.random()*100+'%';

    p.style.top = Math.random()*100+'%';

    p.style.animation = `
    float ${10+Math.random()*15}s linear infinite`;

    particles.appendChild(p);
}

/* ADD FLOAT KEYFRAMES */

const style = document.createElement('style');

style.innerHTML = `
@keyframes float{
0%{
transform:translateY(100vh);
opacity:0;
}
10%{
opacity:1;
}
100%{
transform:translateY(-120vh);
opacity:0;
}
}
`;

document.head.appendChild(style);

/* GLOWING RANK CARDS */

const ranks = document.querySelectorAll('.rank-card');

setInterval(()=>{

ranks.forEach(card=>{

card.style.boxShadow=
'0 0 25px gold';

setTimeout(()=>{

card.style.boxShadow='none';

},1500);

});

},5000);

/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]')
.forEach(link=>{

link.addEventListener('click',e=>{

e.preventDefault();

document.querySelector(
link.getAttribute('href')
).scrollIntoView({

behavior:'smooth'

});

});

});

/* EASTER EGG */

let clicks = 0;

document.querySelector('.profile-pic')
.addEventListener('click',()=>{

clicks++;

if(clicks===5){

alert(
'🔥 Developer Mode Activated 🔥'
);

document.body.style.filter =
'brightness(1.1)';

}

});
