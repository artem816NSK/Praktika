import {sphericalLayerVolume} from '/js/allFunction.js'


const inpR1Slv = document.querySelector('.inp-r1-slv');
const inpR2Slv = document.querySelector('.inp-r2-slv');
const inpHSlv = document.querySelector('.inp-h-slv');
const btnSlv = document.querySelector('.btn-slv');
const outSlv = document.querySelector('.out-slv');

btnSlv.addEventListener('click', ()=> sphericalLayerVolume(+inpR1Slv.value, +inpR2Slv.value, +inpHSlv.value, outSlv));