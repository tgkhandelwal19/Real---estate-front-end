const filter = document.getElementById("priceFilter");
const cards = document.querySelectorAll(".card");

filter.addEventListener("change", () => {
    cards.forEach(card => {
        card.style.display =
            filter.value === "all" || card.classList.contains(filter.value)
            ? "block" : "none";
    });
});
