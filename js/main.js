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
    itemContent += `<div class="item"><img src="img/${imgs[i]}" alt=""></div>`;
}

slider.innerHTML += itemContent;
document.querySelector('.item').classList.add('show');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const items = document.querySelectorAll('.item');

prev.addEventListener('click',
function(){
    if(active > 0 ){
        items[active].classList.remove('show');
        active--;
        items[active].classList.add('show')
    } else{
        items[active].classList.remove('show');
        active = items.length - 1;
        items[active].classList.add('show')
    }
})

next.addEventListener('click',
function(){
    if(active < items.length - 1){
        items[active].classList.remove('show');
        active++;
        items[active].classList.add('show')
    }else{
        items[active].classList.remove('show');
        active = 0;
        items[active].classList.add('show')
    }
})