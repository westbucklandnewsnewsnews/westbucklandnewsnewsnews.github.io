
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

function createGrid(cols, rows = 5) {
    const grid = []; // Initialize an array to hold rows

    const container = document.getElementById('grid-container');
    container.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        const boxes = []; // Initialize an array to hold boxes for this row
        for (let j = 0; j < cols; j++) {
            const box = document.createElement('div');
            box.className = 'box';
            row.appendChild(box);
            boxes.push(box); // Push each box element into the boxes array
        }
        container.appendChild(row);
        grid.push({ row: i, boxes: boxes }); // Push an object with row number and boxes array into grid array
    }

    return grid; // Return the grid array containing rows and boxes
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
        const word = await parseWord(difficulty);
        if (word) {
            createGrid(word.len, 8 - difficulty);
            console.log(word);
        } else {
            console.error('Failed to get word');
        }
    } catch (error) {
        console.error('Error in getGoing:', error);
    }
}


document.addEventListener('keydown', function(event) {
    if (box <= word.len){
        const char = event.key;
        const isAlphanumeric = /^[a-zA-Z0-9]$/.test(char);
        const isSpace = char === ' ';
        const isDash = char === '-';
        const isApos = char === "'"
        const isBackspace = event.key == 'Backspace'
        const isEnter = event.key == "Enter"
        if (isAlphanumeric || isSpace || isDash || isApos) {
            box.textContent = char
            box++
        }
        else if (isBackspace){
            box-= 1
            box.textContent = ""
        }
        else if (isEnter){
            checkBoxes()
        }
}
});