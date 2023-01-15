// Завдання No1. Перевірка на пустоту
// Напишіть функцію isEmpty(obj) , яка повертає true , якщо об'єкт не має властивостей,
// інакше false .

// let names = {name: 'Mike'};
// function isEmpty(obj) {
//     for(let val in obj) {
//         if (obj.hasOwnProperty(val)) {
//             return false;
//         }
//     }
//     return true;
// }

// function isEmpty(obj) {
//     for(let val in obj) {
//          return false;
//     }
//     return true;
// }

// function isEmpty(obj) {
//     return Object.keys(obj).length === 0;
// }

// console.log(isEmpty(names));


// Завдання No2. Помножуємо всі числові властивості на 2
// Створіть функцію multiplyNumeric(obj) , яка збільшує всі числові властивості об'єкта obj
// на 2 .
// Зверніть увагу, що multiplyNumeric не потрібно нічого повертати. Слід безпосередньо
// змінювати об'єкт.
// PS Використовуйте typeof, щоб перевірити, чи значення властивості числове.
// let obj1 = {
//     name: "ann",
//     age: 33,
//     kids: 2,
//     brothers: 10,
// }
// function multiplyNumeric(obj) {
//     for(let val in obj) {
//         if (typeof obj[val] == 'number') {
//             obj[val] *= 2;
//         }
//     }
// }
// console.log(multiplyNumeric(obj1));


// Завдання No3. Введення числового значення
// Створіть функцію readNumber, яка вимагатиме введення числового значення до тих пір,
// поки відвідувач його не введе.
// Також треба дозволити користувачеві зупинити процес введення, відправивши порожній
// рядок або натиснувши "Скасувати". У цьому випадку функція повинна повернути null.

// function readNumber() {
//     let result;
//     while (!isFinite(result)) {
//         result = +prompt("Введіть число", '');
//     }       
//     if (result === null || result === '') return null;
//     return result;
// }

// function readNumber() {
//     let num;
//     do {
//         num = prompt("Введіть число", '');
//     } while (!isFinite(num));
//     if (num === null || num === '') return null;
//     return +num;
// }
// console.log(readNumber());


// Завдання No4. Випадкове число від min до max
// Вбудований метод Math.random() повертає випадкове число від 0 (включно) до 1 (але не
// включаючи 1)
// Напишіть функцію random(min , max), яка генерує випадкове число з плаваючою точкою
// від min до max (але не включаючи max).
// Приклад роботи функції:
// alert(random (1, 5)); // 1.2345623452
// alert(random (1, 5)); // 3.7894332423
// alert(random (1, 5)); // 4.3435234525

// Если мы умножим случайное число от 0…1 на max-min, тогда интервал возможных значений от 0..1 увеличивается до 0..max-min.
// И, если мы прибавим min, то интервал станет от min до max.

// function random(min, max) {
//    return Math.random() * (max - min) + min;
// }

// console.log(random(3, 5));


// Завдання No5. Випадкове ціле число від min до max
// Напишіть функцію randomInteger( min , max), яка генерує випадкове ціле число від min
// до max (включно).
// Будь-яке число з інтервалу min..max має з'являтися з однаковою ймовірністю .
// Приклад роботи функції:
// alert (randomInteger (1, 5) ); // 1
// alert(randomInteger (1, 5)); // 3
// alert(randomInteger (1, 5)); // 5

// function randomInteger(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }



// Завдання No6. Зробити перший символ великим
// Напишіть функцію ucFirst( str ), яка повертає рядок str із великим першим символом.
// Наприклад:
// ucFirst (" вася ") == "Вася";

//  str[0] return undefined;

// function ucFirst(str) {
//     if(!str) return str; 
//     return str[0].toUpperCase() + str.slice(1);
// }

//str.charAt(0) всегда возвращает строку, для пустой пустую.

// function ucFirst(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1); 
// }

// console.log(ucFirst(''));


// Завдання No7. Перевірка на спам
// Напишіть функцію checkSpam ( str ), яка повертає true, якщо str містить 'viagra ' або
// 'XXX', а інакше false .
// Функція повинна бути нечутлива до регістру :
// checkSpam( 'buy ViAgRA now') == true
// checkSpam( 'free xxxxx ') == true
// checkSpam( "innocent rabbit") == false

// function checkSpam(str) {
//     return str.toLowerCase().includes('viagra ') || str.toUpperCase().includes('XXX');
// }

// console.log(checkSpam(('free xxxxx ')));


// Завдання No8. Усічення рядка
// Створіть функцію truncate(str , maxlength), яка перевіряє довжину рядка str і, якщо вона
// перевершує maxlength, замінює кінець str на "...", так, щоб її довжина дорівнювала
// maxlength .
// Результатом функції має бути той самий рядок, якщо усічення не потрібно, або, якщо
// необхідно, усічений рядок.
// Наприклад:
// truncate ( "Ось що мені хотілося б сказати на цю тему:", 20) = "Ось що мені хотіло ..."
// truncate ( "Усім привіт!", 20) = "Усім привіт!"

//  maxlength - 3 , тому що уся довжина повинна бути maxlength(20) та ще плюс трі точки доривнює 23.

// function truncate(str, maxlength) {
//     if(str.length > maxlength) {
//         let str1 = str.slice(0, maxlength - 3) + '...';
//         return str1;
//     } else {
//         return str;
//     }
// }

// console.log(truncate("Ось що мені хотілося б сказати на цю тему:", 20));


// Завдання No9. Виділити число
// Є вартість у вигляді рядка "$120". Тобто спочатку йде знак валюти, а потім число.
// Створіть функцію extractCurrencyValue(str ), яка з такого рядка виділятиме числове
// значення і повертатиме його.
// Наприклад:
// alert(extractCurrencyValue ('$120') === 120); // true


// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
// console.log(extractCurrencyValue('$120'))


// Завдання No10. Сума введених чисел
// Напишіть функцію sumInput( ), яка:
// • Просить користувача ввести значення, використовуючи prompt та зберігає їх у
// масив.
// • Закінчує запитувати значення, коли користувач введе не числове значення,
// порожній рядок або натисне «Скасувати».
// • Підраховує та повертає суму елементів масиву.
// PS Нуль 0 – вважається числом, не зупиняйте введення значень під час введення
// «0».


// function sumInput() {
//     let arr = [];
//     while (true) {
//         let val = prompt("Введіть число", '');
//         if (val === '' || val === null || !isFinite(val)) break;
//         arr.push(+val);
//     }
//     let sum = 0;
//     for (let number of arr) {
//       sum += number;
//     }
//     return sum;
//   }
  
// console.log(sumInput())

// Завдання No11. Чи обов'язковий "else"?
// Наступна функція повертає true якщо параметр age більше 18.
// В іншому випадку вона запитує підтвердження через confirm і повертає його результат:
// function checkAge (age) {
// if (age > 18) {
// return true;
// } else {
// // ...
// return confirm( ' Батьки дозволили ?');
//     }
// }

// Чи буде ця функція працювати якось інакше, якщо прибрати else ?
//У данному випадку функція буде працювати так само як без else. Адже else - це необов'язковий блок if else, який виконується, коли умова false.
// function checkAge (age) {
// if (age > 18) {
//     console.log(false);
// // return true;
// }
// // // ...
// return confirm( ' Батьки дозволили ?');
// }
// Чи є хоч одна відмінність у поведінці цього варіанту?
// У першому випадку, виконається або if або else. У другому випадку це дві різні дії. І друга дія завжди буде виконуватись не залежно від результату в блоці if. 
// console.log(checkAge(19))


// Завдання No12. Перепишіть функцію за допомогою оператора '?' або '||'
// Наступна функція повертає true якщо параметр age більше 18.
// В іншому випадку вона ставить питання confirm і повертає його результат.
// function checkAge (age) {
// if (age > 18) {
// return true;
// } else {
// return confirm( ' Батьки дозволили ?');
// }
// }
// Перепишіть функцію, щоб вона робила те саме, але без if , в один рядок.
// Зробіть два варіанти функції checkAge:
// Використовуючи оператор?
// Використовуючи оператор ||

// function checkAge(age) {
//     return (age > 18) ? true : confirm(' Батьки дозволили ?');
// }

// function checkAge(age) {
//     return (age > 18) || confirm(' Батьки дозволили ?');
// }

// console.log(checkAge(16));


// Завдання No13. Функція min ( a, b)
// Напишіть функцію min(a,b), яка повертає менше чисел a і b.
// Приклад викликів:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// **НЕ МОЖНА ВИКОРИСТОВУВАТИ СТАНДАРТНІ ФУНКЦІЇ

// function min(a,b) {
//     if(a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }

// console.log(min(-1, 2));


// Завдання No14. Функція pow( x, n )
// Напишіть функцію pow(x,n ), яка повертає x до ступеня n. Інакше кажучи, множить x на
// себе n разів і повертає результат.
// pow ( 3, 2) = 3 * 3 = 9
// pow ( 3, 3) = 3 * 3 * 3 = 27
// pow ( 1, 100) = 1 * 1 * ... * 1 = 1

// Створіть сторінку, яка запитує x та n, а потім виводить результат pow(x,n ).
// PS У цьому функція має підтримувати лише натуральні значення n, тобто. цілі від 1 та
// вище.
// **НЕ МОЖНА ВИКОРИСТОВУВАТИ СТАНДАРТНУ ФУНКЦІЮ ПРИВЕДЕННЯ ДО
// СТУПЕНЮ ТА ВІДПОВІДНИЙ ОПЕРАТОР


// function pow(x, n) {
//     x = prompt('Введіть число', '');
//     n = prompt('Введіть ступінь', '');
//     let result = x;
//     if(n < 1) {
//         alert('Це не натуральне число');
//     } else {
//         for (let i = 1; i < n; i++) {
//             result *= x;
//         }
//     alert(`${x} в ступені ${n} дорівнює ${result}`) 
//     }
//     return result;
// }


// Завдання No15. Перепишіть за допомогою функції-стрілки
// Замініть код Function Expression стрілочною функцією:
// function ask(question, yes, no) {
// if (confirm(question)) yes( )
// else no( );
// }
// ask (
// "Ви згодні?",
// () => { alert ("Ви погодилися."); },
// () => { alert ("Ви скасували виконання."); }
// );


// Завдання No16. Робінзон Крузо
// Ваш місячний дохід - 3333 папуг. Ви хочете купити у мавп пальму за 8000 папуг.
// Обчисліть, за який проміжок часу ви назбираєте на пальму, за умови, що ваші щомісячні
// витрати становлять 1750 папуг.

// function parrots(num) {
//     let months = Math.ceil(8000 / (num - 1750));
//     return months;
// }

// console.log(parrots(3333));


// Завдання No17. Запитання користувачеві
// 1. Запитати користувача 10 чисел
// 2. Якщо число
// - Позитивне -> нічого не робити
// - негативна -> отримати їх суму
// 3. Вивести суму негативних чисел, які запровадив користувач
// ВАЖЛИВО: за умовами завдання у вашому коді має бути лише 1 prompt та
// тільки 1 цикл for

// function sumOfNegativ() {
//     let arr = [];
//     for(let i = 0; i < 10; i++) {
//        let num = prompt('Number', '');
//        if(!isFinite(num) && num) continue;
//        if(num < 0) {
//             arr.push(+num);
//             console.log(arr);
//        } else {
//             num;
//        }
//     }

//     return arr.reduce((acc, a) => acc += a);

// }
// console.log(sumOfNegativ())
