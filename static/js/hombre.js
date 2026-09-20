/* =========================================================
   FILTROS DE PRODUCTOS
========================================================= */
const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".men-product-card");
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Quitar estado activo de todos los botones
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        // Activar botón seleccionado
        button.classList.add("active");
        // Obtener categoría seleccionada
        const selectedCategory = button.dataset.filter;
        // Mostrar / ocultar productos
        productCards.forEach(card => {
            const productCategory = card.dataset.category;
            if (
                selectedCategory === "todos" ||
                productCategory === selectedCategory
            ) {
                card.style.display = "flex";
                // Pequeña animación de entrada
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