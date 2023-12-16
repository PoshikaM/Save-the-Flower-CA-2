// to make the play again button work
let PlayAgain = document.getElementById("playagain")
PlayAgain.addEventListener('click', function(){
    window.location.href = "index.html"
})

// getting the stored name from localStorage
document.getElementById("username").innerHTML = localStorage.getItem("username")

// background music
let lostSound = new Audio('./assets/lostSound.mp3')
lostSound.play();
lostSound.volume = 0.3;
// lostSound.loop = true;

// an array of phrases
let Phrase = [
    "Better luck next time",
    "Well try",
    "Oops, you missed!",
    "Good job next try is yours",
    "Oh Oh I'm sorry"
]

// making the phrases appear randomly
let randomPhrase = Math.floor(Math.random()*5);
phrase = document.getElementById("randomPhrase");
phrase.innerText = Phrase[randomPhrase]

// getting the correct word from localStorage and displaying it 
let displayWord = document.getElementById("correctWord")
let correctWord = localStorage.getItem("chooseword");
displayWord.innerHTML = correctWord;