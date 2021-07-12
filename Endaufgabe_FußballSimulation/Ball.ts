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
                        console.log("area1");
                        let spread1: number = width / 110 * 3 * (activePlayerPrecision / 100);
                        //let newX: number = 0;
                        //let newY: number = 0;

                        //if (newBallPos == true) {
                        //newX = createRandomNum(mousePos.x, (mousePos.x + spread));
                        //newY = createRandomNum(mousePos.y, (mousePos.y + spread));
                        //}
                        newBallPos = false;
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
                        }
                        break;

                    case (length < (width / 110 * 21.5)): 
                        console.log("area2");
                        let spread2: number = width / 110 * 10 * (activePlayerPrecision / 100);
                        newBallPos = false;
                        let newPos2: Vector = new Vector(mousePos.x + spread2, mousePos.y + spread2);
                        let difference2: Vector = Vector.getDifference(newPos2, this.position);
                        let offset2: Vector = new Vector(difference2.x, difference2.y);
                        offset2.scale(1 / this.speed);
                        this.position.add(offset2);
                        console.log("BallPosition: ", this.position, "Spread", spread2, "MousePos: ", mousePos, "newPos: ", newPos2);
                        let round2: Vector = new Vector(Math.round(newPos2.x), Math.round(newPos2.y));
                        let roundBall2: Vector = new Vector (Math.round(this.position.x), Math.round(this.position.y));
                        console.log("roundPos newPos", round2, "roundBall", roundBall2);
                    
                        if (round2.x == roundBall2.x && round2.y == roundBall2.y) {
                        console.log("BallReachedPosition"); 
                        ballMoves = false;
                        newBallPos = true;
                        }
                        break;

                    case (length < (width / 2)): 
                        console.log("area3");
                        let spread3: number = width / 110 * 20 * (activePlayerPrecision / 100);
                        newBallPos = false;
                        let newPos3: Vector = new Vector(mousePos.x + spread3, mousePos.y + spread3);
                        let difference3: Vector = Vector.getDifference(newPos3, this.position);
                        let offset3: Vector = new Vector(difference3.x, difference3.y);
                        offset3.scale(1 / this.speed);
                        this.position.add(offset3);
                        console.log("BallPosition: ", this.position, "Spread", spread3, "MousePos: ", mousePos, "newPos: ", newPos3);
                        let round3: Vector = new Vector(Math.round(newPos3.x), Math.round(newPos3.y));
                        let roundBall3: Vector = new Vector (Math.round(this.position.x), Math.round(this.position.y));
                        console.log("roundPos newPos", round3, "roundBall", roundBall3);
                    
                        if (round3.x == roundBall3.x && round3.y == roundBall3.y) {
                        console.log("BallReachedPosition"); 
                        ballMoves = false;
                        newBallPos = true;
                        }
                        break;
                    case (length < (width / 110 * 88.5)):
                        console.log("area4");
                        let spread4: number = width / 110 * 35 * (activePlayerPrecision / 100);
                        newBallPos = false;
                        let newPos4: Vector = new Vector(mousePos.x + spread4, mousePos.y + spread4);
                        let difference4: Vector = Vector.getDifference(newPos4, this.position);
                        let offset4: Vector = new Vector(difference4.x, difference4.y);
                        offset4.scale(1 / this.speed);
                        this.position.add(offset4);
                        console.log("BallPosition: ", this.position, "Spread", spread4, "MousePos: ", mousePos, "newPos: ", newPos4);
                        let round4: Vector = new Vector(Math.round(newPos4.x), Math.round(newPos4.y));
                        let roundBall4: Vector = new Vector (Math.round(this.position.x), Math.round(this.position.y));
                        console.log("roundPos newPos", round4, "roundBall", roundBall4);
                    
                        if (round4.x == roundBall4.x && round4.y == roundBall4.y) {
                        console.log("BallReachedPosition"); 
                        ballMoves = false;
                        newBallPos = true;
                        }
                        break;

                    case (length < (width / 110 * 110)):
                        console.log("area5");
                        let spread5: number = width / 110 * 50 * (activePlayerPrecision / 100);
                        newBallPos = false;
                        let newPos5: Vector = new Vector(mousePos.x + spread5, mousePos.y + spread5);
                        let difference5: Vector = Vector.getDifference(newPos5, this.position);
                        let offset5: Vector = new Vector(difference5.x, difference5.y);
                        offset5.scale(1 / this.speed);
                        this.position.add(offset5);
                        console.log("BallPosition: ", this.position, "Spread", spread5, "MousePos: ", mousePos, "newPos: ", newPos5);
                        let round5: Vector = new Vector(Math.round(newPos5.x), Math.round(newPos5.y));
                        let roundBall5: Vector = new Vector (Math.round(this.position.x), Math.round(this.position.y));
                        console.log("roundPos newPos", round5, "roundBall", roundBall5);
                    
                        if (round5.x == roundBall5.x && round5.y == roundBall5.y) {
                        console.log("BallReachedPosition"); 
                        ballMoves = false;
                        newBallPos = true;
                        }
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
                this.handleGoal("team2");
                
                //this.position = this.start;

                
            }

            if (this.position.x >= canvas.width / 110 * 100 && this.position.y < canvas.height / 2 + 40 && this.position.y > canvas.height / 2 - 40) {
                goal = true;
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
            }   
            if (_team == "team1") {
                console.log("goalForTeam right Team1");
                this.applaus.play();
                goalsT1.push(1);
                this.position = this.start;
                scoreBoard.innerHTML = "Team 1: " + goalsT1.length + " : " + " Team 2: " + goalsT2.length;
                goal = false;
            }
    }

        draw(): void {
            drawBall(this.position);
        }
    }
}