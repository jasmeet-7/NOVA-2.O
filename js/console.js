window.addEventListener("DOMContentLoaded", () => {

    const voiceButton = document.getElementById("voiceButton");
    const novaStatus = document.getElementById("novaStatus");
    const lastCommand = document.getElementById("lastCommand");

    const recognition = new webkitSpeechRecognition();

    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    voiceButton.addEventListener("click", () => {

        novaStatus.textContent = "Listening...";
        voiceButton.textContent = "LISTENING";

        recognition.start();

    });

    recognition.onresult = (event) => {

        const command = event.results[0][0].transcript;

        lastCommand.textContent = command;

        novaStatus.textContent = "Command received.";

        voiceButton.textContent = "ACTIVATE";

    };

    recognition.onerror = () => {

        novaStatus.textContent = "Voice error.";

        voiceButton.textContent = "ACTIVATE";

    };

    recognition.onend = () => {

        voiceButton.textContent = "ACTIVATE";

    };

});

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
