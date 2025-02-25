document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const targetSelector = this.getAttribute("data-target");
            const targetElement = document.querySelector(targetSelector);

            if (targetElement) {
                const isHidden = targetElement.style.display === "none" || targetElement.style.display === "";
                
                targetElement.style.display = isHidden ? "block" : "none";
                this.textContent = isHidden ? "Tutup" : "Buka";
            }
        });
    });
});