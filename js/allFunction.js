//Геометрия
//Площадь треугольника

export function triangleArea1(a, h, out) {
    let S = 1 / 2 * a * h;

    out.innerHTML = `Результат = ${S}`;
}

export function triangleArea2(a, b, c, out) {
    let p = 1 / 2 * (a + b + c);
    let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    out.innerHTML = `Результат = ${S}`;
}

export function triangleArea3(a, c, out) {
    let S = 1 / 2 * a * c;

    out.innerHTML = `Результат = ${S}`;
}

export function triangleArea4(a, b, out) {
    let S = (b * Math.sqrt(a ** 2 - (b ** 2 / 4)) / 2);

    out.innerHTML = `Результат = ${S}`;
}

export function triangleArea5(a, out) {
    let S = (Math.sqrt(3) / 4) * a ** 2;

    out.innerHTML = `Результат = ${S}`;
}

//Площадь круга
export function circleArea(r, out){
    let S = Math.PI * r ** 2;

    out.innerHTML = `Результат = ${S}`;
}

//Площадь эллипса
export function ellipseArea(a, b, out) {
    let S = Math.PI * a * b;

    out.innerHTML = `Результат = ${S}`;
}

//Площадь параллелограма
export function parallelogramArea(a, h, out) {
    let S = a * h;

    out.innerHTML = `Результат = ${S}`;
}

//Площадь прямоугольника
export function rectangleArea(a, b, out) {
    let S = a * b;

    out.innerHTML = `Результат = ${S}`;
}

//Площадь ромба 
export function rhombusArea1(h, a, out) {
    let S = a * h;

    out.innerHTML = `Результат = ${S}`;
}

export function rhombusArea2(d1, d2, out) {
    let S = 1 / 2 * d1 * d2;

    out.innerHTML = `Результат = ${S}`;
}

//Площадь кольца
export function ringArea1(r, R, out) {
    let S = Math.PI * (R ** 2 - r ** 2);

    out.innerHTML = `Результат = ${S}`;
}

export function ringArea2(d, D, out) {
    let S = Math.PI / 4 * (D ** 2 - d ** 2);

    out.innerHTML = `Результат = ${S}`;
}

//Площадь квадрата
export function squareArea1(a, out) {
    let S = a ** 2;

    out.innerHTML = `Результат = ${S}`;
}

export function squareArea2(d, out) {
    let S = (d ** 2) / 2;

    out.innerHTML = `Результат = ${S}`;
}

//Площадь трапеции
export function trapezoidArea1(a, b, h, out) {
    let S = 1 / 2 * (a + b) * h;

    out.innerHTML = `Результат = ${S}`;
}

export function trapezoidArea2(m, h, out) {
    let S = m * h;

    out.innerHTML = `Результат = ${S}`;
}


//Объем фигур 
//Объем конуса
export function coneVolue1(s, h, out) {
    let V = 1 / 3 * s * h;

    out.innerHTML = `Результат = ${V}`;
}

export function coneVolue2(r, h, out) {
    let V = 1 / 3 * Math.PI * r ** 2 * h;

    out.innerHTML = `Результат = ${V}`;
}

//Объем цилиндра
export function cylinderVolume1(r, h, out) {
    let V = Math.PI * r ** 2 * h;

    out.innerHTML = `Результат = ${V}`;
}

export function cylinderVolume2(s, h, out) {
    let V = s * h;

    out.innerHTML = `Результат = ${V}`;
}

//Объем шара
export function sphereVolume(r, out) {
    let V = 4 / 3 * Math.PI * r ** 3;

    out.innerHTML = `Результат = ${V}`;
}

//Объем шарового слоя
export function sphericalLayerVolume(r1, r2, h, out) {
    let V = 1 / 2 * Math.PI * h * (r1 ** 2 + r2 ** 2 + 1 / 3 * h ** 2);

    out.innerHTML = `Результат = ${V}`;
}

//Объем тетраэдра
export function tetrahedronVolume(a, out) {
    let V = (Math.sqrt(2) / 12) * a ** 3;

    out.innerHTML = `Результат = ${V}`;
}


//Диагональ
//Диагональ прямоугольника
export function diagonalRectangle(a, b, out) {
    let d = Math.sqrt(a ** 2 + b ** 2);

    out.innerHTML = `Результат ${d}`;
}


//Диагональ квадрата
export function diagonalSquare(a, out) {
    let d = Math.sqrt(2) * a;

    out.innerHTML = `Диагональ квадрата d = ${d}`;
}


//Диагонали ромба
export function diagonalTrapezoidal(a, b, c, d, out){
    let d1 = Math.sqrt(d ** 2 + a * b - (a * (d ** 2 - c ** 2) / a - b));
    let d2 = Math.sqrt(c ** 2 + a * b - (a * (c ** 2 - d ** 2) / a - b));

    out.innerHTML = `Диагональ трапеции d1 = ${d1} <br>
                     Диагональ трапеции d2 = ${d2}`;
}


//Диагональ параллелепипеда
export function diagonalParallelepiped(a, b, c, out) {
    let d = Math.sqrt(a ** 2 + b ** 2 + c ** 2);

    out.innerHTML = `Диагональ параллелепипеда d = ${d}`;
}


//Радиус

//Риадиус шара
export function radiusBall(V, out) {
    let r = (3 * V / (4 * 3.14)) ** (1/3);

    out.innerHTML = `Результат = ${r}`;
}

//Радиус круга
export function radiusCircle(P, out) {
    let r = (P / (2 * 3.14));

    out.innerHTML = `Результат = ${r}`;
}

//Радиус цилиндра
export function radiusCylinder(h, S, out){
    let r = (Math.sqrt(8 * 3.14 * S + Math.sqrt(2 * 3.14 * h)) - 2 * 3.14 * h) / 2 * 3.14;

    out.innerHTML = `Результат = ${r}`;
}

//Объемные фигуры
//Площадь конуса
export function coneArea1(r, l, out) {
    let S = Math.PI * r * (r + l);

    out.innerHTML = `Результат = ${S}`;
}

export function coneArea2(r, l, out) {
    let S = Math.PI * r * l;
    out.innerHTML = `Результат = ${S}`;
}

//Площадь куба
export function cubeArea(a, out){
    let S = 6 * a ** 2;

    out.innerHTML = `Результат = ${S}`;
}

//Площадь призмы
export function prismArea(a, b, c, out) {
    let S = 2 * (a * b + b * c + a * c);

    out.innerHTML = `Результат = ${S}`;
}

//Площадь шара
export function sphereArea(r, out){
    let S = 4 * Math.PI * r ** 2;

    out.innerHTML = `Результат = ${S}`;
}
//////////////////////////////////////////////////


//Арифметика
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


//Прочее
//Простое число

export function primeNum(num, out) {
    let flag = true;
    for (let i = 2; i < num; i++) {
	    if (num % i == 0) flag = false; 
    }
    if(flag) out.innerHTML = `Число является простым`;
    else out.innerHTML = `Число не является простым`;
}


//Сколько процентов составляет число A от числа B
export function percentageAFromB(a, b, out) {
    let p = a / b * 100;

    out.innerHTML = `Результат = ${p}%`;
}

//Процент от числа
export function precentageNum(a, b, out) {
    let p = a / 100 * b;

    out.innerHTML = `Результат = ${p}`;
}