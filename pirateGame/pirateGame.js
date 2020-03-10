window.onload = init

function init() {
    var map = document.getElementById("map")
    showCords(map)
}

function showCords(eventObj) {
    var map = document.getElementById("coords")
    var x = eventObj.clientX
    var y = eventObj.clientY
    map.innerHTML = "Współrzędne na mapie: " + x + ", " + y
}