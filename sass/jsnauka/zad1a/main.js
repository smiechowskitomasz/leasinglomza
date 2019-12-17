const buttonClick = document.querySelector('button')
let counter = 0;


buttonClick.addEventListener('click', () => {
    const div = document.createElement('div')
    counter++;
    document.body.appendChild(div).textContent = counter
    counter % 5 === 0 ? div.classList.add("kolo") : div.classList.add("kwadrat")




})