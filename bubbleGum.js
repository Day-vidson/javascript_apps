var products = ["Czu-Czu-Lada", "Miętowy chłód", "Ciasto naleśnikowe", "Guma balonowa"]
var hasBubbleGum = [false, false, false, true]
/*
var i = 0
while(i < hasBubbleGum.length) {
    if(hasBubbleGum[i]) {
    console.log(products[i] + " zawiera gumę do żucia.")
    }
    i = i + 1
}
*/

for(var i = 0; i < hasBubbleGum.length; i++) {
    if(hasBubbleGum[i]) {
        console.log(products[i] + " zawiera gumę do żucia.")
    }
}