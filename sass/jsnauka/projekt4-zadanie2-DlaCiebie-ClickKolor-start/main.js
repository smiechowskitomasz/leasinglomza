// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony
const bodyB = document.querySelector('body')

const checkPosition = (e) => {
    console.log(e.clientX, e.clientY)
    if (e.clientX % 2 === 0 && e.clientY % 2 === 0) {
        bodyB.style.backgroundColor = 'red'
    } else if (e.clientX % 2 === 0 && e.clientY % 2 === 1) {
        bodyB.style.backgroundColor = 'green'
    } else if (e.clientX % 2 === 1 && e.clientY % 2 === 1) {
        bodyB.style.backgroundColor = 'blue'
    }

}
bodyB.addEventListener('click', checkPosition)