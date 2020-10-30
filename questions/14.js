window.onload = init

function init() {
    function sorting() {
        var numbers = [9, 10, 2, 8, 3, 1, 0, 4, 5, 7, 6, -20, 105]
        numbers.sort(function(a,b){return a-b})
        console.log(numbers)
    }
    sorting()
}

// jesli nie podam w metodzie array.sort() nic, to sortuje w kolejnosci znakow ASCII
// jesli wpisze   function(a,b){return a-b}   to bedzie od najmniejszej do najwiekszej
// jesli wpisze   function(a,b){return b-a}   to bedzie od najwiekszej do najmniejszej