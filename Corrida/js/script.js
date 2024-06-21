const arabe = document.querySelector('.arabe');
const mendigo = document.querySelector('.mendigo');

const jump = () => {
    arabe.classList.add('jump');

    setTimeout(() => {
        arabe.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')
    
    const mendigoPosition = mendigo.offsetLeft;
    const arabePosition = +window.getComputedStyle(arabe).bottom.replace('px','');

    if (mendigoPosition <= 110 && mendigoPosition > 0 && arabePosition < 290) {
        mendigo.style.animation = 'none';
        mendigo.style.left = `${mendigoPosition}px`;

        arabe.style.animation = 'none';
        arabe.style.bottom = `${arabePosition}px`;

        arabe.src = './image/200w.gif';
        arabe.style.width = '200px'
        arabe.style.marginLeft = '50px'

        clearInterval(loop);

    }

} ,10)

document.addEventListener('keydown', jump);