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

