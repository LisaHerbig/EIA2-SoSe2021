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
            if (_event && Endaufgabe_FußballSiumulation.stopDifference == false) {
                let rect = Endaufgabe_FußballSiumulation.canvas.getBoundingClientRect();
                let x = _event.clientX - rect.left;
                let y = _event.clientY - rect.top;
                let mousePos = new Endaufgabe_FußballSiumulation.Vector(x, y);
                let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(mousePos, this.position);
                let offset = new Endaufgabe_FußballSiumulation.Vector(difference.x, difference.y);
                let length = offset.length;
                switch (true) {
                    case (length < (Endaufgabe_FußballSiumulation.width / 110 * 10.5)):
                        this.moveWithOfset(mousePos, 3);
                        //newBallPos = false;
                        break;
                    case (length < (Endaufgabe_FußballSiumulation.width / 110 * 21.5)):
                        this.moveWithOfset(mousePos, 10);
                        break;
                    case (length < (Endaufgabe_FußballSiumulation.width / 2)):
                        this.moveWithOfset(mousePos, 20);
                        break;
                    case (length < (Endaufgabe_FußballSiumulation.width / 110 * 88.5)):
                        this.moveWithOfset(mousePos, 35);
                        break;
                    case (length < (Endaufgabe_FußballSiumulation.width / 110 * 110)):
                        this.moveWithOfset(mousePos, 50);
                        break;
                    default:
                        console.log("something went wrong");
                }
                let ballPositionRound = new Endaufgabe_FußballSiumulation.Vector(Math.round(this.position.x), Math.round(this.position.y));
                let mousePositionRound = new Endaufgabe_FußballSiumulation.Vector(Math.round(mousePos.x), Math.round(mousePos.y));
                if (ballPositionRound.x == mousePositionRound.x && ballPositionRound.y == mousePositionRound.y) {
                    Endaufgabe_FußballSiumulation.ballMoves = false;
                }
            }
        }
        moveWithOfset(_mousePos, _spread) {
            let spread = Endaufgabe_FußballSiumulation.width / 110 * _spread * (Endaufgabe_FußballSiumulation.activePlayerPrecision / 100);
            let newPos = new Endaufgabe_FußballSiumulation.Vector(_mousePos.x + spread, _mousePos.y + spread);
            let difference2 = Endaufgabe_FußballSiumulation.Vector.getDifference(newPos, this.position);
            let offset2 = new Endaufgabe_FußballSiumulation.Vector(difference2.x, difference2.y);
            offset2.scale(1 / this.speed);
            this.position.add(offset2);
            let round2 = new Endaufgabe_FußballSiumulation.Vector(Math.round(newPos.x), Math.round(newPos.y));
            let roundBall2 = new Endaufgabe_FußballSiumulation.Vector(Math.round(this.position.x), Math.round(this.position.y));
            if (round2.x == roundBall2.x && round2.y == roundBall2.y) {
                console.log("BallReachedPosition");
                Endaufgabe_FußballSiumulation.ballMoves = false;
            }
        }
        goal() {
            if (this.position.x <= Endaufgabe_FußballSiumulation.canvas.width / 110 * 5 && this.position.y < Endaufgabe_FußballSiumulation.canvas.height / 2 + 40 && this.position.y > Endaufgabe_FußballSiumulation.canvas.height / 2 - 40) {
                Endaufgabe_FußballSiumulation.goal = true;
                Endaufgabe_FußballSiumulation.stopDifference = true;
                this.position = this.start;
                this.handleGoal("team2");
            }
            if (this.position.x >= Endaufgabe_FußballSiumulation.canvas.width / 110 * 100 && this.position.y < Endaufgabe_FußballSiumulation.canvas.height / 2 + 40 && this.position.y > Endaufgabe_FußballSiumulation.canvas.height / 2 - 40) {
                Endaufgabe_FußballSiumulation.goal = true;
                Endaufgabe_FußballSiumulation.stopDifference = true;
                this.position = this.start;
                this.handleGoal("team1");
            }
        }
        handleGoal(_team) {
            if (_team == "team2") {
                console.log("goalForTeam left Team2");
                this.position = this.start;
                this.applaus.play();
                Endaufgabe_FußballSiumulation.goalsT2.push(1);
                Endaufgabe_FußballSiumulation.scoreBoard.innerHTML = "Team 1: " + Endaufgabe_FußballSiumulation.goalsT1.length + " : " + " Team 2: " + Endaufgabe_FußballSiumulation.goalsT2.length;
                Endaufgabe_FußballSiumulation.goal = false;
                //stopDifference = false;
            }
            if (_team == "team1") {
                console.log("goalForTeam right Team1");
                this.applaus.play();
                Endaufgabe_FußballSiumulation.goalsT1.push(1);
                this.position = this.start;
                Endaufgabe_FußballSiumulation.scoreBoard.innerHTML = "Team 1: " + Endaufgabe_FußballSiumulation.goalsT1.length + " : " + " Team 2: " + Endaufgabe_FußballSiumulation.goalsT2.length;
                Endaufgabe_FußballSiumulation.goal = false;
                //stopDifference = false;
            }
        }
        draw() {
            Endaufgabe_FußballSiumulation.drawBall(this.position);
        }
    }
    Endaufgabe_FußballSiumulation.Ball = Ball;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Ball.js.map