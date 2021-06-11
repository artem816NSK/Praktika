import { primeNum } from "/js/allFunction.js";

let inpPrimeNum = document.querySelector('.inp-prime-num');
let btnPrimeNum = document.querySelector('.btn-prime-num');
let outPrimeNum = document.querySelector('.out-prime-num');

btnPrimeNum.addEventListener('click', ()=>primeNum(+inpPrimeNum.value, outPrimeNum));