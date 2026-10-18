// Tanmoy Karan portfolio interactions
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle, if the exported design includes a menu button.
  const menuButton = document.querySelector("[data-menu-toggle], #menuToggle, #mobileMenuButton");
  const mobileMenu = document.querySelector("[data-mobile-menu], #mobileMenu");
  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.classList.toggle("hidden", expanded);
    });
    mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  // Back-to-top button, if present.
  const topButton = document.querySelector("#backToTop, [data-back-to-top]");
  if (topButton) {
    const updateTopButton = () => {
      topButton.classList.toggle("hidden", window.scrollY < 350);
    };
    window.addEventListener("scroll", updateTopButton, { passive: true });
    updateTopButton();
    topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Contact form is submitted normally to Formspree via the form action in index.html.
  // Do not intercept submit here; Formspree handles delivery and its confirmation page.
});
