var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "szaroniebieski",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function() {
        this.started = true
    },
    stop: function() {
        this.started = false
    },
    drive: function() {
        if(this.started) {
            alert("Brum wrrrr!")
        }
        else {
            alert("Najpierw musisz włączyć silnik.")
        }
    }
}

fiat.drive()
fiat.start()
fiat.drive()
fiat.stop()