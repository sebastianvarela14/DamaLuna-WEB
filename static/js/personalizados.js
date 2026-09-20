/* =========================================================
   PÁGINA DE PERSONALIZADOS
========================================================= */

/* =========================================================
   DESPLAZAMIENTO SUAVE A SECCIONES
========================================================= */
const personalizedLinks = document.querySelectorAll(
    '.personalizados-hero a[href^="#"], .personalizados-contact a[href^="#"]'
);

personalizedLinks.forEach(link => {
    link.addEventListener("click", event => {
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);
        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});