var posts = {}

// Mam obiekt posts, w którym będą inne obiekty nazwa od id posta, które będą przechowywały swoją własną liczbę like'ów
// posts = {
//     id1 {
//         noOflikes: 1
//         noOfDislikes: 2
//     },
//     id2 {
//         oOflikes: 4
//         noOfDislikes: 3
//     }
// }
    

// i chciałem później wyszukiwać id w całych posts, zeby znalezc wartosci kazdej reakcji dla kazdego posta
// wyszukiwanie tylko raz dla kazdego posta, jak znajde id2 to od razu czytam wszystkie wartosci i wyswietlam w komponencie

function addPost(id) {
    myvar = id
    posts.{myvar} = newItem(20)
}

function newItem(noOflikes) {
    const post = {noOflikes: noOflikes}
    return post
}

addPost("id1")
addPost("id2")

console.log(posts)