
// Завдання No11. Додайте пункт до списку, що випадає

// Є <select>:

// <select id="genres">
// <option value="rock">Рок</option>
// <option value="blues" selected>Блюз</option>
// </select>

// Використовуючи JavaScript:
// 1. Виведіть значення та текст вибраного пункту.

let select = genres.options[genres.selectedIndex];
console.log(select.value);
console.log(select.text);

// // 2. Додайте пункт: <option value="classic">Класика</option>.

let newOption = new Option('Класика', "classic");
genres.prepend(newOption);
// // 3. Зробіть його вибраним.

//вибраний елемент
// let newOption = new Option('Класика', "classic", true, true);

newOption.selected = true;





