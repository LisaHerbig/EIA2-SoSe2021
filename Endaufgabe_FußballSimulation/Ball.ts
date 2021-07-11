namespace Endaufgabe_FußballSiumulation {
    export class Ball extends Moveable {
        start: Vector = new Vector (width / 2, height / 2);
        speed: number = 50;
        targetPosition: Vector;
        applaus: HTMLAudioElement =  new Audio ("Sounds/Applaus.wav");

        constructor(_position: Vector) {
            super (_position);
            this.position = _position;
        }
        move(_event?: MouseEvent): void {
            //console.log("Ball moves towards click position");  
            if (_event) {  
                let rect: DOMRect = canvas.getBoundingClientRect();
                let x: number = _event.clientX - rect.left;
                let y: number = _event.clientY - rect.top;
                let mousePos: Vector = new Vector(x, y);
                let difference: Vector =  Vector.getDifference(mousePos, this.position);
                let offset: Vector = new Vector (difference.x, difference.y);
                offset.scale(1 / this.speed);
                this.position.add(offset);
                let ballPositionRound: Vector = new Vector(Math.round(this.position.x), Math.round(this.position.y));
                let mousePositionRound: Vector = new Vector(Math.round(mousePos.x), Math.round(mousePos.y));
            //console.log(ballPositionRound, playerPositionRound);

                if (ballPositionRound.x == mousePositionRound.x && ballPositionRound.y == mousePositionRound.y) {
                    //console.log("reachedBall", width / 110 * (0.1 *  mousePositionRound.x), width / 110 * mousePositionRound.y, ballPositionRound);
                    //console.log("Reached");
                    ballMoves = false;
                    //let event: CustomEvent = new CustomEvent("first_player", {detail: {player: this}});
                    //crc2.canvas.dispatchEvent(event);
                    //this.displayBallPossession(this.nation, this.backNumber);
                }
        }
        }

        goal(): void {
            
            //let ballX: number = canvas.width / 110 * (this.position.x);
            //let ballY: number = canvas.height / 2 * (this.position.y);
            //if (this.position.x <= canvas.width / 110 * 5 && canvas.height / 2 + 40 < this.position.y && this.position.y < canvas.width / 2 - 40) {
               // console.log("goal for team left");
                
            //}
            if (this.position.x <= canvas.width / 110 * 5 && this.position.y < canvas.height / 2 + 40 && this.position.y > canvas.height / 2 - 40) {
                console.log("goalForTeam left Team2");
                this.applaus.play();
                goalsT2.push(1);
                scoreBoard.innerHTML = "Team 1: " + goalsT1.length + "Team 2: " + goalsT2.length;

                
            }

            if (this.position.x >= canvas.width / 110 * 100 && this.position.y < canvas.height / 2 + 40 && this.position.y > canvas.height / 2 - 40) {
                console.log("goalForTeam right Team1");
                this.applaus.play();
                goalsT1.push(1);
                scoreBoard.innerHTML = "Team 1: " + goalsT1.length + "Team 2: " + goalsT2.length;
                
            }
            console.log(this.position.x, this.position.y, "canvas width", canvas.width / 110 * 5, "canvasheight", canvas.height / 2 + 40);
            
        }

        draw(): void {
            drawBall(this.position);
        }
    }
}