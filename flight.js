var passengers = [{name: "Janka Pętlicka", paid: true, ticket: "turystyczna"},
                  {name: "Dr Zatan", paid: true, ticket: "pierwsza klasa"},
                  {name: "Strefa Właściwa", paid: false, ticket: "pierwsza klasa"},
                  {name: "Janek Funkcyjniak", paid: true, ticket: "turystyczna"},
                  {name: "John Seed", paid: true, ticket: "premium"}]

function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false
        }
    }
    return true
}

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr Zatan")
}

function checkNotPaid(passenger) {
    return (!passenger.paid)
}

function printPassenger(passenger) {
    console.log(passenger)
}

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger)
    var getDinnerOrderFunction = createDinnerOrder(passenger)

    getDrinkOrderFunction()
    getDinnerOrderFunction()
}

function createDrinkOrder(passenger) {
    var orderFunctionDrink

    if (passenger.ticket === "pierwsza klasa") {
        orderFunctionDrink = function() {
            alert("Podać koktajl czy wino?")
        }
    } 
    else if (passenger.ticket === "premium") {
        orderFunctionDrink = function() {
            alert("Podać herbatę/kawę czy sok?")
        }
    } else {
        orderFunctionDrink = function() {
            alert("Podać colę czy wodę?")
        }
    }
    return orderFunctionDrink
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i])
    }
}

function createDinnerOrder(passenger) {
    var orderFunctionDinner

    if (passenger.ticket === "pierwsza klasa") {
        orderFunctionDinner = function() {
            alert("Podać kurczaka czy makaron?")
        }
    } 
    else if (passenger.ticket === "premium") {
        orderFunctionDinner = function() {
            alert("Podać przekąskę czy talerz serów?")
        }
    } else {
        orderFunctionDinner = function() {
            alert("Podać orzeszki czy precelki?")
        }
    }
    return orderFunctionDinner
}

var allCanFly = processPassengers(passengers, checkNoFlyList)
if (!allCanFly) {
    console.log("Samolot nie może wystartować: na pokładzie jest pasażer objęty zakazem lotów.")
}

var allPaid = processPassengers(passengers, checkNotPaid)
if (!allPaid) {
    console.log("Samolot nie może wystartować: nie wszycscy zapłacili za przelot.")
}

var printList = processPassengers(passengers, printPassenger)

servePassengers(passengers)