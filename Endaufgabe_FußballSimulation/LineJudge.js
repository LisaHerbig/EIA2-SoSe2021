"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    class LineJudge extends Endaufgabe_FußballSiumulation.Moveable {
        constructor(_position, _color) {
            super(_position);
            this.typ = "lineJudge";
            this.position = _position;
            this.color = _color;
        }
        move() {
            console.log("Referee moves towards ball with distance (or super-slow)");
        }
        draw() {
            Endaufgabe_FußballSiumulation.drawShirt(this.position, this.color, this.typ, "team2");
        }
    }
    Endaufgabe_FußballSiumulation.LineJudge = LineJudge;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=LineJudge.js.map