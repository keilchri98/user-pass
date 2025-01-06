// Initial game state
let turns = 20;
let cash = 0;
let troops = 0;
let networth = 0;

// Update UI function
function updateUI() {
    document.getElementById("turns").textContent = "Turns: " + turns;
    document.getElementById("cash").textContent = "Cash: $" + cash;
    document.getElementById("troops").textContent = "Troops: " + troops;
    document.getElementById("networth").textContent = "Networth: $" + networth;
}

// Recruit function (15 turns)
document.getElementById("recruit").addEventListener("click", function() {
    if (turns >= 15) {
        turns -= 15;  // Deduct turns for recruiting
        let newTroops = Math.floor(Math.random() * 5000) + 1; // Random number of troops between 1 and 5000
        troops += newTroops;  // Add new troops
        networth += newTroops * 10;  // Networth increases based on troops recruited
        updateUI();
    } else {
        alert("Not enough turns to recruit troops!");
    }
});

// Exploit function (25 turns)
document.getElementById("exploit").addEventListener("click", function() {
    if (turns >= 25) {
        turns -= 25;  // Deduct turns for exploiting
        let newCash = Math.floor(Math.random() * 5000000000) + 1000000; // Random cash between 1 million and 5 billion
        cash += newCash;  // Add new cash
        networth += newCash / 1000;  // Networth increases based on cash exploited
        updateUI();
    } else {
        alert("Not enough turns to exploit for cash!");
    }
});

// Function to regenerate turns every 10 minutes (600,000 ms)
function regenerateTurns() {
    turns += 20;  // Regenerate 20 turns
    if (turns > 100) turns = 100;  // Cap turns at 100
    updateUI();
}

// Call regenerateTurns every 10 minutes (600,000 ms)
setInterval(regenerateTurns, 600000);  // 10 minutes in milliseconds

// Initial UI update
updateUI();
