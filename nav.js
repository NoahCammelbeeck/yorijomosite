const burger = document.getElementById("burger");
const menu = document.getElementById("mobile-menu");

function setMenu(open) {
  menu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.classList.toggle("menu-open", open);
}

burger.addEventListener("click", () => {
  setMenu(!menu.classList.contains("open"));
});

// Close when a link is tapped
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Close with Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

// Reset if the window is resized to desktop width
window.matchMedia("(min-width: 960px)").addEventListener("change", (e) => {
  if (e.matches) setMenu(false);
});
