'use strict'

function showFruitsStrings(array) {
    console.log("-Початковий масив")
    console.log(array);

    console.log("-Видалення останнього елементу в масиві")
    array.pop();
    console.log(array);

    console.log("-Додавання ананасу на початок масиву")
    array.unshift("Ананас");
    console.log(array);

    console.log("-Відсортований масив")
    array.sort().reverse();
    console.log(array);

    console.log("-Індекс елементу Яблуко")
    console.log(array.indexOf('Яблуко'));

}

function showColorsStrings(array) {
    console.log("-Початковий масив")
    console.log(array)

    console.log("-Найдовше слово в масиві:");
    const longestWord = array.sort(function (a, b) {
        return b.length - a.length;
    })[0];
    console.log(longestWord);

    console.log("-Найкоротше слово в масиві:");
    const shortestWord = array.sort(function (a, b) {
        return a.length - b.length;
    })[0];
    console.log(shortestWord);

    console.log("-об'єднання елементів");
    console.log(array.join(", "))


    console.log("-Лишаємо тільки слово Синій")
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] !== "Синій") {
            array.splice(i, 1);
        }
    }
    console.log(array);


}

function showEmployees(array) {
    console.log("-Відсортований масив")
    console.log(array.sort((a,b) => a.name.localeCompare(b.name)))

    console.log("-Розробники")
    console.log(array.filter(el => el.position === 'Розробник'));

    console.log("-видалення даних за умовою")
    // console.log(array.filter(el => el.age >= 30))
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].age < 30 ) {
            array.splice(i, 1);
        }
    }
    console.log(array);

    console.log("-додавання працівника")
    const newEmployee = { name: "Арсеній", age: 19, position: "Алкоголік" };
    array.push(newEmployee);
    console.log(array);

}

function showStudents(array) {

    console.log(array)

    console.log("-Видалення Олексія")
    // console.log(array.filter(el => el.age >= 30))
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].name === "Олексій" ) {
            array.splice(i, 1);
        }
    }
    console.log(array);

    console.log("-додавання студента")
    const newStudent = { name: "Арсеній", age: 19, course: 2 };
    array.push(newStudent);
    console.log(array);

    console.log("-сортування студентів")
    console.log(array.sort((a, b) => b.age - a.age));

    console.log("- 3 курс")
    array.forEach(el => {
        if (el.course === 3) {
            console.log(el.name);
        }
    });

}


const task1Btn = document.getElementById('task1Btn');
let fruitsArray = ["Апельсин", "Банан", "Яблуко", "Груша", "Персик", "Ананас", "Виноград", "Ківі", "Манго", "Лимон"];

const task2Btn = document.getElementById('task2Btn');
let colorsArray = ["Червоний", "Синій", "Оранжевий", "Жовтий", "Зелений", "Фіолетоий", "Білий", "Сірий"];

const task3Btn = document.getElementById('task3Btn');
let employees = [
    { name: "Іван", age: 28, position: "Менеджер з продажу" },
    { name: "Марія", age: 34, position: "HR-менеджер" },
    { name: "Петро", age: 40, position: "Розробник" },
    { name: "Оксана", age: 25, position: "Дизайнер" },
    { name: "Андрій", age: 30, position: "Фінансовий аналітик" }
];

const task4Btn = document.getElementById('task4Btn');
let students = [
    { name: "Іван", age: 18, course: 2 },
    { name: "Марія", age: 19, course: 2 },
    { name: "Петро", age: 18, course: 1 },
    { name: "Олексій", age: 20, course: 3 },
    { name: "Андрій", age: 19, course: 1 }
];

const task5Btn = document.getElementById('task5Btn');


task1Btn.addEventListener('click', () => {
    showFruitsStrings(fruitsArray);
})
task2Btn.addEventListener('click', () => {
    showColorsStrings(colorsArray);
})

task3Btn.addEventListener('click', () => {
    showEmployees(employees);
})

task4Btn.addEventListener('click', () => {
    showStudents(students);
})
