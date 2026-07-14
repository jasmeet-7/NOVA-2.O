window.addEventListener("DOMContentLoaded", () => {

    const wakeButton = document.getElementById("wakeButton");

    wakeButton.addEventListener("click", () => {

        wakeButton.disabled = true;
        wakeButton.textContent = "INITIALIZING...";

        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = "boot.html";
        }, 800);

    });

});
