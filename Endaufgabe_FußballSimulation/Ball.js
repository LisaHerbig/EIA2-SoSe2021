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
                        console.log("area1");
                        let spread1 = Endaufgabe_FußballSiumulation.width / 110 * 3 * (Endaufgabe_FußballSiumulation.activePlayerPrecision / 100);
                        //let newX: number = 0;
                        //let newY: number = 0;
                        //if (newBallPos == true) {
                        //newX = createRandomNum(mousePos.x, (mousePos.x + spread));
                        //newY = createRandomNum(mousePos.y, (mousePos.y + spread));
                        //}
                        Endaufgabe_FußballSiumulation.newBallPos = false;
                        let newPos1 = new Endaufgabe_FußballSiumulation.Vector(mousePos.x + spread1, mousePos.y + spread1);
                        //newPosA1.push(newPos);
                        let difference1 = Endaufgabe_FußballSiumulation.Vector.getDifference(newPos1, this.position);
                        let offset1 = new Endaufgabe_FußballSiumulation.Vector(difference1.x, difference1.y);
                        offset1.scale(1 / this.speed);
                        this.position.add(offset1);
                        console.log("BallPosition: ", this.position, "Spread", spread1, "MousePos: ", mousePos, "newPos: ", newPos1);
                        let round1 = new Endaufgabe_FußballSiumulation.Vector(Math.round(newPos1.x), Math.round(newPos1.y));
                        let roundBall1 = new Endaufgabe_FußballSiumulation.Vector(Math.round(this.position.x), Math.round(this.position.y));
                        console.log("roundPos newPos", round1, "roundBall", roundBall1);
                        if (round1.x == roundBall1.x && round1.y == roundBall1.y) {
                            console.log("BallReachedPosition");
                            Endaufgabe_FußballSiumulation.ballMoves = false;
                            Endaufgabe_FußballSiumulation.newBallPos = true;
                            //newPosA1.length = 0;
                            //console.log("reachedBall"); 
                        }
                        break;
                    case (length < (Endaufgabe_FußballSiumulation.width / 110 * 21.5)):
                        console.log("area2");
                        let spread2 = Endaufgabe_FußballSiumulation.width / 110 * 10 * (Endaufgabe_FußballSiumulation.activePlayerPrecision / 100);
                        Endaufgabe_FußballSiumulation.newBallPos = false;
                        let newPos2 = new Endaufgabe_FußballSiumulation.Vector(mousePos.x + spread2, mousePos.y + spread2);
                        let difference2 = Endaufgabe_FußballSiumulation.Vector.getDifference(newPos2, this.position);
                        let offset2 = new Endaufgabe_FußballSiumulation.Vector(difference2.x, difference2.y);
                        offset2.scale(1 / this.speed);
                        this.position.add(offset2);
                        console.log("BallPosition: ", this.position, "Spread", spread2, "MousePos: ", mousePos, "newPos: ", newPos2);
                        let round2 = new Endaufgabe_FußballSiumulation.Vector(Math.round(newPos2.x), Math.round(newPos2.y));
                        let roundBall2 = new Endaufgabe_FußballSiumulation.Vector(Math.round(this.position.x), Math.round(this.position.y));
                        console.log("roundPos newPos", round2, "roundBall", roundBall2);
                        if (round2.x == roundBall2.x && round2.y == roundBall2.y) {
                            console.log("BallReachedPosition");
                            Endaufgabe_FußballSiumulation.ballMoves = false;
                            Endaufgabe_FußballSiumulation.newBallPos = true;
                        }
                        break;
                    case (length < (Endaufgabe_FußballSiumulation.width / 2)):
                        console.log("area3");
                        let spread3 = Endaufgabe_FußballSiumulation.width / 110 * 20 * (Endaufgabe_FußballSiumulation.activePlayerPrecision / 100);
                        Endaufgabe_FußballSiumulation.newBallPos = false;
                        let newPos3 = new Endaufgabe_FußballSiumulation.Vector(mousePos.x + spread3, mousePos.y + spread3);
                        let difference3 = Endaufgabe_FußballSiumulation.Vector.getDifference(newPos3, this.position);
                        let offset3 = new Endaufgabe_FußballSiumulation.Vector(difference3.x, difference3.y);
                        offset3.scale(1 / this.speed);
                        this.position.add(offset3);
                        console.log("BallPosition: ", this.position, "Spread", spread3, "MousePos: ", mousePos, "newPos: ", newPos3);
                        let round3 = new Endaufgabe_FußballSiumulation.Vector(Math.round(newPos3.x), Math.round(newPos3.y));
                        let roundBall3 = new Endaufgabe_FußballSiumulation.Vector(Math.round(this.position.x), Math.round(this.position.y));
                        console.log("roundPos newPos", round3, "roundBall", roundBall3);
                        if (round3.x == roundBall3.x && round3.y == roundBall3.y) {
                            console.log("BallReachedPosition");
                            Endaufgabe_FußballSiumulation.ballMoves = false;
                            Endaufgabe_FußballSiumulation.newBallPos = true;
                        }
                        break;
                    case (length < (Endaufgabe_FußballSiumulation.width / 110 * 88.5)):
                        console.log("area4");
                        let spread4 = Endaufgabe_FußballSiumulation.width / 110 * 35 * (Endaufgabe_FußballSiumulation.activePlayerPrecision / 100);
                        Endaufgabe_FußballSiumulation.newBallPos = false;
                        let newPos4 = new Endaufgabe_FußballSiumulation.Vector(mousePos.x + spread4, mousePos.y + spread4);
                        let difference4 = Endaufgabe_FußballSiumulation.Vector.getDifference(newPos4, this.position);
                        let offset4 = new Endaufgabe_FußballSiumulation.Vector(difference4.x, difference4.y);
                        offset4.scale(1 / this.speed);
                        this.position.add(offset4);
                        console.log("BallPosition: ", this.position, "Spread", spread4, "MousePos: ", mousePos, "newPos: ", newPos4);
                        let round4 = new Endaufgabe_FußballSiumulation.Vector(Math.round(newPos4.x), Math.round(newPos4.y));
                        let roundBall4 = new Endaufgabe_FußballSiumulation.Vector(Math.round(this.position.x), Math.round(this.position.y));
                        console.log("roundPos newPos", round4, "roundBall", roundBall4);
                        if (round4.x == roundBall4.x && round4.y == roundBall4.y) {
                            console.log("BallReachedPosition");
                            Endaufgabe_FußballSiumulation.ballMoves = false;
                            Endaufgabe_FußballSiumulation.newBallPos = true;
                        }
                        break;
                    case (length < (Endaufgabe_FußballSiumulation.width / 110 * 110)):
                        console.log("area5");
                        let spread5 = Endaufgabe_FußballSiumulation.width / 110 * 50 * (Endaufgabe_FußballSiumulation.activePlayerPrecision / 100);
                        Endaufgabe_FußballSiumulation.newBallPos = false;
                        let newPos5 = new Endaufgabe_FußballSiumulation.Vector(mousePos.x + spread5, mousePos.y + spread5);
                        let difference5 = Endaufgabe_FußballSiumulation.Vector.getDifference(newPos5, this.position);
                        let offset5 = new Endaufgabe_FußballSiumulation.Vector(difference5.x, difference5.y);
                        offset5.scale(1 / this.speed);
                        this.position.add(offset5);
                        console.log("BallPosition: ", this.position, "Spread", spread5, "MousePos: ", mousePos, "newPos: ", newPos5);
                        let round5 = new Endaufgabe_FußballSiumulation.Vector(Math.round(newPos5.x), Math.round(newPos5.y));
                        let roundBall5 = new Endaufgabe_FußballSiumulation.Vector(Math.round(this.position.x), Math.round(this.position.y));
                        console.log("roundPos newPos", round5, "roundBall", roundBall5);
                        if (round5.x == roundBall5.x && round5.y == roundBall5.y) {
                            console.log("BallReachedPosition");
                            Endaufgabe_FußballSiumulation.ballMoves = false;
                            Endaufgabe_FußballSiumulation.newBallPos = true;
                        }
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