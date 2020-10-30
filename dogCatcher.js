function dogCatcher(obj) {
    if (obj instanceof Dog) {
        console.log(obj.name + " to pies!")
    }
}

function Cat(name, breed, weight) {
    this.name = name
    this.breed = breed
    this.weight = weight
}

var meow = new Cat("Filemon", "syjamski", 5)
var whiskers = new Cat("Rojber", "dachowiec", 6)

var fido = {
    name: "Burek",
    breed: "mieszaniec",
    weight: 20
}

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

var fluffy = new Dog("Dino", "pudel", 16)
var spot = new Dog("Kieł", "chihuahua", 4)
var dogs = [meow, whiskers, fido, fluffy, spot]

for (var i = 0; i < dogs.length; i++) {
    dogCatcher(dogs[i])
}

// wyniki:
// Dino to pies!
// Kieł to pies!

// coś jest obiektem czegoś, kiedy zostało stworzone przy użyciu konkretnego konstruktora