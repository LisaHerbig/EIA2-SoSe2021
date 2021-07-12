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
            if (_event && stopDifference == false) {  
                //let playerPrecision: number = Number(_activePlayer);
                let rect: DOMRect = canvas.getBoundingClientRect();
                let x: number = _event.clientX - rect.left;
                let y: number = _event.clientY - rect.top;
                let mousePos: Vector = new Vector(x, y);
                let difference: Vector =  Vector.getDifference(mousePos, this.position);
                let offset: Vector = new Vector (difference.x, difference.y);
                let length: number = offset.length;
                
                switch (true) {
                    case (length < (width / 110 * 10.5)):
                        //let newPosA1: Vector[] = [];
                        //if (newBallPos == true) {
                        //console.log("area1");
                        this.moveWithOfset(mousePos, 3);
                        newBallPos = false;
                        //}
                        //let spread1: number = width / 110 * 3 * (activePlayerPrecision / 100);
                        //let newX: number = 0;
                        //let newY: number = 0;

                        //if (newBallPos == true) {
                        //newX = createRandomNum(mousePos.x, (mousePos.x + spread));
                        //newY = createRandomNum(mousePos.y, (mousePos.y + spread));
                        //}
                        /*newBallPos = false;
                        let newPos1: Vector = new Vector(mousePos.x + spread1, mousePos.y + spread1);
                        //newPosA1.push(newPos);
                        let difference1: Vector = Vector.getDifference(newPos1, this.position);
                        let offset1: Vector = new Vector(difference1.x, difference1.y);
                        offset1.scale(1 / this.speed);
                        this.position.add(offset1);
                        console.log("BallPosition: ", this.position, "Spread", spread1, "MousePos: ", mousePos, "newPos: ", newPos1);
                        let round1: Vector = new Vector(Math.round(newPos1.x), Math.round(newPos1.y));
                        let roundBall1: Vector = new Vector (Math.round(this.position.x), Math.round(this.position.y));
                        console.log("roundPos newPos", round1, "roundBall", roundBall1);
                    
                        if (round1.x == roundBall1.x && round1.y == roundBall1.y) {
                        console.log("BallReachedPosition"); 
                        ballMoves = false;
                        newBallPos = true;
                        //newPosA1.length = 0;
                        //console.log("reachedBall"); 
                        }*/
                        break;

                    case (length < (width / 110 * 21.5)): 
                        console.log("area2");
                        this.moveWithOfset(mousePos, 10);
                        break;

                    case (length < (width / 2)): 
                        console.log("area3");
                        this.moveWithOfset(mousePos, 20);
                        break;

                    case (length < (width / 110 * 88.5)):
                        console.log("area4");
                        this.moveWithOfset(mousePos, 35);
                        break;

                    case (length < (width / 110 * 110)):
                        console.log("area5");
                        this.moveWithOfset(mousePos, 50);
                        break;

                    default:
                        console.log("something went wrong"); 
                }

                //offset.scale(1 / this.speed);
                //this.position.add(offset);
                let ballPositionRound: Vector = new Vector(Math.round(this.position.x), Math.round(this.position.y));
                let mousePositionRound: Vector = new Vector(Math.round(mousePos.x), Math.round(mousePos.y));
            //console.log(ballPositionRound, playerPositionRound);
                

                if (ballPositionRound.x == mousePositionRound.x && ballPositionRound.y == mousePositionRound.y) {
                    ballMoves = false;
                }
                //stopDifference = false;
        }
            //stopDifference = false;
        }

        moveWithOfset(_mousePos: Vector, _spread: number): void {
            let spread: number = width / 110 * _spread * (activePlayerPrecision / 100);
            //newBallPos = false;
            let newPos: Vector = new Vector(_mousePos.x + spread, _mousePos.y + spread);
            let difference2: Vector = Vector.getDifference(newPos, this.position);
            let offset2: Vector = new Vector(difference2.x, difference2.y);
            offset2.scale(1 / this.speed);
            this.position.add(offset2);
            //console.log("BallPosition: ", this.position, "Spread", spread, "MousePos: ", _mousePos, "newPos: ", newPos);
            let round2: Vector = new Vector(Math.round(newPos.x), Math.round(newPos.y));
            let roundBall2: Vector = new Vector (Math.round(this.position.x), Math.round(this.position.y));
            //console.log("roundPos newPos", round2, "roundBall", roundBall2);
                    
            if (round2.x == roundBall2.x && round2.y == roundBall2.y) {
                        console.log("BallReachedPosition"); 
                        ballMoves = false;
                        //newBallPos = true;
                        }
        }

        goal(): void {
            
            //let ballX: number = canvas.width / 110 * (this.position.x);
            //let ballY: number = canvas.height / 2 * (this.position.y);
            //if (this.position.x <= canvas.width / 110 * 5 && canvas.height / 2 + 40 < this.position.y && this.position.y < canvas.width / 2 - 40) {
               // console.log("goal for team left");
                
            //}
            if (this.position.x <= canvas.width / 110 * 5 && this.position.y < canvas.height / 2 + 40 && this.position.y > canvas.height / 2 - 40) {
                goal = true;
                stopDifference = true;
                this.handleGoal("team2");
                
                //this.position = this.start;

                
            }

            if (this.position.x >= canvas.width / 110 * 100 && this.position.y < canvas.height / 2 + 40 && this.position.y > canvas.height / 2 - 40) {
                goal = true;
                stopDifference = true;
                this.handleGoal("team1");
              
                
            }
            //console.log(this.position.x, this.position.y, "canvas width", canvas.width / 110 * 5, "canvasheight", canvas.height / 2 + 40);
            
        }

        handleGoal(_team: string): void {
            if (_team == "team2") {
                console.log("goalForTeam left Team2");
                this.position = this.start;
                this.applaus.play();
                goalsT2.push(1);
                scoreBoard.innerHTML = "Team 1: " + goalsT1.length + " : " + " Team 2: " + goalsT2.length;
                goal = false;
                //stopDifference = false;
            }   
            if (_team == "team1") {
                console.log("goalForTeam right Team1");
                this.applaus.play();
                goalsT1.push(1);
                this.position = this.start;
                scoreBoard.innerHTML = "Team 1: " + goalsT1.length + " : " + " Team 2: " + goalsT2.length;
                goal = false;
            }
            //stopDifference = false;
    }

        draw(): void {
            drawBall(this.position);
        }
    }
}