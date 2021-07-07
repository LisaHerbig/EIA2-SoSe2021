namespace Endaufgabe_FußballSiumulation {
    export class Player extends Moveable {
        type: string = "player";
        team: string;
        nation: string;
        speed: number;
        precision: number;
        jerseyColor: string;
        home: Vector;
        backNumber: number; 
        task: TASK = TASK.STAND;

        constructor(_position: Vector, _nation: string, _color: string, _backNumber: number, _team: string, _speed: number, _precision: number) {
            super(_position);
            this.position = _position;
            this.nation = _nation;
            this.jerseyColor = _color;
            this.backNumber = _backNumber;
            this.team = _team;
            this.speed = _speed;
            this.precision = _precision;
            this.radius = canvas.width / 110 * 30;
        }
        
        move(): void {
           console.log("Player moves evenly toward ball");

        }
        
        moveHome(): void {
            console.log("MoveHome");
            
        }
        
        stand(): void {
            console.log("stand"); 
        }

        draw(): void {
            drawShirt(this.position, this.jerseyColor, this.type, this.team);
        }

        changeTask(): void {
            switch (this.task) {
                case TASK.STAND:
                    console.log("stay");
                    break;
                case TASK.MOVE:
                    console.log("moveToBallPosition");
                    break;
                case TASK.MOVEHOME:
                    console.log("MoveBackToPosition");
                    break;
                default:
                    console.log("something went wrong");       
            }
        }
    }
}