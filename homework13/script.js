// !Завдання No1. Дочірні елементи в DOM
// Для сторінки:
// <html>
// <body>
// <div>Користувачі:</div>
// <ul>
// <li>Джон</li>
// <li>Піт</li>
// </ul>
// </body>
// </html>
// • Напишіть код, який отримає елемент <div>
// • Напишіть код, який отримає елемент <ul>
// • Напишіть код, який отримає другий li ( з ім'ям Піт)

// let div = document.querySelector('div');
// let div1 = document.body.firstElementChild;
// let ul = document.querySelector('ul');
// let ul1 = div.nextElementSibling;
// let li = ul.lastElementChild;


// !Завдання No2. Сусіди
// Якщо elem – довільний вузол DOM-елемента.
// • Правда, що elem.lastChild.nextSibling завжди дорівнює null ?
// • Правда, що elem.children[0].previousSibling завжди дорівнює null?

// let elem = document.querySelector('.elem');
//Не завжди. Т.я. lastChild та nextSibling повертають будь-який тип node,тому якщо залишити tag пустим, наприклад <p class="elem"></p> та не робити,навіть пробіли(а вони є типом textNode), то lastChild поверне null, а nextSibling не зможе прочитати null та буде помилка TypeError: Cannot read properties of null.
// Не завжди. null повернеться лише в випадку, якщо elem має хоча б одного нащадка children[0] та між нимм нічего немає, навіть пробілів <div class="elem"><div></div></div>.


//! Завдання No3. Виділіть ячейки по діагоналі
// Напишіть код, який виділить червоним кольором усі ячейки у таблиці по діагоналі.
// Нумерацію в середині таблиці реалізувати через JS.
// Вам потрібно отримати з таблиці <table> усі діагональні <td> та виділити їх,
// використовуючи код:
// // у змінній td знаходиться DOM-елемент для тега < td >
// td.style.backgroundColor = 'red';
// let body = document.body;
// let table = document.createElement('table');
// body.prepend(table);
// let arr = [['1:1', '1:2', '1:3', '1:4', '1:5'],
//         ['2:1', '2:2', '2:3', '2:4', '2:5'],
//         ['3:1', '3:2', '3:3', '3:4', '3:5'],
//         ['4:1', '4:2', '4:3', '4:4', '4:5'],
//         ['5:1', '5:2', '5:3', '5:4', '5:5']
// ];

// function fillTable(table, arr) {
    
//     for(let i = 0; i < arr.length; i++) {
//         let tr = document.createElement('tr');
//         for(let j = 0; j < arr[i].length; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = arr[i][j];

//             tr.append(td);
//         }
//         table.append(tr);
//     }

    //перший варіант
    // let tds = document.querySelectorAll('td');
    // tds[0].style.backgroundColor = 'red';
    // tds[6].style.backgroundColor = 'red';
    // tds[12].style.backgroundColor = 'red';
    // tds[18].style.backgroundColor = 'red';
    // tds[24].style.backgroundColor = 'red';

    //другий варіант
    // for (let i = 0; i < table.rows.length; i++) {
    //     let row = table.rows[i];
    //     row.cells[i].style.backgroundColor = 'red';
    // }

    // третій варіант
    // let allTr = document.querySelectorAll('tr');
    // for (let i = 0; i < allTr.length; i++) {
    //     allTr[i].children[i].style.backgroundColor = 'red';
    // }
// }
// console.log(fillTable(table, arr));

// !Завдання No3. Пошук елементів
// Ось документ із таблицею та формою. Як знайти...
// • Таблицю з id="age-table".
// • Всі елементи label всередині цієї таблиці (їх три).
// • Перший td у цій таблиці (зі словом "Age ").
// • Форму form з ім'ям name = "search".
// • Перший input у цій формі.
// • Останній input у цій формі.
// Використовуйте нижченаведений та браузерні інструменти розробника:

// let body = document.body;
// let table = document.querySelector('#age-table');
// let table1 = body.lastElementChild.previousElementSibling.firstElementChild;
// let lables = document.querySelectorAll('#age-table label');
// let lables1 = table1.lastElementChild.firstElementChild.lastElementChild.children;
// let td = document.querySelector('#age-table td');
// let td1 = table1.lastElementChild.firstElementChild.firstElementChild;
// let form = document.querySelector('form');
// let form1 = body.firstElementChild;
// let firstInput = form.firstElementChild.firstElementChild;
// let lastInput = form.lastElementChild;


// !Завдання No4. Підрахунок нащадків
// Є дерево, структуроване як вкладені списки ul/li.
// Напишіть код, який виведе кожен елемент списку <li>:
// 1. Який у ньому текст (без піддерева)? // Не зрозуміло, що мається на увазі, якщо сама li, то це node_element,якщо текст в li то це - text_node.
// 2. Яка кількість нащадків – всіх вкладених (включаючи глибоко вкладені)?
// let lis = document.querySelectorAll('li'); // якщо усі li то це NodeList
// let countLi = lis.length; // кількість нащадків

// for (let li of lis) {
//     li.firstChild.textContent = 'True';
//     li.firstChild.data = 'False';
// }


//! Завдання No5. Властивість nodeType
// Що виведе код? Та чому?
// <html>
// <body>
// <script>
// alert(document.body.lastChild.nodeType);
// </script>
// </body>
// </html>

//По логиці повивен вивести 3, т.я. lastChild повертає будь-який node type, а останнім є text. Але повертає 1. При виконанні скрипта останнім node type є <script>, тому що браузер ще не встиг опрацювати іншу частину сторінки.


//! Завдання No6. Тег у коментарі

// Що виведе код?
// <script>
// let body = document.body;
// body.innerHTML = "<!--" + body.tagName + "-->";
// alert( body.firstChild.data ); //
// </script>

//Виведе BODY .tagName повертає у верхньому регістрі. data для text_node повертає його вміст.


// !Завдання No7 . Де у DOM- ієрархії "document"?
// Дайте відповіді на запитання:
// 1. Об'єктом якого класу є document?
// 2. Яке місце він посідає у DOM-ієрархії?
// 3. Чи успадковує він від Node чи від Element, чи може від HTMLElement?

//HTMLDocument constructor створює document.(document.typeNode повертає 9, тобто DOCUMENT_NODE). HTMLDocument в свою чергу є прототіпом від DOCUMENT. Якщо повивитись першу дитину DOCUMENT ( firstElementChild: html) то html element. Тобто корінь нашого html document є html елемент.

//! Завдання No8. Очистіть елемент
// Створіть функцію clear(elem), яка видаляє весь вміст із elem.
// {<ol id="elem">
// <li>Привет</li>
// <li>Мир</li>
// </ol>
// <script>
// function clear(elem) {
/* ваш код */
// return elem.innerHTML = '';
 // Очищає список
// </script> 
// }
// clear(elem);


//! Завдання No9. Чому залишається "aaa"?
// Запустіть цей приклад. Чому виклик remove не видалив текст "aaa"?
// <table id="table">
// aaa
// <tr> <td>Тест</td> </tr>
// </table>
// <script>
// alert(table); // таблиця, як і має бути
// table.remove(); // Чому в документі залишився текст "ааа"?

// </script>

//Тому що ааа знаходиться не в табличному тезі li, а в самій таблиці, тому браузер показує ааа до таблиці.


//! Завдання No10. Створіть список
// Напишіть інтерфейс, щоб створити список.
// Для кожного пункту:
// 1. Запитуйте вміст у користувача за допомогою prompt.
// 2. Створюйте елемент <li> і додайте його до <ul>.
// 3. Процес припиняється, коли користувач натискає Esc або вводить порожній рядок.
// Усі елементи мають створюватися динамічно.
// Якщо користувач вводить HTML-теги – нехай у списку вони показуються як звичайний
// текст.

// function createUl() {
//     let body = document.body;
//     let ul = document.createElement('ul');
//     body.prepend(ul);

//     while(true) {
//         let text = prompt('Заповніть елемент списка');
//         if(!text) break;
//         let li = document.createElement('li');
//         ul.append(li);
//         li.textContent = text;
//     }
// }
// createUl();


// !Завдання No11. Вставте HTML у список
// Напишіть код для вставки <li>2</li><li>3</li> між двома <li>:
// <ul id="ul">
// <li id="one">1</li>
// <li id="two">4</li>
// </ul>

// let one = document.querySelector('#one');
// let two = document.querySelector('#two');

// let li2 = document.createElement('li');
// li2.textContent = '2';
// one.after(li2);

// let li3 = document.createElement('li');
// li3.innerHTML = '3';
// two.before(li3);

