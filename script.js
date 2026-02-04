let velicina = 16;

const controls = document.querySelector("#controls"); 
controls.style.marginTop="10vh";
controls.style.marginBottom="20px";
controls.style.display="flex";
controls.style.justifyContent="center";
controls.style.gap="15px";


const infoInput = document.createElement("p");  /* TEKST ZA VELICINU */
infoInput.textContent="Unesi SIZE";
controls.appendChild(infoInput);


const sizeInput = document.createElement("input"); /* INPUT ZA VELICINU */
sizeInput.type = "range";
sizeInput.value = "16";
sizeInput.id = "tentacles";
sizeInput.min = "16";
sizeInput.max = "64";
sizeInput.style.width="170px";
sizeInput.style.alignSelf="center";
controls.appendChild(sizeInput);


const adjustBtn = document.createElement("button");  /* BTN ZA VELICINU */
controls.appendChild(adjustBtn);
adjustBtn.textContent="SEND IT";
adjustBtn.style.textAlign = "center";
adjustBtn.style.marginBottom = "5px";
adjustBtn.style.width = "auto";
adjustBtn.style.alignSelf = "center";



adjustBtn.addEventListener("click", () => {                   /* EVENT ZA PROMJENU VELICINE */
velicina = Number(document.getElementById("tentacles").value);
createGrid(velicina);
hovering();
});









const container = document.querySelector("#container");

function createGrid(velicina){
   container.innerHTML = ""; 
for (let index = 0; index < velicina; index++) {
  const columns = document.createElement("div");
  for (let index2 = 0; index2 < velicina; index2++) {
    const rows = document.createElement("div");
    rows.classList.add("grid");
    rows.style.border = "1px solid pink";
    const cellSize = 960 / velicina;
    rows.style.width=`${cellSize}px`;
    rows.style.height=`${cellSize}px`;
    rows.style.display="inline-block";
    rows.style.verticalAlign = "top";
    columns.appendChild(rows);
    columns.style.lineHeight = "0";
  }
  container.appendChild(columns);
}
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
 
      document.onmouseup = () => { isDrawing = false; };
}



createGrid(velicina);
hovering();
