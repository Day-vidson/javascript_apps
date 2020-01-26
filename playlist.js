function addSongs() {
    var song1 = document.getElementById("song1")
    var song2 = document.getElementById("song2")
    var song3 = document.getElementById("song3")

    song1.innerHTML = "Smutne zamszowe łańcuchy, Elvisa Pagelya"
    song2.innerHTML = "Wielkie obiekty w ogniu, Jerry'ego JSON Lewisa"
    song3.innerHTML = "Pierwszy wiersz kodu, Johnny'ego JavaScripta"
}

window.onload = addSongs