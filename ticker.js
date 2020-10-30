var tick = true
function ticker() {
    if (tick) {
        console.log("Tik")
        tick = false
    } else {
        console.log("Tak")
        tick = true
    }
}

//wywołuje licznik:
setInterval(ticker, 1000)
//zatrzymuje licznik:
// clearInterval()