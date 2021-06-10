import {exponentiation} from '/js/allFunction.js'

let inpAExpon = document.querySelector('.inp-a-expon');
let inpBExpon = document.querySelector('.inp-b-expon');
let btnExpon = document.querySelector('.btn-expon');
let outExpon = document.querySelector('.out-expon');

btnExpon.addEventListener('click', ()=> exponentiation(+inpAExpon.value, +inpBExpon.value, outExpon))