
const rootEl = document.getElementById('root');
const textareaEl = document.querySelector('textarea');
const changeBgColorBtn = document.getElementById('changeBgColor');

const lettersEl = document.getElementById('letters');
const wordsEl = document.getElementById('words');
const sentencesEl = document.getElementById('sentences');
const digitsEl = document.getElementById('digits');
const charactersEl = document.getElementById('characters');

function findMatchByRegexp(text, regexp) {
    const matches = text.match(regexp);
    return matches ? matches.length : 0;
}

function calculateText(e) {
    const text = e.target.value;

    lettersEl.innerHTML = findMatchByRegexp(text, /\w/g);
    wordsEl.innerHTML = findMatchByRegexp(text, /\w+/g);
    sentencesEl.innerHTML = findMatchByRegexp(text, /[\w\d\W](.{0}|.{2})[.?!](\s|$)/g);
    digitsEl.innerHTML = findMatchByRegexp(text, /\d/g);
    charactersEl.innerHTML = text.length;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBgColor() {
    let newColor;
    do {
        newColor = getRandomColor();
    } while (newColor === document.documentElement.style.backgroundColor);
    document.documentElement.style.backgroundColor = newColor;
}

changeBgColorBtn.addEventListener('click', changeBgColor);
textareaEl.addEventListener('input', calculateText);