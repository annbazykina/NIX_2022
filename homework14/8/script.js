let ball = document.querySelector('#ball');
let field = document.querySelector('#field');


field.addEventListener('click', (event) => {
    let fieldCoordinats = field.getBoundingClientRect();
    let ballLeft = event.clientX - fieldCoordinats.left - field.clientLeft - ball.clientWidth / 2;
    let ballTop = event.clientY - fieldCoordinats.top - field.clientTop - ball.clientHeight / 2;

    // верхня границя поле 
    if (ballTop < 0) ballTop = 0;

    // ліва границя
    if (ballLeft < 0) ballLeft = 0;


    // права границя
    if (ballLeft + ball.clientWidth > field.clientWidth) {
      ballLeft = field.clientWidth - ball.clientWidth;
    }

    // нижня границя
    if (ballTop + ball.clientHeight > field.clientHeight) {
      ballTop = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballLeft + 'px';
    ball.style.top = ballTop + 'px';

});  