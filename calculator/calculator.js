function insert(num) {
   document.form.textview.value = document.form.textview.value + num
}

function back() {
    var text = document.form.textview.value
    document.form.textview.value = text.substring(0, text.length-1)
}

function clean() {
    document.form.textview.value = ""
}

function equal() {
    var text1 = document.form.textview.value;
    document.form.textview.value = eval(text1)
}