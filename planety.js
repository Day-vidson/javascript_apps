function init() {
    var planet = document.getElementById("greenplanet")
    planet.innerHTML = "Alarm czerwony: rozpoczęto ostrzał z fazerów"
    planet.setAttribute("class", "redtext")
}

window.onload = init

