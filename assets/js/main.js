const headerLinks = document.querySelectorAll('.header__list-link');

const handlerClickHeaderLinks = (e) => {
    console.log("click", e)
    headerLinks.forEach(element => {
        element.classList.remove('active')
    });

    e.target.classList.add('active')
}

document.addEventListener('DOMContentLoaded', () => {
    headerLinks.forEach((e) => {
        e.addEventListener('click', handlerClickHeaderLinks)
    })
})