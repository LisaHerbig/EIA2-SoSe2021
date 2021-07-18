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
            console.log(this.start);
        }
        move(_event) {
            if (_event) {
                let rect = Endaufgabe_FußballSiumulation.canvas.getBoundingClientRect();
                let x = _event.clientX - rect.left;
                let y = _event.clientY - rect.top;
                let newPos;
                if (Endaufgabe_FußballSiumulation.goal == true) {
                    x = this.start.x;
                    y = this.start.y;
                }
                let mousePos = new Endaufgabe_FußballSiumulation.Vector(x, y);
                let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(mousePos, this.position);
                let offset = new Endaufgabe_FußballSiumulation.Vector(difference.x, difference.y);
                let length = offset.length;
                if (Endaufgabe_FußballSiumulation.hasRun == false) {
                    switch (true) {
                        case (length == 0):
                            console.log("length = ", length);
                            break;
                        case (length < (Endaufgabe_FußballSiumulation.width / 110 * 10.5)):
                            Endaufgabe_FußballSiumulation.spreading = this.moveWithOffset(mousePos, 3);
                            break;
                        case (length < (Endaufgabe_FußballSiumulation.width / 110 * 21.5)):
                            Endaufgabe_FußballSiumulation.spreading = this.moveWithOffset(mousePos, 15);
                            break;
                        case (length < (Endaufgabe_FußballSiumulation.width / 2)):
                            Endaufgabe_FußballSiumulation.spreading = this.moveWithOffset(mousePos, 30);
                            break;
                        case (length < (Endaufgabe_FußballSiumulation.width / 110 * 88.5)):
                            Endaufgabe_FußballSiumulation.spreading = this.moveWithOffset(mousePos, 50);
                            break;
                        case (length < (Endaufgabe_FußballSiumulation.width / 110 * 110)):
                            Endaufgabe_FußballSiumulation.spreading = this.moveWithOffset(mousePos, 70);
                            break;
                        default:
                            console.log("something went wrong");
                    }
                }
                if (Endaufgabe_FußballSiumulation.spreading) {
                    newPos = Endaufgabe_FußballSiumulation.spreading[1];
                }
                if (newPos != null) {
                    let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(newPos, this.position);
                    let newOffset = new Endaufgabe_FußballSiumulation.Vector(difference.x, difference.y);
                    newOffset.scale(1 / this.speed);
                    this.position.add(newOffset);
                    let round2 = new Endaufgabe_FußballSiumulation.Vector(Math.round(newPos.x), Math.round(newPos.y));
                    let roundBall2 = new Endaufgabe_FußballSiumulation.Vector(Math.round(this.position.x), Math.round(this.position.y));
                    if (round2.x == roundBall2.x && round2.y == roundBall2.y) {
                        console.log("BallReachedPosition");
                        Endaufgabe_FußballSiumulation.ballMoves = false;
                        Endaufgabe_FußballSiumulation.hasRun = false;
                        Endaufgabe_FußballSiumulation.goal = false;
                    }
                }
            }
        }
        moveWithOffset(_mousePos, _spread) {
            Endaufgabe_FußballSiumulation.hasRun = true;
            let spread = Endaufgabe_FußballSiumulation.width / 110 * _spread * (Endaufgabe_FußballSiumulation.activePlayerPrecision / 100);
            function getNewPos() {
                let newPosNeg = new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.createRandomNum(_mousePos.x, _mousePos.x - spread), Endaufgabe_FußballSiumulation.createRandomNum(_mousePos.y, _mousePos.y - spread));
                let newPosPos = new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.createRandomNum(_mousePos.x, _mousePos.x + spread), Endaufgabe_FußballSiumulation.createRandomNum(_mousePos.y, _mousePos.y + spread));
                let newPosAll = new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.createRandomNum(newPosNeg.x, newPosPos.x), Endaufgabe_FußballSiumulation.createRandomNum(newPosNeg.y, newPosPos.y));
                let newPos = new Endaufgabe_FußballSiumulation.Vector(newPosAll.x, newPosAll.y);
                return newPos;
            }
            let newPosNeg = new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.createRandomNum(_mousePos.x, _mousePos.x - spread), Endaufgabe_FußballSiumulation.createRandomNum(_mousePos.y, _mousePos.y - spread));
            let newPosPos = new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.createRandomNum(_mousePos.x, _mousePos.x + spread), Endaufgabe_FußballSiumulation.createRandomNum(_mousePos.y, _mousePos.y + spread));
            let newPosAll = new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.createRandomNum(newPosNeg.x, newPosPos.x), Endaufgabe_FußballSiumulation.createRandomNum(newPosNeg.y, newPosPos.y));
            let newPos = new Endaufgabe_FußballSiumulation.Vector(newPosAll.x, newPosAll.y);
            let difference2 = Endaufgabe_FußballSiumulation.Vector.getDifference(newPos, this.position);
            let offset2 = new Endaufgabe_FußballSiumulation.Vector(difference2.x, difference2.y);
            if (newPos.x < 0 || newPos.x > Endaufgabe_FußballSiumulation.width || newPos.y < 0 || newPos.y > Endaufgabe_FußballSiumulation.height) {
                getNewPos();
            }
            return [offset2, newPos];
        }
        goal() {
            if (this.position.x <= Endaufgabe_FußballSiumulation.canvas.width / 110 * 5 && this.position.y < Endaufgabe_FußballSiumulation.canvas.height / 2 + 40 && this.position.y > Endaufgabe_FußballSiumulation.canvas.height / 2 - 40) {
                Endaufgabe_FußballSiumulation.goal = true;
                this.handleGoal("team2");
            }
            if (this.position.x >= Endaufgabe_FußballSiumulation.canvas.width / 110 * 100 && this.position.y < Endaufgabe_FußballSiumulation.canvas.height / 2 + 40 && this.position.y > Endaufgabe_FußballSiumulation.canvas.height / 2 - 40) {
                Endaufgabe_FußballSiumulation.goal = true;
                this.handleGoal("team1");
            }
        }
        handleGoal(_team) {
            if (_team == "team2") {
                console.log(Endaufgabe_FußballSiumulation.goal, this.start);
                this.position = new Endaufgabe_FußballSiumulation.Vector(this.start.x, this.start.y);
                this.applaus.play();
                Endaufgabe_FußballSiumulation.goalsT2.push(1);
                Endaufgabe_FußballSiumulation.scoreBoard.innerHTML = "Team 1: " + Endaufgabe_FußballSiumulation.goalsT1.length + " : " + " Team 2: " + Endaufgabe_FußballSiumulation.goalsT2.length;
                Endaufgabe_FußballSiumulation.hasRun = false;
            }
            if (_team == "team1") {
                console.log("goalForTeam right Team1");
                this.applaus.play();
                Endaufgabe_FußballSiumulation.goalsT1.push(1);
                this.position = new Endaufgabe_FußballSiumulation.Vector(this.start.x, this.start.y);
                Endaufgabe_FußballSiumulation.scoreBoard.innerHTML = "Team 1: " + Endaufgabe_FußballSiumulation.goalsT1.length + " : " + " Team 2: " + Endaufgabe_FußballSiumulation.goalsT2.length;
                Endaufgabe_FußballSiumulation.hasRun = false;
            }
            let event = new CustomEvent("startAgain");
            Endaufgabe_FußballSiumulation.crc2.canvas.dispatchEvent(event);
        }
        draw() {
            Endaufgabe_FußballSiumulation.drawBall(this.position);
        }
    }
    Endaufgabe_FußballSiumulation.Ball = Ball;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Ball.js.map