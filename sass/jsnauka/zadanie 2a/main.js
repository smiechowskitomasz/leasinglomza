document.body.style.height = "10000px"
document.body.style.margin = 0
const div = document.createElement('div')
let size = 100
document.body.appendChild(div)
div.style.width = 100 + "%"
div.style.position = 'fixed'
div.style.left = 0
div.style.right = 0
div.style.backgroundColor = 'green'
div.style.height = size + 'px'
let grow = true

const changeHeight = function () {
  // if (grow) {
  //   size += 10
  //   div.style.height = size + 'px'

  // } else if (!grow) {
  //   size -= 10
  //   div.style.height = size + 'px'
  // }
  grow ? size += 10 : size -= 10;
  div.style.height = size + 'px'

  if ((window.innerHeight / 2) < size) {
    grow = !grow
    div.style.backgroundColor = 'red'
  } else if (size === 0) {
    grow = !grow
    div.style.backgroundColor = 'green'
  }


}
window.addEventListener('scroll', changeHeight)