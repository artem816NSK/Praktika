import {sphereArea} from '/js/allFunction.js'

let inpRSphereArea = document.querySelector('.inp-R-sphere-area');
let btnSphereArea = document.querySelector('.btn-sphere-area');
let outSphereArea = document.querySelector('.out-sphere-area');

btnSphereArea.addEventListener('click', ()=> sphereArea(+inpRSphereArea.value, outSphereArea));