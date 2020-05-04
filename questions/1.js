window.onload = init

function init() {
    function czyJestSamogloska(char) {
        var samogloski = ["a", "e", "y", "i", "o", "ą", "ę", "u", "ó"]
        var char = prompt("Podaj literę: ")
        if(!char || !char.match(/^[a-z]+$/i)) {
            alert("Wpisałeś coś innego niż litera.")
            czyJestSamogloska()
        } else {
            if(samogloski.includes(char)) {
                alert(char + " jest samogłoską!")
            } else {
                alert(char + " jest spółgłoską!")
            }
        }
    }
    czyJestSamogloska()
}
