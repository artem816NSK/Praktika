import {trapezoidArea1, trapezoidArea2} from '/js/allFunction.js';

let inpaTrapezoidarea1 = document.querySelector('.inp-a-trapezoid-area1');
let inpbTrapezoidarea1 = document.querySelector('.inp-b-trapezoid-area1');
let inphTrapezoidarea1 = document.querySelector('.inp-h-trapezoid-area1');
let btnTrapezoidArea1 = document.querySelector('.btn-trapezoid-area1');
let outTrapezoidArea1 = document.querySelector('.out-trapezoid-area1');

let inpmTrapezoidarea2 = document.querySelector('.inp-m-trapezoid-area2');
let inphTrapezoidarea2 = document.querySelector('.inp-h-trapezoid-area2');
let btnTrapezoidArea2 = document.querySelector('.btn-trapezoid-area2');
let outTrapezoidArea2 = document.querySelector('.out-trapezoid-area2');

btnTrapezoidArea1.addEventListener('click', ()=> trapezoidArea1(+inpaTrapezoidarea1.value, +inpbTrapezoidarea1.value, +inphTrapezoidarea1.value, outTrapezoidArea1));
btnTrapezoidArea2.addEventListener('click', ()=> trapezoidArea2(+inpmTrapezoidarea2.value, +inphTrapezoidarea2.value, outTrapezoidArea2));