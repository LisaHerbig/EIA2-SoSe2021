"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    class Player extends Endaufgabe_FußballSiumulation.Moveable {
        constructor(_position, _nation, _color, _backNumber, _team, _speed, _precision) {
            super(_position);
            this.type = "player";
            this.task = Endaufgabe_FußballSiumulation.TASK.STAND;
            this.position = _position;
            this.nation = _nation;
            this.jerseyColor = _color;
            this.backNumber = _backNumber;
            this.team = _team;
            this.speed = _speed;
            this.precision = _precision;
            this.radius = Endaufgabe_FußballSiumulation.canvas.width / 110 * 30;
        }
        move() {
            console.log("Player moves evenly toward ball");
        }
        moveHome() {
            console.log("MoveHome");
        }
        stand() {
            console.log("stand");
        }
        draw() {
            Endaufgabe_FußballSiumulation.drawShirt(this.position, this.jerseyColor, this.type, this.team);
        }
        changeTask() {
            switch (this.task) {
                case Endaufgabe_FußballSiumulation.TASK.STAND:
                    console.log("stay");
                    break;
                case Endaufgabe_FußballSiumulation.TASK.MOVE:
                    console.log("moveToBallPosition");
                    break;
                case Endaufgabe_FußballSiumulation.TASK.MOVEHOME:
                    console.log("MoveBackToPosition");
                    break;
                default:
                    console.log("something went wrong");
            }
        }
    }
    Endaufgabe_FußballSiumulation.Player = Player;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Player.js.map