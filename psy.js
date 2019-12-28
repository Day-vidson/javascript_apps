function bark (name, weight) {
    if (weight > 20) {
        console.log(name + " szczeka HAU HAU")
    }
    else {
        console.log(name + " szczeka hau hau")
    }
}

bark("Burek", 23)
bark("Mops", 13)
bark("Reksio", 53)
bark("Saba", 17)

// bark(prompt("Podaj imię psa: "), prompt("Podaj wagę psa: "))