let show = true;

const menuMobile = document.querySelector('#nav')
const mobile = document.querySelector('.mobile')

mobile.addEventListener('click', () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuMobile.classList.toggle("active", show)
    show = !show;
})

const btnInfo = document.querySelector('.info')

function toggleInfo() {
    const info = document.querySelector('#infos')
    info.classList.toggle('on');
}

btnInfo.addEventListener('click', toggleInfo)