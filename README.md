# paragon 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combat Grounds - Basic Version</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Combat Grounds</h1>
        <div id="player-stats">
            <p id="player-name">Player: John Doe</p>
            <p id="player-health">Health: 100</p>
            <p id="player-level">Level: 1</p>
        </div>
    </header>
    
    <main>
        <div id="combat-actions">
            <button id="attack">Attack</button>
            <button id="defend">Defend</button>
            <button id="special">Special Attack</button>
        </div>
        
        <div id="combat-log">
            <p id="log-output">Welcome to Combat Grounds!</p>
        </div>
        
        <div id="enemy">
            <h2>Enemy</h2>
            <p id="enemy-health">Health: 100</p>
            <p id="enemy-level">Level: 1</p>
        </div>
    </main>

    <footer>
        <p>Combat Grounds - Game by [Your Name]</p>
    </footer>

    <script src="game.js"></script>
</body>
</html>

body {
    font-family: Arial, sans-serif;
    background-color: #222;
    color: #fff;
    text-align: center;
    padding: 20px;
}

header {
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
}

#combat-actions button {
    margin: 10px;
    padding: 15px;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 5px;
    border: none;
}

#combat-actions button:hover {
    background-color: #444;
}

#combat-log {
    margin-top: 20px;
    height: 200px;
    overflow-y: scroll;
    border: 1px solid #444;
    padding: 10px;
}

#enemy {
    margin-top: 30px;
}

footer {
    margin-top: 30px;
}

let playerHealth = 100;
let playerLevel = 1;
let enemyHealth = 100;
let enemyLevel = 1;

// Elements
const playerName = document.getElementById('player-name');
const playerHealthElem = document.getElementById('player-health');
const playerLevelElem = document.getElementById('player-level');
const enemyHealthElem = document.getElementById('enemy-health');
const enemyLevelElem = document.getElementById('enemy-level');
const combatLog = document.getElementById('log-output');

// Buttons
const attackButton = document.getElementById('attack');
const defendButton = document.getElementById('defend');
const specialButton = document.getElementById('special');

// Update stats display
function updateStats() {
    playerHealthElem.textContent = `Health: ${playerHealth}`;
    playerLevelElem.textContent = `Level: ${playerLevel}`;
    enemyHealthElem.textContent = `Health: ${enemyHealth}`;
    enemyLevelElem.textContent = `Level: ${enemyLevel}`;
}

// Log messages
function logMessage(message) {
    combatLog.textContent += `\n${message}`;
    combatLog.scrollTop = combatLog.scrollHeight;
}

// Combat actions
attackButton.addEventListener('click', () => {
    let damage = Math.floor(Math.random() * 20) + 1;
    enemyHealth -= damage;
    logMessage(`You attacked the enemy for ${damage} damage!`);
    checkCombatStatus();
});

defendButton.addEventListener('click', () => {
    let defense = Math.floor(Math.random() * 10) + 1;
    playerHealth += defense;
    logMessage(`You defended and gained ${defense} health!`);
    checkCombatStatus();
});

specialButton.addEventListener('click', () => {
    let damage = Math.floor(Math.random() * 40) + 20;
    enemyHealth -= damage;
    logMessage(`You used a special attack! It dealt ${damage} damage!`);
    checkCombatStatus();
});

// Check combat status
function checkCombatStatus() {
    if (enemyHealth <= 0) {
        logMessage('You defeated the enemy!');
        resetBattle();
    } else {
        enemyTurn();
    }
}

// Enemy's turn
function enemyTurn() {
    let enemyAction = Math.floor(Math.random() * 3);
    let damage;
    
    if (enemyAction === 0) {
        damage = Math.floor(Math.random() * 20) + 1;
        playerHealth -= damage;
        logMessage(`The enemy attacked you for ${damage} damage!`);
    } else if (enemyAction === 1) {
        damage = Math.floor(Math.random() * 10) + 1;
        enemyHealth += damage;
        logMessage(`The enemy defended and gained ${damage} health!`);
    } else {
        damage = Math.floor(Math.random() * 40) + 20;
        playerHealth -= damage;
        logMessage(`The enemy used a special attack! You took ${damage} damage!`);
    }
    
    if (playerHealth <= 0) {
        logMessage('You were defeated by the enemy...');
        resetBattle();
    }
    
    updateStats();
}

// Reset battle
function resetBattle() {
    setTimeout(() => {
        playerHealth = 100;
        enemyHealth = 100;
        logMessage('Battle has ended. Starting a new one...');
        updateStats();
    }, 3000);
}

updateStats();
