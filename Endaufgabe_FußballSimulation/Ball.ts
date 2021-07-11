namespace Endaufgabe_FußballSiumulation {
    export class Ball extends Moveable {
        start: Vector = new Vector (width / 2, height / 2);
        speed: number = 50;
        targetPosition: Vector;

        constructor(_position: Vector) {
            super (_position);
            this.position = _position;
        }
        move(_event?: MouseEvent): void {
            //console.log("Ball moves towards click position");  
            if (_event) {  
                let x: number = _event.clientX;
                let y: number = _event.clientY;
                let mousePos: Vector = new Vector(x, y);
                let difference: Vector =  Vector.getDifference(mousePos, this.position);
                let offset: Vector = new Vector (difference.x, difference.y);
                offset.scale(1 / this.speed);
                this.position.add(offset);
                let playerPositionRound: Vector = new Vector(Math.round(this.position.x), Math.round(this.position.y));
                let mousePositionRound: Vector = new Vector(Math.round(mousePos.x), Math.round(mousePos.y));
            //console.log(ballPositionRound, playerPositionRound);

                if (playerPositionRound.x == mousePositionRound.x && playerPositionRound.y == mousePositionRound.y) {
                    //console.log("reachedBall", ballPositionRound);
                    console.log("Reached");
                    ballMoves = false;
                    //let event: CustomEvent = new CustomEvent("first_player", {detail: {player: this}});
                    //crc2.canvas.dispatchEvent(event);
                    //this.displayBallPossession(this.nation, this.backNumber);
                }
        }
        }

        draw(): void {
            drawBall(this.position);
        }
    }
}