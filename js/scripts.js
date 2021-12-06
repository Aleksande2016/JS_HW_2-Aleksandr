let name = prompt('Ваше имя?'),                                 /*1*/
    age = prompt('Ваш возраст?'),
    city = prompt('Город проживания?'),
    phone = prompt('Ваш номер телефона?'),
    email = prompt('Ваш email?'),
    company = prompt('Название предприятия?');

console.log(name, age, city, phone, email, company);        /*Зачеркивает NAME*/

let t = prompt('Укажите цифру от 0-9'),             /*3*/
    y = prompt('Укажите цифру от 0-9'),
    u = prompt('Укажите цифру от 0-9'),
    i = prompt('Укажите цифру от 0-9'),
    o = prompt('Укажите цифру от 0-9'),
    p = prompt('Укажите цифру от 0-9');


if (t+y+u == i+o+p) {
    console.log('Да');
} else {
    console.log('Нет');
}

let a = 1;                                                      /*4*/

(a > 0) ? console.log('Верно') : console.log('Неверно');

a = 0;
(a > 0) ? console.log('Верно') : console.log('Неверно');

a = -3;
(a > 0) ? console.log('Верно') : console.log('Неверно');

    a = 10;                                                     /*5*/
let b = 2;

symma = a + b;
console.log(symma);

raznost = a - b;
console.log(raznost);

proizvedenie = a*b;
console.log(proizvedenie);

chastnoe = a/b;
console.log(chastnoe);

(symma > 1) ? console.log(symma*symma) : console.log('Неверно');


(2 < a < 11 || 6 <= b < 14) ? console.log('Верно') : console.log('Неверно');    /*6*/

let n = prompt('Укажите число от 0 до 59 для определения четверти часа');                                      /*7*/

if (0 <= n && n <= 15) {
    console.log('1-ая четверть часа');
} else if (16<=n && n<=30) {
    console.log('2-ая четверть часа');
} else if (31<=n && n<=45) {
console.log('3-ая четверть часа');
} else if (46<=n && n<=59) {
console.log('4-ая четверть часа');
} else {
    console.log('Укажите число от 0 до 59');
}


/*for (; 0 <= n <= 15; ) {
        console.log('1-ая четверть часа');
        if (n == 7) break;
}
for (; 16<=n<=30;) {
        console.log('2-ая четверть часа');
        if (n) break;
}
for (; 31<=n<=45;) {
    console.log('3-ая четверть часа');
    if (n) break;
}
for (; 46<=n<=59;) {
    console.log('4-ая четверть часа');
    if (n) break;
}*/

let day = prompt('Укажите число от 0 до 31 для определения декады');                               /*8*/

if (1 <= n && n <= 10) {
    console.log('1-ая декада');
} else if (11<=n && n<=20) {
    console.log('2-ая декада');
} else if (21<=n && n<=31) {
console.log('3-ая декада');
} if (n > 31) {
    console.log('Укажите число от 0 до 31');
}

/*for (; 1 <= day <= 10;) {
    console.log('1-ая декада');
    if (day) break;
}
for (; 11<=day<=20;) {
    console.log('2-ая декада');
    if (day) break;
}
for (; 21<=day<=31;) {
    console.log('3-ая декада');
    if (day) break;
}*/


let d = prompt('Введите число');                               /*9*/

year = d/365;
(d >= 365) ? console.log(year + ' год') : console.log('Меньше года');

month = d/31;
(d >= 31) ? console.log(month + ' месяц') : console.log('Меньше месяца');

week = d/7;
(d >= 7) ? console.log(week + ' недель') : console.log('Меньше недели');

hour = d*24;
console.log(hour + ' часов');

minute = d*24*60;
console.log(minute + ' минут');

second = d*24*60*60;
console.log(second + ' секунд');

                                                          /*10*/
let w = prompt('Введите число');

if (1<=w && w<=31) {
    console.log('Январь');
} else if (32<=w && w<=60) {
    console.log('Февраль');
} else if (61<=w && w<=91) {
    console.log('Март');
} else if (92<=w && w<=121) {
    console.log('Апрель');
} else if (122<=w && w<=152) {
    console.log('Май');
} else if (153<=w && w<=182) {
    console.log('Июнь');
} else if (183<=w && w<=213) {
    console.log('Июль');
} else if (214<=w && w<=243) {
    console.log('Август');
} else if (244<=w && w<=274) {
    console.log('Сентябрь');
} else if (275<=w && w<=304) {
    console.log('Октябрь');
} else if (305<=w && w<=335) {
    console.log('Ноябрь');
} if (336<=w && w<=365) {
    console.log('Декабрь');
}

let season;

switch (season) { 
    case 'Декабрь':
    case 'Январь':
    case 'Февраль':
        console.log('Зима');
    break;
    case 'Март':
    case 'Апрель':
    case 'Май':
        console.log('Весна');
    break;
    case 'Июнь':
    case 'Июль':
    case 'Август':
        console.log('Лето');
    break;
    case 'Сентябрь':
    case 'Октябрь':
    case 'Ноябрь':
        console.log('Осень');
    break;
}


/*day = prompt('Число');

for (; 1<=day<=31;) {
    console.log('Первый месяц');
    if (day) break;
}
for (; 32<=day<=60;) {
    console.log('Второй месяц');
    break;
}
for (; 61<=day<=91;) {
    console.log('Третий месяц');
    break;
}
for (; 92<=day<=121;) {
    console.log('Четвертый месяц');
    break;
}
for (; 122<=day<=152;) {
    console.log('Пятый месяц');
    break;
}
for (; 153<=day<=182;) {
    console.log('Шестой месяц');
    break;
}
for (; 183<=day<=213;) {
    console.log('Седьмой месяц');
    break;
}
for (; 214<=day<=243;) {
    console.log('Восьмой месяц');
    break;
}
for (; 244<=day<=274;) {
    console.log('Девятый месяц');
    break;
}
for (; 275<=day<=304;) {
    console.log('Десятый месяц');
    break;
}
for (; 305<=day<=335;) {
    console.log('Одинадцатый месяц');
    break;
}
for (; 336<=day<=365;) {
    console.log('Двенадцатый месяц');
    break;
}*/