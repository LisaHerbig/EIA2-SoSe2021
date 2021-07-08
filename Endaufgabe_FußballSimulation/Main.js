"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    window.addEventListener("load", handleLoad);
    Endaufgabe_FußballSiumulation.canvas = document.querySelector("canvas");
    Endaufgabe_FußballSiumulation.canvas.width = window.innerHeight * 1.25;
    Endaufgabe_FußballSiumulation.canvas.height = Endaufgabe_FußballSiumulation.canvas.width / 110 * 75;
    Endaufgabe_FußballSiumulation.width = Number(Endaufgabe_FußballSiumulation.canvas.width);
    Endaufgabe_FußballSiumulation.height = Number(Endaufgabe_FußballSiumulation.canvas.height);
    let imgData;
    //Div  score and ball possesstion
    let inPossession = document.querySelector("#inPossession");
    let scoreBoard = document.querySelector("#scoreBoard");
    //Variables for Formular
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
    let atmo = new Audio("Sounds/Atmo.wav");
    //let whistle: HTMLAudioElement = new Audio ("Sounds/Whistle.wav");
    let positionsT1 = [new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 10, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 15, Endaufgabe_FußballSiumulation.height / 75 * 17), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 15, Endaufgabe_FußballSiumulation.height / 75 * 65), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 32, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 43, Endaufgabe_FußballSiumulation.height / 2 - 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 43, Endaufgabe_FußballSiumulation.height / 2 + 180), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 57, Endaufgabe_FußballSiumulation.height / 2 + 125), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 75, Endaufgabe_FußballSiumulation.height / 75 * 15), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 75, Endaufgabe_FußballSiumulation.height / 75 * 68), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 88.5, Endaufgabe_FußballSiumulation.height / 2 - 50), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 88.5, Endaufgabe_FußballSiumulation.height / 2 + 110)];
    let positionsT2 = [new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 100, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 78, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 67, Endaufgabe_FußballSiumulation.height / 2 - 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 67, Endaufgabe_FußballSiumulation.height / 2 + 180), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 54, Endaufgabe_FußballSiumulation.height / 2 - 60), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 35, Endaufgabe_FußballSiumulation.height / 75 * 68), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 21.5, Endaufgabe_FußballSiumulation.height / 2 + 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 21.5, Endaufgabe_FußballSiumulation.height / 2 - 50), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 35, Endaufgabe_FußballSiumulation.height / 75 * 15), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 95, Endaufgabe_FußballSiumulation.height / 75 * 65), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 95, Endaufgabe_FußballSiumulation.height / 75 * 17)];
    let moveables = [];
    //let animation: boolean = true;
    //let goalsT1: number [] = [];
    //let goalsT2: number [] = [];
    let backNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let TASK;
    (function (TASK) {
        TASK[TASK["STAND"] = 0] = "STAND";
        TASK[TASK["MOVE"] = 1] = "MOVE";
        TASK[TASK["MOVEHOME"] = 2] = "MOVEHOME";
    })(TASK = Endaufgabe_FußballSiumulation.TASK || (Endaufgabe_FußballSiumulation.TASK = {}));
    //HTML Elements startpage
    let form = document.querySelector("form");
    let btnStart = document.getElementById("btn");
    let explain = document.getElementById("explain");
    /*
    *Function to create a random number betwenn a min and a max
    */
    function createRandomNum(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    Endaufgabe_FußballSiumulation.createRandomNum = createRandomNum;
    function handleLoad() {
        form.addEventListener("change", handleChange);
        btnStart.addEventListener("click", handleBtn);
    }
    /*
    *Function to get Data from Form Element
    */
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
    /*
    *Function to hide form and button
    */
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
    /*
    *Function to prepare Game
    */
    function prepareGame() {
        inPossession.removeAttribute("class");
        inPossession.setAttribute("id", "inPossession");
        scoreBoard.removeAttribute("class");
        scoreBoard.setAttribute("id", "scoreBoard");
        let newGame = document.createElement("button");
        newGame.innerHTML = "start a new game";
        newGame.setAttribute("id", "newGame");
        newGame.addEventListener("click", handleNewGame);
        document.body.appendChild(newGame);
        Endaufgabe_FußballSiumulation.canvas.removeAttribute("class");
        if (!Endaufgabe_FußballSiumulation.canvas)
            return;
        Endaufgabe_FußballSiumulation.crc2 = Endaufgabe_FußballSiumulation.canvas.getContext("2d");
        Endaufgabe_FußballSiumulation.drawField();
        imgData = Endaufgabe_FußballSiumulation.crc2.getImageData(0, 0, Endaufgabe_FußballSiumulation.crc2.canvas.width, Endaufgabe_FußballSiumulation.crc2.canvas.height);
        setUpTeam1();
        setUpTeam2();
        setUpReferee();
        setUpLineJudge();
        let ball = new Endaufgabe_FußballSiumulation.Ball(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 2, Endaufgabe_FußballSiumulation.height / 2));
        ball.draw();
        moveables.push(ball);
        playSound(atmo);
        window.setInterval(update, 20);
    }
    function setUpTeam1() {
        for (let i = 0; i < 11; i++) {
            let playerT1 = new Endaufgabe_FußballSiumulation.Player(positionsT1[i], team1, colorTeam1, backNumbers[i], "team1", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax));
            playerT1.draw();
            moveables.push(playerT1);
        }
    }
    function setUpTeam2() {
        for (let i = 0; i < 11; i++) {
            let playerT2 = new Endaufgabe_FußballSiumulation.Player(positionsT2[i], team2, colorTeam2, backNumbers[i], "team2", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax));
            playerT2.draw();
            moveables.push(playerT2);
        }
    }
    function setUpReferee() {
        let referee = new Endaufgabe_FußballSiumulation.Referee(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 60, Endaufgabe_FußballSiumulation.height / 2 + 30), colorReferee);
        referee.draw();
        referee.playWhistle();
        moveables.push(referee);
    }
    function setUpLineJudge() {
        for (let i = 0; i < 2; i++) {
            if (i == 0) {
                let lineJudge = new Endaufgabe_FußballSiumulation.LineJudge(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 2, Endaufgabe_FußballSiumulation.height / 75 * 76.5), colorLineJudge);
                lineJudge.draw();
                moveables.push(lineJudge);
            }
            else {
                let lineJudge = new Endaufgabe_FußballSiumulation.LineJudge(new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 2, Endaufgabe_FußballSiumulation.height / 75 * 6.5), colorLineJudge);
                lineJudge.draw();
                moveables.push(lineJudge);
            }
        }
    }
    /*
    *Function to start a new Game
    */
    function handleNewGame() {
        location.reload();
    }
    /*
    *Function to play Sounds
    */
    function playSound(_soundname) {
        _soundname.play();
    }
    /*
    *Function for Animation
    */
    function update() {
        Endaufgabe_FußballSiumulation.crc2.clearRect(0, 0, Endaufgabe_FußballSiumulation.canvas.width, Endaufgabe_FußballSiumulation.canvas.height);
        Endaufgabe_FußballSiumulation.crc2.putImageData(imgData, 0, 0);
        checkIfClose();
        for (let moveable of moveables) {
            //moveable.move(1 / 50); 
            moveable.draw();
        }
    }
    /*
    *Function to see if player is close to ball
    */
    function checkIfClose() {
        let ball = [];
        let player = [];
        //console.log(ball);
        for (let moveable of moveables) {
            if (moveable instanceof Endaufgabe_FußballSiumulation.Player) {
                player.push(moveable);
            }
            if (moveable instanceof Endaufgabe_FußballSiumulation.Ball) {
                ball.push(moveable);
            }
        }
        for (let j = 0; j < player.length; j++) {
            let v1 = new Endaufgabe_FußballSiumulation.Vector(player[j].position.x, player[j].position.y);
            let v2 = new Endaufgabe_FußballSiumulation.Vector(ball[0].position.x, ball[0].position.y);
            let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(v1, v2);
            let length = difference.length;
            console.log(length / 110, difference, Endaufgabe_FußballSiumulation.width / 110 * length);
            if (length <= Endaufgabe_FußballSiumulation.canvas.width / 110 * 30) {
                player[j].changeTask(TASK.MOVE, ball[0].position);
                console.log("Yes!");
            }
        }
    }
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Main.js.map