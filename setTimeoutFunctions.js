
//   tutaj nie działa  !!!

// function handler() {
//     alert(doneMessage)
// }

// handler() musi być w funkcji makeTimer
function makeTimer(doneMessage, delay) {
    function handler() {
        alert(doneMessage)
    }
    setTimeout(handler, delay)
}

makeTimer("Siema", 1000)