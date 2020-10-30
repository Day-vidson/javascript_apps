function lieDetectorTest() {
    var lies = 0
    var stolenDiamond = { }
    var car = {
        keysInPocket: null
    }
    var foundYouAtTheCrimeScene = [ ]
    var yourName = " "
    if(stolenDiamond) {
        console.log("Ukradles diament!")
        lies++
    }
    if(car.keysInPocket) {
        console.log("Oo, ukradles takze samochod!")
        lies++
    }
    if(car.emptyGasTank) {
        console.log("Takze jechales ukradzionym samochodem!")
        lies++
    }
    if(foundYouAtTheCrimeScene) {
        console.log("To oczywisty dowod przestepstwa!")
        lies++
    }
    if(foundYouAtTheCrimeScene[0]) {
        console.log("Znaleziono przy tobie ukradziony diament!")
        lies++
    }
    if(yourName) {
        console.log("Dodatkowo sklamales podajac swoje personalia")
        lies++
    }
    return lies
}

var numberOfLies = lieDetectorTest()
console.log("Sklamales " + numberOfLies + " razy!")
if(numberOfLies >= 3) {
    console.log("Winny wszystkich zarzutów!")
}