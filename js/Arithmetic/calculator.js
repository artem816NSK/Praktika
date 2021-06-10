let input = document.querySelector('.input');
let power = '';

function insert(num) {
    if(input.textContent == 0) {
        input.textContent = '';
        input.textContent += num;
    } else {
        input.textContent += num;
    }
}

function clean() {
    input.textContent = '0';
    power = '';
}

function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if(input.textContent == 0) {
        input.textContent = '0';
    }
}

function equal() {
    let exp = input.textContent;
    if(input.textContent.includes('^')) {
        let tmp = input.textContent.split('^');
        let num = eval(power);
        let pow = +tmp[1];
        input.textContent = Math.pow(num, pow);
        power = '';
        return;
    }

    if(exp) {
        input.textContent = eval(exp);
    }
    power = '';
}

function percent() {
    input.textContent = eval(input.textContent) / 100;
}

function pi() {
    if(input.textContent == 0){
        input.textContent = '';
    }
    input.textContent += Math.PI.toFixed(2);
}

function e() {
    if(input.textContent == 0) {
        input.textContent = '';
    }
    input.textContent += Math.E.toFixed(2);
}

function sqrt() {
    input.textContent = Math.sqrt(eval(input.textContent));
}

function sqr() {
    input.textContent = eval(input.textContent ** 2);
}

function sqr2() {
    input.textContent = eval(input.textContent ** -1);
}
function sqr3() {
    power = input.textContent;
    input.textContent += '^';
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function fact() {
    input.textContent = factorial(+eval(input.textContent));
}

function lg() {
    input.textContent = Math.log10(eval(input.textContent)).toFixed(5);
}

function ln() {
    input.textContent = Math.log(eval(input.textContent)).toFixed(5);
}

function sin() {
    input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(3).toString());
}

function cos() {
    input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(3).toString());
}

function tan() {
    input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(3).toString());
}

function ctg() {
    input.textContent = parseFloat(1 / Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(3).toString());
}