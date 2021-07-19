namespace Endaufgabe_FußballSiumulation {
    export class Player extends Moveable {
        public task: TASK = TASK.STAND;
        private team: string;
        private nation: string;
        private speed: number;
        private precision: number;
        private jerseyColor: string;
        private backNumber: number; 
        private home: Vector;
        private type: string = "player";


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
        
        public move(_ballPosition?: Vector): void {
            if (_ballPosition) {
                
                let difference: Vector =  Vector.getDifference(_ballPosition, this.position);
                let offset: Vector = new Vector (difference.x, difference.y);
                //let length: number = offset.length;
                let normalise: Vector | undefined = Vector.getNormalisedVector(offset);
                if (normalise) {   
                    normalise.scale(1 / this.speed);
                    this.position.add(normalise);
                }
                
                let playerPositionRound: Vector = new Vector(Math.round(this.position.x), Math.round(this.position.y));
                let ballPositionRound: Vector = new Vector(Math.round(_ballPosition.x), Math.round(_ballPosition.y));

                if (playerPositionRound.x == ballPositionRound.x && playerPositionRound.y == ballPositionRound.y) {
                    activePlayerPrecision = this.precision;
                    let event: CustomEvent = new CustomEvent("first_player", {"detail": {player: this}});
                    crc2.canvas.dispatchEvent(event);
                    this.displayBallPossession(this.nation, this.backNumber);
                }
           }
        }
        
        public displayBallPossession(_nation: string, _backNumber: number): void {
            inPossession.innerHTML = _nation + " " + _backNumber + " im Ballbesitz";
        }
        
        public displayInformation(_event?: MouseEvent): void {
            let color: string = this.jerseyColor;
            let infoBox: HTMLElement = document.createElement("div");
            infoBox.innerHTML = "Position: " + " x: " + Math.round(this.position.x) + ", y: " + Math.round(this.position.y) + "<br>" + "Origin: " + "x: " + Math.round(this.home.x) + " y: " + Math.round(this.home.y) + "<br>" + "Nation: " + this.nation  + "<br>" + "Team: " + this.team + "<br>" + "Number: " + this.backNumber + "<br>" +  "Speed: " + this.speed + "<br>" + "Precision: " + this.precision;
            infoBox.style.fontWeight = "bold";
            infoBox.style.fontSize = "100";
            infoBox.style.fontFamily = "Arial, Helvetica, sans-serif";
            infoBox.style.color = color;
            infoBox.style.backgroundColor = "white";
            if (color == "#ffffff") {
                infoBox.style.backgroundColor = "darkgrey";
            }
            document.body.appendChild(infoBox);


            setTimeout(function(): void { 
                document.body.removeChild(infoBox);
            },         5000);
        }

        public draw(): void {
            drawShirt(this.position, this.jerseyColor, this.type, this.team);
        }


        public changeTask(_task?: TASK, _ball?: Vector): void {
            if (_task)
                this.task = _task;
                
            switch (this.task) {
                case TASK.STAND:
                    //console.log("stay");
                    break;
                case TASK.MOVE:
                    this.move(_ball);
                    break;
                case TASK.MOVEHOME:
                    this.moveHome();
                    break;
                default:
                    console.log("something went wrong");       
            }
        }

        private moveHome(): void {
            let difference: Vector =  Vector.getDifference(this.home, this.position);
            let offset: Vector = new Vector (difference.x, difference.y);
            offset.scale(1 / this.speed);
            this.position.add(offset); 


            if (this.position.x == this.home.x && this.position.y == this.home.y) {
                checkClose = true;
                this.stand();
            }
        }

        private stand(): void {
            //console.log("stand"); 
        }
    }
}
