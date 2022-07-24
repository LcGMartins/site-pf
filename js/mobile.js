const btnMobile = document.querySelector('.mobile');

function toggleMenu() {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);