"use strict";

// Mouse Aura Following Effect
document.addEventListener("mousemove", function (event) {
    const aura = document.getElementById("aura");
    if (aura) {
        // Offset coordinates slightly to center the aura on mouse cursor
        const xPosition = event.clientX - 200;
        const yPosition = event.clientY - 200;
        aura.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
    }
});

// Dynamic form interactions & notifications
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameField = document.getElementById("name");
        const messageField = document.getElementById("message");

        if (!nameField.value.trim() || !messageField.value.trim()) {
            alert("Every warrior must provide their name and objective details!");
            return;
        }

        // Simulating submission complete
        alert(`Message sent to the Kasugai Crow! Form successfully submitted by ${nameField.value}. 🔥`);
        contactForm.reset();
    });
}
