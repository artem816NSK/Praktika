import {diagonalParallelepiped} from '/js/allFunction.js';

const inpAParall = document.querySelector('.inp-a-parall');
const inpBParall = document.querySelector('.inp-b-parall');
const inpCParall = document.querySelector('.inp-c-parall');
const btnParall = document.querySelector('.btn-parall');
const outParall = document.querySelector('.out-parall');

btnParall.addEventListener('click', ()=> diagonalParallelepiped(+inpAParall.value, +inpBParall.value, +inpCParall.value, outParall));