// TOGGLE MENU
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// Abrir sección dropdown desde enlace de navegación
function openSectionFromNavLink(link) {
  const targetId = link.getAttribute("href");
  if (!targetId || !targetId.startsWith("#")) return;

  const section = document.querySelector(targetId);
  if (!section) return;

  document.querySelectorAll(".dropdown-content").forEach((content) => {
    content.classList.remove("active");
  });

  const content = section.querySelector(".dropdown-content");
  if (content) {
    content.classList.add("active");
  }
}

// DROPDOWN SYSTEM
const dropdowns = document.querySelectorAll(".cyber-dropdown");

dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector(".dropdown-btn");
  const content = dropdown.querySelector(".dropdown-content");

  if (!button || !content) return;

  button.addEventListener("click", () => {
    content.classList.toggle("active");
  });
});

// NAVBAR DESKTOP — auto abrir dropdown
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    openSectionFromNavLink(link);
  });
});

// NAVBAR MOBILE — cerrar menú y abrir dropdown
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (menu) {
      menu.classList.remove("active");
    }
    openSectionFromNavLink(link);
  });
});