var numbersArray = [60, 50, 62, 58, 54,54]

function comapreNumbers(num1, num2) {
    // if (num1 > num2) {
    //     return 1
    // } else if (num1 === num2) {
    //     return 0
    // } else {
    //     return -1
    // }
    return num1 - num2 // to jest to samo, bo funckja "sort" chce liczby większej, mniejszej lub równej zero
    //wyniki będą od najmniejszego do największego
}

numbersArray.sort(comapreNumbers)
console.log(numbersArray)

//jeśli chce posortować od największej do najmniejszej to w pierwszym "if" zmieniam kolejność na "num2 > num1"
//albo w returnach: z "1 => -1" , a z "-1 => 1"

//aaa.sort(mySortingFunction) =>     aaa = tablica/ zbiór do posortowania    mySortingFunction => moja funkcja sortująca