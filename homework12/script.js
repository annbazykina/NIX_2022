// !Завдання No1. Переведіть текст вигляду border-left-width до borderLeftWidth
// Напишіть функцію camelize ( str ), яка перетворює рядки виду " my-short-string " на "
// myShortString ".
// Тобто дефіси видаляються, а всі слова після них отримують велику букву.
// Приклади :
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// PS Підказка: використовуйте split, щоб розбити рядок на масив символів, потім
// переробіть все як потрібно і з'єднайте методом join назад.

// function camelize(str) {
//     return str.split('-').map((el, i) => i === 0 ? el : el[0].toUpperCase() + el.slice(1)).join('');
// }

// console.log(camelize("-webkit-transition"));


// !Завдання No2 . Фільтрування по діапазону
// Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи
// між a та b і віддає масив цих елементів.
// Функція повинна повертати новий масив та не змінювати вихідний.
// Наприклад:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert(filtered); // 3,1 (збігаються значення)
// alert(arr); // 5,3,8,1 (без змін)

// function filterRange(arr, a, b) {
//     let newArr =  arr.filter(el => el >= a && el <= b );
//     return newArr;
// }

// перевірка a ≤ arr[i] ≤ b.
// function filterRange(arr, a, b) {
//     let newArr =  arr.filter(el => a <= el && el <= b);
//     return newArr;
// }

// console.log(filterRange([5, 3, 8, 1], 1, 4));


// !Завдання No 3 Фільтрування за діапазоном «на місці»
// Напишіть функцію filterRangeInPlace( arr , a, b), яка приймає масив arr і видаляє з нього
// всі значення крім тих, що знаходяться між a та b. Тобто перевірка має вигляд
// a ≤ arr[i] ≤ b.
// Функція повинна змінювати масив, що приймається, і нічого не повертати.
// Наприклад:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // видалені числа поза діапазоном 1..4
/// alert(arr ); // [3, 1]

// function filterRangeInPlace(arr, a, b) {
//     for(let i = 0; i < arr.length; i++) {
//         if (!(a <= arr[i] && arr[i] <= b)) arr.splice(i, 1);
//     }
// }
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);


// ! Завдання No 4. Сортувати у порядку за зменшенням
// let arr = [5, 2, 1, -10, 8];
// ... ваш код для сортування за спаданням
// arr.sort((a, b) => b - a);
// alert(arr); // 8, 5, 2, 1, -10


// !Завдання No 5. Скопіювати та відсортувати масив
// Ми маємо масив рядків arr. Потрібно отримати відсортовану копію, але залишити arr
// незміненим.
// Створіть функцію copySorted(arr), яка повертатиме таку копію.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert (sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без змін)
//
// function copySorted(arr) {
//     // декілька варіантів копіювання массиву arr 
//     // let sorted = [...arr].sort();
//     // let sorted = arr.slice().sort();
//     // let sorted = Array.from(arr).sort();
//     return sorted;
// }
// console.log(copySorted(arr))
// console.log(arr)

// !Завдання No 6. Створити калькулятор, що розширюється .
// Створіть функцію Calculator, яка реалізує функціонал калькулятора.
// function Calculator(firstOperand, secondOperand, operator) {
//     if(!Number(firstOperand) || !Number(secondOperand)) {
//         return alert('Це не число. Введіть число');
//     }
//     switch(operator) {
//         case '+':
//             alert(firstOperand + secondOperand);
//             break;
//         case '-':
//             alert(firstOperand - secondOperand);
//             break;
//         case '*':
//             alert(firstOperand * secondOperand);
//             break;
//         case '/':
//             alert(firstOperand / secondOperand);
//             break;
//         default:
//             alert('Така дія не виконується');
//     }
// }
// console.log(Calculator(9, 6, '/'));


//! Завдання No 7. Трансформувати на масив імен
// Ви маєте масив об'єктів user, і в кожному з них є user.name. Напишіть код, який
// перетворює їх на масив імен.
// Наприклад:
// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 28};
// let users = [ vasya, petya, masha ];
//перший варіант
// let names = users.map((item) => item.name);
//другий варіант, але вікорістовуємо ще одін массив
// let arr = [];
// let names = users.forEach(el => arr.push(el.name));
// console.log(arr);
//третій варіант
// let names = users.reduce((prev, curr) => {
//     return [...prev, curr.name];
// }, []);
// console.log(users);
// console.log(names); // Вася, Петя, Маша


// !Завдання No 8. Відсортувати користувачів за віком
// Напишіть функцію sortByAge(users), яка приймає масив об'єктів із властивістю age та
// сортує їх за ним.
// Наприклад:
// let vasya = {name : " Вася ", age: 25};
// let petya = {name : " Петя ", age: 30};
// let masha = {name : " Маша ", age: 28};

// let arr = [ vasya , petya , masha ] ;

// function sortByAge(arr) {
//     return arr.sort((a,b) => a.age - b.age);
// }
// console.log(sortByAge(arr));
// console.log(arr);
// alert( arr [0].name); // Вася
// alert ( arr [1].name); // Маша
// alert ( arr [2].name); // Петро


//! Завдання No 9. Отримати середній вік
// Напишіть функцію getAverageAge(users), яка приймає масив об'єктів із властивістю age
// та повертає середній вік.
// Формула обчислення середнього арифметичного значення: (age1+age2+...+ageN)/N.
// Наприклад:
// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 29};
// let arr = [ vasya, petya, masha ];
// function getAverageAge(users) {
//     let averageAge = users.map(el => el.age);
//     return averageAge.reduce((sum, el) => sum += el, 0) / averageAge.length; 
// }
// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28


//! Завдання No 10. Залишити унікальні елементи масиву
// Нехай arr – масив рядків.
// Напишіть функцію unique(arr), яка повертає масив, що містить лише унікальні елементи
// arr.
// Наприклад:

// function unique(arr) {
//     let result = [];
//     for (let str of arr) {
//         if (!result.includes(str.trim())) {
//             result.push(str);
//         }
//     }
//     return result;
// }
// let strings = ["кришна", "кришна", "харе", "харе",
// "харе", "харе", "кришна", " кришна ", ":-O"];
// alert(unique(strings)); // кришна, харе, :-O


//! Завдання No 11. Фільтрування унікальних елементів масиву
// Допустимо, у нас є масив arr.
// Створіть функцію unique(arr), яка поверне масив унікальних значень масиву arr, що не
// повторюються.
// Наприклад:
// function unique(arr) {
//     let mySet = new Set();
//         for (let str of arr) {
//             if (!mySet.has(str)) {
//                 mySet.add(str);
//             }
//         }
//         return Array.from(mySet);
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"];
// console.log(unique(values)); // Hare,Krishna,:-O
// PS Тут ми використовуємо рядки, але значення може бути будь-якого типу.
// PPS Використовуйте Set для збереження унікальних значень.


// !Завдання No 12. Чи незалежні лічильники?
// Тут ми робимо два лічильники: counter і counter2, використовуючи ту саму функцію
// makeCounter.
// Вони незалежні? Що покаже другий лічильник? 0,1 чи 2,3 чи щось ще?
//Вони незалежні, тому що для кожного створюється своє лексичне оточення зі своїм count. Другий лічильнік виведе 0, 1 і далі, якщо його ще викликати.
// function makeCounter() {
//     let count = 0;
//     return function() {
//     return count++; 
//     };
// }
// let counter = makeCounter();
// let counter2 = makeCounter();
// let counter3 = makeCounter();
// alert(counter ()); // 0
// alert(counter ()); // 1
// alert(counter2 ()); //? виведе 0
// alert(counter2 ()); //? виведе 1


// !Завдання No 13. Об'єкт лічильника
// Тут об'єкт лічильника створено за допомогою функції-конструктора.
// Чи працюватиме він? Що покаже?
//Він працюватиме, покаже 1, 2 та знову 1, т.к. функція down зменшує значення count.
// function Counter() {
//     let count = 0;
//     this.up = function() {
//     return ++count;
//     };
//     this.down = function() {
//     return --count;
//     };
// }
// let counter = new Counter();
// console.log(counter.up()); //? виведе 1, тому що префіксний інкремент спочатку змінює count, а потім повертає.
// console.log(counter.up()); //? виведе 2
// console.log(counter.down() ); //? виведе 1


// !Завдання No 14. Обчислити факторіал
// Факторіал натурального числа – це число, помножене на себе мінус один, потім на себе
// мінус два, і так далі до 1. Факторіал n позначається як n!
// Визначення факторіалу можна записати як:

// n! = n * (n - 1) * (n - 2) * ... * 1

// Приклади значень для різних n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Завдання – написати функцію factorial(n), яка повертає n!, використовуючи рекурсію.
// alert( factorial(5) ); // 120
// PS Підказка: n! можна записати як n*(n-1)! Наприклад: 3! = 3 * 2! = 3 * 2 * 1! = 6

// function factorial(n) {
//     if(n === 1) return n;
//     return n * factorial(n - 1);
// }

// console.log(factorial(3));