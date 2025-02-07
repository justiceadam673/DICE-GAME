const dice = document.getElementById("dice");
const roll = document.getElementById('roll')
const hold = document.getElementById('hold')
const diceNumberCount1 = document.getElementById('dice_number_count1')
const diceNumberCount2 = document.getElementById('dice_number_count2')
const highestNumberCount1 = document.getElementById('highest_number_count1')
const highestNumberCount2 = document.getElementById('highest_number_count2')
const limit = document.getElementById('limit')

let
    current = 0,
    currentRoll = diceNumberCount1,
    currentPlayer = highestNumberCount1,
    limitNumber = 0

function rollDice() {
    // Generate a random number between 0 and 6
    let randomNumber = Math.floor(Math.random() * 7);
    current += randomNumber


    // Remove previous dice face
    dice.className = "";
    dice.classList.add("show-" + randomNumber);
    this.style.backgroundColor = "#202020";
    this.style.color = "#f4f4f4";
    currentRoll.textContent = current
    if (randomNumber === 0) {
        currentRoll.textContent = ''
        current = 0
    }


    // Change color immediately

    setTimeout(() => {
        this.style.backgroundColor = "";
        this.style.color = "";
        // Revert to normal after 300ms
    }, 300);
};

function holdDice() {
    this.style.backgroundColor = "#202020";
    this.style.color = "#f4f4f4";
    // Change color immediately

    setTimeout(() => {
        this.style.backgroundColor = "";
        this.style.color = "";
        // Revert to normal after 300ms
    }, 300);
    limitNumber = limit.value

    console.log(parseInt(currentPlayer.textContent), parseInt(currentRoll.textContent), limitNumber);

    if (parseInt(currentPlayer.textContent) + parseInt(currentRoll.textContent) >= Number(limitNumber)) {

        alert('YOU WON!!!')
        setTimeout(() => {
            location.reload()
        }, 1000);
    }



    if (current !== 0) {
        // Convert highest score to a number (default to 0 if empty)
        let highestNumber = parseInt(currentPlayer.textContent) || 0;

        // Add current score to highest score
        highestNumber += current;

        // Update the display
        currentPlayer.textContent = highestNumber;
    }


    // Clear dice count and reset current
    currentRoll.textContent = "";
    current = 0;




    switchPlayer()
};


function switchPlayer() {
    if (currentPlayer === highestNumberCount1) {
        currentPlayer = highestNumberCount2;
        currentRoll = diceNumberCount2;
    } else {
        currentPlayer = highestNumberCount1;
        currentRoll = diceNumberCount1;
    }
}





roll.addEventListener("click", rollDice)
hold.addEventListener("click", holdDice)