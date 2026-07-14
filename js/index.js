// =========================
// NOVA OS
// Landing Screen
// =========================

const wakeButton = document.getElementById("wakeButton");

wakeButton.addEventListener("click", () => {

    // Prevent multiple clicks
    wakeButton.disabled = true;

    // Change button text
    wakeButton.textContent = "INITIALIZING...";

    // Fade out the page
    document.body.style.transition = "opacity 0.8s ease";
    document.body.style.opacity = "0";

    // Go to boot screen
    setTimeout(() => {
        window.location.href = "boot.html";
    }, 800);

});
