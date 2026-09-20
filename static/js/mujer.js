/* =========================================================
    FILTROS DE PRODUCTOS - MUJER
========================================================= */
const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".men-product-card");
filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        /* -------------------------------------------------
            CAMBIAR BOTÓN ACTIVO
        ------------------------------------------------- */
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");

        /* -------------------------------------------------
            OBTENER FILTRO
        ------------------------------------------------- */
        const selectedCategory = button.dataset.filter;

        /* -------------------------------------------------
            MOSTRAR / OCULTAR PRODUCTOS
        ------------------------------------------------- */
        productCards.forEach(card => {
            const productCategory = card.dataset.category;
            if (
                selectedCategory === "todos" ||
                productCategory === selectedCategory
            ) {
                card.style.display = "flex";
                /* Animación de entrada */
                card.style.opacity = "0";
                card.style.transform = "translateY(10px)";
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 50);
            } else {
                card.style.display = "none";
            }
        });
    });
});