namespace Endaufgabe_FußballSiumulation {
    
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
    canvas.width = window.innerHeight * 1.25;
    canvas.height = canvas.width / 110 * 75;
    export let width: number = Number (canvas.width);
    export let height: number = Number (canvas.height);

    let imgData: ImageData;
    //Div  score and ball possesstion
    let inPossession: HTMLDivElement = <HTMLDivElement> document.querySelector("#inPossession");
    let scoreBoard: HTMLDivElement = <HTMLDivElement> document.querySelector("#scoreBoard");

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

    let positionsT1: Vector [] = [new Vector(width / 110 * 10, height / 2 + 30), new Vector(width / 110 * 15, height / 75 * 17), new Vector (width / 110 * 15, height / 75 * 65), new Vector(width / 110 * 32, height / 2 + 30), new Vector(width / 110 * 43, height / 2 - 110), new Vector(width / 110 * 43, height / 2 + 180), new Vector(width / 110 * 57, height / 2 + 125), new Vector(width / 110 * 75, height / 75 * 15), new Vector(width / 110 * 75, height / 75 * 68), new Vector(width / 110 * 88.5, height / 2 - 50), new Vector(width / 110 * 88.5, height / 2 + 110)];
    let positionsT2: Vector [] = [new Vector(width / 110 * 100, height / 2 + 30), new Vector(width / 110 * 78, height / 2 + 30), new Vector(width / 110 * 67, height / 2 - 110), new Vector(width / 110 * 67, height / 2 + 180), new Vector(width / 110 * 54, height / 2 - 60), new Vector(width / 110 * 35, height / 75 * 68), new Vector(width / 110 * 21.5, height / 2 + 110), new Vector(width / 110 * 21.5, height / 2 - 50), new Vector(width / 110 * 35, height / 75 * 15), new Vector(width / 110 * 95, height / 75 * 65), new Vector(width / 110 * 95, height / 75 * 17)];
    let moveables: Moveable [] = [];
    //let animation: boolean = true;
    //let goalsT1: number [] = [];
    //let goalsT2: number [] = [];
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
            let playerT1: Player = new Player(positionsT1[i], team1, colorTeam1, backNumbers[i], "team1", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax)); 
            playerT1.draw();
            moveables.push(playerT1);
        }
    }

    function setUpTeam2(): void {
        for (let i: number = 0; i < 11; i ++) {
            let playerT2: Player = new Player(positionsT2[i], team2, colorTeam2, backNumbers[i], "team2", createRandomNum(speedMin, speedMax), createRandomNum(precisionMin, precisionMax));
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

    function update(): void {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.putImageData(imgData, 0, 0);

        checkIfClose();
 
        for (let moveable of moveables) {
                 //moveable.move(1 / 50); 
                 moveable.draw(); 
        }
    }

    /*
    *Function to see if player is close to ball
    */
    
    function checkIfClose(): void {
        let ball: Ball [] = [];
        let player: Player[] = [];
        //console.log(ball);

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
            console.log(length / 110, difference, width / 110 * length);
            

            if (length <= canvas.width / 110 * 30) {
                player[j].changeTask(TASK.MOVE, ball[0].position);
                console.log("Yes!");
                
            }

        }
        
   }


}