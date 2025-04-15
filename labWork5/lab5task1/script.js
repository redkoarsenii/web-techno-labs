const task1LampBtn = document.getElementById("task1LampBtn");
const task1Lamp = document.getElementById("task1Lamp");
const regularLamp = document.getElementById("regularLamp");
const efficientLamp = document.getElementById("efficientLamp");
const ledLamp = document.getElementById("ledLamp");
const chooseRegularLamp = document.getElementById("chooseRegularLamp");
const chooseEfficientLamp = document.getElementById("chooseEfficientLamp");
const chooseLedLamp = document.getElementById("chooseLedLamp");
const task2BtnsContainer = document.getElementById("task2BtnsContainer");

const lamp = document.getElementById("lamp");
const lampBrightness = document.getElementById("lampBrightness");
const changeLampBrightness = document.getElementById("changeLampBrightness");
const toggleLamp = document.getElementById("toggleLamp");

const task4Lamp = document.getElementById("task4Lamp");
const time = 2000;
let timer;


task1LampBtn.addEventListener("click", () => {
    task1Lamp.classList.toggle("task1__light-on");
    task1Lamp.classList.toggle("light-off");
})

task2BtnsContainer.addEventListener("change", () => {
    if (chooseRegularLamp.checked) {
        regularLamp.classList.replace("light-off", "task2__regular-lamp-on");
        efficientLamp.classList.replace("task2__efficient-lamp-on", "light-off");
        ledLamp.classList.replace("task2__led-lamp-on", "light-off");
    } else if (chooseEfficientLamp.checked) {
        regularLamp.classList.replace("task2__regular-lamp-on", "light-off");
        efficientLamp.classList.replace("light-off", "task2__efficient-lamp-on");
        ledLamp.classList.replace("task2__led-lamp-on", "light-off");
    } else if (chooseLedLamp.checked) {
        regularLamp.classList.replace("task2__regular-lamp-on", "light-off");
        efficientLamp.classList.replace("task2__efficient-lamp-on", "light-off");
        ledLamp.classList.replace("light-off", "task2__led-lamp-on");
    }
})

changeLampBrightness.addEventListener("click", () => {
    const brightnessValue = parseInt(lampBrightness.value);

    if (lamp.classList.contains("light-off")) {
        alert("Спочатку увімкніть лампу!");
        return;
    }

    lamp.classList.remove("task3__lamp1", "task3__lamp2", "task3__lamp3");

    switch (brightnessValue) {
        case 1:
            lamp.classList.add("task3__lamp1");
            break;
        case 2:
            lamp.classList.add("task3__lamp2");
            break;
        case 3:
            lamp.classList.add("task3__lamp3");
            break;
        default:
            alert("Введіть число від 1 до 3");
    }
});

toggleLamp.addEventListener("click", () => {
    lamp.classList.toggle("light-off");
});

function turnOffLight(){
    task4Lamp.style.backgroundColor = "grey";
}

function countDown(){
    clearTimeout(timer);  // Очищаємо попередній таймер
    timer = setTimeout(turnOffLight, time);
}

document.addEventListener("mousemove", countDown)
