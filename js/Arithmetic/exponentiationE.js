import {exponentiationE} from '/js/allFunction.js'

let inpXExp = document.querySelector('.inp-x-exp');
let btnExp = document.querySelector('.btn-exp');
let outExp = document.querySelector('.out-exp');

btnExp.addEventListener('click', ()=>exponentiationE(+inpXExp.value, outExp));