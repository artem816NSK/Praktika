import {cubeArea} from '/js/allFunction.js'

let inpACubeArea = document.querySelector('.inp-a-cube-area');
let btnCubeArea = document.querySelector('.btn-cube-area');
let outCubeArea = document.querySelector('.out-cube-area');

btnCubeArea.addEventListener('click', ()=> cubeArea(+inpACubeArea.value, outCubeArea));