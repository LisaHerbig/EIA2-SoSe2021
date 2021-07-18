"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    class LineJudge extends Endaufgabe_FußballSiumulation.Moveable {
        constructor(_position, _color) {
            super(_position);
            this.speed = 150;
            this.typ = "lineJudge";
            this.position = _position;
            this.color = _color;
        }
        move() {
            let leftMax = Endaufgabe_FußballSiumulation.width / 110 * 5;
            let rightMax = Endaufgabe_FußballSiumulation.width / 110 * 100;
            let moveX = Endaufgabe_FußballSiumulation.createRandomNum(leftMax, rightMax);
            let moveXDirection = Endaufgabe_FußballSiumulation.createRandomNum(-moveX, moveX);
            let position = new Endaufgabe_FußballSiumulation.Vector(moveXDirection, 0);
            position.scale(1 / this.speed);
            this.position.add(position);
            if (this.position.x < 0)
                this.position.x += Endaufgabe_FußballSiumulation.crc2.canvas.width;
            if (this.position.x > Endaufgabe_FußballSiumulation.crc2.canvas.width)
                this.position.x -= Endaufgabe_FußballSiumulation.crc2.canvas.width;
        }
        draw() {
            Endaufgabe_FußballSiumulation.drawShirt(this.position, this.color, this.typ, "team2");
        }
    }
    Endaufgabe_FußballSiumulation.LineJudge = LineJudge;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=LineJudge.js.map