namespace Endaufgabe_FußballSiumulation {
    export class Player extends Moveable {
        type: string = "player";
        team: string;
        nation: string;
        speed: number;
        jerseyColor: string;
        home: Vector;
        backNumber: number; 
        task: TASK = TASK.STAND;

        constructor(_position: Vector) {
            super(_position);
            this.position = _position;
            this.radius = canvas.width / 110 * 30;
        }
        
        move(_speed: number, _start: Vector, _end: Vector): void {
           console.log("Player moves evenly toward ball");
        }

        draw(): void {
            drawShirt(this.position, this.jerseyColor, this.type, this.team);
        }
    }
}