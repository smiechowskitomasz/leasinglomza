// tutaj rozwiązanie
const btn = document.querySelector('button')
let size = 10

const liDisplay = document.querySelectorAll('li')

btn.addEventListener('click', () => {
    liDisplay.forEach(element => {
        element.style.display = 'block'
    });
    size += 1
    let changeFontSize = document.body.style.fontSize = size + 'px'

})