import {ellipseArea} from '/js/allFunction.js'

let inpaEllipseArea = document.querySelector('.inp-a-ellipse-area');
let inpbEllipseArea = document.querySelector('.inp-b-ellipse-area');
let btnEllipseArea = document.querySelector('.btn-ellipse-area');
let outEllipseArea = document.querySelector('.out-ellipse-area');

btnEllipseArea.addEventListener('click', ()=> ellipseArea(+inpaEllipseArea.value, +inpbEllipseArea.value, outEllipseArea));