import {cylinderVolume1, cylinderVolume2} from '/js/allFunction.js'


let inpRCylinder1 = document.querySelector('.inp-r-cylinder1');
let inpHCylinder1 = document.querySelector('.inp-h-cylinder1');
let inpSCylinder2 = document.querySelector('.inp-S-cylinder2');
let inpHCylinder2 = document.querySelector('.inp-h-cylinder2');

let btnCylinder1 = document.querySelector('.btn-cylinder1');
let btnCylinder2 = document.querySelector('.btn-cylinder2');
let outCylinder1 = document.querySelector('.out-cylinder1');
let outCylinder2 = document.querySelector('.out-cylinder2');


btnCylinder1.addEventListener('click', ()=> cylinderVolume1(+inpRCylinder1.value, +inpHCylinder1.value, outCylinder1));
btnCylinder2.addEventListener('click', ()=> cylinderVolume2(+inpSCylinder2.value, +inpHCylinder2.value, outCylinder2));