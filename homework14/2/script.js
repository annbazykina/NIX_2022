// Завдання No2. Створити повідомлення
// Напишіть функцію showNotification(options) , яка створює повідомлення: <div
// class="notification"> із заданим вмістом. Повідомлення має автоматично зникнути
// через 1,5 секунди.
// Приклад об'єкта options :
// {/* // Показує елемент з текстом "Hello" поруч із правою верхньою частиною */}

function showNotification({top = 0, right = 0, html, className}) {
    let divNotif = document.createElement('div');
    
    if(className === '' || className === null) {
        divNotif.classList.add('notification');
    } else {
        divNotif.classList.add(className); 
    }
    divNotif.style.float = 'right';
    divNotif.style.position = 'absolute';
    divNotif.style.top = top + 'px';
    divNotif.style.right = right + 'px';
    divNotif.innerHTML = html;
    document.body.prepend(divNotif);


    setTimeout(() => divNotif.remove(), 1500);
}

let options = 

console.log(showNotification ({
    top : 10 , // 10px від верхньої межі вікна (за замовчуванням 0px)
    right : 10 , // 10px від правого краю вікна (за замовчуванням 0px)
    html : "Hello!" , // HTML-повідомлення
    className : '' // Додатковий клас для div (необов'язково)
}));