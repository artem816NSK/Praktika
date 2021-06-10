import {coneArea1, coneArea2} from '/js/allFunction.js'

let inpRConeArea = document.querySelector('.inp-r-cone-area');
let inplConeArea = document.querySelector('.inp-l-cone-area');
let inpRConeArea2 = document.querySelector('.inp-r-cone-area2');
let inplConeArea2 = document.querySelector('.inp-l-cone-area2');

let btnConeArea = document.querySelector('.btn-cone-area');
let outConeArea = document.querySelector('.out-cone-area');
let btnConeArea2 = document.querySelector('.btn-cone-area2');
let outConeArea2 = document.querySelector('.out-cone-area2');

btnConeArea.addEventListener('click', ()=> coneArea1(+inpRConeArea.value, +inplConeArea.value, outConeArea));
btnConeArea2.addEventListener('click', ()=> coneArea2(+inpRConeArea2.value, +inplConeArea2.value, outConeArea2));
