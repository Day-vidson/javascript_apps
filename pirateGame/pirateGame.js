window.onload = init

function init() {
    var map = document.getElementById("map")
    showCords(map)
}

function showCords(eventObj) {
    var map = document.getElementById("coords")
    var x = eventObj.clientX
    var y = eventObj.clientY
    var win = document.getElementById("win")
    map.innerHTML = "Współrzędne na mapie: " + x + ", " + y

    if(eventObj.clientX > 175 && eventObj.clientX < 210 && eventObj.clientY > 165 && eventObj.clientY    < 200) {
        win.innerHTML = "🎉Brawo znalazłeś skarb!🎉"
    } else {
        win.innerHTML = "Szukaj dalej"
    }
}