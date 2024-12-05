document.addEventListener("DOMContentLoaded", () => {
    const loadTime = (performance.now() / 1000).toFixed(3);
    const loadTimeElement = document.getElementById("load-time");
    loadTimeElement.textContent = `Время загрузки страницы: ${loadTime} секунд.`;
});

const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
