"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    class Player extends Endaufgabe_FußballSiumulation.Moveable {
        constructor(_position, _home, _nation, _color, _backNumber, _team, _speed, _precision) {
            super(_position);
            this.type = "player";
            this.task = Endaufgabe_FußballSiumulation.TASK.STAND;
            this.position = _position;
            this.home = _home;
            this.nation = _nation;
            this.jerseyColor = _color;
            this.backNumber = _backNumber;
            this.team = _team;
            this.speed = _speed;
            this.precision = _precision;
            console.log("constructor", this.home, this.position);
            //this.radius = canvas.width / 110 * 30;
        }
        move(_ballPosition) {
            console.log("move", this.home, this.position);
            //console.log("_ballPosition, this.position");
            if (_ballPosition) {
                let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(_ballPosition, this.position);
                let offset = new Endaufgabe_FußballSiumulation.Vector(difference.x, difference.y);
                offset.scale(1 / this.speed);
                this.position.add(offset);
                let playerPositionRound = new Endaufgabe_FußballSiumulation.Vector(Math.round(this.position.x), Math.round(this.position.y));
                let ballPositionRound = new Endaufgabe_FußballSiumulation.Vector(Math.round(_ballPosition.x), Math.round(_ballPosition.y));
                //console.log(ballPositionRound, playerPositionRound);
                if (playerPositionRound.x == ballPositionRound.x && playerPositionRound.y == ballPositionRound.y) {
                    //console.log("reachedBall", ballPositionRound);
                    let event = new CustomEvent("first_player", { detail: { player: this } });
                    Endaufgabe_FußballSiumulation.crc2.canvas.dispatchEvent(event);
                    this.displayBallPossession(this.nation, this.backNumber);
                }
            }
            console.log("endeMove", this.home, this.position);
        }
        moveHome() {
            console.log("moving", this.home, this.position);
            let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(this.home, this.position);
            let offset = new Endaufgabe_FußballSiumulation.Vector(difference.x, difference.y);
            offset.scale(1 / this.speed);
            this.position.add(offset);
        }
        displayBallPossession(_nation, _backNumber) {
            Endaufgabe_FußballSiumulation.inPossession.innerHTML = _nation + " " + _backNumber + " im Ballbesitz";
        }
        stand() {
            console.log("stand");
        }
        draw() {
            Endaufgabe_FußballSiumulation.drawShirt(this.position, this.jerseyColor, this.type, this.team);
        }
        changeTask(_task, _ball) {
            if (_task)
                this.task = _task;
            switch (this.task) {
                case Endaufgabe_FußballSiumulation.TASK.STAND:
                    console.log("stay");
                    break;
                case Endaufgabe_FußballSiumulation.TASK.MOVE:
                    //console.log("moveToBallPosition");
                    this.move(_ball);
                    break;
                case Endaufgabe_FußballSiumulation.TASK.MOVEHOME:
                    //console.log("MoveBackToPosition");
                    this.moveHome();
                    break;
                default:
                    console.log("something went wrong");
            }
        }
    }
    Endaufgabe_FußballSiumulation.Player = Player;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Player.js.map