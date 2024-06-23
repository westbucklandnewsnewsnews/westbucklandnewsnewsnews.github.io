
const easyButton = document.getElementById("easy")
const mediumButton = document.getElementById("medium")
const hardButton = document.getElementById("hard")


const paths = ["1long.txt", "2long.txt", "3long.txt", "4long.txt", "5long.txt", "6long.txt", "7long.txt", "8long.txt", "9long.txt", "10long.txt", "11long.txt", "12long.txt", "13long.txt", "14long.txt", "15long.txt", "16long.txt", "17long.txt", "18long.txt", "19long.txt", "20long.txt", "21long.txt", "22long.txt"]

var difficulty = null
const easy = 5
const medium = 12
const hard = 100
const diffs =[easy, medium, hard]

boxN = 0
row = 0
word = ""
grid = []
letters = []

function clearButtons(){document.getElementById("buttons").style.display = "none";}

easyButton.onclick  = () => {clearButtons();difficulty = 1;getGoing();}
mediumButton.onclick  = () => {clearButtons();difficulty = 2;getGoing();}
hardButton.onclick  = () => {clearButtons();difficulty = 3;getGoing();}

function createGrid(cols, rows = 5) {
    const g = []; // Initialize an array to hold rows

    const container = document.getElementById('grid-container');
    container.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        const boxes = []; 
        for (let j = 0; j < cols; j++) {
            const box = document.createElement('div');
            box.className = 'box';
            row.appendChild(box);
            boxes.push(box); 
        }
        container.appendChild(row);
        g.push({ row: i, boxes: boxes });     }

    return g; 
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

async function getRandomWord(diff = null) {
    try {
        if (diff == 3){
            randomFileUrl = String(getRandomElement([13, 14, 15, 16, 17, 18, 19, 20, 21, 22])) + "long.txt"
        }
        if (diff == 2){
            randomFileUrl = String(getRandomElement([5,6,7,8,9,10,11,12])) + "long.txt"
        }
        if (diff == 1){
            randomFileUrl = String(getRandomElement([1,2,3,4])) + "long.txt"
        }
        randomWord = await getRandomWordFromFile(randomFileUrl);
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

async function parseWord(diff = null) {
    try {
        const result = await getRandomWord(diff);
        if (result) {
            return { word: result.word, len: result.len };
        } else {
            throw new Error('Failed to generate a random word');
        }
    } catch (error) {
        console.error('Error getting random word:', error);
        return null;
    }
}

async function getGoing() {
    try {
        word = await parseWord(difficulty);
        if (word) {
            grid = createGrid(word.len, 8 - difficulty);
            boxN = 0
            row = 0
        } else {
            console.error('Failed to get word');
        }
    } catch (error) {
        console.error('Error in getGoing:', error);
    }

}


document.addEventListener('keydown', function(event) {
        const char = event.key;
        const isAlphanumeric = /^[a-zA-Z0-9]$/.test(char);
        const isSpace = char === ' ';
        const isDash = char === '-';
        const isApos = char === "'"
        const isBackspace = event.key == 'Backspace'
        const isEnter = event.key == "Enter"
        if (isAlphanumeric || isSpace || isDash || isApos) {
            if (boxN < word.len){
            grid[row].boxes[boxN].textContent = char
            boxN++
            letters.push(char)
            }
        }
        else if (isBackspace){
            boxN-= 1
            grid[row].boxes[boxN].textContent = ""
            letters.pop()
        }
        else if (isEnter){
            console.log("ent")
            if (boxN == word.len){
            checkBoxes()
            row++
            letters = []
            boxN = 0
        }}
});

function checkBoxes() {
    let correctLettersInPlace = {};
    let correctLettersNotInPlace = {};

    for (let box of grid[row].boxes) {
        box.classList.remove("yes", "close");
    }

    for (let i = 0; i < word.word.length; i++) {
        const targetLetter = word.word[i];
        if (letters[i] === targetLetter) {
            grid[row].boxes[i].classList.add("yes");
            if (!correctLettersInPlace[targetLetter]) {
                correctLettersInPlace[targetLetter] = 1;
            } else {
                correctLettersInPlace[targetLetter]++;
            }
        } else {
            if (word.word.includes(letters[i])) {
                if (!correctLettersNotInPlace[letters[i]]) {
                    correctLettersNotInPlace[letters[i]] = 1;
                } else {
                    correctLettersNotInPlace[letters[i]]++;
                }
                grid[row].boxes[i].classList.add("close");
            }
        }
    }
}


