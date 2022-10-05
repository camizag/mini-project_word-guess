const wordBlanks = document.getElementsByClassName('word-blanks');
const wins = document.getElementsByClassName('wins');
const losses = document.getElementsByClassName('losses');
const playBtn = document.getElementsByClassName('play-btn');

const words = ['javascript', 'html', 'variable', 'loop', 'github', 'vscode', 'coding', 'function'];

let playingWord = "";

//Function for selecting word from array
function selectWord () {
   const index = Math.floor(Math.random() * words.length);
   const selectedWord = words[index];
   playingWord = selectedWord;
   console.log(`Your selected word is: ${playingWord}.`);
}


