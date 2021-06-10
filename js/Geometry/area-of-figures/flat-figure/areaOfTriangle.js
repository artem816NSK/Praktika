import {triangleArea1, triangleArea2, triangleArea3, triangleArea4, triangleArea5} from '/js/allFunction.js';

let inpaAreaTriangle1 = document.querySelector('.inp-a-area-triangle1');
let inphAreaTriangle1 = document.querySelector('.inp-h-area-triangle1');
let btnAreaTriangle1 = document.querySelector('.btn-area-triangle1');
let outAreaTriangle1 = document.querySelector('.out-area-triangle1');

let inpaAreaTriangle2 = document.querySelector('.inp-a-area-triangle2');
let inpbAreaTriangle2 = document.querySelector('.inp-b-area-triangle2');
let inpcAreaTriangle2 = document.querySelector('.inp-c-area-triangle2');
let btnAreaTriangle2 = document.querySelector('.btn-area-triangle2');
let outAreaTriangle2 = document.querySelector('.out-area-triangle2');

let inpaAreaTriangle3 = document.querySelector('.inp-a-area-triangle3');
let inpcAreaTriangle3 = document.querySelector('.inp-c-area-triangle3');
let btnAreaTriangle3 = document.querySelector('.btn-area-triangle3');
let outAreaTriangle3 = document.querySelector('.out-area-triangle3');

let inpaAreaTriangle4 = document.querySelector('.inp-a-area-triangle4');
let inpbAreaTriangle4 = document.querySelector('.inp-b-area-triangle4');
let btnAreaTriangle4 = document.querySelector('.btn-area-triangle4');
let outAreaTriangle4 = document.querySelector('.out-area-triangle4');

let inpaAreaTriangle5 = document.querySelector('.inp-a-area-triangle5');
let btnAreaTriangle5 = document.querySelector('.btn-area-triangle5');
let outAreaTriangle5 = document.querySelector('.out-area-triangle5');


btnAreaTriangle1.addEventListener('click', ()=> triangleArea1(+inpaAreaTriangle1.value, +inphAreaTriangle1.value, outAreaTriangle1));
btnAreaTriangle2.addEventListener('click', ()=> triangleArea2(+inpaAreaTriangle2.value, +inpbAreaTriangle2.value,+inpcAreaTriangle2.value, outAreaTriangle2));
btnAreaTriangle3.addEventListener('click', ()=> triangleArea3(+inpaAreaTriangle3.value, +inpcAreaTriangle3.value, outAreaTriangle3));
btnAreaTriangle4.addEventListener('click', ()=> triangleArea4(+inpaAreaTriangle4.value, +inpbAreaTriangle4.value, outAreaTriangle4));
btnAreaTriangle5.addEventListener('click', ()=> triangleArea5(+inpaAreaTriangle5.value, outAreaTriangle5));