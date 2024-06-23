
const easyButton = document.getElementById("easy")
const mediumButton = document.getElementById("medium")
const hardButton = document.getElementById("hard")

const fs = require('fs');

const paths = ["1long.txt", "2long.txt", "3long.txt", "4long.txt", "5long.txt", "6long.txt", "7long.txt", "8long.txt", "9long.txt", "10long.txt", "11long.txt", "12long.txt", "13long.txt", "14long.txt", "15long.txt", "16long.txt", "17long.txt", "18long.txt", "19long.txt", "20long.txt", "21long.txt", "22long.txt"]

var difficulty = null

function clearButtons(){document.getElementById("buttons").style.display = "none";}

easyButton.onclick  = () => {clearButtons();difficulty = 1}
mediumButton.onclick  = () => {clearButtons();difficulty = 2}
hardButton.onclick  = () => {clearButtons();difficulty = 3}

function createGrid(rows, cols) {
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

function getRandomWordFromFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            const words = data.split(';;;');
            const randomWord = getRandomElement(words);
            resolve(randomWord);
        });
    });
}

async function getRandomWord() {
    try {
        const randomFilePath = getRandomElement(paths);
        const randomWord = await getRandomWordFromFile(randomFilePath);
        console.log(`Random word: ${randomWord}`);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}