import {parallelogramArea} from '/js/allFunction.js';


let inpaParallelogramArea = document.querySelector('.inp-a-parallelogram-area');
let inphParallelogramArea = document.querySelector('.inp-h-parallelogram-area');
let btnParallelogramArea = document.querySelector('.btn-parallelogram-area');
let outParallelogramArea = document.querySelector('.out-parallelogram-area');

btnParallelogramArea.addEventListener('click', ()=> parallelogramArea(+inpaParallelogramArea.value, +inphParallelogramArea.value, outParallelogramArea));