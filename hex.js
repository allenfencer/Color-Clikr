const hex = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6, 7, 8, 9];

const btn = document.getElementById('btn');
const color = document.querySelector('span');

btn.addEventListener('click', function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * hex.length);
        hexColor += hex[randomNumber];
    }
document.body.style.backgroundColor = hexColor;
color.innerHTML = hexColor;
});
