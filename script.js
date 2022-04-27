console.log('------ # 1. Реализовать функции sum через замыкание');
function sum(x) {
    return function (y) {
        return x + y;
    }
}

const sum1 = sum(1);
console.log(sum1(2));
console.log(sum(1)(2));


console.log('------ # 2. Описать комментарием в чем ошибка, почему и исправить код');
/*
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}
 */

// Т.к. setTimeout относится к Browser API, то console.log(i) выполнится после всех итераций в цикле, а значит значение переменной i будет равно 10.
// Поэтому результатом будет вывод цифры 10 десять раз.
// Для начала стои изменить условие цикла, чтобы выводить от 1 до 10: for (var i = 1; i <= 10; i++) {}

/*
1. Первый вариант исправления:
Заменить var на let. Поскольку for создаёт для let блочную область видимости, то для каждой итерации будет создаваться свой scope со своим значением переменной.
 */
for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}

/*
2. Второй вариант исправления:
Использовать самовызывающуюся ф-цию, которая будет принимать новое значение i на каждой итерации цикла
 */
for (var i = 1; i <= 10; i++) {
    (function(idx) {
        setTimeout(function() {
            console.log(idx);
        }, 0);
    })(i);
}

/*
3. Третий вариант исправления:
Использовать рекурсию вместо цикла
 */
function makeCounter(num) {
    if (num > 10) {
        return;
    }
    setTimeout(function() {
        makeCounter(num + 1);
    }, 0);
}
makeCounter(1);
