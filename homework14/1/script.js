// Завдання No1. Створіть календар у вигляді таблиці
// Напишіть функцію createCalendar(elem, year, month).
// Виклик функції повинен створити календар для заданого місяця month на рік і вставити
// його в elem.
// Календар має бути таблицею, де тиждень – це <tr>, а день – це <td>. У таблиці має бути
// заголовок із назвами днів тижня, кожен день – <th>, першим днем тижня має бути
// понеділок.
// Наприклад, createCalendar(cal, 2012, 9) згенерує в cal наступний календар:

// PS У цьому завдання достатньо згенерувати календар, клікабельним його робити не
// потрібно.

const calendar = document.querySelector('.calendar');


function createCalendar(elem, year, month) {
    const date = new Date(year, month - 1);
    const countDayInMonth = new Date(year, month, 0).getDate();
    let firstDay = new Date(year, month - 1, 1).getDay();
    const lastDay = new Date(year, month - 1, countDayInMonth).getDay();
    let table = '<table><thead><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr></thead><tbody><tr>';

    if (firstDay === 0) firstDay = 7;

    for (let i = 1; i < firstDay; i++) {
        table += '<td></td>';
    }
    for (let i = 1; i <= countDayInMonth; i++) {
    
        table += `<td>${i}</td>`;
        if ((firstDay- 1 + i) % 7 === 0) {
            table += '</tr><tr>';
        }
    }
    if(lastDay !== 0) {
        for (let i = lastDay; i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></tbody></table>';

    elem.innerHTML = table;
}

createCalendar(calendar, 2012, 9);




