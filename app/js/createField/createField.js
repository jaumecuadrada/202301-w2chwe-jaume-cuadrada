import { empty, fieldSize } from "../variables/variables.js";

const createField = (cells, html) => {
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

export default createField;
