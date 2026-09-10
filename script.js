// ===============================
// Typing Effect
// ===============================

const roles = [
    "AI & ML Enthusiast",
    "Python Developer",
    "Java Developer",
    "Web Developer",
    "Data Scientist",
    "Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing");

function typeEffect() {

    if (!typingText) {
        return;
    }

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


// ===============================
// Dark Mode
// ===============================

const themeButton =
    document.getElementById("theme-button");

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (
            document.body.classList.contains("dark-mode")
        ) {

            themeButton.textContent = "☀️";

        } else {

            themeButton.textContent = "🌙";

        }

    });

}


// ===============================
// Scroll Animation
// ===============================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .education-card"
);

function showCards() {

    cards.forEach(function (card) {

        const position =
            card.getBoundingClientRect().top;

        const screenPosition =
            window.innerHeight - 100;

        if (position < screenPosition) {

            card.classList.add("show");

        }

    });
}


// Run when page loads
showCards();

// Run when scrolling
window.addEventListener("scroll", showCards);