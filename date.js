// tworzy obiekt Date reprezentujący bieżącą datę i godzinę
var now = new Date()

// zwraca łańcuch znaków reprezentujący datę i godzinę
var dateString = now.toString()
console.log("Data: " + dateString)

// albo rok
var theYear = now.getFullYear()
console.log("Rok: " + theYear)

//albo dzień tygodnia jako liczbę
var dayOfWeek = now.getDay()
console.log("Dzień: " + dayOfWeek)


// można też tworzyć swoje/customowe obiekty date (działa am/pm oraz pełne godziny) np.:
var birthday = new Date("February 13, 2004 20:03")
console.log("Urodziny: " + birthday)