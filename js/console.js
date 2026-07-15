window.addEventListener("DOMContentLoaded", () => {

    const welcomeUser = document.getElementById("welcomeUser");
    const voiceButton = document.getElementById("voiceButton");
    const novaStatus = document.getElementById("novaStatus");
    const lastCommand = document.getElementById("lastCommand");

    const userName = localStorage.getItem("novaUserName");

    if (userName) {
        welcomeUser.textContent = `Welcome back, ${userName}`;
    }

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        novaStatus.textContent = "Voice recognition is not supported.";
        voiceButton.disabled = true;
        return;
    }

    const recognition = new SpeechRecognition();

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

        novaStatus.textContent = "I couldn't hear you.";

        voiceButton.textContent = "ACTIVATE";

    };

    recognition.onend = () => {

        voiceButton.textContent = "ACTIVATE";

    };

});
