import {sphereVolume} from '/js/allFunction.js';


const inpRSphere = document.querySelector('.inp-R-sphere');
const btnSphere = document.querySelector('.btn-sphere');
const outSphere = document.querySelector('.out-sphere');

btnSphere.addEventListener('click', ()=> sphereVolume(+inpRSphere.value, outSphere));