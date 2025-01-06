<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combat Grounds</title>
    <!-- Link to CSS file -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <h1>Combat Grounds</h1>
        <div id="player-stats">
            <p id="turns">Turns: 20</p>
            <p id="networth">Networth: $0</p>
        </div>
    </header>

    <main>
        <div id="battlefield">
            <h2>Battlefield Actions</h2>
            <button id="recruit">Recruit Troops (15 Turns)</button>
            <button id="exploit">Exploit for Cash (25 Turns)</button>
        </div>
        
        <div id="resources">
            <h3>Your Resources</h3>
            <p id="troops">Troops: 0</p>
            <p id="cash">Cash: $0</p>
        </div>

        <div id="turn-timer">
            <p>Turns regenerate every 10 minutes.</p>
        </div>
        
        <footer>
            <p>Combat Grounds - Game by [Your Name]</p>
        </footer>
    </main>

    <!-- Link to JavaScript file -->
    <script src="js/game.js"></script>
</body>
</html>
