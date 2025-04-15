'use strict';

const lightOne = document.getElementById("lightOne");
const lightTwo = document.getElementById("lightTwo");
const lightThree = document.getElementById("lightThree");

const status = document.getElementById("status");

const task1 = document.getElementById("task1");
const task2 = document.getElementById("task2");
const task3 = document.getElementById("task3");
const task4 = document.getElementById("task4");
const task5 = document.getElementById("task5");
const task6 = document.getElementById("task6");

let currentState = "red";

function task1Start() {
    lightOne.style.background = "red";

    setTimeout(() => {
        lightOne.style.background = "grey";
        lightTwo.style.background = "yellow";
        setTimeout(() => {
            lightTwo.style.background = "grey";
            lightThree.style.background = "green";
            setTimeout(() => {
                lightThree.style.background = "grey";
            }, 7000);
        }, 3000);
    }, 5000);
}

function task2Start() {
    task1Start();
    setTimeout(() => {
        lightTwo.style.background = "yellow";
        setTimeout(() => {
            lightTwo.style.background = "grey";
            lightOne.style.background = "red";
            setTimeout(() => {
                lightOne.style.background = "grey";
            }, 1000)
        }, 2000)
    }, 15000)
}

function task3Start() {
    task1Start();
    setTimeout(() => {
        lightTwo.style.background = "yellow";
        setTimeout(() => {
            lightTwo.style.background = "grey";
            setTimeout(() => {
                lightTwo.style.background = "yellow";
                setTimeout(() => {
                    lightTwo.style.background = "grey";
                    setTimeout(() => {
                        lightOne.style.background = "red";
                        setTimeout(() => {
                            lightOne.style.background = "grey";
                        }, 500)
                    }, 500)
                }, 500)
            }, 500)
        }, 500)

    }, 15000)
}

function task4Start() {
    const redLightDuration = prompt("введіть тривалість для червоного") * 1000
    const yellowLightDuration = prompt("введіть тривалість для жовтого") * 1000
    const greenLightDuration = prompt("введіть тривалість для зеленого") * 1000

    lightOne.style.background = "red";

    setTimeout(() => {
        lightOne.style.background = "grey";
        lightTwo.style.background = "yellow";
        setTimeout(() => {
            lightTwo.style.background = "grey";
            lightThree.style.background = "green";
            setTimeout(() => {
                lightThree.style.background = "grey";
            }, greenLightDuration);
        }, yellowLightDuration);
    }, redLightDuration);
}

function task5Start() {
    // Вимикаємо всі світла (встановлюємо сірий)
    lightOne.style.backgroundColor = "grey";
    lightTwo.style.backgroundColor = "grey";
    lightThree.style.backgroundColor = "grey";
    status.textContent = ""; // Очищаємо текстовий опис перед зміною

    // Змінюємо стан світлофора по черзі
    if (currentState === "red") {
        lightOne.style.backgroundColor = "red"; // Червоний
        status.textContent = "Червоний"; // Оновлюємо текстовий опис
        currentState = "yellow"; // Наступний стан
    } else if (currentState === "yellow") {
        lightTwo.style.backgroundColor = "yellow"; // Жовтий
        status.textContent = "Жовтий"; // Оновлюємо текстовий опис
        currentState = "green"; // Наступний стан
    } else if (currentState === "green") {
        lightThree.style.backgroundColor = "green"; // Зелений
        status.textContent = "Зелений"; // Оновлюємо текстовий опис
        currentState = "red"; // Повертаємося до червоного
    }
}

function task6Start() {
    lightOne.style.backgroundColor = "grey";
    lightTwo.style.backgroundColor = "grey";
    lightThree.style.backgroundColor = "grey";

    if (currentState === "red") {
        lightOne.style.backgroundColor = "red";
        currentState = "yellow";
    } else if (currentState === "yellow") {
        lightTwo.style.backgroundColor = "yellow";
        currentState = "green";
    } else if (currentState === "green") {
        lightThree.style.backgroundColor = "green";
        currentState = "red";
    }
}

task1.addEventListener('click', task1Start);
task2.addEventListener('click', task2Start);
task3.addEventListener('click', task3Start);
task4.addEventListener('click', task4Start);
task5.addEventListener('click', task5Start);
task6.addEventListener('click', task6Start);
