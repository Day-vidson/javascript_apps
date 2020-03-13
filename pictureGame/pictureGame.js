window.onload = init

function init() {
    var images = document.getElementsByTagName("img")
    for(var i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer
        images[i].onmouseout = reblur
    }
}

function showAnswer(eventObj) {
    var image = eventObj.target           
    var name = image.id;
    name = name + ".jpg"
    image.src = name

    // setTimeout(reblur, 2000, image)
}

function reblur(eventObj) {
    var image = eventObj.target
    var name = image.id
    name = name + "blur.jpg"
    image.src = name
}