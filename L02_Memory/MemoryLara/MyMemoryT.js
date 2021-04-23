"use strict";
window.addEventListener("load", handleload);
let menu = document.getElementById("menu");
//let levelArray: 
function handleload() {
    let level = document.getElementById("level");
    level.addEventListener("click", createLevel);
    let newGame = document.getElementById("new");
    newGame.addEventListener("click", startnewGame);
}
function createLevel() {
    menu.setAttribute("class", "hidden");
}
function startnewGame() { }
function backSide(id) { }
function remove(id) { }
function turnCard() { }
function compare() { }
//# sourceMappingURL=MyMemoryT.js.map