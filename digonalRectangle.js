import {diagonalRectangle} from './diagonal.js';


let a = document.querySelector('.inp-a-d-rect');
let b = document.querySelector('.inp-b-d-rect');
let out = document.querySelector('.out-d-rect');
let btn = document.querySelector('.btn-d-rect');

btn.addEventListener('click', ()=> diagonalRectangle(+a.value, +b.value, out))