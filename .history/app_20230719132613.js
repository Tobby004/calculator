const display = document.querySelector('.display');
const buttons = Array.from(document.querySelectorAll('button'));
let value = '';
let operator;
let total;

function calculate() {
    if (operator === '+') total += parseFloat(value);
    else if (operator === '-') total -= parseFloat(value);
    else if (operator === '*') total *= parseFloat(value);
    else if (operator === '/') total /= parseFloat(value);
    else total = parseFloat(value);
}

buttons.map(button => {
    button.addEventListener('click', (e) => {
        const action = e.target.textContent;

        if (!isNaN(action) || action === '.') {
            value += action;
            display.value = value;
        }

        if (action === 'AC') {
            value = '';
            total = null;
            operator = null;
            display.value = '';
        }

        if (action === '+/-') {
            value = parseFloat(value) * -1;
            display.value = value;
        }

        if (action === '%') {
            value = parseFloat(value) / 100;
            display.value = value;
        }

        if (e.target.classList.contains('add')) {
            calculate();
            value = '';
            operator = '+';
        }

        if (e.target.classList.contains('sub')) {
            calculate();
            value = '';
            operator = '-';
        }

        if (e.target.classList.contains('mul')) {
            calculate();
            value = '';
            operator = '*';
        }

        if (e.target.classList.contains('div')) {
            calculate();
            value = '';
            operator = '/';
        }

        if (e.target.classList.contains('eq')) {
            calculate();
            value = '';
            operator = null;
            display.value = total;
        }
        if (e.target.classList.contains('sqr')) {
            value = parseFloat(value) ** 2;
            display.value = value;
        }
        
        if (e.target.classList.contains('sqrt')) {
            value = Math.sqrt(parseFloat(value));
            display.value = value;
        }
        
        if (e.target.classList.contains('sin')) {
            value = Math.sin(parseFloat(value));
            display.value = value;
        }
        
        if (e.target.classList.contains('cos')) {
            value = Math.cos(parseFloat(value));
            display.value = value;
        }
        
        if (e.target.classList.contains('tan')) {
            value = Math.tan(parseFloat(value));
            display.value = value;
        }
        
    });

});
