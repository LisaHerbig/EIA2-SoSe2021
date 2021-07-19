"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    /*
    * Bei Vektorklasse Insperation aus der in den Vorlesungen vorgestellten Klasse von Prof. Jirka Dell Oro-Friedl
    */
    window.addEventListener("load", handleLoad);
    Endaufgabe_FußballSiumulation.canvas = document.querySelector("canvas");
    Endaufgabe_FußballSiumulation.canvas.width = window.innerHeight;
    Endaufgabe_FußballSiumulation.canvas.height = Endaufgabe_FußballSiumulation.canvas.width / 110 * 75;
    Endaufgabe_FußballSiumulation.width = Number(Endaufgabe_FußballSiumulation.canvas.width);
    Endaufgabe_FußballSiumulation.height = Number(Endaufgabe_FußballSiumulation.canvas.height);
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
    let atmo = new Audio("Sounds/Atmo.wav");
    let addT1 = document.querySelector("#AddPlayerT1");
    let addT2 = document.querySelector("#AddPlayerT2");
    let eventClick;
    let positionsT1 = [new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 10, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 15, Endaufgabe_FußballSiumulation.height / 75 * 17), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 15, Endaufgabe_FußballSiumulation.height / 75 * 65), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 32, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 43, Endaufgabe_FußballSiumulation.height / 2 - 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 43, Endaufgabe_FußballSiumulation.height / 2 + 180), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 57, Endaufgabe_FußballSiumulation.height / 2 + 125), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 75, Endaufgabe_FußballSiumulation.height / 75 * 15), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 75, Endaufgabe_FußballSiumulation.height / 75 * 68), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 88.5, Endaufgabe_FußballSiumulation.height / 2 - 50), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 88.5, Endaufgabe_FußballSiumulation.height / 2 + 110)];
    let positionsT2 = [new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 100, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 78, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 67, Endaufgabe_FußballSiumulation.height / 2 - 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 67, Endaufgabe_FußballSiumulation.height / 2 + 180), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 54, Endaufgabe_FußballSiumulation.height / 2 - 60), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 35, Endaufgabe_FußballSiumulation.height / 75 * 68), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 21.5, Endaufgabe_FußballSiumulation.height / 2 + 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 21.5, Endaufgabe_FußballSiumulation.height / 2 - 50), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 35, Endaufgabe_FußballSiumulation.height / 75 * 15), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 95, Endaufgabe_FußballSiumulation.height / 75 * 65), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 95, Endaufgabe_FußballSiumulation.height / 75 * 17)];
    let homeT1 = [new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 10, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 15, Endaufgabe_FußballSiumulation.height / 75 * 17), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 15, Endaufgabe_FußballSiumulation.height / 75 * 65), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 32, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 43, Endaufgabe_FußballSiumulation.height / 2 - 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 43, Endaufgabe_FußballSiumulation.height / 2 + 180), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 57, Endaufgabe_FußballSiumulation.height / 2 + 125), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 75, Endaufgabe_FußballSiumulation.height / 75 * 15), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 75, Endaufgabe_FußballSiumulation.height / 75 * 68), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 88.5, Endaufgabe_FußballSiumulation.height / 2 - 50), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 88.5, Endaufgabe_FußballSiumulation.height / 2 + 110)];
    let homeT2 = [new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 100, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 78, Endaufgabe_FußballSiumulation.height / 2 + 30), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 67, Endaufgabe_FußballSiumulation.height / 2 - 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 67, Endaufgabe_FußballSiumulation.height / 2 + 180), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 54, Endaufgabe_FußballSiumulation.height / 2 - 60), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 35, Endaufgabe_FußballSiumulation.height / 75 * 68), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 21.5, Endaufgabe_FußballSiumulation.height / 2 + 110), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 21.5, Endaufgabe_FußballSiumulation.height / 2 - 50), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 35, Endaufgabe_FußballSiumulation.height / 75 * 15), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 95, Endaufgabe_FußballSiumulation.height / 75 * 65), new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 110 * 95, Endaufgabe_FußballSiumulation.height / 75 * 17)];
    let moveables = [];
    let animation = true;
    Endaufgabe_FußballSiumulation.goal = false;
    Endaufgabe_FußballSiumulation.checkClose = true;
    Endaufgabe_FußballSiumulation.ballMoves = false;
    let backNumbersT1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let backNumbersT2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
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
        Endaufgabe_FußballSiumulation.canvas.addEventListener("first_player", handleReach);
        Endaufgabe_FußballSiumulation.canvas.addEventListener("click", handleClick);
        document.addEventListener("keydown", handleExchange);
        Endaufgabe_FußballSiumulation.canvas.addEventListener("click", handleInfo);
        addT1.addEventListener("click", handleNewPlayerT1);
        addT2.addEventListener("click", handleNewPlayerT2);
        Endaufgabe_FußballSiumulation.canvas.addEventListener("startAgain", handleStartAgain);
        document.addEventListener("keydown", handleHelp);
        document.addEventListener("keyup", deleteHelp);
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
                    break;
                case "Select2":
                    team2 = String(entry[1]);
                    break;
                case "Color1":
                    colorTeam1 = String(entry[1]);
                    break;
                case "Color2":
                    colorTeam2 = String(entry[1]);
                    break;
                case "Color3":
                    colorReferee = String(entry[1]);
                    break;
                case "Color4":
                    colorLineJudge = String(entry[1]);
                    break;
                case "Slider1":
                    speedMin = Number(entry[1]);
                    break;
                case "Slider2":
                    speedMax = Number(entry[1]);
                    break;
                case "Slider3":
                    precisionMin = Number(entry[1]);
                    break;
                case "Slider4":
                    precisionMax = Number(entry[1]);
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
        form.setAttribute("class", "hide");
        btnStart.setAttribute("class", "hide");
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
        newGame.innerHTML = "Neues Spiel";
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
            let playerT1 = new Endaufgabe_FußballSiumulation.Player(positionsT1[i], homeT1[i], team1, colorTeam1, backNumbersT1[i], "team1", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax));
            playerT1.draw();
            moveables.push(playerT1);
        }
    }
    function setUpTeam2() {
        for (let i = 0; i < 11; i++) {
            let playerT2 = new Endaufgabe_FußballSiumulation.Player(positionsT2[i], homeT2[i], team2, colorTeam2, backNumbersT2[i], "team2", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax));
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
        if (animation == true) {
            Endaufgabe_FußballSiumulation.crc2.clearRect(0, 0, Endaufgabe_FußballSiumulation.canvas.width, Endaufgabe_FußballSiumulation.canvas.height);
            Endaufgabe_FußballSiumulation.crc2.putImageData(imgData, 0, 0);
            if (Endaufgabe_FußballSiumulation.checkClose == true) {
                checkIfClose();
            }
            if (Endaufgabe_FußballSiumulation.ballMoves == true) {
                let player = [];
                for (let moveable of moveables) {
                    if (moveable instanceof Endaufgabe_FußballSiumulation.Ball) {
                        moveable.move(eventClick);
                        moveable.draw();
                    }
                    if (moveable instanceof Endaufgabe_FußballSiumulation.Player) {
                        player.push(moveable);
                    }
                    for (let p = 0; p < player.length; p++) {
                        player[p].changeTask(TASK.MOVEHOME);
                    }
                }
            }
            for (let moveable of moveables) {
                if (moveable instanceof Endaufgabe_FußballSiumulation.LineJudge || moveable instanceof Endaufgabe_FußballSiumulation.Referee) {
                    moveable.move();
                }
                if (moveable instanceof Endaufgabe_FußballSiumulation.Ball) {
                    if (Endaufgabe_FußballSiumulation.goal == false) {
                        moveable.goal();
                    }
                }
                moveable.draw();
            }
        }
    }
    /*
    *Function to see if player is close to ball
    */
    function checkIfClose() {
        let ball = [];
        let player = [];
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
            if (length <= Endaufgabe_FußballSiumulation.canvas.width / 110 * 30) {
                player[j].changeTask(TASK.MOVE, ball[0].position);
            }
        }
    }
    /*
     *Function to handle when a player reached the ball
     */
    function handleReach() {
        animation = false;
        atmo.pause();
    }
    /*
     *Function to handle when user clicks on Canvas
     */
    function handleClick(_event) {
        animation = true;
        Endaufgabe_FußballSiumulation.checkClose = true;
        Endaufgabe_FußballSiumulation.ballMoves = true;
        playSound(atmo);
        eventClick = _event;
    }
    /*
   *Functions to add new players to team
   */
    function handleExchange(_event) {
        let keyName = _event.key;
        if (keyName == "+") {
            addT1.setAttribute("class", "show");
            addT1.style.backgroundColor = colorTeam1;
            addT2.setAttribute("class", "show");
            addT2.style.backgroundColor = colorTeam2;
        }
        if (keyName == "-") {
            alert("Halte die Strg. Taste gedrückt und klicke auf den Spieler, den du löschen möchtest (Achtung: stehen die Spieler zu nah beieinander, können mehrere gelöscht werden)");
            Endaufgabe_FußballSiumulation.canvas.addEventListener("click", handleDelete);
        }
    }
    function handleNewPlayerT1() {
        alert("Halte die Alt Taste gedrückt und klicke auf den Canvas um einen neuen Spieler hinzuzufügen");
        Endaufgabe_FußballSiumulation.canvas.addEventListener("click", handleplaceNewPlayer1);
    }
    function handleNewPlayerT2() {
        alert("Halte die Alt Taste gedrückt und klicke auf den Canvas um einen neuen Spieler hinzuzufügen");
        Endaufgabe_FußballSiumulation.canvas.addEventListener("click", handleplaceNewPlayer2);
    }
    function handleplaceNewPlayer1(_event) {
        let altKeyPressed = _event.altKey;
        if (altKeyPressed == true) {
            let rect = Endaufgabe_FußballSiumulation.canvas.getBoundingClientRect();
            let x = _event.clientX - rect.left;
            let y = _event.clientY - rect.top;
            homeT1.push(new Endaufgabe_FußballSiumulation.Vector(x, y));
            backNumbersT1.push(1);
            let newPlayer = new Endaufgabe_FußballSiumulation.Player(new Endaufgabe_FußballSiumulation.Vector(x, y), homeT1[homeT1.length - 1], team1, colorTeam1, backNumbersT1.length, "team1", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax));
            moveables.push(newPlayer);
            addT1.setAttribute("class", "hide");
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
            backNumbersT2.push(1);
            let newPlayer = new Endaufgabe_FußballSiumulation.Player(new Endaufgabe_FußballSiumulation.Vector(x, y), homeT2[homeT2.length - 1], team2, colorTeam2, backNumbersT2.length, "team2", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax));
            moveables.push(newPlayer);
            addT1.setAttribute("class", "hide");
            addT2.setAttribute("class", "hide");
            Endaufgabe_FußballSiumulation.canvas.removeEventListener("click", handleplaceNewPlayer2);
        }
    }
    function handleDelete(_event) {
        let ctrlKeyPressed = _event.ctrlKey;
        if (ctrlKeyPressed == true) {
            let rect = Endaufgabe_FußballSiumulation.canvas.getBoundingClientRect();
            let x = _event.clientX - rect.left;
            let y = _event.clientY - rect.top;
            for (let [i, moveable] of moveables.entries()) {
                if (moveable instanceof Endaufgabe_FußballSiumulation.Player) {
                    let v1 = new Endaufgabe_FußballSiumulation.Vector(moveable.position.x, moveable.position.y);
                    let v2 = new Endaufgabe_FußballSiumulation.Vector(x, y);
                    let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(v1, v2);
                    let length = difference.length;
                    if (length <= Endaufgabe_FußballSiumulation.canvas.width / 110 * 5) {
                        moveables.splice(i, 1);
                    }
                }
            }
        }
    }
    /*
    * Function for Information about Player
    */
    function handleInfo(_event) {
        let shiftKeyPressed = _event.shiftKey;
        if (shiftKeyPressed == true) {
            for (let moveable of moveables) {
                if (moveable instanceof Endaufgabe_FußballSiumulation.Player) {
                    let rect = Endaufgabe_FußballSiumulation.canvas.getBoundingClientRect();
                    let x = _event.clientX - rect.left;
                    let y = _event.clientY - rect.top;
                    let mousePos = new Endaufgabe_FußballSiumulation.Vector(x, y);
                    let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(moveable.position, mousePos);
                    let length = difference.length / 100;
                    if (length < 1) {
                        console.log("length < 0.0001");
                        moveable.displayInformation(_event);
                    }
                }
            }
        }
    }
    /*
    *Function to start Game again after goal
    */
    function handleStartAgain() {
        for (let moveable of moveables) {
            if (moveable instanceof Endaufgabe_FußballSiumulation.Referee) {
                let referee = moveable;
                referee.playWhistle();
            }
        }
    }
    /*
    *Function for helpBox
    */
    let helpBox = document.createElement("div");
    function handleHelp(_event) {
        let keyName = _event.key;
        if (keyName == "h") {
            helpBox.setAttribute("id", "help");
            helpBox.innerHTML = "Neuen Spieler hinzufügen: '+'" + "<br>" + "Spieler löschen: '-'" + "<br>" + "Schießen: Doppelklick" + "<br>" + "Spielerinforamtionen anzeigen: Shift + Klick auf Spieler" + "<br>" + "Neues Spiel: Klick auf Button am Ende (Neues Spiel)" + "<br>" + "Um dieses Fenster zu schließen, drücke 'z' auf deiner Tastatur";
            helpBox.style.backgroundColor = "#F084A5";
            helpBox.style.fontFamily = "Arial, Helvetica, sans-serif";
            helpBox.style.fontWeight = "bold";
            helpBox.style.fontSize = "150";
            document.body.appendChild(helpBox);
        }
    }
    function deleteHelp(_event) {
        let keyName = _event.key;
        if (keyName == "z") {
            helpBox.removeEventListener("keydown", handleHelp);
            document.body.removeChild(helpBox);
        }
    }
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Main.js.map