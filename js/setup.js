window.addEventListener("DOMContentLoaded", () => {

    const nameInput = document.getElementById("userName");
    const continueButton = document.getElementById("continueButton");

    continueButton.addEventListener("click", () => {

        const name = nameInput.value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        localStorage.setItem("novaUserName", name);

        window.location.href = "console.html";

    });

});
