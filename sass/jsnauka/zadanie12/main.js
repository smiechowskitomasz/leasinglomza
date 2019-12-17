const btn = document.querySelector('button')
let oddNumber = 1
const ul = document.querySelector('ul')
btn.addEventListener('click', () => {
    const li = document.createElement('li')
    ul.appendChild(li).textContent = oddNumber

    if (oddNumber % 3 == 0) {
        li.classList.add("big")
    }
    oddNumber += 2 


})