namespace Endaufgabe_FußballSiumulation {
    
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
    canvas.width = window.innerHeight * 1.25;
    canvas.height = canvas.width / 110 * 75;
    export let width: number = Number (canvas.width);
    export let height: number = Number (canvas.height);

    //Div  Spielstand und Ballbesitz
    let inPossession: HTMLDivElement = <HTMLDivElement> document.querySelector("#inPossession");
    let scoreBoard: HTMLDivElement = <HTMLDivElement> document.querySelector("#scoreBoard");

    //Variablen für Formular
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
    //let atmo: HTMLAudioElement = new Audio ("Sounds/67-Atmo.wav");
    //let whistle: HTMLAudioElement = new Audio ("Sounds/Whistle.wav");

    let positionsT1: Vector [] = [new Vector(width / 110 * 10, height / 2 + 30), new Vector(width / 110 * 15, height / 75 * 17), new Vector (width / 110 * 15, height / 75 * 65), new Vector(width / 110 * 32, height / 2 + 30), new Vector(width / 110 * 43, height / 2 - 110), new Vector(width / 110 * 43, height / 2 + 180), new Vector(width / 110 * 57, height / 2 + 125), new Vector(width / 110 * 75, height / 75 * 15), new Vector(width / 110 * 75, height / 75 * 68), new Vector(width / 110 * 88.5, height / 2 - 50), new Vector(width / 110 * 88.5, height / 2 + 110)];
    let positionsT2: Vector [] = [new Vector(width / 110 * 100, height / 2 + 30), new Vector(width / 110 * 78, height / 2 + 30), new Vector(width / 110 * 67, height / 2 - 110), new Vector(width / 110 * 67, height / 2 + 180), new Vector(width / 110 * 54, height / 2 - 60), new Vector(width / 110 * 35, height / 75 * 68), new Vector(width / 110 * 21.5, height / 2 + 110), new Vector(width / 110 * 21.5, height / 2 - 50), new Vector(width / 110 * 35, height / 75 * 15), new Vector(width / 110 * 95, height / 75 * 65), new Vector(width / 110 * 95, height / 75 * 17)];
    //let moveables: Moveable [] = [];
    //let animation: boolean = true;
    //let goalsT1: number [] = [];
    //let goalsT2: number [] = [];
    //let backNumbers: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    export enum TASK {
        STAND,
        MOVE,
        MOVEHOME
    }

    //HTML Elemente Startseite
    let form: HTMLFormElement = <HTMLFormElement> document.querySelector("form");
    let btnStart: HTMLButtonElement = <HTMLButtonElement> document.getElementById("btn");
    let explain: HTMLElement = <HTMLElement>document.getElementById("explain");

    function handleLoad(): void {
        form.addEventListener("change", handleChange);
        btnStart.addEventListener("click", handleBtn);
    }

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
        
        drawShirt(positionsT1[2], "blue", "player", "team1");
        console.log(canvas.height, canvas.width, canvas.height / 75 * 10, new Vector(canvas.width / 110 * 75, (canvas.height / 75 * 68)));
        
    }

    function handleNewGame(): void {
        location.reload();
    }

}