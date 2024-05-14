const turnOffButton = document.getElementById('turnOffButton');
const turnOnButton = document.getElementById('turnOnButton');
const image = document.querySelector('img');

turnOffButton.addEventListener("click", function () {
    image.src = './src/img/pic_bulboff.gif';
})

turnOnButton.addEventListener("click", function () {
    image.src = './src/img/pic_bulbon.gif';
});