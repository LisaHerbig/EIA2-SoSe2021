window.addEventListener("load", handleload);
let menu: HTMLElement = <HTMLElement> document.getElementById("menu");
//let levelArray: 

function handleload(): void {
let level: HTMLElement = <HTMLElement> document.getElementById("level");
level.addEventListener("click", createLevel);
let newGame: HTMLElement = <HTMLElement> document.getElementById("new");
newGame.addEventListener("click", startnewGame);
}

function createLevel (): void {
menu.setAttribute("class", "hidden");

}

function startnewGame (): void {}
 
function backSide(id): void {}

function remove (id): void {}

function turnCard (): void {}

function compare (): void {}



