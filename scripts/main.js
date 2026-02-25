const container = document.querySelector(".container");
const greetingsContainer = document.querySelector(".greetings-container");
const sendChoice = document.querySelector(".button-container button");

const choices = document.querySelectorAll(".choices-container button");
const answerOutput = document.querySelector(".show-answer span");

let answer = 0;

container.style.display = "block";
greetingsContainer.style.display = "none";

// Seleccionar la opción, agregando o quitando la clase active según corresponda
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        choices.forEach((btn) => btn.classList.remove("active"));
        choice.classList.add("active");
        answer = choice.textContent;
    });
});

// Guardar el dato para enseñarlo en el container greetings
sendChoice.addEventListener("click", () => {
    if (answer) {
        container.style.display = "none";
        greetingsContainer.style.display = "flex";
        answerOutput.textContent = answer;
    }
});
