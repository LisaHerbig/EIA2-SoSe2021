"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    window.addEventListener("load", handleLoad);
    Endaufgabe_FußballSiumulation.canvas = document.querySelector("canvas");
    //Div  Spielstand und Ballbesitz
    let inPossession = document.querySelector("#inPossession");
    let scoreBoard = document.querySelector("#scoreBoard");
    //Variablen für Formular
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
    let TASK;
    (function (TASK) {
        TASK[TASK["STAND"] = 0] = "STAND";
        TASK[TASK["MOVE"] = 1] = "MOVE";
        TASK[TASK["MOVEHOME"] = 2] = "MOVEHOME";
    })(TASK = Endaufgabe_FußballSiumulation.TASK || (Endaufgabe_FußballSiumulation.TASK = {}));
    //HTML Elemente Startseite
    let form = document.querySelector("form");
    let btnStart = document.getElementById("btn");
    let explain = document.getElementById("explain");
    function handleLoad() {
        form.addEventListener("change", handleChange);
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
        //form.remove();
        form.setAttribute("class", "hide");
        //btnStart.remove();
        btnStart.setAttribute("class", "hide");
        //explain.remove();
        explain.setAttribute("class", "hide");
        prepareGame();
    }
    function prepareGame() {
        //document.body.appendChild(inPosession);
        //document.body.appendChild(scoreBoard);
        inPossession.removeAttribute("class");
        inPossession.setAttribute("id", "inPossession");
        scoreBoard.removeAttribute("class");
        scoreBoard.setAttribute("id", "scoreBoard");
        let newGame = document.createElement("button");
        newGame.innerHTML = "start a new game";
        newGame.setAttribute("id", "newGame");
        newGame.addEventListener("click", handleNewGame);
        document.body.appendChild(newGame);
        //let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
        Endaufgabe_FußballSiumulation.canvas.removeAttribute("class");
        if (!Endaufgabe_FußballSiumulation.canvas)
            return;
        Endaufgabe_FußballSiumulation.crc2 = Endaufgabe_FußballSiumulation.canvas.getContext("2d");
        Endaufgabe_FußballSiumulation.canvas.width = window.innerHeight * 1.25;
        Endaufgabe_FußballSiumulation.canvas.height = Endaufgabe_FußballSiumulation.canvas.width / 110 * 75;
        //crc2.fillStyle = "green";
        //crc2.fillRect(0, 0, canvas.width, canvas.height);
        Endaufgabe_FußballSiumulation.drawField();
        //TWT1
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 10, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 30), "red", "player", "team1");
        //AWT1
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 15, Endaufgabe_FußballSiumulation.canvas.height / 75 * 17), "red", "player", "team1");
        //AW2T2
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 15, (Endaufgabe_FußballSiumulation.canvas.height / 75 * 65)), "red", "player", "team1");
        //S3T2
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 21.5, (Endaufgabe_FußballSiumulation.canvas.height / 2 + 110)), "yellow", "player", "team2");
        //S2T2
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 21.5, (Endaufgabe_FußballSiumulation.canvas.height / 2 - 50)), "yellow", "player", "team2");
        //S1T2
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 35, (Endaufgabe_FußballSiumulation.canvas.height / 75 * 15)), "yellow", "player", "team2");
        //S4T2
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 35, (Endaufgabe_FußballSiumulation.canvas.height / 75 * 68)), "yellow", "player", "team2");
        //M1T1
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 32, (Endaufgabe_FußballSiumulation.canvas.height / 2 + 30)), "red", "player", "team1");
        //M3T1
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 43, (Endaufgabe_FußballSiumulation.canvas.height / 2 + 180)), "red", "player", "team1");
        //M2T1
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 43, (Endaufgabe_FußballSiumulation.canvas.height / 2 - 110)), "red", "player", "team1");
        //M1T2
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 54, (Endaufgabe_FußballSiumulation.canvas.height / 2 - 60)), "yellow", "player", "team2");
        //M2T2
        //drawShirt(new Vector(canvas.width / 110 * 55, (canvas.height / 2 + 230 )), "yellow", "player", "team2");
        //M4T1
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 57, (Endaufgabe_FußballSiumulation.canvas.height / 2 + 125)), "red", "player", "team1");
        //M5T1
        //drawShirt(new Vector(canvas.width / 110 * 56, (canvas.height / 2 - 160 )), "red", "player", "team1");
        //TWT1
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 100, (Endaufgabe_FußballSiumulation.canvas.height / 2 + 30)), "yellow", "player", "team2");
        //AW1T2
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 95, (Endaufgabe_FußballSiumulation.canvas.height / 75 * 17)), "yellow", "player", "team2");
        //AW2T2
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 95, (Endaufgabe_FußballSiumulation.canvas.height / 75 * 65)), "yellow", "player", "team2");
        //s2T1
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 88.5, (Endaufgabe_FußballSiumulation.canvas.height / 2 - 50)), "red", "player", "team1");
        //S3T1
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 88.5, (Endaufgabe_FußballSiumulation.canvas.height / 2 + 110)), "red", "player", "team1");
        //M5T2
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 78, (Endaufgabe_FußballSiumulation.canvas.height / 2 + 30)), "yellow", "player", "team2");
        //M3T2
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 67, (Endaufgabe_FußballSiumulation.canvas.height / 2 + 180)), "yellow", "player", "team2");
        //M4T2
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 67, (Endaufgabe_FußballSiumulation.canvas.height / 2 - 110)), "yellow", "player", "team2");
        //S1T1
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 75, (Endaufgabe_FußballSiumulation.canvas.height / 75 * 15)), "red", "player", "team1");
        //S4T1
        Endaufgabe_FußballSiumulation.drawShirt(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.canvas.width / 110 * 75, (Endaufgabe_FußballSiumulation.canvas.height / 75 * 68)), "red", "player", "team1");
        console.log(Endaufgabe_FußballSiumulation.canvas.height, Endaufgabe_FußballSiumulation.canvas.width, Endaufgabe_FußballSiumulation.canvas.height / 75);
    }
    function handleNewGame() {
        location.reload();
    }
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Main.js.map