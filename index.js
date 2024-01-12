let result = document.getElementById('result');
let history = document.getElementById('history');
let currentExpression = "";
let calculationHistory = [];
let ans = '';

function appendToResult(value) {
    checkDisplay();
    currentExpression += value;
    result.innerHTML = currentExpression;
    checkLength();
}

function performOperation(operator) {
    if (currentExpression !== '') {
        currentExpression += ' ' + operator + ' ';
        result.innerHTML = currentExpression;
        checkLength();
    }
}

function clearResult() {
    result.style.fontSize = "50px";
    currentExpression = '';
    result.innerHTML = '';
}

function removeElement() {
    currentExpression = currentExpression.slice(0, -1);
    result.innerHTML = currentExpression;
}

function checkDisplay() {
    if (ans !== '') {
        clearResult();
        ans = '';
    }
}

function calculateResult() {
    if (currentExpression !== '') {
        const resultValue = eval(currentExpression);
        if (calculationHistory.length >= 3) calculationHistory.pop();
        calculationHistory.unshift(currentExpression + ' = ' + resultValue);
        history.innerHTML = 'History:<br>' + calculationHistory.join('<br>');
        currentExpression = resultValue.toString();
        ans = currentExpression;
        checkLength();
        result.innerHTML = ans;
    }
}

function showHistory() {
    if (history.style.visibility == 'visible') {
        history.style.visibility = 'hidden';
    }
    else history.style.visibility = 'visible';
    history.style.display = 'block';
}


function checkLength() {
    if (currentExpression.length > 6) {
        result.style.fontSize = "40px";
    }
    if (currentExpression.length >= 10) {
        result.style.fontSize = "30px";
    }
    if (currentExpression.length >= 13) {
        result.style.fontSize = "20px";
    }
    if (currentExpression.length > 20) {
        function checkDisplay() {
            if (ans !== '') {
                clearResult();
                ans = '';
            }
        }
        result.style.fontSize = "40px";
        result.innerHTML = "OverLimit"
    }
}

