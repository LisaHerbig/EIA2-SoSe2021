"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    class Referee extends Endaufgabe_FußballSiumulation.Moveable {
        constructor(_position, _color) {
            super(_position);
            this.typ = "referee";
            this.whistle = new Audio("Sounds/Whistle.wav");
            this.position = _position;
            this.color = _color;
        }
        move() {
            console.log("Referee moves towards ball with distance (or super-slow)");
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