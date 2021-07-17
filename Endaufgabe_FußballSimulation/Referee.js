"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    class Referee extends Endaufgabe_FußballSiumulation.Moveable {
        constructor(_position, _color) {
            super(_position);
            this.speed = 150;
            this.typ = "referee";
            this.whistle = new Audio("Sounds/Whistle.wav");
            this.position = _position;
            this.color = _color;
        }
        move() {
            //console.log("Referee moves towards ball with distance (or super-slow)");
            let xleftMax = Endaufgabe_FußballSiumulation.width / 21.5;
            let xrightMax = Endaufgabe_FußballSiumulation.width / 110 * 78.5;
            let moveX = Endaufgabe_FußballSiumulation.createRandomNum(xleftMax, xrightMax);
            let moveXDirection = Endaufgabe_FußballSiumulation.createRandomNum(-moveX, moveX);
            let xtopMax = Endaufgabe_FußballSiumulation.canvas.height / 2 + 110;
            let xBottomMax = Endaufgabe_FußballSiumulation.canvas.height / 2 + 110;
            let moveY = Endaufgabe_FußballSiumulation.createRandomNum(xtopMax, xBottomMax);
            let moveYDirection = Endaufgabe_FußballSiumulation.createRandomNum(-moveY, moveY);
            let position = new Endaufgabe_FußballSiumulation.Vector(moveXDirection, moveYDirection);
            position.scale(1 / this.speed);
            this.position.add(position);
            //if (this.position.x < 0)
            //this.position.x += crc2.canvas.width;
            //if (this.position.x > crc2.canvas.width)
            //this.position.x -= crc2.canvas.width;
        }
        playWhistle() {
            this.whistle.play();
        }
        draw() {
            Endaufgabe_FußballSiumulation.drawShirt(this.position, this.color, this.typ, "team2");
        }
    }
    Endaufgabe_FußballSiumulation.Referee = Referee;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Referee.js.map