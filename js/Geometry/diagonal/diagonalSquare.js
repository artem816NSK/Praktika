import {diagonalSquare} from '/js/allFunction.js';

const a = document.querySelector('.inp-a-diagonal-square');
const btnDiagonalSquare = document.querySelector('.btn-diagonal-square');
const outDiagonalSquare = document.querySelector('.out-diagonal-square');

btnDiagonalSquare.addEventListener('click', ()=> diagonalSquare(+a.value, outDiagonalSquare))