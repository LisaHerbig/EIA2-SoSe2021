"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    class Ball extends Endaufgabe_FußballSiumulation.Moveable {
        constructor(_position) {
            super(_position);
            this.start = new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 2, Endaufgabe_FußballSiumulation.height / 2);
            this.speed = 50;
            this.position = _position;
        }
        move(_event) {
            console.log("Ball moves towards click position");
            if (_event) {
                let x = _event.clientX;
                let y = _event.clientY;
                let clickPosition = new Endaufgabe_FußballSiumulation.Vector(x, y);
                let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(clickPosition, this.position);
                let length = difference.length / 10;
                let offset = new Endaufgabe_FußballSiumulation.Vector(difference.x, difference.y);
                offset.scale(1 / this.speed);
                console.log(length / 10);
                if (length > 55) {
                    console.log("Radius muss super groß sein");
                }
                if (length > 30) {
                    console.log("Radius muss groß sein");
                }
                if (length < 30) {
                    this.position.add(offset);
                    //imation = true;
                    console.log("Radius smaller");
                    if (length < 25) {
                        console.log("smaller");
                        if (length < 10) {
                            console.log("Super small");
                        }
                    }
                }
            }
        }
        draw() {
            Endaufgabe_FußballSiumulation.drawBall(this.position);
        }
    }
    Endaufgabe_FußballSiumulation.Ball = Ball;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Ball.js.map