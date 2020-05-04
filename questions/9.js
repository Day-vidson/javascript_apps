window.onload = init

function init() {
    var numbers = [54, 2, 65, 34, 0, 21, 70, 99, 100, 14]
    var najwieksza = null
    var najmniejsza = numbers[0]
    var drugaNajwieksza = najwieksza
    
    for(var i = 0; i < numbers.length; i++) {
        if(numbers[i] > najwieksza) {
            drugaNajwieksza = najwieksza
            najwieksza = numbers[i]
        }
        if(numbers[i] < najmniejsza) {
            najmniejsza = numbers[i]
        }
        if(drugaNajwieksza < najwieksza){

        }
    }
    console.log("Najmniejsza: " + najmniejsza)
    console.log("Najwieksza: " + najwieksza)
    console.log("Druga największa: " + drugaNajwieksza)
}