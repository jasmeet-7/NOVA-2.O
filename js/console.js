const welcomeUser = document.getElementById("welcomeUser");

const userName = localStorage.getItem("novaUserName");

if (userName) {
    welcomeUser.textContent = `Welcome back, ${userName}`;
}

window.addEventListener("DOMContentLoaded", () => {

    const currentDate = document.getElementById("currentDate");

    function updateDate() {

        const now = new Date();

        const date = now.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        const time = now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        currentDate.textContent = `${date} • ${time}`;

    }

    updateDate();

    setInterval(updateDate, 1000);


    const systemButton = document.getElementById("systemButton");
    const systemPanel = document.getElementById("systemPanel");

    systemButton.addEventListener("click", () => {

        systemPanel.classList.toggle("show");

    });

});
