const timerElement = document.getElementById('timerElement');
let intervalStatus;

const task1Btn = document.getElementById('task1Btn');
const task2Btn = document.getElementById('task2Btn');
const task4Btn = document.getElementById('task4Btn');


function task1Function() {
    setInterval(() => {
        let date = new Date();

        let hours = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');
        let seconds = date.getSeconds().toString().padStart(2, '0');

        timerElement.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

function task2Function() {
    const userTime = prompt('Enter time', "2025-04-14T23:59");
    const endTime = new Date(userTime);

    clearInterval(intervalStatus);

    intervalStatus = setInterval(() => {
        const currentTime = new Date();
        const difference = endTime - currentTime;

        if (difference <= 0) {
            clearInterval(intervalStatus);
            timerElement.textContent = "час вийшов";
            return;
        }

        const hours = Math.floor(difference / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');

        timerElement.textContent = `${hours}:${minutes}:${seconds}`;

    }, 1000)
}

function task4Function() {
    const birthdayMonth = prompt("місяць"); // серпень (місяці з 0!)
    const birthdayDay = prompt("день");

    const now = new Date();

    let nextBirthday = new Date(now.getFullYear(), birthdayMonth, birthdayDay);

    if (nextBirthday < now) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const diffMs = nextBirthday - now;

    let remainingSeconds = Math.floor(diffMs / 1000);
    const seconds = remainingSeconds % 60;
    remainingSeconds = Math.floor(remainingSeconds / 60);
    const minutes = remainingSeconds % 60;
    remainingSeconds = Math.floor(remainingSeconds / 60);
    const hours = remainingSeconds % 24;
    const days = Math.floor(remainingSeconds / 24);

    const months = Math.floor(days / 30);
    const daysInMonth = days % 30;


    console.log(`До наступного дня народження залишилось:${months} міс., ${daysInMonth} днів, ${hours} год., ${minutes} хв., ${seconds} сек.`);
}

task1Btn.addEventListener('click', task1Function)

task2Btn.addEventListener('click', task2Function)

task4Btn.addEventListener('click', task4Function)




