window.addEventListener("DOMContentLoaded", () => {

    const welcomeUser = document.getElementById("welcomeUser");
    const commandInput = document.getElementById("commandInput");
    const sendButton = document.getElementById("sendButton");
    const chatBox = document.getElementById("chatBox");
    const activityList = document.getElementById("activityList");

    const userName = localStorage.getItem("novaUserName");

    if (userName) {
        welcomeUser.textContent = `Welcome back, ${userName}`;
    }

    function addMessage(text, type) {

        const message = document.createElement("div");

        message.classList.add("message");

        if (type === "user") {
            message.classList.add("user-message");
        } else {
            message.classList.add("nova-message");
        }

        message.textContent = text;

        chatBox.appendChild(message);

        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function addActivity(text) {

        const activity = document.createElement("li");

        activity.textContent = text;

        activityList.appendChild(activity);

    }

    function novaReply(command) {

        const text = command.toLowerCase();

        if (text.includes("hello") || text.includes("hi")) {
            return "Hello. I am NOVA. How can I assist you?";
        }

        if (text.includes("who are you")) {
            return "I am NOVA, your personal AI Operating System.";
        }

        if (text.includes("time")) {
            return `The current time is ${new Date().toLocaleTimeString()}.`;
        }

        if (text.includes("date")) {
            return `Today's date is ${new Date().toLocaleDateString()}.`;
        }

        if (text.includes("help")) {
            return "Try asking me about the time, date, or ask who I am.";
        }

        return "I am still learning. My core intelligence is currently being upgraded.";
    }

    function sendCommand() {

        const command = commandInput.value.trim();

        if (command === "") {
            return;
        }

        addMessage(command, "user");

        addActivity(`Command received: ${command}`);

        commandInput.value = "";

        setTimeout(() => {

            const response = novaReply(command);

            addMessage(response, "nova");

            addActivity("NOVA responded");

        }, 500);

    }

    sendButton.addEventListener("click", sendCommand);

    commandInput.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            sendCommand();
        }

    });

});
