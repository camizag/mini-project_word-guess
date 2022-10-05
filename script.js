const wordBlanks = document.getElementsByClassName('word-blanks');
const wins = document.getElementsByClassName('wins');
const losses = document.getElementsByClassName('losses');
const playBtn = document.getElementsByClassName('play-btn');

//Array with words available for play
const words = ['javascript', 'html', 'variable', 'loop', 'github', 'vscode', 'coding', 'function'];

//Global Variables
let playingWord = "";
let transformedWord = [];

//Function for selecting word from array
function selectWord () {
   const index = Math.floor(Math.random() * words.length);
   const selectedWord = words[index];
   playingWord = selectedWord;
   console.log(`Your selected word is: ${playingWord}.`);
   transformWord();
}

//Function to replace the letters of the word with '_'
function transformWord() {
   let wLength = playingWord.length;
   transformedWord.length = 0;
   while (wLength > 0) {
      let count = transformedWord.push(" _ ");
      wLength--;
   } 
   console.log(`Your transformed word is: ${transformedWord}.`);
}
