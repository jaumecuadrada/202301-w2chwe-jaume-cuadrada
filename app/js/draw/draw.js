import { fieldSize } from "../variables/variables.js";
const draw = (cells, html) => {
  for (let yAxis = 0; yAxis < fieldSize; yAxis++) {
    for (let xAxis = 0; xAxis < fieldSize; xAxis++) {
      html[yAxis][xAxis].setAttribute(
        "class",
        "cell " + (cells[yAxis][xAxis] === 1 ? "filled" : "empty")
      );
    }
  }
};

export default draw;
