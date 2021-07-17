namespace Endaufgabe_FußballSiumulation {
    export class Ball extends Moveable {
        start: Vector = new Vector (width / 2, height / 2);
        speed: number = 50;
        targetPosition: Vector;
        applaus: HTMLAudioElement =  new Audio ("Sounds/Applaus.wav");

        constructor(_position: Vector) {
            super (_position);
            this.position = _position;
            console.log(this.start);
            
        }

        move(_event?: MouseEvent): void {
            if (_event) {  
                let rect: DOMRect = canvas.getBoundingClientRect();
                let x: number = _event.clientX - rect.left;
                let y: number = _event.clientY - rect.top;
                let newPos: Vector | undefined;
                if (goal == true) {
                    console.log("in if for goal = true");
                    x = this.start.x;
                    y = this.start.y;
                    //goal = false;
                    console.log(goal, "Goal status");
                }
                let mousePos: Vector = new Vector(x, y);
                let difference: Vector =  Vector.getDifference(mousePos, this.position);
                let offset: Vector = new Vector (difference.x, difference.y);
                let length: number = offset.length;
                //console.log(mousePos, this.position, this.start, "Mouse and This position and Start");
                

                if (hasRun == false) {
                    switch (true) {
                        case (length == 0):
                            console.log("length = ", length);
                            break;
                        case (length < (width / 110 * 10.5)):
                            spreading = this.moveWithOffset(mousePos, 3);
                            break;
    
                        case (length < (width / 110 * 21.5)): 
                            spreading = this.moveWithOffset(mousePos, 10);
                            break;
    
                        case (length < (width / 2)): 
                            spreading = this.moveWithOffset(mousePos, 20);
                            break;
    
                        case (length < (width / 110 * 88.5)):
                            spreading = this.moveWithOffset(mousePos, 35);
                            break;
    
                        case (length < (width / 110 * 110)):
                            spreading = this.moveWithOffset(mousePos, 50);
                            break;
    
                        default:
                            console.log("something went wrong"); 
                    }
                }
                
                //let newPos: Vector | undefined;
                if (spreading) {
                    newPos = spreading[1];
                }
                if (newPos != null) {
                    let difference: Vector = Vector.getDifference(newPos, this.position); 
                    let newOffset: Vector = new Vector(difference.x, difference.y);
                    newOffset.scale(1 / this.speed);
                    this.position.add(newOffset);
                    
                    let round2: Vector = new Vector(Math.round(newPos.x), Math.round(newPos.y));
                    let roundBall2: Vector = new Vector (Math.round(this.position.x), Math.round(this.position.y));
                    
                    if (round2.x == roundBall2.x && round2.y == roundBall2.y) {
                        console.log("BallReachedPosition"); 
                        ballMoves = false;
                        hasRun = false;
                        goal = false;
                        }
                }
        }
        }

        moveWithOffset(_mousePos: Vector, _spread: number): Vector[] {
            hasRun = true;
            let spread: number = width / 110 * _spread * (activePlayerPrecision / 100);
            let newPosNeg: Vector = new Vector(createRandomNum(_mousePos.x, _mousePos.x - spread), createRandomNum(_mousePos.y, _mousePos.y - spread));
            let newPosPos: Vector = new Vector(createRandomNum(_mousePos.x, _mousePos.x + spread), createRandomNum(_mousePos.y, _mousePos.y + spread));
            let newPosAll: Vector = new Vector(createRandomNum(newPosNeg.x, newPosPos.x), createRandomNum(newPosNeg.y, newPosPos.y));
            let newPos: Vector = new Vector(newPosAll.x, newPosAll.y);
            let difference2: Vector = Vector.getDifference(newPos, this.position);
            let offset2: Vector = new Vector(difference2.x, difference2.y);
            return [offset2, newPos];
        }

        goal(): void {
            if (this.position.x <= canvas.width / 110 * 5 && this.position.y < canvas.height / 2 + 40 && this.position.y > canvas.height / 2 - 40) {
                goal = true;
                this.handleGoal("team2");
            }

            if (this.position.x >= canvas.width / 110 * 100 && this.position.y < canvas.height / 2 + 40 && this.position.y > canvas.height / 2 - 40) {
                goal = true;
                this.handleGoal("team1");
            }
        }

        handleGoal(_team: string): void {
            if (_team == "team2") {
                console.log(goal, this.start);
                this.position = new Vector (this.start.x, this.start.y);
                this.applaus.play();
                goalsT2.push(1);
                scoreBoard.innerHTML = "Team 1: " + goalsT1.length + " : " + " Team 2: " + goalsT2.length;
                hasRun = false;
            }   
            if (_team == "team1") {
                console.log("goalForTeam right Team1");
                this.applaus.play();
                goalsT1.push(1);
                this.position = new Vector (this.start.x, this.start.y);
                scoreBoard.innerHTML = "Team 1: " + goalsT1.length + " : " + " Team 2: " + goalsT2.length;
                hasRun = false;
            }
    }

        draw(): void {
            drawBall(this.position);
        }
    }
}