import {radiusCylinder} from '/js/allFunction.js'

const inpHCylinder = document.querySelector('.inp-h-cylinder');
const inpSCylinder = document.querySelector('.inp-S-cylinder');
const btnCylinder = document.querySelector('.btn-cylinder');
const outCylinder = document.querySelector('.out-cylinder');

btnCylinder.addEventListener('click', ()=> radiusCylinder(+inpHCylinder.value, +inpSCylinder.value, outCylinder));