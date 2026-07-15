<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>NOVA OS | Console</title>

    <link rel="stylesheet" href="css/style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>

<body>

<div class="background"></div>

<main class="voice-console">

    <p class="version">NOVA AI CORE</p>

    <h1>NOVA</h1>

    <h2 id="welcomeUser">
        Welcome back...
    </h2>

    <div class="online-status">
        <span class="status-dot"></span>
        SYSTEM ONLINE
    </div>

    <p id="novaStatus">
        Ready when you are.
    </p>

    <button id="voiceButton">
        ACTIVATE
    </button>

    <p class="voice-hint">
        Press to speak with NOVA
    </p>

    <div class="activity-box">

        <h3>Last Command</h3>

        <p id="lastCommand">
            No command yet.
        </p>

    </div>

</main>

<script src="js/console.js"></script>

</body>
</html>
