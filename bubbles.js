var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 
              46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44]

/*
for(var i = 0; i < scores.length; i++) {
    output = "Płyn do baniek nr " + i + " wynik: " + scores[i]
    console.log(output)
    if(scores[i] > highScore) {
        highScore = scores[i]
    }
}
console.log("Liczba testów: " + scores.length)
console.log("Największa liczba wytworzonych baniek: " + highScore)

for(var i = 0; i < scores.length; i++) {
    if(scores[i] == highScore) {
        bestSolutions.push(i)
    }
}
console.log("Numery płynów, które uzyskały najlepszy wynik: " + bestSolutions)
*/

function printAndGetHighScore(scores) {
    var highScore = 0
    var output
    for(var i = 0; i < scores.length; i++) {
        output = "Płyn do baniek nr " + i + " wynik: " + scores[i]
        console.log(output)
        if(scores[i] > highScore) {
            highScore = scores[i]
        }
    }
    return highScore    
}

var highScore = printAndGetHighScore(scores)
console.log("Liczba testów: " + scores.length)
console.log("Największa liczba wytworzonych baniek: " + highScore)

function getBestResults(scores, highScore) {
    var bestSolutions = []
    for(var i = 0; i < scores.length; i++) {
        if(scores[i] == highScore) {
            bestSolutions.push(i)
        }
    }
    return bestSolutions
}
var bestSolutions = getBestResults(scores, highScore)
console.log("Numery płynów, które uzyskały najlepszy wynik: " + bestSolutions)