// nowa pusta tablica (bez ograniczonej ilości elementów), wszytkie elementy to "undefined",
// obie tablice są dokładnie takie same
var emptyArray = new Array() 
var emptyArray2 = []

// dodawanie nowego elementu do tablicy
emptyArray[0] = 99

// nowa tablica 3 elementowa
var oddNumbers = new Array(3)
oddNumbers[0] = 1
oddNumbers[1] = 3
oddNumbers[2] = 5

// odwraca tablicę
oddNumbers.reverse()

// zwraca łańcuch znaków oddzielony " - "
var aString = oddNumbers.join(" - ")

// dla każdego elementu tablicy
var areAllOdd = oddNumbers.every(function(x) {
    return ((x % 2) !== 0)
})

// można też tak
var numbers = new Array(1, 2, 3)
var names = new Array("Dawid", "Batman", "John")