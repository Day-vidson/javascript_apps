/*

Metody

NIE PRZESŁANIAĆ:
- constructor           (pokazuje konstruktor)
- hasOwnProperty        (czy ma swoje właściwości)
- isPrototypeOf         (czy coś jest prototypem czegoś)
- propertyIsEnumerable  (sprawdza, czy do podanej wartości można uzyskać dostęp,
                         wyliczając wszystkie właściwości obiektu)

Można przesłaniać:
- toString              (coś do stringa)
- toLocaleString        (podobna do toString)
- valueOf               (zwraca wartość czegoś)

*/
///////////////////////////////////////////////////////////////////////////////////////////////////

function Robot(name, year, owner) {
    this.name = name
    this.year = year
    this.owner = owner
}

Robot.prototype.maker = "Ob.Fa.Ro"
Robot.prototype.errorMessage = "Wszystkie systemy sprawne"
Robot.prototype.reportError = function() {
    console.log(this.name + " mówi " + this.errorMessage)
}
Robot.prototype.spillWater = function() {
    this.errorMessage = "Chyba mam zwarcie!"
}

var robby = new Robot("Robik", 1956, "dr. Morrbius")
var rosie = new Robot("Robusia", 1962, "Grzegorz Jetson")

rosie.reportError()
robby.reportError()
robby.spillWater()
rosie.reportError()
robby.reportError()

console.log(robby.hasOwnProperty("errorMessage"))
console.log(rosie.hasOwnProperty("errorMessage"))

function SpaceRobot(name, year, owner, homePlanet) {
    this.name = name
    this.year = year
    this.owner = owner
    this.homePlanet = homePlanet
}
SpaceRobot.prototype = new Robot()
SpaceRobot.prototype.speak = function() {
    alert(this.name + " mówi: Panie, jeśli mogę coś powiedzieć...")
}
SpaceRobot.prototype.pilot = function() {
    alert(this.name + " mówi: Dopalacze? Czy one są ważne?")
}

var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine")
c3po.speak()
c3po.pilot()
console.log("Twórcą " + c3po.name + " jest " + c3po.maker)

var simon = new SpaceRobot("Simon", 2009, "Karola Diament", "Ziemia")
simon.speak()

///////////////////////////////////////////////////////////////////////////////////////////////////

var toy = new Robot("Zabawka", 2013, "Armand")

Robot.prototype.toString = function() {
    return this.name + " to robot, a jego właścicielem jest " + this.owner
}

console.log(toy.toString())
console.log("Ten robot to " + toy)