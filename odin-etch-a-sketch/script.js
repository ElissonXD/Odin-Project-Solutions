const grid = document.querySelector(".grid");
const input = document.querySelector("#size");
let value = 64;

function getValue(){
    value = parseInt(input.value, 10);
    clearGrid();
    createGrid(value);
    HoverEffect();
}

function createStyle(){
    const style = document.createElement("style");
    style.style.cssText = `
        background-color: white;
        border: 1px solid black;
        width: ${400 / value}px;
        height: ${400 / value}px;
    `

    return style.style.cssText;
}

function chooseRandomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

function HoverEffect(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", (e) => {
            e.target.classList.remove("unhovered");
        })

        cell.addEventListener("mouseleave", (e) => {
            if (e.target.classList.contains("changed")) return;
            e.target.classList.add("changed");
            e.target.style.backgroundColor = chooseRandomColor();})
    }

)

}

function createGrid(size){
    for (let i = 0; i < size; i++){
        const row = document.createElement("div");
        grid.appendChild(row)
        for (let j = 0; j < size; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.classList.add("unhovered");
            row.appendChild(cell);
            cell.style.cssText = createStyle();
        }
    }
}

function clearGrid(){
    grid.replaceChildren();
}

function erase(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.classList.remove("changed");
        cell.classList.add("cell");
        cell.classList.add("unhovered");
        cell.style.backgroundColor = "white";
    })
}

createGrid(value);
HoverEffect();
