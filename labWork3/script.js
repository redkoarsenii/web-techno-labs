
function countNumbers(a,b) {
    if (a + b === 10) {
        console.log("сума цих чисел = 10!")
    }
    else if(a - b === 10) {
        console.log("різниця цих чисел = 10!")
    }
}


const fiboBtn = document.getElementById("fiboBtn");
const fiboOutput = document.getElementById("fiboOutput");
let a = 0, b = 1, result = 0, i = 0;
const primeNumBtn = document.getElementById("primeNumBtn");
const primeNumOutput = document.getElementById("primeNumOutput");
const weekDayNum = document.getElementById("weekDayNum");
const weekDayNumBtn = document.getElementById("weekDayNumBtn");
const inputArray = document.getElementById('inputArray');
const sortedArrayBtnOutput = document.getElementById('sortedArrayBtnOutput');
const numsInputArray = document.getElementById('numsInputArray');
const arrayOutput = document.getElementById('arrayOutput');
let numsIncrementedArray = [];

const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const countNumsBtn = document.getElementById('countNumsBtn');

fiboBtn.addEventListener("click", () => {
    while (i < 10) {
        console.log(a);
        result += a;
        [a, b] = [b, a + b];
        i++;
    }
    fiboOutput.innerHTML = result;
})

primeNumBtn.addEventListener("click", () => {
    let primeNumSum = 0;

    for (let num = 2; num <= 1000; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumSum += num;
        }
    }

    primeNumOutput.innerText = primeNumSum;
});

weekDayNumBtn.addEventListener("click", () => {
    let userNumber = Number(weekDayNum.value);
    switch (userNumber) {
        case 1:
            alert("Понеділок")
            break;
        case 2:
            alert("Вівторок")
            break;
        case 3:
            alert("Середа")
            break;
        case 4:
            alert("Четвер")
            break;
        case 5:
            alert("П'ятниця")
            break;
        case 6:
            alert("Субота")
            break;
        case 7:
            alert("Неділя")
            break;
        default:
            alert("err")
            break;
    }
})

sortedArrayBtnOutput.addEventListener('click',()=>{
    const text = inputArray.value.split(" ");

    text.forEach((el) => {
        if (el.length % 2 !== 0) {
            console.log(el)
        }
    })

})

arrayOutput.addEventListener('click',()=>{
    const numsArray = numsInputArray.value.split(" ").map(Number);

    numsArray.forEach(el =>{
        numsIncrementedArray.push(++el);
    })
    console.log(numsIncrementedArray)

})

countNumsBtn.addEventListener('click', ()=>{
    countNumbers(parseInt(firstNumber.value), parseInt(secondNumber.value));
})










