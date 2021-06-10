import {radiusBall} from '/js/allFunction.js'
const inpVBall = document.querySelector('.inp-V-ball');
const btnBall = document.querySelector('.btn-ball');
const outBall = document.querySelector('.out-ball');

btnBall.addEventListener('click', ()=> radiusBall(+inpVBall.value, outBall));