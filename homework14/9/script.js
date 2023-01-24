// Завдання No 9. Створити меню, що розкривається.
// Створити меню, яке натискання відкривається або закривається.
// P. S. HTML / CSS вихідного документа можна і потрібно міняти.
// Вміст документа index.html :
// <!DOCTYPE HTML>
// <html>
// <head>
// <meta charset="utf-8">
// </head>
// <body>

// ▶ ▼ Солодощі (натисни мене)!
// <ul>
// <li> Тістечко </li>
// <li> Пончик </li>

// <li> Мед </li>
// </ul>

// </body>
// </html>

let btn = document.querySelector('.btn');
let ul = document.querySelector('.ul');

btn.addEventListener('click', () => {
    ul.classList.toggle('hide');
    btn.classList.toggle('hide');

})