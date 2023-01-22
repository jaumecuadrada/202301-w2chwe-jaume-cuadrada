import createField from "./createField/createField.js";
import randomize from "./randomize/randomize.js";
import draw from "./draw/draw.js";
import nextField from "./nextField/nextField.js";

const cells = [];
const html = [];
const startGameButton = document.querySelector(".start");
const stopGameButton = document.querySelector(".stop");
const resumeGameButton = document.querySelector(".resume");
const randomizeButton = document.querySelector(".randomize");
let interval;

const initializeGame = () => {
  randomize(cells);
  draw(cells, html);
};

const startGame = () => {
  interval = setInterval(nextField, 100, cells, html);
};

const stopGame = () => {
  clearInterval(interval);
};

createField(cells, html);
initializeGame();

startGameButton.addEventListener("click", startGame);
stopGameButton.addEventListener("click", stopGame);
resumeGameButton.addEventListener("click", startGame);
randomizeButton.addEventListener("click", () => {
  location.reload();
});
