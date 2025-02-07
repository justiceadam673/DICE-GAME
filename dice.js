< div class = "dice"
id = "dice" >
    <
    div class = "dot dot1" > < /div> <
div class = "dot dot2" > < /div> <
div class = "dot dot3" > < /div> <
div class = "dot dot4" > < /div> <
div class = "dot dot5" > < /div> <
div class = "dot dot6" > < /div> < /
    div >

    <
    button onclick = "rollDice()" > Roll Dice < /button>

<
script >
    function rollDice() {
        const dice = document.getElementById("dice");
        const randomNumber = Math.floor(Math.random() * 6) + 1;

        // Remove previous classes
        dice.className = "dice";

        // Add new class for random number
        dice.classList.add("show-" + randomNumber);
    } <
    /script>








<
div class = "dice-container" >
    <
    div class = "dice"
id = "dice" > 🎲 < /div> <
    button onclick = "rollDice()" > Roll Dice < /button> <
    /div>

<
style >
    .dice - container {
        text - align: center;
        margin - top: 50 px;
    }

.dice {
    font - size: 80 px;
    display: inline - block;
    width: 100 px;
    height: 100 px;
    line - height: 100 px;
    text - align: center;
    background: white;
    border - radius: 16 px;
    border: 3 px solid black;
    user - select: none;
}

button {
    margin - top: 20 px;
    padding: 10 px 20 px;
    font - size: 18 px;
    cursor: pointer;
} <
/style>

<
script >
    function rollDice() {
        const dice = document.getElementById("dice");
        const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

        dice.textContent = "🎲"; // Show rolling effect

        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * 6);
            dice.textContent = diceFaces[randomNumber]; // Change to a random dice face
        }, 500);
    } <
    /script>