var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "szaroniebieski",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,
    start: function() {
        if(this.fuel > 0) {
            this.started = true
        }
        else {
            alert("Brak paliwa!")
        }
    },
    stop: function() {
        this.started = false
    },
    drive: function() {
        if(this.started) {
            if(this.fuel > 0) {
                alert(this.make + " " + this.model + " robi: brum wrrrr!")
                this.fuel = this.fuel - 1
            }
            else {
                alert("Osz... brak paliwa.")
                this.stop()
            }
        }
        else {
            alert("Najpierw musisz włączyć silnik.")
        }
    },
    addFuel: function(amount) {
        this.fuel = this.fuel + amount
    }
}

fiat.start()
fiat.drive()
fiat.addFuel(2)
fiat.start()
fiat.drive()
fiat.drive()
fiat.drive()
fiat.stop()