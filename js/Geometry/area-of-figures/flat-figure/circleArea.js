import {circleArea} from '/js/allFunction.js';

let inprCircleArea = document.querySelector('.inp-r-circle-area');
let btnCircleArea = document.querySelector('.btn-circle-area');
let outCircleArea = document.querySelector('.out-circle-area');

btnCircleArea.addEventListener('click', ()=> circleArea(+inprCircleArea.value, outCircleArea));