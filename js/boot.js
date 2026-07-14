window.addEventListener("DOMContentLoaded", () => {

    const bootText = document.getElementById("bootText");
    const progressFill = document.getElementById("progressFill");
    const progressPercent = document.getElementById("progressPercent");

    const steps = [
        "Starting NOVA...",
        "Loading Core...",
        "Loading Memory...",
        "Initializing Security...",
        "Preparing Interface...",
        "System Ready..."
    ];

    let progress = 0;
    let step = 0;

    const interval = setInterval(() => {

        progress += 20;

        progressFill.style.width = progress + "%";
        progressPercent.textContent = progress + "%";

        if (step < steps.length - 1) {
            step++;
            bootText.textContent = steps[step];
        }

        if (progress >= 100) {
            clearInterval(interval);

            setTimeout(() => {
                window.location.href = "setup.html";
            }, 1000);
        }

    }, 800);

});
