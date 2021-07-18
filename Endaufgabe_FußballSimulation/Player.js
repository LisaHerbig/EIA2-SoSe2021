"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    class Player extends Endaufgabe_FußballSiumulation.Moveable {
        constructor(_position, _home, _nation, _color, _backNumber, _team, _speed, _precision) {
            super(_position);
            this.task = Endaufgabe_FußballSiumulation.TASK.STAND;
            this.type = "player";
            this.position = _position;
            this.home = _home;
            this.nation = _nation;
            this.jerseyColor = _color;
            this.backNumber = _backNumber;
            this.team = _team;
            this.speed = _speed;
            this.precision = _precision;
        }
        move(_ballPosition) {
            if (_ballPosition) {
                let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(_ballPosition, this.position);
                let offset = new Endaufgabe_FußballSiumulation.Vector(difference.x, difference.y);
                let length = offset.length;
                let normalise = Endaufgabe_FußballSiumulation.Vector.getNormalisedVector(offset, length);
                if (normalise) {
                    normalise.scale(1 / this.speed);
                    this.position.add(normalise);
                }
                let playerPositionRound = new Endaufgabe_FußballSiumulation.Vector(Math.round(this.position.x), Math.round(this.position.y));
                let ballPositionRound = new Endaufgabe_FußballSiumulation.Vector(Math.round(_ballPosition.x), Math.round(_ballPosition.y));
                if (playerPositionRound.x == ballPositionRound.x && playerPositionRound.y == ballPositionRound.y) {
                    Endaufgabe_FußballSiumulation.activePlayerPrecision = this.precision;
                    let event = new CustomEvent("first_player", { "detail": { player: this } });
                    Endaufgabe_FußballSiumulation.crc2.canvas.dispatchEvent(event);
                    this.displayBallPossession(this.nation, this.backNumber);
                }
            }
        }
        displayBallPossession(_nation, _backNumber) {
            Endaufgabe_FußballSiumulation.inPossession.innerHTML = _nation + " " + _backNumber + " im Ballbesitz";
        }
        displayInformation(_event) {
            let color = this.jerseyColor;
            let infoBox = document.createElement("div");
            infoBox.innerHTML = "Position: " + " x: " + Math.round(this.position.x) + ", y: " + Math.round(this.position.y) + "<br>" + "Origin: " + "x: " + Math.round(this.home.x) + " y: " + Math.round(this.home.y) + "<br>" + "Nation: " + this.nation + "<br>" + "Team: " + this.team + "<br>" + "Number: " + this.backNumber + "<br>" + "Speed: " + this.speed + "<br>" + "Precision: " + this.precision;
            infoBox.style.fontWeight = "bold";
            infoBox.style.fontSize = "100";
            infoBox.style.fontFamily = "Arial, Helvetica, sans-serif";
            infoBox.style.color = color;
            infoBox.style.backgroundColor = "white";
            if (color == "#ffffff") {
                infoBox.style.backgroundColor = "darkgrey";
            }
            document.body.appendChild(infoBox);
            setTimeout(function () {
                document.body.removeChild(infoBox);
            }, 5000);
        }
        draw() {
            Endaufgabe_FußballSiumulation.drawShirt(this.position, this.jerseyColor, this.type, this.team);
        }
        changeTask(_task, _ball) {
            if (_task)
                this.task = _task;
            switch (this.task) {
                case Endaufgabe_FußballSiumulation.TASK.STAND:
                    //console.log("stay");
                    break;
                case Endaufgabe_FußballSiumulation.TASK.MOVE:
                    this.move(_ball);
                    break;
                case Endaufgabe_FußballSiumulation.TASK.MOVEHOME:
                    this.moveHome();
                    break;
                default:
                    console.log("something went wrong");
            }
        }
        moveHome() {
            let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(this.home, this.position);
            let offset = new Endaufgabe_FußballSiumulation.Vector(difference.x, difference.y);
            offset.scale(1 / this.speed);
            this.position.add(offset);
            if (this.position.x == this.home.x && this.position.y == this.home.y) {
                Endaufgabe_FußballSiumulation.checkClose = true;
                this.stand();
            }
        }
        stand() {
            //console.log("stand"); 
        }
    }
    Endaufgabe_FußballSiumulation.Player = Player;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Player.js.map