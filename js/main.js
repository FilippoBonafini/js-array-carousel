'use strict';

const imgs = [
    'slide1.svg',
    'slide2.svg',
    'slide3.svg',
    'slide4.svg',
    'slide5.svg'
]

let itemContent = '';

let active = 0;

const slider = document.querySelector('.slider');

for(let i=0; i < imgs.length; i++){
    itemContent += `<div class="item"><img src="img/slide1.svg" alt=""></div>`;
}

slider.innerHTML += itemContent;
document.querySelector('.item').classList.add('show');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click',
function(){
    alert('prev')
})

next.addEventListener('click',
function(){
    alert('next')
    
})