window.onload = init

function init() {
    number = prompt("Podaj liczbę, aby sprawdzić czy jest pierwsza: ")
    function isPrime(number) {
        for(i = 2; i < number; i++) {
            if(number%i === 0) {
                alert(number + " nie jest liczbą pierwszą")
                return false
            }
        }
        if(number > 1) {
            alert(number + " jest liczbą pierwszą.")
        }
        
    }
    isPrime(number)
}