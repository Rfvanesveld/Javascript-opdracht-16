const btn2 = document.querySelector('.blue-background, .red-background');

const changeColor = () => {
    btn2.classList.toggle('red-background')
}
btn2.addEventListener('click', changeColor);