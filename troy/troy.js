
const easyButton = document.getElementById("easy")
const mediumButton = document.getElementById("medium")
const hardButton = document.getElementById("hard")

var difficulty = null

function clearButtons(){document.getElementById("buttons").style.display = "none";}

easyButton.onclick  = () => {clearButtons();difficulty = 1}
mediumButton.onclick  = () => {clearButtons();difficulty = 2}
hardButton.onclick  = () => {clearButtons();difficulty = 3}