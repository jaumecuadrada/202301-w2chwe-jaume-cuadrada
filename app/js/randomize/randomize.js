import { empty, alive, fieldSize } from "../variables/variables.js";

const randomize = (cells) => {
  let counter = 0;
  let continueLoop = true;
  while (continueLoop) {
    const xAxis = Math.floor(Math.random() * fieldSize);
    const yAxis = Math.floor(Math.random() * fieldSize);
    if (cells[yAxis][xAxis] === empty) {
      cells[yAxis][xAxis] = alive;
      counter++;
      if (counter >= Math.floor(fieldSize * fieldSize * 0.25)) {
        continueLoop = false;
      }
    }
  }
};

export default randomize;
