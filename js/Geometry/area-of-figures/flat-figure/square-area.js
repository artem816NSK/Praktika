import {squareArea1, squareArea2} from '/js/allFunction.js';

let inpaSquareArea1 = document.querySelector('.inp-a-square-area1');
let btnSquareArea1 = document.querySelector('.btn-square-area1');
let outSquareArea1 = document.querySelector('.out-square-area1');

let inpdSquareArea2 = document.querySelector('.inp-d-square-area2');
let btnSquareArea2 = document.querySelector('.btn-square-area2');
let outSquareArea2 = document.querySelector('.out-square-area2');

btnSquareArea1.addEventListener('click', ()=> squareArea1(+inpaSquareArea1.value, outSquareArea1));
btnSquareArea2.addEventListener('click', ()=> squareArea2(+inpdSquareArea2.value, outSquareArea2));