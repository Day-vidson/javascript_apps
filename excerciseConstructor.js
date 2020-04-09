function Dog(name, breed, weight) {
    this.name = name
    this.breed = breed
    this.weight = weight
    this.bark = function() {
        if (this.weight > 15) {
            alert(this.name + " szczeka hau!")
        } else {
            alert(this.name + " szczeka hiauu!")
        }
    }
}

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

var limoParams = {
    make: "SieMoCorp",
    model: "limo",
    year: 1983,
    color: "czarny",
    passengers: 12,
    convertible: true,
    mileage: 21120
}

var limo = new Car(limoParams)
var limoDog = new Dog("Błękitna rapsodia", "Pudel", 40)

console.log(limo.make + " " + limo.model + " jest typu " + typeof(limo))
console.log(limoDog.name + " jest typu " + typeof limo)

if (limo instanceof Car) {
    console.log("Gratulujemy, to jest samochód!")
}
// może być "typeof my_object", lub "typeof(my_object)"