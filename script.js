// Konfigurasi Typing Effect
const typingElement = document.querySelector(".typing");
const phrases = [
    "Siswi TKJ Berprestasi.",
    "Networking Enthusiast.",
    "Hardware Specialist.",
    "Fast Learner."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Jeda saat kalimat selesai diketik
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Jalankan fungsi typing saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    type();
});

// Smooth Scroll (Opsional: Browser modern sudah mendukung lewat CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});