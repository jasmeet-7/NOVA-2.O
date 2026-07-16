window.addEventListener("DOMContentLoaded", () => {

    const settingsUser = document.getElementById("settingsUser");

    const userName = localStorage.getItem("novaUserName");

    if (userName) {
        settingsUser.textContent = `User: ${userName}`;
    } else {
        settingsUser.textContent = "User profile not found.";
    }

});
