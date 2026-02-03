const container = document.querySelector("#container");



function createGrid(velicina){
for (let index = 0; index < velicina; index++) {
  
  const columns = document.createElement("div");
  for (let index2 = 0; index2 < velicina; index2++) {
    const rows = document.createElement("div");
    rows.classList.add("grid");
    rows.style.border = "1px solid pink";
    rows.style.width=`${480/velicina}px`;
    rows.style.height=`${480/velicina}px`;
    rows.style.display="inline-block";

    columns.appendChild(rows);
  }
  container.appendChild(columns);
}
};

createGrid(8);
