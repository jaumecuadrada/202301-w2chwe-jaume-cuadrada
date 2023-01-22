const fieldSize = 50;
let html;
let cells;
const empty = 0;
const alive = 1;

const createField = () => {
  html = [];
  cells = [];
  const table = document.getElementsByClassName("main-table")[0];
  for (let yAxis = 0; yAxis < fieldSize; yAxis++) {
    const tr = document.createElement("tr");
    const tdElements = [];
    cells.push(new Array(fieldSize).fill(empty));
    html.push(tdElements);
    table.appendChild(tr);
    for (let xAxis = 0; xAxis < fieldSize; xAxis++) {
      const td = document.createElement("td");
      tdElements.push(td);
      tr.appendChild(td);
    }
  }
};

const randomize = () => {
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

const draw = () => {
  for (let yAxis = 0; yAxis < fieldSize; yAxis++) {
    for (let xAxis = 0; xAxis < fieldSize; xAxis++) {
      html[yAxis][xAxis].setAttribute(
        "class",
        "cell " + (cells[yAxis][xAxis] === 1 ? "filled" : "empty")
      );
    }
  }
};

const countNeighbors = (currentColumn, currentRow) => {
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

const nextField = () => {
  const newCells = [];
  for (let counter = 0; counter < fieldSize; counter++) {
    newCells.push(new Array(fieldSize).fill(empty));
  }

  for (let yAxis = 0; yAxis < fieldSize; yAxis++) {
    for (let xAxis = 0; xAxis < fieldSize; xAxis++) {
      const neighbors = countNeighbors(xAxis, yAxis);
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

  cells = newCells;
  draw();
};

const startGame = () => {
  createField();
  randomize();
  draw();
  setInterval(nextField, 100);
};

startGame();
