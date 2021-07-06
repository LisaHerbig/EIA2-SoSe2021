"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    window.addEventListener("load", handleLoad);
    let explain = document.querySelector("#explain");
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
    let form = document.querySelector("form");
    let btnStart = document.querySelector("#btn");
    function handleLoad() {
        //let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        form.addEventListener("change", handleChange);
        //let btnStart: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn");
        btnStart.addEventListener("click", handleBtn);
    }
    function handleChange() {
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            switch (entry[0]) {
                case "Select1":
                    team1 = String(entry[1]);
                    console.log(team1);
                    break;
                case "Select2":
                    team2 = String(entry[1]);
                    console.log(team2);
                    break;
                case "Color1":
                    colorTeam1 = String(entry[1]);
                    console.log(colorTeam1);
                    break;
                case "Color2":
                    colorTeam2 = String(entry[1]);
                    console.log(colorTeam2);
                    break;
                case "Color3":
                    colorReferee = String(entry[1]);
                    console.log(colorReferee);
                    break;
                case "Color4":
                    colorLineJudge = String(entry[1]);
                    console.log(colorLineJudge);
                    break;
                case "Slider1":
                    speedMin = Number(entry[1]);
                    console.log(speedMin);
                    break;
                case "Slider2":
                    speedMax = Number(entry[1]);
                    console.log(speedMax);
                    break;
                case "Slider3":
                    precisionMin = Number(entry[1]);
                    console.log(precisionMin);
                    break;
                case "Slider4":
                    precisionMax = Number(entry[1]);
                    console.log(precisionMax);
                    break;
                default:
                    console.log("Something is wrong");
            }
        }
    }
    function handleBtn() {
        console.log("StartMatch");
        form.setAttribute("class", "hide");
        btnStart.setAttribute("class", "hide");
        explain.setAttribute("class", "hide");
        prepareGame();
    }
    function prepareGame() {
        let canvas = document.querySelector("canvas");
        canvas.removeAttribute("class");
        if (!canvas)
            return;
        Endaufgabe_FußballSiumulation.crc2 = canvas.getContext("2d");
    }
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Main.js.map