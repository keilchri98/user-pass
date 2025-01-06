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
