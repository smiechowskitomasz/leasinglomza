let size = 10;
let orderElement = 1;

const init = () => {
    // tutaj kod
    const btn = document.createElement('button')
    const ulLi = document.createElement('ul')
    document.body.appendChild(btn).textContent = 'Dodaj 10 li'
    document.body.appendChild(ulLi)
    btn.addEventListener('click', createLiElements)

}

const createLiElements = () => {
    // tutaj kod

    const ulRef = document.querySelector('ul')
    for (let i = 0; i < size; i++) {
        const liAdd = document.createElement('li')
        liAdd.textContent = `Element nr ${orderElement++}`
        ulRef.appendChild(liAdd)
        liAdd.style.fontSize = `${size++}px`

    }



}

init()