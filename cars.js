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

var taxi = {
    make: "SieMoCorp",
    model: "Taxi",
    year: 1955,
    color: "żółty",
    passengers: 4,
    convertible: false,
    mileage: 281341,
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

var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "jasnobrązowy",
    passengers: 5,
    convertible: false,
    mileage: 12892,
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

fiat.start()
fiat.drive()
fiat.stop()

taxi.start()
taxi.drive()
taxi.stop()

cadi.start()
cadi.drive()
cadi.stop()
