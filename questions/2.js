window.onload = init

function init() {
    function reverse(wyraz) {
        var wyraz = prompt("Podaj liczbę: ")
        var podzielonyWyraz = wyraz.split("")
        var odwroconyPodzielonyWyraz = podzielonyWyraz.reverse()
        alert("Odwrócony wyraz to: " + odwroconyPodzielonyWyraz.join(""))
    }
    reverse()
}

// w metodzie split() trzeba użyć co najmniej jednego argumentu, chociaz variable.split("")
// w join() nie trzeba, wtedy wynik bedzie oddzielony przecinkami, lecz jesli damy ("") to wtedy doda elementy tablicy