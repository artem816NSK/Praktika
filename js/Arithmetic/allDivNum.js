import {findAllDivNum} from '/js/allFunction.js'

let numDiv = document.querySelector('.num-div');
let btnDiv = document.querySelector('.btn-div');
let outDiv = document.querySelector('.out-div');

btnDiv.addEventListener('click', ()=> findAllDivNum(+numDiv.value, outDiv));