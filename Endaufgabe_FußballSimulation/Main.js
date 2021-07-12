"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    window.addEventListener("load", handleLoad);
    Endaufgabe_FußballSiumulation.canvas = document.querySelector("canvas");
    Endaufgabe_FußballSiumulation.canvas.width = window.innerHeight;
    Endaufgabe_FußballSiumulation.canvas.height = Endaufgabe_FußballSiumulation.canvas.width / 110 * 75;
    Endaufgabe_FußballSiumulation.width = Number(Endaufgabe_FußballSiumulation.canvas.width);
    Endaufgabe_FußballSiumulation.height = Number(Endaufgabe_FußballSiumulation.canvas.height);
    //canvas.addEventListener("first_player", handleReach);
    let imgData;
    //Div  score and ball possesstion
    Endaufgabe_FußballSiumulation.inPossession = document.querySelector("#inPossession");
    Endaufgabe_FußballSiumulation.scoreBoard = document.querySelector("#scoreBoard");
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
    let addT1 = document.querySelector("#AddPlayerT1");
    let addT2 = document.querySelector("#AddPlayerT2");
    Endaufgabe_FußballSiumulation.stopDifference = false;
    let event;
    let positionsT1 = [new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 10, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 15, Endaufgabe_FußballSiumulation.height / 75 * 17), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 15, Endaufgabe_FußballSiumulation.height / 75 * 65), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 32, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 43, Endaufgabe_FußballSiumulation.height / 2 - 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 43, Endaufgabe_FußballSiumulation.height / 2 + 180), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 57, Endaufgabe_FußballSiumulation.height / 2 + 125), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 75, Endaufgabe_FußballSiumulation.height / 75 * 15), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 75, Endaufgabe_FußballSiumulation.height / 75 * 68), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 88.5, Endaufgabe_FußballSiumulation.height / 2 - 50), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 88.5, Endaufgabe_FußballSiumulation.height / 2 + 110)];
    let positionsT2 = [new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 100, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 78, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 67, Endaufgabe_FußballSiumulation.height / 2 - 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 67, Endaufgabe_FußballSiumulation.height / 2 + 180), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 54, Endaufgabe_FußballSiumulation.height / 2 - 60), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 35, Endaufgabe_FußballSiumulation.height / 75 * 68), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 21.5, Endaufgabe_FußballSiumulation.height / 2 + 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 21.5, Endaufgabe_FußballSiumulation.height / 2 - 50), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 35, Endaufgabe_FußballSiumulation.height / 75 * 15), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 95, Endaufgabe_FußballSiumulation.height / 75 * 65), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 95, Endaufgabe_FußballSiumulation.height / 75 * 17)];
    let homeT1 = [new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 10, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 15, Endaufgabe_FußballSiumulation.height / 75 * 17), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 15, Endaufgabe_FußballSiumulation.height / 75 * 65), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 32, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 43, Endaufgabe_FußballSiumulation.height / 2 - 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 43, Endaufgabe_FußballSiumulation.height / 2 + 180), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 57, Endaufgabe_FußballSiumulation.height / 2 + 125), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 75, Endaufgabe_FußballSiumulation.height / 75 * 15), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 75, Endaufgabe_FußballSiumulation.height / 75 * 68), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 88.5, Endaufgabe_FußballSiumulation.height / 2 - 50), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 88.5, Endaufgabe_FußballSiumulation.height / 2 + 110)];
    let homeT2 = [new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 100, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 78, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 67, Endaufgabe_FußballSiumulation.height / 2 - 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 67, Endaufgabe_FußballSiumulation.height / 2 + 180), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 54, Endaufgabe_FußballSiumulation.height / 2 - 60), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 35, Endaufgabe_FußballSiumulation.height / 75 * 68), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 21.5, Endaufgabe_FußballSiumulation.height / 2 + 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 21.5, Endaufgabe_FußballSiumulation.height / 2 - 50), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 35, Endaufgabe_FußballSiumulation.height / 75 * 15), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 95, Endaufgabe_FußballSiumulation.height / 75 * 65), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 95, Endaufgabe_FußballSiumulation.height / 75 * 17)];
    let moveables = [];
    let animation = true;
    Endaufgabe_FußballSiumulation.checkClose = true;
    Endaufgabe_FußballSiumulation.ballMoves = false;
    Endaufgabe_FußballSiumulation.newBallPos = true;
    //let newPlayer: boolean = false;
    Endaufgabe_FußballSiumulation.goalsT1 = [];
    Endaufgabe_FußballSiumulation.goalsT2 = [];
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
        Endaufgabe_FußballSiumulation.canvas.addEventListener("first_player", function (e) {
            //console.log(e.detail);
            handleReach(e.detail);
        });
        Endaufgabe_FußballSiumulation.canvas.addEventListener("click", handleClick);
        document.addEventListener("keydown", handleNewPlayer);
        Endaufgabe_FußballSiumulation.canvas.addEventListener("click", handleInfo);
        addT1.addEventListener("click", handleNewPlayerT1);
        addT2.addEventListener("click", handleNewPlayerT2);
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
        Endaufgabe_FußballSiumulation.inPossession.removeAttribute("class");
        Endaufgabe_FußballSiumulation.inPossession.setAttribute("id", "inPossession");
        Endaufgabe_FußballSiumulation.scoreBoard.removeAttribute("class");
        Endaufgabe_FußballSiumulation.scoreBoard.setAttribute("id", "scoreBoard");
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
            let playerT1 = new Endaufgabe_FußballSiumulation.Player(positionsT1[i], homeT1[i], team1, colorTeam1, backNumbers[i], "team1", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax));
            playerT1.draw();
            moveables.push(playerT1);
        }
    }
    function setUpTeam2() {
        for (let i = 0; i < 11; i++) {
            let playerT2 = new Endaufgabe_FußballSiumulation.Player(positionsT2[i], homeT2[i], team2, colorTeam2, backNumbers[i], "team2", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax));
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
    Endaufgabe_FußballSiumulation.goal = false;
    function update() {
        //console.log("update");
        if (animation == true) {
            //console.log("animation");
            Endaufgabe_FußballSiumulation.crc2.clearRect(0, 0, Endaufgabe_FußballSiumulation.canvas.width, Endaufgabe_FußballSiumulation.canvas.height);
            Endaufgabe_FußballSiumulation.crc2.putImageData(imgData, 0, 0);
            if (Endaufgabe_FußballSiumulation.checkClose == true) {
                //console.log("checkifClose");
                checkIfClose();
            }
            if (Endaufgabe_FußballSiumulation.ballMoves == true) {
                let player = [];
                let ball = [];
                for (let moveable of moveables) {
                    if (moveable instanceof Endaufgabe_FußballSiumulation.Ball) {
                        //console.log("moveBall");
                        ball.push(moveable);
                        ball[0].move(event);
                        ball[0].draw();
                    }
                    if (moveable instanceof Endaufgabe_FußballSiumulation.Player) {
                        player.push(moveable);
                    }
                    for (let p = 0; p < player.length; p++) {
                        player[p].changeTask(TASK.MOVEHOME);
                        //}
                    }
                }
            }
            for (let moveable of moveables) {
                moveable.draw();
                if (moveable instanceof Endaufgabe_FußballSiumulation.Ball) {
                    if (Endaufgabe_FußballSiumulation.goal == false) {
                        moveable.goal();
                        //moveable.position = moveable.start;
                    }
                }
            }
        }
    }
    /*
    *Function to see if player is close to ball
    */
    function checkIfClose() {
        let ball = [];
        let player = [];
        //console.log(ball);
        ball.length = 0;
        player.length = 0;
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
            //console.log(length / 110, difference, width / 110 * length);
            if (length <= Endaufgabe_FußballSiumulation.canvas.width / 110 * 30) {
                //console.log("length<30ChangeTaskTOMove");
                player[j].changeTask(TASK.MOVE, ball[0].position);
                //console.log("Yes!");
            }
        }
    }
    /*
     *Function to handle when a player reached the ball
     */
    function handleReach(_player) {
        animation = false;
        atmo.pause();
        //activePlayer = parseInt(_player);
        console.log(Endaufgabe_FußballSiumulation.activePlayerPrecision);
    }
    /*
     *Function to handle when user clicks on Canvas
     */
    function handleClick(_event) {
        //if (newPlayer == false) {
        animation = true;
        Endaufgabe_FußballSiumulation.checkClose = true;
        Endaufgabe_FußballSiumulation.ballMoves = true;
        playSound(atmo);
        event = _event;
        //}
    }
    /*
   *Functions to add new players to team
   */
    //let addT1: HTMLButtonElement = document.createElement("button");
    //addT1.type = "button";
    //let addT2: HTMLButtonElement = document.createElement("button");
    //addT2.type = "button";
    //let addT1: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#AddPlayerT1");
    //let addT2: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#AddPlayerT2");
    //addT1.addEventListener("click", handleNewPlayerT1);
    //addT2.addEventListener("click", handleNewPlayerT2);
    function handleNewPlayer(_event) {
        let keyName = _event.key;
        if (keyName == "+") {
            console.log("addNewPlayer");
            //animation = false;
            //let addT1: HTMLButtonElement = document.createElement("button");
            //addT1.innerHTML = "Team1";
            //addT1.setAttribute("id", "btnAddTeam1");
            addT1.setAttribute("class", "show");
            addT1.style.backgroundColor = colorTeam1;
            //addT1.addEventListener("click", handleNewPlayerT1);
            //document.body.appendChild(addT1);
            //let addT2: HTMLButtonElement = document.createElement("button");
            //addT2.innerHTML = "Team2";
            addT2.setAttribute("class", "show");
            addT2.style.backgroundColor = colorTeam2;
            //addT2.addEventListener("click", handleNewPlayerT2);
            //addT2.setAttribute("id", "btnAddTeam2");
            //addT2.style.backgroundColor = colorTeam2;
            //addT2.addEventListener("click", handleNewPlayerT2);
            //document.body.appendChild(addT2);
        }
    }
    function handleNewPlayerT1() {
        alert("hold alt and click on canvas to choose player position");
        Endaufgabe_FußballSiumulation.canvas.addEventListener("click", handleplaceNewPlayer1);
    }
    function handleNewPlayerT2() {
        alert("hold alt and click on canvas to choose player position");
        //newPlayer = true;
        Endaufgabe_FußballSiumulation.canvas.addEventListener("click", handleplaceNewPlayer2);
    }
    function handleplaceNewPlayer1(_event) {
        let altKeyPressed = _event.altKey;
        if (altKeyPressed == true) {
            let rect = Endaufgabe_FußballSiumulation.canvas.getBoundingClientRect();
            let x = _event.clientX - rect.left;
            let y = _event.clientY - rect.top;
            homeT1.push(new Endaufgabe_FußballSiumulation.Vector(x, y));
            let newPlayer = new Endaufgabe_FußballSiumulation.Player(new Endaufgabe_FußballSiumulation.Vector(x, y), homeT1[homeT1.length - 1], team1, colorTeam1, 12, "team1", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax));
            moveables.push(newPlayer);
            addT1.setAttribute("class", "hide");
            //document.body.removeChild(addT1);
            addT2.setAttribute("class", "hide");
            Endaufgabe_FußballSiumulation.canvas.removeEventListener("click", handleplaceNewPlayer1);
        }
    }
    function handleplaceNewPlayer2(_event) {
        let altKeyPressed = _event.altKey;
        if (altKeyPressed == true) {
            let rect = Endaufgabe_FußballSiumulation.canvas.getBoundingClientRect();
            let x = _event.clientX - rect.left;
            let y = _event.clientY - rect.top;
            homeT2.push(new Endaufgabe_FußballSiumulation.Vector(x, y));
            let newPlayer = new Endaufgabe_FußballSiumulation.Player(new Endaufgabe_FußballSiumulation.Vector(x, y), homeT2[homeT2.length - 1], team2, colorTeam2, 12, "team2", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax));
            moveables.push(newPlayer);
            //document.body.removeChild(addT1);
            //document.body.removeChild(addT2);
            addT1.setAttribute("class", "hide");
            addT2.setAttribute("class", "hide");
            Endaufgabe_FußballSiumulation.canvas.removeEventListener("click", handleplaceNewPlayer2);
        }
        //newPlayer = false;
    }
    /*
    * Function for Information about Player
    */
    function handleInfo(_event) {
        let shiftKeyPressed = _event.shiftKey;
        console.log("handleInfo");
        if (shiftKeyPressed == true) {
            console.log("shifKey is pressed");
            for (let moveable of moveables) {
                console.log("moveables array loop");
                if (moveable instanceof Endaufgabe_FußballSiumulation.Player) {
                    console.log("moveable instance of Player");
                    let rect = Endaufgabe_FußballSiumulation.canvas.getBoundingClientRect();
                    let x = _event.clientX - rect.left;
                    let y = _event.clientY - rect.top;
                    let mousePos = new Endaufgabe_FußballSiumulation.Vector(x, y);
                    let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(moveable.position, mousePos);
                    let length = difference.length / 100;
                    //let scaledLength: number = width / 110 * length;
                    console.log(length);
                    if (length < 1) {
                        console.log("length < 1");
                        moveable.displayInformation(_event);
                    }
                }
            }
        }
    }
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Main.js.map