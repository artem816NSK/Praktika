import {sumDivNum} from '/js/allFunction.js'

let numSumDiv = document.querySelector('.num-sum-div');
let btnSumDiv = document.querySelector('.btn-sum-div');
let outSumDiv = document.querySelector('.out-sum-div');

btnSumDiv.addEventListener('click', ()=> sumDivNum(+numSumDiv.value, outSumDiv));