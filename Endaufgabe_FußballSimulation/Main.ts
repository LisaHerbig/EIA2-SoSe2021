namespace Endaufgabe_FußballSiumulation {
    
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
    canvas.width = window.innerHeight;
    canvas.height = canvas.width / 110 * 75;
    export let width: number = Number (canvas.width);
    export let height: number = Number (canvas.height);
    //canvas.addEventListener("first_player", handleReach);

    let imgData: ImageData;
    //Div  score and ball possesstion
    export let inPossession: HTMLDivElement = <HTMLDivElement> document.querySelector("#inPossession");
    export let scoreBoard: HTMLDivElement = <HTMLDivElement> document.querySelector("#scoreBoard");

    //Variables for Formular
    let team1: string = "";
    let team2: string = "";
    let colorTeam1: string = "";
    let colorTeam2: string = "";
    let colorReferee: string = "";
    let colorLineJudge: string = "";
    let speedMin: number = Number("");
    let speedMax: number = Number("");
    let precisionMin: number = Number("");
    let precisionMax: number = Number("");

    //Sounds
    //let applaus: HTMLAudioElement = <HTMLAudioElement> new Audio ("Sounds/Applaus.wav");
    let atmo: HTMLAudioElement = new Audio ("Sounds/Atmo.wav");
    //let whistle: HTMLAudioElement = new Audio ("Sounds/Whistle.wav");

    //let displayInfo: boolean = false;
    let activePlayer: CustomEventInit;
    
    let event: MouseEvent; 
    let positionsT1: Vector [] = [new Vector(width / 110 * 10, height / 2 + 30), new Vector(width / 110 * 15, height / 75 * 17), new Vector (width / 110 * 15, height / 75 * 65), new Vector(width / 110 * 32, height / 2 + 30), new Vector(width / 110 * 43, height / 2 - 110), new Vector(width / 110 * 43, height / 2 + 180), new Vector(width / 110 * 57, height / 2 + 125), new Vector(width / 110 * 75, height / 75 * 15), new Vector(width / 110 * 75, height / 75 * 68), new Vector(width / 110 * 88.5, height / 2 - 50), new Vector(width / 110 * 88.5, height / 2 + 110)];
    let positionsT2: Vector [] = [new Vector(width / 110 * 100, height / 2 + 30), new Vector(width / 110 * 78, height / 2 + 30), new Vector(width / 110 * 67, height / 2 - 110), new Vector(width / 110 * 67, height / 2 + 180), new Vector(width / 110 * 54, height / 2 - 60), new Vector(width / 110 * 35, height / 75 * 68), new Vector(width / 110 * 21.5, height / 2 + 110), new Vector(width / 110 * 21.5, height / 2 - 50), new Vector(width / 110 * 35, height / 75 * 15), new Vector(width / 110 * 95, height / 75 * 65), new Vector(width / 110 * 95, height / 75 * 17)];
    let homeT1: Vector [] = [new Vector(width / 110 * 10, height / 2 + 30), new Vector(width / 110 * 15, height / 75 * 17), new Vector (width / 110 * 15, height / 75 * 65), new Vector(width / 110 * 32, height / 2 + 30), new Vector(width / 110 * 43, height / 2 - 110), new Vector(width / 110 * 43, height / 2 + 180), new Vector(width / 110 * 57, height / 2 + 125), new Vector(width / 110 * 75, height / 75 * 15), new Vector(width / 110 * 75, height / 75 * 68), new Vector(width / 110 * 88.5, height / 2 - 50), new Vector(width / 110 * 88.5, height / 2 + 110)];
    let homeT2: Vector [] = [new Vector(width / 110 * 100, height / 2 + 30), new Vector(width / 110 * 78, height / 2 + 30), new Vector(width / 110 * 67, height / 2 - 110), new Vector(width / 110 * 67, height / 2 + 180), new Vector(width / 110 * 54, height / 2 - 60), new Vector(width / 110 * 35, height / 75 * 68), new Vector(width / 110 * 21.5, height / 2 + 110), new Vector(width / 110 * 21.5, height / 2 - 50), new Vector(width / 110 * 35, height / 75 * 15), new Vector(width / 110 * 95, height / 75 * 65), new Vector(width / 110 * 95, height / 75 * 17)];
    let moveables: Moveable [] = [];
    let animation: boolean = true;
    export let checkClose: boolean = true;
    export let ballMoves: boolean = false;
    //let newPlayer: boolean = false;
    export let goalsT1: number [] = [];
    export let goalsT2: number [] = [];
    let backNumbers: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    export enum TASK {
        STAND,
        MOVE,
        MOVEHOME
    }

    //HTML Elements startpage
    let form: HTMLFormElement = <HTMLFormElement> document.querySelector("form");
    let btnStart: HTMLButtonElement = <HTMLButtonElement> document.getElementById("btn");
    let explain: HTMLElement = <HTMLElement>document.getElementById("explain");

    /*
    *Function to create a random number betwenn a min and a max
    */

    export function createRandomNum(_min: number, _max: number): number {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }

    function handleLoad(): void {
        form.addEventListener("change", handleChange);
        btnStart.addEventListener("click", handleBtn);

        canvas.addEventListener("first_player", function(e: CustomEventInit): void {
            //console.log(e.detail);
            handleReach(e.detail);
            
        });
        canvas.addEventListener("click", handleClick);

        document.addEventListener("keydown", handleNewPlayer);
        canvas.addEventListener("click", handleInfo);
    }

    /*
    *Function to get Data from Form Element
    */

    function handleChange(): void {
        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            switch (entry[0]) {
                case "Select1":
                    team1 = String (entry[1]);
                    console.log(team1);
                    break;
                case "Select2":
                    team2 = String (entry[1]);
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
                    colorLineJudge = String (entry[1]);
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
                    precisionMin = Number (entry[1]);
                    console.log(precisionMin);
                    break;
                case "Slider4":
                    precisionMax = Number (entry [1]);
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

    function handleBtn(): void {
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

    function prepareGame(): void {

        inPossession.removeAttribute("class");
        inPossession.setAttribute("id", "inPossession");
        scoreBoard.removeAttribute("class");
        scoreBoard.setAttribute("id", "scoreBoard");

        let newGame: HTMLButtonElement = <HTMLButtonElement> document.createElement("button");
        newGame.innerHTML = "start a new game";
        newGame.setAttribute("id", "newGame");
        newGame.addEventListener("click", handleNewGame);
        document.body.appendChild(newGame);

        canvas.removeAttribute("class");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d"); 
        
        drawField();
       
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        setUpTeam1();
        setUpTeam2();
        setUpReferee();
        setUpLineJudge();
        let ball: Ball = new Ball ( new Vector (width / 2, height / 2));
        ball.draw();
        moveables.push(ball);
        playSound(atmo);
        window.setInterval(update, 20);
    }

    function setUpTeam1(): void {
        for (let i: number = 0; i < 11; i ++) {
            let playerT1: Player = new Player(positionsT1[i], homeT1[i], team1, colorTeam1, backNumbers[i], "team1", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax)); 
            playerT1.draw();
            moveables.push(playerT1);
        }
    }

    function setUpTeam2(): void {
        for (let i: number = 0; i < 11; i ++) {
            let playerT2: Player = new Player(positionsT2[i], homeT2[i], team2, colorTeam2, backNumbers[i], "team2", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax));
            playerT2.draw();
            moveables.push(playerT2);
        }
    }

    function setUpReferee(): void {
        let referee: Referee = new Referee(new Vector(width / 110 * 60, height / 2 + 30), colorReferee);
        referee.draw();
        referee.playWhistle();
        moveables.push(referee);
    }

    function setUpLineJudge(): void {
        for (let i: number = 0; i < 2; i++) {
            if (i == 0) {
            let lineJudge: LineJudge = new LineJudge(new Vector(width / 2, height / 75 * 76.5), colorLineJudge);
            lineJudge.draw();
            moveables.push(lineJudge);
            } else {
                let lineJudge: LineJudge = new LineJudge (new Vector(width / 2, height / 75 * 6.5), colorLineJudge);
                lineJudge.draw();
                moveables.push(lineJudge);
            }
        }
    }

    /*
    *Function to start a new Game
    */

    function handleNewGame(): void {
        location.reload();
    }

    /*
    *Function to play Sounds
    */

    function playSound(_soundname: HTMLAudioElement): void {
        _soundname.play();
    }

    /*
    *Function for Animation
    */
    export let goal: boolean = false;

    function update(): void {
        //console.log("update");
        
        if (animation == true) {
            //console.log("animation");
            
            crc2.clearRect(0, 0, canvas.width, canvas.height);
            crc2.putImageData(imgData, 0, 0);

            if (checkClose == true) {
                console.log("checkifClose");
                checkIfClose();
            }

            if (ballMoves == true) {
                let player: Player [] = [];
                let ball: Ball [] = [];
                for (let moveable of moveables) {
                    if  (moveable instanceof Ball) {
                        ball.push(moveable);
                        ball[0].move(event, activePlayer);
                        ball[0].draw();
                    }
                    if (moveable instanceof Player) {
                        player.push(moveable);
                    }
                    for (let p: number = 0; p < player.length; p++) { 
                        player[p].changeTask(TASK.MOVEHOME);
                        //}
                    }
                }
            }
            for (let moveable of moveables) { 
                moveable.draw(); 
                if (moveable instanceof Ball) {
                    if (goal == false) {
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
    
    function checkIfClose(): void {
        let ball: Ball [] = [];
        let player: Player[] = [];
        //console.log(ball);
        ball.length = 0;
        player.length = 0;
        
        for (let moveable of moveables) {

            if (moveable instanceof Player) {
                player.push(moveable);
            }
            if (moveable instanceof Ball) {
                ball.push(moveable);
            }
        }

        for (let j: number = 0; j < player.length; j ++) {
            let v1: Vector = new Vector(player[j].position.x, player[j].position.y);
            let v2: Vector = new Vector(ball[0].position.x, ball[0].position.y);
            let difference: Vector = Vector.getDifference(v1, v2);
            let length: number = difference.length;
            //console.log(length / 110, difference, width / 110 * length);
            if (length <= canvas.width / 110 * 30) {
                //console.log("length<30ChangeTaskTOMove");
                
                player[j].changeTask(TASK.MOVE, ball[0].position);
                //console.log("Yes!");
            }
        }
   }

   /*
    *Function to handle when a player reached the ball
    */

    function handleReach(_player: CustomEventInit): void {
        animation = false;
        atmo.pause();
        activePlayer = _player;
        console.log(activePlayer);
        
   }

   /*
    *Function to handle when user clicks on Canvas
    */

    function handleClick(_event: MouseEvent): void {
        //if (newPlayer == false) {
            animation = true;
            checkClose = true;
            ballMoves = true;
            playSound(atmo);
            event = _event;
       //}
    }

     /*
    *Functions to add new players to team
    */
    let addT1: HTMLButtonElement = document.createElement("button");
    let addT2: HTMLButtonElement = document.createElement("button");
    function handleNewPlayer(_event: KeyboardEvent): void {
        let keyName: string = _event.key;
        if (keyName == "+") {
            console.log("addNewPlayer");
            //animation = false;
            //let addT1: HTMLButtonElement = document.createElement("button");
            addT1.innerHTML = "Team1";
            addT1.setAttribute("id", "btnAddTeam1");
            addT1.style.backgroundColor = colorTeam1;
            addT1.addEventListener("click", handleNewPlayerT1);
            document.body.appendChild(addT1);

            //let addT2: HTMLButtonElement = document.createElement("button");
            addT2.innerHTML = "Team2";
            addT2.setAttribute("id", "btnAddTeam2");
            addT2.style.backgroundColor = colorTeam2;
            addT2.addEventListener("click", handleNewPlayerT2);
            document.body.appendChild(addT2);
        }
    }

    function handleNewPlayerT1(): void {
        alert("hold alt and click on canvas to choose player position");
        canvas.addEventListener("click", handleplaceNewPlayer1);
    }
    
    function handleNewPlayerT2(): void {
        alert("hold alt and click on canvas to choose player position");
        //newPlayer = true;
        canvas.addEventListener("click", handleplaceNewPlayer2);
    }

    function handleplaceNewPlayer1(_event: MouseEvent): void {
        let altKeyPressed: boolean = _event.altKey;

        if (altKeyPressed == true) {
            let rect: DOMRect = canvas.getBoundingClientRect();
            let x: number = _event.clientX - rect.left;
            let y: number = _event.clientY - rect.top;
            homeT1.push(new Vector(x, y));
            let newPlayer: Player = new Player(new Vector(x, y), homeT1[homeT1.length - 1], team1, colorTeam1, 12, "team1", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax));
            moveables.push(newPlayer);
            document.body.removeChild(addT1);
            document.body.removeChild(addT2);
        }
    }

    function handleplaceNewPlayer2(_event: MouseEvent): void {
        let altKeyPressed: boolean = _event.altKey;

        if (altKeyPressed == true) {
            let rect: DOMRect = canvas.getBoundingClientRect();
            let x: number = _event.clientX - rect.left;
            let y: number = _event.clientY - rect.top;
            homeT2.push(new Vector(x, y));
            let newPlayer: Player = new Player(new Vector(x, y), homeT2[homeT2.length - 1], team2, colorTeam2, 12, "team2", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax));
            moveables.push(newPlayer);
            document.body.removeChild(addT1);
            document.body.removeChild(addT2);
        }
        //newPlayer = false;
    }

    /*
    * Function for Information about Player
    */
    function handleInfo(_event: MouseEvent): void {
        let shiftKeyPressed: boolean = _event.shiftKey;
        console.log("handleInfo");
        if (shiftKeyPressed == true) {
            console.log("shifKey is pressed");
            
            for (let moveable of moveables) {
                console.log("moveables array loop");
                
                if (moveable instanceof Player) {
                    console.log("moveable instance of Player");
                    
                    let rect: DOMRect = canvas.getBoundingClientRect();
                    let x: number = _event.clientX - rect.left;
                    let y: number = _event.clientY - rect.top;
                    let mousePos: Vector = new Vector(x, y);
                    let difference: Vector = Vector.getDifference(moveable.position, mousePos);
                    let length: number = difference.length / 100;
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

      
    
}