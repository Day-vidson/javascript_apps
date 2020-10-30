window.onload = init

function init() {
    function year() {
        var rok = new Date()
        var rok = rok.getFullYear()
        function isLeap() {
            if(rok%4 === 0) {
                for (var i = 0; i < 20; i++) {
                    rok = rok + 4
                    console.log("Kolejne lata przestępne: " + rok)
                    
                }
            } else {
                if(rok%4 == 1 ) {
                    rok = rok + 3
                    isLeap()
                }
                if(rok%4 == 2 ) {
                    rok = rok + 2
                    isLeap()
                }
                if(rok%4 == 3 ) {
                    rok = rok + 1
                    isLeap()
                }
            }
        }
        isLeap()
    }
    year()
}

// biore reszte z dzielenia rok/4
// jesli reszta == 0 to rok jest przestepny, jesli nie to dodaje tyle do roku aby byl podzielny przez 4