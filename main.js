const hamburgerBtn = document.querySelector('.hamburger')
const showMenu = document.querySelector('.nav')
const navBorder = document.querySelector('#addBorder')
let last_known_scroll_position = 0
hamburgerBtn.addEventListener('click', () => {
  showMenu.classList.toggle('desktop')

})
window.addEventListener('scroll', () => {

  if (window.scrollY > 80) {
    navBorder.classList.add('header__contact--addGrayBorder')

  } else {
    navBorder.classList.remove('header__contact--addGrayBorder')
  }

})

// window.sr = ScrollReveal();

// sr.reveal('.animation', {
//   duration: 2000
// })