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
            //this.radius = canvas.width / 110 * 30;
        }
        
        move(_ballPosition?: Vector): void {
           console.log("Player moves evenly towards ball");
           if (_ballPosition) {
           let difference: Vector =  Vector.getDifference(_ballPosition, this.position);
           difference.scale(1 /  8);
           this.position.add(difference);
           }

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

        changeTask(_task?: TASK, _ball?: Vector): void {
            if (_task)
                this.task = _task;
                
            switch (this.task) {
                case TASK.STAND:
                    console.log("stay");
                    break;
                case TASK.MOVE:
                    //console.log("moveToBallPosition");
                    this.move(_ball);
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