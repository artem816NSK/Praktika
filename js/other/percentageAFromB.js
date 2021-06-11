import {percentageAFromB} from '/js/allFunction.js';

let inpaFromb = document.querySelector('.inp-a-from-b');
let inpbFroma = document.querySelector('.inp-b-from-a');
let btnaFromb = document.querySelector('.btn-a-from-b');
let outaFromb = document.querySelector('.out-a-from-b');

btnaFromb.addEventListener('click', ()=>percentageAFromB(+inpaFromb.value, +inpbFroma.value, outaFromb));