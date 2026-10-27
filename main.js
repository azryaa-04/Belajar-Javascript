let hari = new Date().getDay()
console.log(hari)
let day
switch (hari) {
    case 1: {
        day = "Senin"
        break
    }
    case 2: {
        day = "Selasa"
        break
    }
    case 3: {
        day = "Rabu"
        break
    }
    case 4: {
        day = "Kamis"
        break
    }
    case 5: {
        day = "Jumat"
        break
    }
    case 6: {
        day = "Sabtu"
        break
    }
    case 0: {
        day = "Minggu"
        break
    }
}

document.title = 'Damn Bro'
let normall = "ubayy uhuy"
const bodi = document.body
console.log(bodi)

let b = document.createElement('h1') //<h1></h1>
b.textContent= "haloo" // <h1>halooo</h1>
bodi.append(b)

function Overr() {
    let nama = document.getElementById('nama')
    nama.textContent = normall
   
}

function outt(){
    let nama = document.getElementById('nama')
     nama.textContent = ""
}


console.log(`Sekarang Hari ${day}`,)