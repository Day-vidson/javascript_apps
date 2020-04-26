window.onload = init

function init() {
    var textarea = document.getElementById("textarea")
    textarea.onkeypress = clickedEqual

    function clickedEqual(e) {
        var equalButton = document.getElementById("equalButton")
        if (e.keyCode === 13) {
            equalButton.onclick()
            return false
        }
    }
}

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