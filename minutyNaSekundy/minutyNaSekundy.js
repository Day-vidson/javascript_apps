
function init() {
    var button = document.getElementById("button")
    button.onclick = przeliczanie
    var guessInput = document.getElementById("minuty")
    guessInput.onkeypress = handleKeyPress
}

function przeliczanie() {
    var minuty = document.getElementById("minuty")
    var sekundy = (minuty.value*60)
    var messageArea = document.getElementById("messageArea")
    messageArea.innerHTML = ("Sekundy: " + sekundy)  
}

function handleKeyPress(e) {
    var button = document.getElementById("button")
    if(e.keyCode === 13) {
        button.click()
        return false
    }
}

window.onload = init