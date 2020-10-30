function Coffee(roast,ounces) {
    this.roast = roast
    this.ounces = ounces
    this.getSize = function() {
        if (this.ounces === 250) {
            return "mała"
        } else if (this.ounces === 375) {
            return "średnia"
        } else {
            return "duża"
        }
    }
    this.toString = function() {
        return "Twoje zamówienie: " + this.getSize() + " kawa " + this.roast + "."
    }
}

var coffee = new Coffee("Segafredo", 375)
console.log(coffee.toString())

var darkRoast = new Coffee("Parana Caffe", 500)
console.log(darkRoast.toString())