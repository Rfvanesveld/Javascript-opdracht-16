const btn2 = document.querySelector('.blue-background, .red-background');

const changeColor = () => {
    btn2.classList.remove('blue-background')
    btn2.classList.add('red-background')
}
btn2.addEventListener('click', changeColor);