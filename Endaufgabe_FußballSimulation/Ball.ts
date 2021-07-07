namespace Endaufgabe_FußballSiumulation {
    export class Ball extends Moveable {
        start: Vector = new Vector (width / 2, height / 2);
        speed: number;
        targetPosition: Vector;

        constructor(_position: Vector) {
            super (_position);
            this.position = _position;

        }
        move(): void {
            //console.log("Ball moves towards click position");  
        }

        draw(): void {
            drawBall(this.position);
        }
    }
}