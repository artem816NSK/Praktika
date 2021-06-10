import {ringArea1, ringArea2} from '/js/allFunction.js';

let inpRRingArea1 = document.querySelector('.inp-R-ring-area1');
let inprRingArea1 = document.querySelector('.inp-r-ring-area1');
let btnRingArea1 = document.querySelector('.btn-ring-area1');
let outRingArea1 = document.querySelector('.out-ring-area1');

let inpDRingArea2 = document.querySelector('.inp-D-ring-area2');
let inpdRingArea2 = document.querySelector('.inp-d-ring-area2');
let btnRingArea2 = document.querySelector('.btn-ring-area2');
let outRingArea2 = document.querySelector('.out-ring-area2');

btnRingArea1.addEventListener('click', ()=> ringArea1(+inpRRingArea1.value, +inprRingArea1.value, outRingArea1));
btnRingArea2.addEventListener('click', ()=> ringArea2(+inpDRingArea2.value, +inpdRingArea2.value, outRingArea2));