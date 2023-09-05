var showscore = document.getElementById('score'); 
var showtotalQuestion = document.getElementById('totalQuestion');
var shownumber1 = document.getElementById('number1');
var showmark = document.getElementById('mark');
var shownumber2 = document.getElementById('number2');
var showanswer = document.getElementById('answer');
var showresult = document.getElementById('result');
var showplus = document.getElementById('plus');
showplus.checked = true;
showmark.innerHTML = "+";
var score = 0;
var totalQuestion = 0;
var number1 = 0;
var number2 = 0;
var total = 0;
showscore.innerHTML = score;
showtotalQuestion.innerHTML = totalQuestion;


function random() {
    showtotalQuestion.innerHTML = totalQuestion;
    number1 = Math.floor(Math.random() * 10)+1;
    number2 = Math.floor(Math.random() * 10)+1;
    shownumber1.innerHTML = number1;
    shownumber2.innerHTML = number2;
}

function start() {
    random();
    totalQuestion = 0;
    score = 0;
    showtotalQuestion.innerHTML = totalQuestion;
    showscore.innerHTML = score;
    showanswer.value = '';
    showresult.innerHTML = ' ';
    showmark.innerHTML = '+';
    showplus.checked = true;
    
}

function btnanswer() {
    if(showanswer.value == ''){
        showresult.innerHTML = 'กรุณากรอกคำตอบ';
        showresult.style.color = 'blue';
    }
    else{
    checkmark();
    if (total == showanswer.value) {
        showresult.innerHTML = 'ถูกต้อง';
        showresult.style.color = 'green';
        score += 1;
        showscore.innerHTML = score;
        showanswer.value = '';
    } else {
        showresult.innerHTML = 'ไม่ถูกต้อง';
        showresult.style.color = 'red';
        showanswer.value = '';
    }
    totalQuestion += 1;
    random();
}
}

function checkmark() {
    if (showmark.innerHTML == "+") {
        total = number1 + number2;
    } else if (showmark.innerHTML == "-") {
        total = number1 - number2;
    } else if (showmark.innerHTML == "×") {
        total = number1 * number2;
    } else if (showmark.innerHTML == "÷") {
        total = number1 / number2;
    }
}

function radiomark(value) {
    showmark.innerHTML = value;
}
random();