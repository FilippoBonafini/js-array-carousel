'use strict';

const imgs = [
    'slide1.svg',
    'slide2.svg',
    'slide3.svg',
    'slide4.svg',
    'slide5.svg'
]

let itemContent = '';
let prevContent = '';

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



const preview = document.querySelector('.preview');



for(let i=0; i < imgs.length; i++){
    prevContent += `<div class="prevItem hidden"><img src="img/${imgs[i]}" alt=""></div>`;
}
preview.innerHTML += prevContent;

const previewList = document.querySelectorAll('.prevItem');


document.querySelector('.prevItem').classList.remove('hidden');


console.log(previewList)

prev.addEventListener('click',
function(){
    if(active > 0 ){
        items[active].classList.remove('show');
        previewList[active].classList.add('hidden');
        active--;
        items[active].classList.add('show');
        previewList[active].classList.remove('hidden');
    } else{
        items[active].classList.remove('show');
        previewList[active].classList.add('hidden');
        active = items.length - 1;
        items[active].classList.add('show');   
        previewList[active].classList.remove('hidden');
    }

})

next.addEventListener('click',
function(){
    if(active < items.length - 1){
        items[active].classList.remove('show');
        previewList[active].classList.add('hidden');
        active++;
        previewList[active].classList.remove('hidden');
        items[active].classList.add('show');
    }else{
        items[active].classList.remove('show');
        previewList[active].classList.add('hidden');
        active = 0;
        items[active].classList.add('show');
        previewList[active].classList.remove('hidden');
    }
})



