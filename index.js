// to make the "start game" button work
let StartGame = document.getElementById("startGame")
StartGame.addEventListener('click', function(){
    let inputName = document.getElementById("inputName").value;
    let inputNickname = document.getElementById("inputName").value;
    // checking if the user entered their name else an alert should come
    if (inputName !='' && inputNickname != ''){
        window.location.href = "instruction.html";
    }else{
        alert("Fill your Name and Nickname")
    }
})

// taking the name that player entered and storing it in localStorage
let getName = document.getElementById("inputName")
let btn = document.getElementById("startGame")

function gettingName(){
    localStorage.setItem("username", getName.value)
}
btn.addEventListener('click', gettingName);