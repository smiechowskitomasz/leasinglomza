const hamburgerBtn = document.querySelector('.hamburger')
const showMenu = document.querySelector('.nav')
hamburgerBtn.addEventListener('click', () => {
  showMenu.classList.toggle('desktop')

})

window.sr = ScrollReveal();

sr.reveal('.animation', {
  duration: 2000
})