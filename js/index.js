// Your code goes here
//1
const logo = document.querySelector('.logo-heading')
logo.addEventListener('mouseover', (evt) => {
    evt.target.style.color = 'orange'
    evt.stopPropagation()
    setTimeout(function(){
        evt.target.style.color = ''
    },500)
},false)
//2
const busImg = document.querySelector('#busImg')
busImg.addEventListener('dblclick', (evt) => {
    evt.target.style.border = '2px solid black'
})
//3
const navContainer = document.querySelector('.nav-container')
navContainer.addEventListener('mouseenter', (evt) => {
    evt.target.style.background = 'orange'
    
})
//4
navContainer.addEventListener('mouseleave', (evt) => {
    evt.target.style.background = ''
})

const footer = document.querySelector('.footer')
//5
footer.addEventListener('mousedown', (evt) => {
    evt.target.style.background = 'green'
})
//6
footer.addEventListener('mouseup', (evt) => {
    evt.target.style.background = ''
})
//7 
document.addEventListener('copy', () => {
    const selection = document.getSelection()
    alert('You copied ' + selection)
})
//8
document.addEventListener('keydown', (evt) => {
    evt.target.style.background = 'grey'
})
//9
document.addEventListener('keyup', (evt) => {
    evt.target.style.background = ''
})
//10
busImg.addEventListener('contextmenu', (evt) => {
    evt.preventDefault()
})