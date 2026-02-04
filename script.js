const container = document.querySelector("#container");
const sizeBtn = document.createElement("button");
sizeBtn.textContent="Veličina";


function createGrid(velicina){
  const adjust = document.createElement("div");
for (let index = 0; index < velicina; index++) {
  const columns = document.createElement("div");
  for (let index2 = 0; index2 < velicina; index2++) {
    const rows = document.createElement("div");
    rows.classList.add("grid");
    rows.style.border = "1px solid pink";
    rows.style.width=`${480/velicina}px`;
    rows.style.height=`${480/velicina}px`;
    rows.style.display="inline-block";
    rows.style.verticalAlign = "top";
    columns.appendChild(rows);

  }
  container.appendChild(columns);
}

container.appendChild(adjust);
container.style.display="flex";
adjust.textContent="Hello";

};


function hovering(){

  const cells = document.querySelectorAll(".grid");
  let isDrawing = false;

  function paint (cell){
    if (!isDrawing) return;
    
    const x = Math.floor(Math.random()*256);
    const y = Math.floor(Math.random()*256);
    const z = Math.floor(Math.random()*256);
    cell.style.backgroundColor = `rgb(${x},${y},${z})`;
  }

    cells.forEach(cell => { 
      cell.addEventListener("mousedown", (e)=> {
        e.preventDefault();
        isDrawing=true;
        paint(cell);
      })
    
      cell.addEventListener("mouseover", () => {
        if(!isDrawing) return;
        paint(cell);
      });
    
    });
 

    document.addEventListener("mouseup", () => {
      isDrawing=false;
    });

}


createGrid(16);
hovering();
