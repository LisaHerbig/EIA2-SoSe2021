"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    class Ball extends Endaufgabe_FußballSiumulation.Moveable {
        constructor(_position) {
            super(_position);
            this.start = new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 2, Endaufgabe_FußballSiumulation.height / 2);
            this.speed = 50;
            this.applaus = new Audio("Sounds/Applaus.wav");
            this.position = _position;
        }
        move(_event) {
            //console.log("Ball moves towards click position");  
            if (_event) {
                //let playerPrecision: number = Number(_activePlayer);
                let rect = Endaufgabe_FußballSiumulation.canvas.getBoundingClientRect();
                let x = _event.clientX - rect.left;
                let y = _event.clientY - rect.top;
                let mousePos = new Endaufgabe_FußballSiumulation.Vector(x, y);
                let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(mousePos, this.position);
                let offset = new Endaufgabe_FußballSiumulation.Vector(difference.x, difference.y);
                let length = offset.length;
                switch (true) {
                    case (length < (Endaufgabe_FußballSiumulation.width / 110 * 10.5)):
                        //let newPosA1: Vector[] = [];
                        //if (newBallPos == true) {
                        console.log("area1");
                        this.moveWithOfset(mousePos, 3);
                        Endaufgabe_FußballSiumulation.newBallPos = false;
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
                    case (length < (Endaufgabe_FußballSiumulation.width / 110 * 21.5)):
                        console.log("area2");
                        this.moveWithOfset(mousePos, 10);
                        break;
                    case (length < (Endaufgabe_FußballSiumulation.width / 2)):
                        console.log("area3");
                        this.moveWithOfset(mousePos, 20);
                        break;
                    case (length < (Endaufgabe_FußballSiumulation.width / 110 * 88.5)):
                        console.log("area4");
                        this.moveWithOfset(mousePos, 35);
                        break;
                    case (length < (Endaufgabe_FußballSiumulation.width / 110 * 110)):
                        console.log("area5");
                        this.moveWithOfset(mousePos, 50);
                        break;
                    default:
                        console.log("something went wrong");
                }
                //offset.scale(1 / this.speed);
                //this.position.add(offset);
                let ballPositionRound = new Endaufgabe_FußballSiumulation.Vector(Math.round(this.position.x), Math.round(this.position.y));
                let mousePositionRound = new Endaufgabe_FußballSiumulation.Vector(Math.round(mousePos.x), Math.round(mousePos.y));
                //console.log(ballPositionRound, playerPositionRound);
                if (ballPositionRound.x == mousePositionRound.x && ballPositionRound.y == mousePositionRound.y) {
                    Endaufgabe_FußballSiumulation.ballMoves = false;
                }
            }
        }
        moveWithOfset(_mousePos, _spread) {
            let spread = Endaufgabe_FußballSiumulation.width / 110 * _spread * (Endaufgabe_FußballSiumulation.activePlayerPrecision / 100);
            //newBallPos = false;
            let newPos = new Endaufgabe_FußballSiumulation.Vector(_mousePos.x + spread, _mousePos.y + spread);
            let difference2 = Endaufgabe_FußballSiumulation.Vector.getDifference(newPos, this.position);
            let offset2 = new Endaufgabe_FußballSiumulation.Vector(difference2.x, difference2.y);
            offset2.scale(1 / this.speed);
            this.position.add(offset2);
            console.log("BallPosition: ", this.position, "Spread", spread, "MousePos: ", _mousePos, "newPos: ", newPos);
            let round2 = new Endaufgabe_FußballSiumulation.Vector(Math.round(newPos.x), Math.round(newPos.y));
            let roundBall2 = new Endaufgabe_FußballSiumulation.Vector(Math.round(this.position.x), Math.round(this.position.y));
            console.log("roundPos newPos", round2, "roundBall", roundBall2);
            if (round2.x == roundBall2.x && round2.y == roundBall2.y) {
                console.log("BallReachedPosition");
                Endaufgabe_FußballSiumulation.ballMoves = false;
                //newBallPos = true;
            }
        }
        goal() {
            //let ballX: number = canvas.width / 110 * (this.position.x);
            //let ballY: number = canvas.height / 2 * (this.position.y);
            //if (this.position.x <= canvas.width / 110 * 5 && canvas.height / 2 + 40 < this.position.y && this.position.y < canvas.width / 2 - 40) {
            // console.log("goal for team left");
            //}
            if (this.position.x <= Endaufgabe_FußballSiumulation.canvas.width / 110 * 5 && this.position.y < Endaufgabe_FußballSiumulation.canvas.height / 2 + 40 && this.position.y > Endaufgabe_FußballSiumulation.canvas.height / 2 - 40) {
                Endaufgabe_FußballSiumulation.goal = true;
                this.handleGoal("team2");
                //this.position = this.start;
            }
            if (this.position.x >= Endaufgabe_FußballSiumulation.canvas.width / 110 * 100 && this.position.y < Endaufgabe_FußballSiumulation.canvas.height / 2 + 40 && this.position.y > Endaufgabe_FußballSiumulation.canvas.height / 2 - 40) {
                Endaufgabe_FußballSiumulation.goal = true;
                this.handleGoal("team1");
            }
            //console.log(this.position.x, this.position.y, "canvas width", canvas.width / 110 * 5, "canvasheight", canvas.height / 2 + 40);
        }
        handleGoal(_team) {
            if (_team == "team2") {
                console.log("goalForTeam left Team2");
                this.position = this.start;
                this.applaus.play();
                Endaufgabe_FußballSiumulation.goalsT2.push(1);
                Endaufgabe_FußballSiumulation.scoreBoard.innerHTML = "Team 1: " + Endaufgabe_FußballSiumulation.goalsT1.length + " : " + " Team 2: " + Endaufgabe_FußballSiumulation.goalsT2.length;
                Endaufgabe_FußballSiumulation.goal = false;
            }
            if (_team == "team1") {
                console.log("goalForTeam right Team1");
                this.applaus.play();
                Endaufgabe_FußballSiumulation.goalsT1.push(1);
                this.position = this.start;
                Endaufgabe_FußballSiumulation.scoreBoard.innerHTML = "Team 1: " + Endaufgabe_FußballSiumulation.goalsT1.length + " : " + " Team 2: " + Endaufgabe_FußballSiumulation.goalsT2.length;
                Endaufgabe_FußballSiumulation.goal = false;
            }
        }
        draw() {
            Endaufgabe_FußballSiumulation.drawBall(this.position);
        }
    }
    Endaufgabe_FußballSiumulation.Ball = Ball;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Ball.js.map