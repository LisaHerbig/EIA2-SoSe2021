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
            //console.log("LineJudgeMoves");
            let leftMax = Endaufgabe_FußballSiumulation.width / 110 * 5;
            let rightMax = Endaufgabe_FußballSiumulation.width / 110 * 100;
            //let y: number = height / 75 * 6.5;
            let moveX = Endaufgabe_FußballSiumulation.createRandomNum(leftMax, rightMax);
            let moveXDirection = Endaufgabe_FußballSiumulation.createRandomNum(-moveX, moveX);
            let position = new Endaufgabe_FußballSiumulation.Vector(moveXDirection, 0);
            position.scale(1 / this.speed);
            this.position.add(position);
            //console.log(this.position);
            if (this.position.x < 0)
                this.position.x += Endaufgabe_FußballSiumulation.crc2.canvas.width;
            //if (this.position.y < 0)
            //this.position.y += crc2.canvas.height;
            if (this.position.x > Endaufgabe_FußballSiumulation.crc2.canvas.width)
                this.position.x -= Endaufgabe_FußballSiumulation.crc2.canvas.width;
            //if (this.position.y > crc2.canvas.height)
            //this.position.y -= crc2.canvas.height;
        }
        draw() {
            Endaufgabe_FußballSiumulation.drawShirt(this.position, this.color, this.typ, "team2");
        }
    }
    Endaufgabe_FußballSiumulation.LineJudge = LineJudge;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=LineJudge.js.map