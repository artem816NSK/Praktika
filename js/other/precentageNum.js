import {precentageNum} from '/js/allFunction.js';

let inpaPrecentNum = document.querySelector('.inp-a-precent-num');
let inpbPrecentNum = document.querySelector('.inp-b-precent-num');
let btnPrecentNum = document.querySelector('.btn-precent-num');
let outPrecentNum = document.querySelector('.out-precent-num');

btnPrecentNum.addEventListener('click', ()=> precentageNum(+inpaPrecentNum.value, +inpbPrecentNum.value, outPrecentNum));