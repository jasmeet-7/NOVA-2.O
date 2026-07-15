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
