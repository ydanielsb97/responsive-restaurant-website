const headerLinks = document.querySelectorAll('.header__list-link');
const categoriesLinks = document.querySelectorAll('.popular-foods__categories-link');
const header = document.getElementById('header')

const blurHeader = () => {
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}

const handlerClickLinks = (e, listElements) => {
    listElements.forEach(element => {
        element.classList.remove('active')
    });

    e.target.classList.add('active')
}

document.addEventListener('DOMContentLoaded', () => {
    headerLinks.forEach((e) => {
        e.addEventListener('click', (e) => handlerClickLinks(e, headerLinks))
    })
    
    categoriesLinks.forEach((e) => {
        e.addEventListener('click', (e) => handlerClickLinks(e, categoriesLinks))
    })
    
})

const handlerScroll = (e) => {
    blurHeader()
}

window.addEventListener('scroll', handlerScroll)