"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    window.addEventListener("load", handleLoad);
    //let inPosession: HTMLDivElement = document.createElement ("div");
    //inPosession.setAttribute("id", "inPosession");
    //inPosession.innerHTML = "im Ballbesitz";
    let inPossession = document.querySelector("#inPossession");
    //let scoreBoard: HTMLDivElement = document.createElement ("div");
    //scoreBoard.setAttribute("id", "scoreBoard");
    //scoreBoard.innerHTML = "'Team1' + 'Team2'";
    let scoreBoard = document.querySelector("#scoreBoard");
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
        form.remove();
        btnStart.remove();
        explain.remove();
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
        let canvas = document.querySelector("canvas");
        canvas.removeAttribute("class");
        if (!canvas)
            return;
        Endaufgabe_FußballSiumulation.crc2 = canvas.getContext("2d");
        canvas.width = window.innerHeight * 1.3;
        canvas.height = canvas.width / 100 * 66;
        Endaufgabe_FußballSiumulation.crc2.fillStyle = "green";
        Endaufgabe_FußballSiumulation.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //drawField();
    }
    function handleNewGame() {
        location.reload();
    }
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Main.js.map