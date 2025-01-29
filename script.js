const undobtn = document.getElementById("Undo");
const redobtn = document.getElementById("Redo");
const reset = document.getElementById("Reset");
const showResult = document.getElementById("result")

const undoCircles = [];
const redoCircles = [];

const colours = [
    "#fff", "#FFBF00", "#FF7F50", "#DE3163", "#40E0D0","purple","grey","cyan",
    "#6495ED", "#FF00FF", "#800080", "#008000", "#000","red","green","orangered"
];

function RandomColor() {
    return colours[Math.floor(Math.random() * colours.length)];
}

function updateButton() {
    undobtn.disabled = undoCircles.length === 0;
    redobtn.disabled = redoCircles.length === 0;
    reset.disabled = undoCircles.length === 0 && redoCircles.length === 0;
}

showResult.addEventListener("click", (e) => {
    if (e.target !== showResult) return;
    const x = e.pageX;
    const y = e.pageY;

    const circle = document.createElement("div");
    circle.classList.add("circle");

    circle.style.width = "20px";
    circle.style.height = "20px";

    circle.style.left = `${x - 10}px`;
    circle.style.top = `${y - 10}px`;

    const color =RandomColor();
    circle.style.backgroundColor = color;

    showResult.appendChild(circle);
    undoCircles.push(circle);
    redoCircles.length = 0;

    updateButton();
});