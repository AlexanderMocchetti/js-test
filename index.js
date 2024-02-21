const div = document.getElementById("div-id")
const plusButton = document.getElementById("plus-id")
const minusButton = document.getElementById("minus-id")

let counter = parseInt(div.textContent)

plusButton.addEventListener("click", () => {
    counter++;
    div.textContent = counter;
});

minusButton.addEventListener("click", () => {
    counter--;
    div.textContent = counter;
})


const timerStart = document.getElementById("timer-start")
const timerStop = document.getElementById("timer-stop")
const timerDiv = document.getElementById("timer-id")

let timer = 0;

timerStart.addEventListener("click", () => {
    if (timer != 0)
        return;

    let now = new Date();
    
})
