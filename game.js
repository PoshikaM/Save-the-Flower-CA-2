let listOfWords = [
    {
        word : "PUZZLE",
        hint : "Game or problem-solving activity"
    },
    {
        word : "RHYTHM",
        hint : "Pattern of beats or movements"
    },
    {
        word : "DANCE",
        hint : "Expressive movement to music, often performed socially or as an art form"
    },
    {
        word : "BLOSSOM",
        hint : "state of flowering"
    },
    {
        word : "WISDOM",
        hint : "Deep understanding and knowledge"
    },
    {
        word : "SUNSHINE",
        hint : "Radiant warmth and light from above"
    },
    {
        word : "RAINBOW",
        hint : "Colorful arch in the sky"
    },
    {
        word : "BREEZE",
        hint : "Gentle, refreshing movement of the air"
    },
    {
        word : "VALLEY",
        hint : "Lowland between hills or mountains"
    },
    {
        word : "WAVES",
        hint : "Undulating movement of water"
    },
    {
        word : "SITAR",
        hint : "Stringed instrument popular in Indian classical music"
    },
    {
        word : "BEACH",
        hint : " Sandy shore by the sea"
    },
    {
        word : "PHOTOGRAPHY",
        hint : "Capturing moments"
    },
    {
        word : "SNOWMAN",
        hint : "Frosty creation made of snow"
    }
]

// creating keyboard
let keyboard = document.querySelector(".alphabets")
let eachLetter = document.querySelector(".dashes-list")
let incorrectguess = document.querySelector(".incorrectGuess b")
let flowerImg = document.querySelector(".flower img")
let randomWord;
let wrongAns = 0;
let rightLetters = [];
const correctAns = 6;

// creating keyboard
let getRandomWord = () => {
    let {word,hint} = listOfWords[Math.floor(Math.random()*listOfWords.length)]
    document.querySelector(".hint b").innerText = hint;
    eachLetter.innerHTML = word.split("").map(() => `<li class="dash"></li>`).join("");
    console.log(word);
    randomWord = word;
}
getRandomWord()


let Play = (button, letterClicked) => {
    if(randomWord.includes(letterClicked)){
        [...randomWord].forEach((letter, index) => {
            if(letter === letterClicked){
                rightLetters.push(letter)
                eachLetter.querySelectorAll("li")[index].innerText = letter;
                eachLetter.querySelectorAll("li")[index].classList.add("guessed")
            }
        })
        // console.log(letterClicked, "is in the word");
    }else{
        wrongAns++;
        flowerImg.src = `assets/petal-${wrongAns}.svg`;
        // console.log(letterClicked, "is not in the word");
    }
    button.disabled =true;
    incorrectguess.innerText = `${wrongAns} / ${correctAns}`;

    if(wrongAns == correctAns){
        window.location.href = 'lost.html'
    }
    if(rightLetters.length == randomWord.length){
        window.location.href = 'win.html'
    }
}


for(let i=65; i<=90; i++){
    let button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboard.appendChild(button);
    button.addEventListener('click', e => Play(e.target, String.fromCharCode(i)));
    // console.log(buttons)
}
// console.log(keyboard)
// console.log(eachLetter)

















