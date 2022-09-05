const hexcolor = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
const button = document.getElementById("buttonchanger")
const color = document.getElementById("color")

// // textcontent & innertext  / innerhtml
// color.textContent = 'hallo selamat datang'
// color.innerText = 'hallo selamat datang'
// color.innerHTML = '<h1>hallo selamat datang</h1>'

function changeColor(){
    // alert('wadidaw')
    let warna = '#'

    for(let i=1; i<= 6 ; i++){
        warna += hexcolor[randomNumber()]
    }

    console.log(warna)
    color.textContent = warna
    document.body.style.backgroundColor = warna

    console.log(randomNumber())
}

function randomNumber(){
    return Math.floor(Math.random() * hexcolor .length)
}