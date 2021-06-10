import {prismArea} from '/js/allFunction.js'

let inpAPrismArea = document.querySelector('.inp-a-prism-area');
let inpBPrismArea = document.querySelector('.inp-b-prism-area');
let inpCPrismArea = document.querySelector('.inp-c-prism-area');
let btnPrismArea = document.querySelector('.btn-prism-area');
let outPrismArea = document.querySelector('.out-prism-area');

btnPrismArea.addEventListener('click', ()=> prismArea(+inpAPrismArea.value, +inpBPrismArea.value, +inpCPrismArea.value, outPrismArea));