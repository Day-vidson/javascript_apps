function srednia() {
    var ilosc
    var dodawanie = 0
    var srednia = 0

    ilosc = prompt("Dla ilu liczb chcesz obliczyć średnią?")
    for (var i = 0; i < ilosc; i++) {
        var liczba = parseFloat(prompt("Podaj liczbę: ")) 
        dodawanie = dodawanie + liczba
    }
    srednia = dodawanie/ilosc
    alert("Twoja średnia to: " + srednia)
    return srednia
}

srednia()