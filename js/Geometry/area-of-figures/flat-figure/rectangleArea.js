import {rectangleArea} from '/js/allFunction.js';

let inpaRectangleArea = document.querySelector('.inp-a-rectangle-area');
let inpbRectangleArea = document.querySelector('.inp-b-rectangle-area');
let btnRectangleArea = document.querySelector('.btn-rectangle-area');
let outRectangleArea = document.querySelector('.out-rectangle-area');

btnRectangleArea.addEventListener('click', ()=> rectangleArea(+inpaRectangleArea.value, +inpbRectangleArea.value, outRectangleArea));