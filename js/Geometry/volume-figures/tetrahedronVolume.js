import {tetrahedronVolume} from '/js/allFunction.js'

let inpATetrahedron = document.querySelector('.inp-a-tetrahedron');
let btnTetrahedron = document.querySelector('.btn-tetrahedron');
let outTetrahedron = document.querySelector('.out-tetrahedron');

btnTetrahedron.addEventListener('click', ()=> tetrahedronVolume(+inpATetrahedron.value, outTetrahedron));