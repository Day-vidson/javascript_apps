function makecounter() {
    var count = 0

    function counter() {
        count = count + 1
        return count
    }
    return counter
}

var doCount = makecounter()

console.log(doCount())
console.log(doCount())
console.log(doCount())