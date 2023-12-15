// to make the play again button work
let PlayAgainBtn = document.getElementById("playagain")
PlayAgainBtn.addEventListener('click', function(){
    window.location.href = "index.html"
})

// getting the stored name from localStorage
document.getElementById("username").innerHTML = localStorage.getItem("username")

// background music
let winningGame = new Audio('./assets/winningSound.mp3');
winningGame.play();
winningGame.volume = 0.3;
winningGame.loop = true;

// an array of phrases
let Phrase = [
    "Great job",
    "You did well",
    "You found it!!",
    "Nice job have a great day",
    "Yea!! You did it"
]

// making the phrases appear randomly
let phrase = document.getElementById("randomPhrase");
let randomPhrase = Math.floor(Math.random()*5);
phrase.innerText = Phrase[randomPhrase];

// getting the correct word from localStorage and displaying it 
let displayWord = document.getElementById("correctWord")
let correctWord = localStorage.getItem("chooseword");
displayWord.innerHTML = correctWord;
// displayWord.style.color = red;