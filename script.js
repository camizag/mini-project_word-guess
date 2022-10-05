const wordBlanks = document.getElementsByClassName('word-blanks');
const wins = document.getElementsByClassName('wins');
const losses = document.getElementsByClassName('losses');
const playBtn = document.getElementsByClassName('play-btn');

const words = ['javascript', 'html', 'variable', 'loop', 'github', 'vscode', 'coding', 'function'];

function selectWord () {
   const index = Math.floor(Math.random() * words.length);
   const playingWord = words[index];
   console.log(playingWord);
}

