let input1 = document.querySelector(".input-1");
input1.placeholder = "Timer";
input1.style.backgroundColor = "Azure";
input1.style.color = "green";
input1.style.width = "200px";
input1.style.height = "100px";
input1.style.fontSize = "50px";
input1.style.paddingLeft = "50px"

let inputBox = document.querySelector(".input-box");
inputBox.style.display = "flex";
inputBox.style.justifyContent = "center";

let Timer = document.querySelector(".Timer");
Timer.style.display = "flex";
Timer.style.justifyContent = "center";
Timer.style.paddingTop = "50px"
Timer.style.fontSize = "200px";
Timer.style.color = "red";
Timer.style.fontFamily = "sans-serif";

let Button = document.querySelector(".Buttons");
Button.style.display = "flex";
Button.style.justifyContent = "space-around";
Button.style.margin = "auto";
Button.style.width = "60vw";
Button.style.paddingTop = "100px";

let firstButton = document.querySelector(".btn-first");

let secondButton = document.querySelector(".btn-second");

let thirdButton = document.querySelector(".btn-third");

let fourthButton = document.querySelector(".btn-fourth");
let counter;
let interval;

function startTimer() {
    counter = input1.value;
    interval = setInterval(() => {
        counter--;
        console.log("Count:", counter);
        Timer.innerText = counter;
        if (counter === 0) {
            clearInterval(interval);
            console.log("Stopped!");
            alert("Time up");
        }

    }, 1000)
};

firstButton.addEventListener('click', () => {
    startTimer();
});

secondButton.addEventListener("click", () => {
    clearInterval(interval);
})

thirdButton.addEventListener("click", () => {
    Timer.innerText = 0;
    clearInterval(interval);
    counter = 0;
})

fourthButton.addEventListener("click", () => {
    counter = Timer.innerText;
        interval = setInterval(() => {
        counter--;
        console.log("Count:", counter);
        Timer.innerText = counter;
        if (counter === 0) {
            clearInterval(interval);
            console.log("Stopped!");
            alert("Time up");
        }

    }, 1000)
})
