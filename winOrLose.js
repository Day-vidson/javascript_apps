var winner = function() {console.log("Farciarz!")}
var loser = function() {console.log("Leszczu!")}
winner()
var a = winner
var b = loser
var c = loser
a()
b()
c = a
console.log(a)  //winner
console.log(c)  //winner

a = b
console.log(a)  //loser
console.log(b)  //loser

b = c
console.log(b)  //winner
console.log(c)  //winner

c = a
console.log(a)  //loser
console.log(c)  //loser

a = c
console.log(a)  //loser
console.log(c)  //loser

a = b
console.log(a)  //winner
console.log(b)  //winner

b = c
console.log(b)   //loser
console.log(c)   //loserr

a()