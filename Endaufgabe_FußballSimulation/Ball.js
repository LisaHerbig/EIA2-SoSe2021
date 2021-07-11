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
            //console.log("Ball moves towards click position");  
            if (_event) {
                let rect = Endaufgabe_FußballSiumulation.canvas.getBoundingClientRect();
                let x = _event.clientX - rect.left;
                let y = _event.clientY - rect.top;
                let mousePos = new Endaufgabe_FußballSiumulation.Vector(x, y);
                let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(mousePos, this.position);
                let offset = new Endaufgabe_FußballSiumulation.Vector(difference.x, difference.y);
                offset.scale(1 / this.speed);
                this.position.add(offset);
                let ballPositionRound = new Endaufgabe_FußballSiumulation.Vector(Math.round(this.position.x), Math.round(this.position.y));
                let mousePositionRound = new Endaufgabe_FußballSiumulation.Vector(Math.round(mousePos.x), Math.round(mousePos.y));
                //console.log(ballPositionRound, playerPositionRound);
                if (ballPositionRound.x == mousePositionRound.x && ballPositionRound.y == mousePositionRound.y) {
                    //console.log("reachedBall", width / 110 * (0.1 *  mousePositionRound.x), width / 110 * mousePositionRound.y, ballPositionRound);
                    //console.log("Reached");
                    Endaufgabe_FußballSiumulation.ballMoves = false;
                    //let event: CustomEvent = new CustomEvent("first_player", {detail: {player: this}});
                    //crc2.canvas.dispatchEvent(event);
                    //this.displayBallPossession(this.nation, this.backNumber);
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