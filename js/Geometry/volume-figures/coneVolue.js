import {coneVolue1, coneVolue2} from '/js/allFunction.js'



const inpSCone1 = document.querySelector('.inp-S-cone1');
const inpHCone1 = document.querySelector('.inp-h-cone1');
const btnCone1 = document.querySelector('.btn-cone1');
const outCone1 = document.querySelector('.out-cone1');

const inpRCone2 = document.querySelector('.inp-r-cone2');
const inpHCone2 = document.querySelector('.inp-h-cone2');
const btnCone2 = document.querySelector('.btn-cone2');
const outCone2 = document.querySelector('.out-cone2');

btnCone1.addEventListener('click', ()=> coneVolue1(+inpSCone1.value, +inpHCone1.value, outCone1));
btnCone2.addEventListener('click', ()=> coneVolue2(+inpRCone2.value, +inpHCone2.value, outCone2));