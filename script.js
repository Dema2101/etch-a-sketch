const container = document.querySelector("#container");



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
  const cells=document.querySelectorAll(".grid");
  cells.forEach(cell => {

  cell.addEventListener("mouseover", () => {


let x = Math. floor(Math. random() * 256);
let y = Math. floor(Math. random() * 256);
let z = Math. floor(Math. random() * 256);
    
    cell.style.backgroundColor = `rgb(${x},${y},${z})`;
    
});

});

}



createGrid(8);
hovering();
