
const easyButton = document.getElementById("easy")
const mediumButton = document.getElementById("medium")
const hardButton = document.getElementById("hard")


const paths = ["1long.txt", "2long.txt", "3long.txt", "4long.txt", "5long.txt", "6long.txt", "7long.txt", "8long.txt", "9long.txt", "10long.txt", "11long.txt", "12long.txt", "13long.txt", "14long.txt", "15long.txt", "16long.txt", "17long.txt", "18long.txt", "19long.txt", "20long.txt", "21long.txt", "22long.txt"]

var difficulty = null
const easy = 5
const medium = 12
const hard = 100
const diffs =[easy, medium, hard]

function clearButtons(){document.getElementById("buttons").style.display = "none";}

easyButton.onclick  = () => {clearButtons();difficulty = 1;getGoing();}
mediumButton.onclick  = () => {clearButtons();difficulty = 2;getGoing();}
hardButton.onclick  = () => {clearButtons();difficulty = 3;getGoing();}

function createGrid(rows, cols=5) {
    container = document.getElementById('grid-container');
    container.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < cols; j++) {
            const box = document.createElement('div');
            box.className = 'box';
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

async function getRandomWordFromFile(fileUrl) {
    try {
        const response = await fetch(fileUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.text();
        const words = data.split(';;;');
        return getRandomElement(words);
    } catch (error) {
        console.error('Error fetching file:', error);
    }
}

async function getRandomWord() {
    try {
        const randomFileUrl = getRandomElement(paths);
        const randomWord = await getRandomWordFromFile(randomFileUrl);
        if (randomWord) {
            return { word: randomWord, len: randomWord.length };
        } else {
            throw new Error('Failed to generate a random word');
        }
    } catch (error) {
        console.error('Error getting random word:', error);
        return null; 
    }
}

function parseWord(){
    j = {word:"", len:""}
    getRandomWord().then(result => {
        if (result) {
            //console.log(`Random word: ${result.word}, Length: ${result.len}`);
            j.word = result.word;
            j.len = result.len;
        }
    });
    return j
}

function getGoing(){
    happy = false
    while (!happy){
        word = parseWord()
        if (word.len <= diffs[difficulty-1]){
            happy = true
        }
        if (difficulty == 3 && word.len < 12){
            happy = false
        }
    }
    createGrid(word.len, math.floor(8 - difficulty))
    console.log(word)

}

document.addEventListener('keydown', function(event) {
    const char = event.key;
    const isAlphanumeric = /^[a-zA-Z0-9]$/.test(char);
    const isSpace = char === ' ';
    const isDash = char === '-';
    const isApos = char === "'"
    if (isAlphanumeric || isSpace || isDash || isApos) {
        console.log(char);
    }
});