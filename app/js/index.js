const rows = 40;
const columns = 40;

const generateTable = () => {
  let html = "<table>";
  for (let counter = 0; counter < rows; counter++) {
    html += "<tr>";
    for (let seccondcounter = 0; seccondcounter < columns; seccondcounter++) {
      html += "<td>";
      html += "</td>";
    }

    html += "</tr>";
  }

  html += "</table>";
  console.log(html);
  const mainTable = document.getElementsByClassName("main-table")[0];
  mainTable.innerHTML = html;
};

generateTable();
console.log("hola gola");
