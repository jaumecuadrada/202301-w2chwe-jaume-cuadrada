import { fieldSize } from "../variables/variables.js";

const countNeighbors = (currentColumn, currentRow, cells) => {
  let livingNeighborCount = 0;
  for (let neighborRow = -1; neighborRow <= 1; neighborRow++) {
    for (let neighborColumn = -1; neighborColumn <= 1; neighborColumn++) {
      const columnCoordinate =
        (currentColumn + neighborColumn + fieldSize) % fieldSize;
      const rowCoordinate = (currentRow + neighborRow + fieldSize) % fieldSize;
      livingNeighborCount += cells[rowCoordinate][columnCoordinate];
    }
  }

  return livingNeighborCount - cells[currentRow][currentColumn];
};

export default countNeighbors;
