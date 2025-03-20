const outputArray = document.getElementById('arrayMaxNumberOutput');
const array = document.getElementById('arrayInput')
const findMaxElBtn = document.getElementById('findMaxNumInArrayBtn');
const firstRangeNum = document.getElementById('firstNum');
const secondRangeNum = document.getElementById('secondNum');
const thirdRangeNum = document.getElementById('thirdNum');
const rangeBtn = document.getElementById('checkRangeBtn');
const statusBtn = document.getElementById('changeStatusBtn');
let statusVariable = true;
const studentGrade = document.getElementById('studentGradeInput');
const checkGradeBtn = document.getElementById('checkStudentGrade');
const monthName = document.getElementById('monthName');
const monthNameCheckBtn = document.getElementById('monthNameCheckBtn');

findMaxElBtn.addEventListener('click', (e) => {
    const numArr =  array.value;
    let numbers = numArr.split(" ")
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num));
    outputArray.textContent = Math.max(...numbers);
})

rangeBtn.addEventListener('click', (e) => {
    const firstNum = parseFloat(firstRangeNum.value);
    const secondNum = parseFloat(secondRangeNum.value);
    const thirdNum = parseFloat(thirdRangeNum.value);
    if (firstNum <= thirdNum && secondNum >= thirdNum) {
        alert(`Число ${thirdNum} входить до діапазону (${firstNum};${secondNum})`);
    }
    else {
        alert(`Число ${thirdNum} НЕ входить до діапазону (${firstNum};${secondNum})`);
    }
})

statusBtn.addEventListener('click', (e) => {
    statusVariable = !statusVariable;
    console.log(statusVariable)
})

checkGradeBtn.addEventListener('click', (e) => {
    const grade = parseFloat(studentGrade.value);

    if (grade >= 0 && grade < 30) {
        alert("Незадовільно")
    }
    else if(grade >= 30 && grade < 50) {
        alert("Задовільно")
    }
    else if(grade >= 50 && grade < 75) {
        alert("Добре")
    }
    else if(grade >= 75 && grade < 100) {
        alert("Відмінно")
    }
    else {
        alert("хибне значення")
    }
})

monthNameCheckBtn.addEventListener('click', (e) => {
    const month = parseFloat(monthName.value);

    switch (month) {
        case 12:
        case 1:
        case 2:
            alert("Зима")
            break;
        case "Березень":
        case "Квітень":
        case "Травень":
            alert("Весна")
            break;
        case "Червень":
        case "Липень":
        case "Серпень":
            alert("Літо")
            break;
        case "Вересень":
        case "Жовтень":
        case "Листопад":
            alert("Осінь")
            break;
        default:
            alert("такого місяця не існує");
            break
    }
})