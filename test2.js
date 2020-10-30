var names = [{name: "dawid"}, {name: "czarek"}, {name: "paola"}]

function compareName(name1, name2) {
    if (name1 > name2) {
        return 1
    } else if (name1 === name2) {
        return 0
    } else {
        return -1
    }
}

names.sort(compareName)
console.log(names)