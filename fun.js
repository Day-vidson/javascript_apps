function fun(echo) {
    console.log(echo)
}

fun("Witam")

function boo(aFunction) {
    aFunction("bum")
}

boo(fun)

console.log(fun)

fun(boo)

var moreFun = fun

moreFun("Witam panowie!")

function echoMaker() {
    return fun
}

var bigFun = echoMaker()
bigFun("Czy to echo?")