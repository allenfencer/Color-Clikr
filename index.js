const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const colorList = ['AliceBlue','Aquamarine','Azure','BlanchedAlmond','BlueViolet','Crimson','DarkBlue','DarkGoldenRod','DarkSlateGrey','DeepPink','RebeccaPurple','Teal']

btn.addEventListener('click',function(){
    const randomNumber = Math.floor(Math.random()*12);
    document.body.style.backgroundColor = colorList[randomNumber];
    color.innerHTML = colorList[randomNumber];
})

