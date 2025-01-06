# paragon

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combat Grounds</title>
    <link rel="stylesheet" href="styles.css">
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

    <script src="game.js"></script>
</body>
</html>

/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #2e2e2e;
    color: #fff;
    text-align: center;
    padding: 20px;
}

header {
    background-color: #444;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
}

h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

#battlefield button {
    margin: 10px;
    padding: 15px;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #333;
    color: white;
}

#battlefield button:hover {
    background-color: #555;
}

#resources p, #turn-timer p {
    font-size: 1.2em;
    margin: 10px;
}

#resources {
    margin-top: 30px;
}

footer {
    margin-top: 50px;
    font-size: 1em;
    color: #bbb;
}

// Initial Game State
let turns = 20; // Start with 20 turns
let networth = 0;
let troops = 0;
let cash = 0;
let premium = false; // Simulate premium subscription (40 turns every 10 minutes)

// Elements
const turnsElem = document.getElementById('turns');
const networthElem = document.getElementById('networth');
const troopsElem = document.getElementById('troops');
const cashElem = document.getElementById('cash');
const recruitButton = document.getElementById('recruit');
const exploitButton = document.getElementById('exploit');

// Turn Generation Timer (every 10 minutes)
function regenerateTurns() {
    setInterval(() => {
        if (premium) {
            turns = 40; // Premium gets 40 turns every 10 minutes
        } else {
            turns = 20; // Regular players get 20 turns
        }
        turnsElem.textContent = `Turns: ${turns}`;
    }, 600000); // 600,000 ms = 10 minutes
}

// Actions - Recruiting Troops
recruitButton.addEventListener('click', () => {
    if (turns >= 15) {
        turns -= 15;
        troops += 5000; // Player gains 5000 troops
        networth += 5000; // Increase networth by 5000 for recruiting
        updateStats();
    } else {
        alert('Not enough turns to recruit troops!');
    }
});

// Actions - Exploit for Cash
exploitButton.addEventListener('click', () => {
    if (turns >= 25) {
        turns -= 25;
        cash += 5000000000; // Player earns 5 billion cash
        networth += 5000000000; // Increase networth by 5 billion for cash
        updateStats();
    } else {
        alert('Not enough turns to exploit for cash!');
    }
});

// Update Stats on screen
function updateStats() {
    turnsElem.textContent = `Turns: ${turns}`;
    networthElem.textContent = `Networth: $${networth.toLocaleString()}`;
    troopsElem.textContent = `Troops: ${troops}`;
    cashElem.textContent = `Cash: $${cash.toLocaleString()}`;
}

// Start the game and turn timer
regenerateTurns();
updateStats();

