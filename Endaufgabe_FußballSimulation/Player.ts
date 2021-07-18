namespace Endaufgabe_FußballSiumulation {
    //let x: number = 0;
    export class Player extends Moveable {
        home: Vector;
        type: string = "player";
        team: string;
        nation: string;
        speed: number;
        precision: number;
        jerseyColor: string;
        backNumber: number; 
        task: TASK = TASK.STAND;


        constructor(_position: Vector, _home: Vector, _nation: string, _color: string, _backNumber: number, _team: string, _speed: number, _precision: number) {
            super(_position);
            this.position = _position;
            this.home = _home;
            this.nation = _nation;
            this.jerseyColor = _color;
            this.backNumber = _backNumber;
            this.team = _team;
            this.speed = _speed;
            this.precision = _precision;
        }
        
        move(_ballPosition?: Vector): void {
            if (_ballPosition) {
                
                let difference: Vector =  Vector.getDifference(_ballPosition, this.position);
                let offset: Vector = new Vector (difference.x, difference.y);
                let length: number = offset.length;
                let normalise: Vector | undefined = Vector.getNormalisedVector(offset, length);
                if (normalise) {   
                    normalise.scale(1 / this.speed);
                    this.position.add(normalise);
                    //console.log(normalise);
                }
                //normalise.scale(1 / this.speed);
                //this.position.add(normalise);
                //console.log(normalise);
                
                let playerPositionRound: Vector = new Vector(Math.round(this.position.x), Math.round(this.position.y));
                let ballPositionRound: Vector = new Vector(Math.round(_ballPosition.x), Math.round(_ballPosition.y));
            //console.log(ballPositionRound, playerPositionRound);


                if (playerPositionRound.x == ballPositionRound.x && playerPositionRound.y == ballPositionRound.y) {
                    //console.log("reachedBall", ballPositionRound);
                    activePlayerPrecision = this.precision;
                    let event: CustomEvent = new CustomEvent("first_player", {"detail": {player: this}});
                    crc2.canvas.dispatchEvent(event);
                    this.displayBallPossession(this.nation, this.backNumber);
                }
           }
            //console.log("endeMove", this.home, this.position);


        }


        moveHome(): void {
            //console.log("moving", this.home, this.position);
            let difference: Vector =  Vector.getDifference(this.home, this.position);
            let offset: Vector = new Vector (difference.x, difference.y);
            offset.scale(1 / this.speed);
            this.position.add(offset); 


            if (this.position.x == this.home.x && this.position.y == this.home.y) {
                //this.changeTask(TASK.STAND);
                //ballMoves = false;
                checkClose = true;
                this.stand();
            }
        }
        
        displayBallPossession(_nation: string, _backNumber: number): void {
            inPossession.innerHTML = _nation + " " + _backNumber + " im Ballbesitz";
        }
        
        displayInformation(_event?: MouseEvent): void {
            //console.log("displayInformation");
            let infoBox: HTMLElement = document.createElement("div");
            infoBox.innerHTML = "Position: " + " x: " + Math.round(this.position.x) + ", y: " + Math.round(this.position.y) + "<br>" + "Origin: " + "x: " + Math.round(this.home.x) + " y: " + Math.round(this.home.y) + "<br>" + "Nation: " + this.nation  + "<br>" + "Team: " + this.team + "<br>" + "Number: " + this.backNumber + "<br>" +  "Speed: " + this.speed + "<br>" + "Precision: " + this.precision;
            infoBox.style.fontWeight = "bold";
            infoBox.style.fontSize = "100";
            infoBox.style.fontFamily = "Arial, Helvetica, sans-serif";
            infoBox.style.color = this.jerseyColor;
            document.body.appendChild(infoBox);


            setTimeout(function(): void { 
                document.body.removeChild(infoBox);
            },         5000);
        }
        
        stand(): void {
            //console.log("stand"); 
        }


        draw(): void {
            drawShirt(this.position, this.jerseyColor, this.type, this.team);
        }


        changeTask(_task?: TASK, _ball?: Vector): void {
            if (_task)
                this.task = _task;
                
            switch (this.task) {
                case TASK.STAND:
                    //console.log("stay");
                    break;
                case TASK.MOVE:
                    //console.log("moveToBallPosition");
                    this.move(_ball);
                    break;
                case TASK.MOVEHOME:
                    //console.log("MoveBackToPosition");
                    this.moveHome();
                    break;
                default:
                    console.log("something went wrong");       
            }
        }
    }
}
