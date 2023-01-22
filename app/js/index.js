import createField from "./createField/createField.js";
import randomize from "./randomize/randomize.js";
import draw from "./draw/draw.js";
import nextField from "./nextField/nextField.js";

const cells = [];
const html = [];

const startGame = () => {
  createField(cells, html);
  randomize(cells);
  draw(cells, html);
  setInterval(nextField, 100, cells, html);
};

startGame();
