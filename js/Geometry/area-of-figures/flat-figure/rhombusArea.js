import {rhombusArea1, rhombusArea2} from '/js/allFunction.js';

let inphRhombusArea1 = document.querySelector('.inp-h-rhombus-area1');
let inpaRhombusArea1 = document.querySelector('.inp-a-rhombus-area1');
let btnRhombusArea1 = document.querySelector('.btn-rhombus-area1');
let outRhombusArea1 = document.querySelector('.out-rhombus-area1');

let inpd1RhombusArea2 = document.querySelector('.inp-d1-rhombus-area2');
let inpd2RhombusArea2 = document.querySelector('.inp-d2-rhombus-area2');
let btnRhombusArea2 = document.querySelector('.btn-rhombus-area2');
let outRhombusArea2 = document.querySelector('.out-rhombus-area2');

btnRhombusArea1.addEventListener('click', ()=> rhombusArea1(+inphRhombusArea1.value, +inpaRhombusArea1.value, outRhombusArea1));
btnRhombusArea2.addEventListener('click', ()=> rhombusArea2(+inpd1RhombusArea2.value, +inpd2RhombusArea2.value, outRhombusArea2));