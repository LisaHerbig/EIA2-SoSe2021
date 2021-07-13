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
            if (_event && stopDifference == false) {  
                let rect: DOMRect = canvas.getBoundingClientRect();
                let x: number = _event.clientX - rect.left;
                let y: number = _event.clientY - rect.top;
                let mousePos: Vector = new Vector(x, y);
                let difference: Vector =  Vector.getDifference(mousePos, this.position);
                let offset: Vector = new Vector (difference.x, difference.y);
                let length: number = offset.length;
                
                switch (true) {
                    case (length < (width / 110 * 10.5)):
                        this.moveWithOfset(mousePos, 3);
                        newBallPos = false;
                        break;

                    case (length < (width / 110 * 21.5)): 
                        this.moveWithOfset(mousePos, 10);
                        break;

                    case (length < (width / 2)): 
                        this.moveWithOfset(mousePos, 20);
                        break;

                    case (length < (width / 110 * 88.5)):
                        this.moveWithOfset(mousePos, 35);
                        break;

                    case (length < (width / 110 * 110)):
                        this.moveWithOfset(mousePos, 50);
                        break;

                    default:
                        console.log("something went wrong"); 
                }

                let ballPositionRound: Vector = new Vector(Math.round(this.position.x), Math.round(this.position.y));
                let mousePositionRound: Vector = new Vector(Math.round(mousePos.x), Math.round(mousePos.y));
                

                if (ballPositionRound.x == mousePositionRound.x && ballPositionRound.y == mousePositionRound.y) {
                    ballMoves = false;
                }
        }
        }

        moveWithOfset(_mousePos: Vector, _spread: number): void {
            let spread: number = width / 110 * _spread * (activePlayerPrecision / 100);
            let newPos: Vector = new Vector(_mousePos.x + spread, _mousePos.y + spread);
            let difference2: Vector = Vector.getDifference(newPos, this.position);
            let offset2: Vector = new Vector(difference2.x, difference2.y);
            offset2.scale(1 / this.speed);
            this.position.add(offset2);
            let round2: Vector = new Vector(Math.round(newPos.x), Math.round(newPos.y));
            let roundBall2: Vector = new Vector (Math.round(this.position.x), Math.round(this.position.y));
                    
            if (round2.x == roundBall2.x && round2.y == roundBall2.y) {
                        console.log("BallReachedPosition"); 
                        ballMoves = false;
                        }
        }

        goal(): void {
            if (this.position.x <= canvas.width / 110 * 5 && this.position.y < canvas.height / 2 + 40 && this.position.y > canvas.height / 2 - 40) {
                goal = true;
                stopDifference = true;
                this.position = this.start;
                this.handleGoal("team2");
            }

            if (this.position.x >= canvas.width / 110 * 100 && this.position.y < canvas.height / 2 + 40 && this.position.y > canvas.height / 2 - 40) {
                goal = true;
                stopDifference = true;
                this.position = this.start;
                this.handleGoal("team1");
            }
        }

        handleGoal(_team: string): void {
            if (_team == "team2") {
                console.log("goalForTeam left Team2");
                this.position = this.start;
                this.applaus.play();
                goalsT2.push(1);
                scoreBoard.innerHTML = "Team 1: " + goalsT1.length + " : " + " Team 2: " + goalsT2.length;
                goal = false;
                stopDifference = false;
            }   
            if (_team == "team1") {
                console.log("goalForTeam right Team1");
                this.applaus.play();
                goalsT1.push(1);
                this.position = this.start;
                scoreBoard.innerHTML = "Team 1: " + goalsT1.length + " : " + " Team 2: " + goalsT2.length;
                goal = false;
                stopDifference = false;
            }
    }

        draw(): void {
            drawBall(this.position);
        }
    }
}