const element = document.querySelector('#menu')
const popup_wrapper = document.querySelector('#popup_wrapper');
const popup = document.querySelector('#popup');
const closeBtn = document.querySelector('#closeBtn');
const themeToggle = document.querySelector('#theme-toggle');
const sunMoon = document.querySelector('#sun-moon');
const continueShopping = document.querySelector('#continue-shopping');

let cont = 0;

themeToggle.onclick = () => {
    document.body.classList.toggle("dark-mode");
    cont++;
    if (cont%2 !== 0) {
        sunMoon.classList.replace("fa-moon", "fa-sun");
    }else {
        sunMoon.classList.replace("fa-sun", "fa-moon");
    }
}

const openMenu = () => {
    element.classList.add("show")
}

const closeMenu = () => {
    element.classList.remove("show")
}

closeBtn.onclick = () =>  {
    popup_wrapper.classList.remove('show')
    document.body.style.overflow = 'scroll'
    popup.classList.remove('animate__animated animate__zoomIn')
    popup.classList.add('animate__animated animate__zoomOut')
}

continueShopping.onclick = () =>  {
    popup_wrapper.classList.remove('show')
    document.body.style.overflow = 'scroll'
}

setTimeout(() => {
    popup_wrapper.classList.add('show')
    popup.classList.add('animate__animated animate__zoomIn')
    document.body.style.overflow = 'hidden'
},5000)
