// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== SMOOTH SCROLL =====
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetID = link.getAttribute("href")
        const targetSection = document.querySelector(targetID);

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
// ===== FADE IN ON SCROLL =====

const fadeElements = document.querySelectorAll(".fade-in")

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, {
  threshold: 0.1
})

fadeElements.forEach((el) => {
  observer.observe(el)
})

// ===== HAMBURGER MENU =====

const hamburger = document.querySelector(".hamburger")
const naveMenu = document.querySelector(".nav-links")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open")
  naveMenu.classList.toggle("open")
})

naveMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open")
    naveMenu.classList.remove("open")
  })
})