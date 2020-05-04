window.onload = init

function init() {
    function czyJestSamogloska() {
        var samogloski = ["a", "e", "y", "i", "o", "ą", "ę", "u", "ó"]
        var char = prompt("Podaj literę: ")
        var character = char.charAt(0)
        //sprawdza czy character jest czymś innym niż litera
        if(!character || !character.match(/^[a-z]+$/i)) {
            alert("Wpisałeś coś innego niż litera.")
            czyJestSamogloska()
        } else {
            if(samogloski.includes(character)) {
                alert(character + " jest samogłoską!")
            } else {
                alert(character + " jest spółgłoską!")
            }
        }
    }
    czyJestSamogloska()
}
