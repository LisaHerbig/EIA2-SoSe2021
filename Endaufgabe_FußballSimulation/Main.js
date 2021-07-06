"use strict";
//namespace Endaufgabe {
window.addEventListener("load", handleLoad);
let team1 = "";
let team2 = "";
let colorTeam1 = "";
let colorTeam2 = "";
let colorReferee = "";
let colorLineJudge = "";
let speedMin = Number("");
let speedMax = Number("");
let precisionMin = Number("");
let precisionMax = Number("");
//Sounds
//let applaus: HTMLAudioElement = <HTMLAudioElement> new Audio ("Sounds/Applaus.wav");
//let atmo: HTMLAudioElement = new Audio ("Sounds/67-Atmo.wav");
//let whistle: HTMLAudioElement = new Audio ("Sounds/Whistle.wav");
//let moveables: Moveable [] = [];
//let animation: boolean = true;
//let goalsT1: number [] = [];
//let goalsT2: number [] = [];
//let backNumbers: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//enum Task {
// STAND,
// MOVE,
// MOVEHOME
//}
function handleLoad() {
    let form = document.querySelector("form");
    form.addEventListener("change", handleChange);
    let btnStart = document.querySelector("#btn");
    btnStart.addEventListener("click", handleBtn);
}
function handleChange() {
    let formData = new FormData(document.forms[0]);
    for (let entry of formData) {
        switch (entry[0]) {
            case "Select1":
                team1 = String(entry[1]);
                console.log(entry[1]);
                break;
            case "Select2":
                team2 = String(entry[1]);
                console.log(entry[1]);
                break;
            case "Color1":
                colorTeam1 = String(entry[1]);
                console.log(entry[1]);
                break;
            case "Color2":
                colorTeam2 = String(entry[1]);
                console.log(entry[1]);
                break;
            case "Color3":
                colorReferee = String(entry[1]);
                console.log(entry[1]);
                break;
            case "Color4":
                colorLineJudge = String(entry[1]);
                console.log(entry[1]);
                break;
            case "Slider1":
                speedMin = Number(entry[1]);
                console.log(entry[1]);
                break;
            case "Slider2":
                speedMax = Number(entry[1]);
                console.log(entry[1]);
                break;
            case "Slider3":
                precisionMin = Number(entry[1]);
                console.log(entry[1]);
                break;
            case "Slider4":
                precisionMax = Number(entry[1]);
                console.log(entry[1]);
                break;
            default:
                console.log("Something is wrong");
        }
    }
}
function handleBtn() {
    console.log("StartMatch");
    let form = document.querySelector("form");
    form.setAttribute("class", "hide");
    let btnStart = document.querySelector("#btn");
    btnStart.setAttribute("class", "hide");
    let explain = document.querySelector("#explain");
    explain.setAttribute("class", "hide");
}
//}
//# sourceMappingURL=Main.js.map