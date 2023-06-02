// btnGuide
let scrollIcon = document.querySelector('.scroll-icon');
let line = document.querySelector('.line');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollIcon.style.right = '20px'
    } else scrollIcon.style.right = '-120px';
    let maxY = document.documentElement.scrollHeight - window.innerHeight;
    let scroll = window.scrollY;
    let scrollH = (scroll / maxY) * 100;
    line.style.width = `${scrollH}%`;
});

// loader
let loader = document.querySelector('.loader');

window.addEventListener('load',()=>{
    loader.classList.add('hidden');
})

// offCanvas
let iconMenu = document.querySelector('.icon-menu');
let offCanvas = document.querySelector('#offcanvas');

iconMenu.addEventListener('click', () => {
    offCanvas.style.left = '0px';
    document.querySelector('.intro').style.opacity = '0.3';
    document.querySelector('.navbar').style.opacity = '0.3';
});

let btnClose = document.querySelector('.offcanvas-header__btn');

btnClose.addEventListener('click', () => {
    offCanvas.style.left = '-5000px';
    document.querySelector('.intro').style.opacity = '1';
    document.querySelector('.navbar').style.opacity = '1';
});

let canvasContent = document.querySelector('.offcanvas-content').children;

for (var i = 0; i < canvasContent.length; i++) {
    canvasContent[i].addEventListener('click', () => {
        offCanvas.style.left = '-5000px';
        document.querySelector('.intro').style.opacity = '1';
        document.querySelector('.navbar').style.opacity = '1';
    })
}
