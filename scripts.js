const header = document.querySelector("header")
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 80 )
})


let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('open')
}

const handlePhone = (event) => {
let input = event.target
input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
if (!value) return ""
value = value.replace(/\D/g,'')
value = value.replace(/(\d{2})(\d)/,"($1) $2")
value = value.replace(/(\d)(\d{4})$/,"$1-$2")
return value
}

