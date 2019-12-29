var balance = 10500
var cameraOn = true

function steal(balance, amount) {
    cameraOn = false 
    if (amount < balance) {
        balance = balance - amount
        /* zmienna lokalna "balance" przysłania zmienną globalną o tej samej nazwie,
         operacje wykonywane są w funkcji, co nie wpływa na faktyczny stan konta */
    }
    return amount
    cameraOn = true
}

var amount = steal(balance, 1250)
alert("Złodziej: ukradłem ci: " + amount + "!")
