import {diagonalTrapezoidal} from '/js/allFunction.js';

const inpATrapezoidal = document.querySelector('.inp-a-trapezoidal');
const inpBTrapezoidal = document.querySelector('.inp-b-trapezoidal');
const inpCTrapezoidal = document.querySelector('.inp-c-trapezoidal');
const inpDTrapezoidal = document.querySelector('.inp-d-trapezoidal');
const btnTrapezoidal = document.querySelector('.btn-trapezoidal');
const outTrapezoidal = document.querySelector('.out-trapezoidal');


btnTrapezoidal.addEventListener('click', ()=> diagonalTrapezoidal(+inpATrapezoidal.value, +inpBTrapezoidal.value, 
                                                                  +inpCTrapezoidal.value,+inpDTrapezoidal.value, outTrapezoidal));