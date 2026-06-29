// TOGGLE MENU
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("menuClose");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

if (closeBtn && menu) {
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}

// Close menu with ESC keyboard
document.addEventListener("keydown", (event) => {
  if (
      event.key === "Escape" &&
      menu.classList.contains("active")
  ){
      menu.classList.remove("active");
  }
});

// UPDATE BUTTON LABEL
function updateDropdownButton(button, isOpen) {
  if (!button) return;

  button.textContent = isOpen
    ? button.dataset.close
    : button.dataset.open;
}

// Open dropdown section from navigation link
function openSectionFromNavLink(link) {

  const targetId = link.getAttribute("href");
  if (!targetId || !targetId.startsWith("#")) return;

  // Close all dropdowns
  document.querySelectorAll(".cyber-dropdown").forEach(dropdown => {

    const content = dropdown.querySelector(".dropdown-content");
    const button = dropdown.querySelector(".dropdown-btn");

    if (content) {
      content.classList.remove("active");
    }
    updateDropdownButton(button, false);
  });

  // Open selected
  const section = document.querySelector(targetId);
  if (!section) return;

  const content = section.querySelector(".dropdown-content");
  const button = section.querySelector(".dropdown-btn");

  if (content) {
    content.classList.add("active");
  }
  updateDropdownButton(button, true);
}

// DROPDOWN SYSTEM
const dropdowns = document.querySelectorAll(".cyber-dropdown");
dropdowns.forEach((dropdown) => {

  const button = dropdown.querySelector(".dropdown-btn");
  const content = dropdown.querySelector(".dropdown-content");

  if (!button || !content) return;

  button.addEventListener("click", () => {
    const isOpen = content.classList.toggle("active");
    updateDropdownButton(button, isOpen);
  });
});

// NAVBAR DESKTOP — auto open dropdown
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    openSectionFromNavLink(link);
  });
});

// NAVBAR MOBILE — close menu and open dropdown
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (menu) {
      menu.classList.remove("active");
    }
    openSectionFromNavLink(link);
  });
});
