// LANGUAGE FUNCTIONS
const translations = {
    es: {
        about: "Sobre Mí",
        "about-text": "Desarrollador backend con 3 años de experiencia en Python, FastAPI y AWS.",
        experience: "Experiencia",
        "experience-text": "He trabajado en diversos proyectos de backend, desde APIs hasta microservicios escalables.",
        skills: "Habilidades",
        "skills-text": "Python, FastAPI, Django, AWS, Docker, CI/CD, PostgreSQL, Redis.",
        contact: "Contacto",
        "contact-wa": "Mi WhatsApp",
        "contact-mail": "Envíame un Correo",
        "contact-github": "Mi GitHub",
        "contact-cv": "Descargar CV",
        "contact-footer": "¡Cada Día es un Día!",
    },
    en: {
        about: "About Me",
        "about-text": "Backend developer with 3 years of experience in Python, FastAPI, and AWS.",
        experience: "Experience",
        "experience-text": "I have worked on various backend projects, from APIs to scalable microservices.",
        skills: "Skills",
        "skills-text": "Python, FastAPI, Django, AWS, Docker, CI/CD, PostgreSQL, Redis.",
        contact: "Contact",
        "contact-wa": "My WhatsApp",
        "contact-mail": "Send me an Email",
        "contact-github": "My GitHub",
        "contact-cv": "Download CV",
        "contact-footer": "Every Day is a Day!",
    }
};

let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.innerText = translations[lang][key] || "";
    });

    localStorage.setItem("lang", lang);
}

function toggleLanguage() {
    currentLang = currentLang === "en" ? "es" : "en";
    setLanguage(currentLang);
}

document.addEventListener("DOMContentLoaded", () => setLanguage(currentLang));


// SCROLL FUNCTIONS
const targets = document.querySelectorAll('[data-observer]');
const images = document.querySelectorAll('[data-img]');
const options = { rootMargin: '0px', threshold: 1.0 };

const addClass = (el) => el.classList.add('is-visible');
const removeClass = (el) => el.classList.remove('is-visible');

const doThings = (entries) => {
    entries.forEach(entry => {
        entry.isIntersecting ? addClass(entry.target) : removeClass(entry.target);
    });
};

const observer = new IntersectionObserver(doThings, options);
const observer2 = new IntersectionObserver(doThings, { ...options, threshold: 0.4 });

targets.forEach(target => observer.observe(target));
images.forEach(target => observer2.observe(target));
