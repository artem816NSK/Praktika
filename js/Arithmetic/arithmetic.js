
//Возведение в степень
export function exponentiation(a, b, out) {
    let r = a ** b;

    out.innerHTML = `Результат = ${r}`;
}

//Возведение экспоненты в степень
export function exponentiationE(x, out) {
    let r = 2.71 ** x;

    out.innerHTML = `Результат = ${r}`;
}

//Нахождение всех делителей числа
export function findAllDivNum(a, out) {
    let res = [];

    for(let i = 1; i <= a; i++) {
        if(a % i == 0) res.push(i);
    }
    
    out.innerHTML = `Делители = ${res.join(', ')} <br>
                     Количество делителей ${res.length}`;
}

//Сумма делителей числа
export function sumDivNum(a, out) {
    let res = [];
    let sum = 0;
    for(let i = 1; i <= a; i++) {
        if(a % i == 0) res.push(i);
    }

    for(let i of res) {
        sum += i;
    }
    out.innerHTML = `Делители = ${res.join(', ')} <br>
                     Количество делителей = ${res.length}<br>
                     Сумма делителей = ${sum}`;
}
