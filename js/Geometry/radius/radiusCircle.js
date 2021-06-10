import {radiusCircle} from '/js/allFunction.js'

const inpPCircle = document.querySelector('.inp-P-circle');
const btnCircle = document.querySelector('.btn-circle');
const outCircle = document.querySelector('.out-circle');

btnCircle.addEventListener('click', ()=> radiusCircle(+inpPCircle.value, outCircle));