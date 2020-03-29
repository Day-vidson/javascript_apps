var products = [{name: "Grejpfrut", calories: 170, color: "czerwony", sold: 8200},
                {name: "Pomarańcza", calories: 160, color: "pomarańczowy", sold: 12101},
                {name: "Cola", calories: 210, color: "karmelowy", sold: 25412},
                {name: "Cola dietetyczna", calories: 0, color: "karmelowy", sold: 43922},
                {name: "Cytryna", calories: 200, color: "bezbarwny", sold: 14983},
                {name: "Malina", calories: 180, color: "różowy", sold: 9427},
                {name: "Piwo korzenne", calories: 200, color: "karmelowy", sold: 9909},
                {name: "Woda", calories: 0, color: "bezbarwny", sold: 62123}]

function compareSold(colaA, colaB) {
    return colaA.sold - colaB.sold
}

function compareName(colaA, colaB) {
    if (colaA.name > colaB.name) {
        return 1
    } else if (colaA.name === colaB.name) {
        return 0
    } else {
        return -1
    }
}

function compareCalories(colaA, colaB) {
    return colaA.calories - colaB.calories
}

function compareColor(colaA, colaB) {
    if (colaA.color > colaB.color) {
        return 1
    } else if (colaA.color === colaB.color) {
        return 0
    } else {
        return -1
    }
}


function printProducts(products) {
    for (var i = 0; i < products.length; i++) {
        console.log("Nazwa: " + products[i].name +", liczba kalorii: " + products[i].calories +
         ", kolor: " + products[i].color + ", liczba sprzedanych butelek: " + products[i].sold)
    }
}

console.log("Posortowane według sprzedaży: ")
products.sort(compareSold)
printProducts(products)
console.log("-------------------------")

console.log("Posortowane według nazwy: ")
products.sort(compareName)
printProducts(products)
console.log("-------------------------")

console.log("Posortowane według kalorii: ")
products.sort(compareCalories)
printProducts(products)
console.log("-------------------------")

console.log("Posortowane według koloru: ")
products.sort(compareColor)
printProducts(products)
console.log("-------------------------")
