// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

function closeNav() {
  if (nav && nav.classList.contains("open")) {
    nav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
}

if (navToggle && nav) {
  navToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the mobile menu when tapping anywhere outside it
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) closeNav();
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    // Skip bare "#" links (querySelector("#") would throw and break the page)
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    const headerOffset = 72;
    const rect = target.getBoundingClientRect();
    const offset = rect.top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offset, behavior: "smooth" });
    closeNav();
  });
});

// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();