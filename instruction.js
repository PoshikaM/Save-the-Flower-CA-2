// to make the play button work
let playBtn = document.querySelector(".playBtn button")
playBtn.addEventListener('click', function(){
    window.location.href = "game.html"
})

// for the background music
let backgroundMusic = new Audio('./assets/music.mp3');
    backgroundMusic.play();
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.2;