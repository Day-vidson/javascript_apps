function Dog(name, breed, weight) {
    this.name = name
    this.breed = breed
    this.weight = weight
}

Dog.prototype.species = "Psowate"

Dog.prototype.bark = function() {
    if (this.weight > 10) {
        console.log(this.name + " szczeka HAU!")
    } else {
        console.log(this.name + " szczeka hiauu!")
    }
}

Dog.prototype.run = function() {
    console.log(this.name + " biega!")
}

Dog.prototype.wag = function() {
    console.log(this.name + " merda ogonem!")
}

var fido = new Dog("Burek", "mieszaniec", 20)
var fluffy = new Dog("Dino", "pudel", 16)
var spot = new Dog("Kieł", "chihuahua", 4)
var barnaby = new Dog("Barnaba", "basset", 27)

spot.bark = function() {
    console.log(this.name + " szczeka HAU!")
}

Dog.prototype.sitting = false

Dog.prototype.sit = function() {
    if (this.sitting) {
        console.log(this.name + " już siedzi.")
    } else {
        console.log(this.name + " właśnie usiadł.")
        this.sitting = true
    }
}

// jak sprawdzić czy obiekt ma własną właściwość?
// w każdym obiekcie jest metoda "hasOwnProperty("xxx")" - która spradza czy obiekt ma własną właściwość 
// jeśli tak zwraca "true"
// jeśli nie to zwraca "false"
// xxx - to nazwa właściwości (musi zostac napisana w cudzysłowiu - "")

function ShowDog(name, breed, weight, handler) {
    // (pierwsze this, później argumenty funkcji) chyba xd, wywołuje funkcję i przekazuje jej argumenty
    /* Metody call można używać, by wywołać określoną funckję i podać obiekt,
       który w jej ciele ma się stać wartością zmiennej this. */
    Dog.call(this, name, breed, weight)
    this.handler = handler
}

ShowDog.prototype = new Dog()

ShowDog.prototype.league = "Sieciowice"

ShowDog.prototype.stack = function() {
    console.log(this.name + " stoi i uważa.")
}
ShowDog.prototype.bait = function() {
    console.log(this.name + " prosi o smakołyk.")
}
ShowDog.prototype.gait = function(kind) {
    console.log(this.name + " trenuje " + kind)
}
ShowDog.prototype.groom = function() {
    console.log("Czas pielęgnacji sierści.")
}
ShowDog.prototype.constructor = ShowDog


var scotty = new ShowDog("Szatan", "terier szkocki", 8, "Grzesiu")
var beatrice = new ShowDog("Beatrycze", "szpic miniaturowy", 3, "Henryk")

// testing area

fido.bark()
fluffy.bark()
spot.bark()
scotty.bark()
beatrice.bark()
scotty.gait("marsz")
beatrice.groom()

// console.log(scotty.league)
// console.log(scotty.species)
// scotty.stack()
// scotty.bait()
// scotty.gait("karate")
// scotty.groom()
// scotty.run()
// scotty.bark()
// scotty.wag()

// barnaby.sit()
// barnaby.sit()

// fido.bark()
// fido.run()
// fido.wag()

// fluffy.bark()
// fluffy.run()
// fluffy.wag()

// spot.bark()
// spot.run()
// spot.wag()

// if (fido instanceof Dog) {
//     console.log("Burek/fido jest obiektem Dog")
// }
// if (fido instanceof ShowDog) {
//     console.log("Burek/fido jest obiektem ShowDog")
// }
// if (scotty instanceof Dog) {
//     console.log("Szatan/scotty jest obiektem Dog")
// }
// if (scotty instanceof ShowDog) {
//     console.log("Szatan/scotty jest obiektem ShowDog")
// }

// console.log("Konstruktor Burka/fido to: " + fido.constructor)
// console.log("Konstruktor Szatana/scotty'iego to: " + scotty.constructor)
