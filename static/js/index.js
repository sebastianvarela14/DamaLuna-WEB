/* =========================================================
   MENÚ MÓVIL
========================================================= */
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isOpen);
        if (isOpen) {
            menuToggle.setAttribute("aria-label", "Cerrar menú");
            menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            menuToggle.setAttribute("aria-label", "Abrir menú");
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
}

/* =========================================================
   CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
========================================================= */
const mobileLinks = document.querySelectorAll(".mobile-menu a");
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

/* =========================================================
   VOLVER ARRIBA
========================================================= */
const backToTop = document.getElementById("back-to-top");
if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* =========================================================
   CERRAR MENÚ AL CAMBIAR A ESCRITORIO
========================================================= */
window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        mobileMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});