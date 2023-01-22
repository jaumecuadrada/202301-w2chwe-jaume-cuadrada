import { empty, fieldSize, alive } from "../variables/variables.js";
import countNeighbors from "../countNeighbors/countNeighbors.js";
import draw from "../draw/draw.js";

const nextField = (cells, html) => {
  const newCells = [];
  for (let counter = 0; counter < fieldSize; counter++) {
    newCells.push(new Array(fieldSize).fill(empty));
  }

  for (let yAxis = 0; yAxis < fieldSize; yAxis++) {
    for (let xAxis = 0; xAxis < fieldSize; xAxis++) {
      const neighbors = countNeighbors(xAxis, yAxis, cells);
      if (cells[yAxis][xAxis] === empty && neighbors === 3) {
        newCells[yAxis][xAxis] = alive;
      }

      if (
        cells[yAxis][xAxis] === alive &&
        (neighbors === 2 || neighbors === 3)
      ) {
        newCells[yAxis][xAxis] = alive;
      }
    }
  }

  cells.splice(0, cells.length, ...newCells);
  draw(cells, html);
};

export default nextField;
