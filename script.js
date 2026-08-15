/* =========================================================
   KAVINDU DILHARA — PORTFOLIO JAVASCRIPT
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const backTop = document.getElementById("backTop");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const year = document.getElementById("year");

/* Mobile menu */
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

/* Close mobile menu after clicking a link */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

/* Active navigation link while scrolling */
const sections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));

        const activeLink = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`
        );

        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  }
);

sections.forEach(section => sectionObserver.observe(section));

/* Scroll reveal */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => revealObserver.observe(element));

/* Back to top button */
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* Contact form demo
   This does not send emails by itself.
   Connect it later to Formspree, EmailJS, a Node.js backend, etc. */
contactForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = contactForm.elements.name.value.trim();

  formStatus.textContent =
    `Message ready, ${name || "there"}! Connect this form to a backend/email service to receive messages.`;

  contactForm.reset();
});

/* Current year */
year.textContent = new Date().getFullYear();

/* Small terminal-style title effect */
const originalTitle = document.title;

setInterval(() => {
  document.title = document.title === originalTitle
    ? "root@kavindu:~$"
    : originalTitle;
}, 4500);
