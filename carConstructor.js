// function Car(make, model, year, color, passengers, convertible, mileage) {
//     this.make = make
//     this.model = model
//     this.year = year
//     this.color = color
//     this.passengers = passengers
//     this.convertible = convertible
//     this.mileage = mileage
//     this.started = false
//     this.start = function() {
//         this.started = true
//     }
//     this.stop = function() {
//         this.started = false
//     }
//     this.drive = function() {
//         if (this.started) {
//             console.log(this.make + " " + this.model + " robi: brum wrrrr!")
//         } else {
//             console.log("Najpierwsz musisz włączyć silnik.")
//         }
//     }
// }

// var chevy = new Car("Chevy", "Bel Air", 1957, "czerwony", 2, false, 1021)
// var cadi = new Car("GM", "Cadillac", 1955, "jasnobrązowy", 5, false, 12892)
// var taxi = new Car("SieMoCorp", "Taxi", 1955, "żółty", 4, false, 281341)
// var fiat = new Car("Fiat", "500", 1957, "szaroniebieski", 2, false, 88000)
// var testCar = new Car("SieMoCorp", "Auto testowe", 2014, "morski", 2, true, 21)

// można na dwa sposoby, albo tak ^, albo tak v 




function Car(params) {
    this.make = params.make
    this.model = params.model
    this.year = params.year
    this.color = params.color
    this.passengers = params.passengers
    this.convertible = params.convertible
    this.mileage = params.mileage
    this.started = false
    this.start = function() {
        this.started = true
    }
    this.stop = function() {
        this.started = false
    }
    this.drive = function() {
        if (this.started) {
            console.log(this.make + " " + this.model + " robi: brum wrrrr!")
        } else {
            console.log("Najpierwsz musisz włączyć silnik.")
        }
    }
}

var chevyParams = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "czerwony",
    passengers: 2,
    convertible: false,
    mileage: 1021
}

var cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "jasnobrązowy",
    passengers: 5,
    convertible: false,
    mileage: 12892
}

var taxiParams = {
    make: "SieMoCorp",
    model: "Taxi",
    year: 1955,
    color: "żółty",
    passengers: 4,
    convertible: false,
    mileage: 281341
}

var fiatParams = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "szaroniebieski",
    passengers: 2,
    convertible: false,
    mileage: 88000
}

var testCarParams = {
    make: "SieMoCorp",
    model: "Auto testowe",
    year: 2014,
    color: "morski",
    passengers: 2,
    convertible: true,
    mileage: 21
}

var chevy = new Car(chevyParams)
var cadi = new Car(cadiParams)
var taxi = new Car(taxiParams)
var fiat = new Car(fiatParams)
var testCar = new Car(testCarParams)

var cars = [chevy, cadi, taxi, fiat, testCar]

for (var i = 0; i < cars.length; i++) {
    cars[i].start()
    cars[i].drive()
    cars[i].drive()
    cars[i].stop()
}