"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    class Ball extends Endaufgabe_FußballSiumulation.Moveable {
        constructor(_position) {
            super(_position);
            this.start = new Endaufgabe_FußballSiumulation.Vector(Endaufgabe_FußballSiumulation.width / 2, Endaufgabe_FußballSiumulation.height / 2);
            this.speed = 50;
            this.applaus = new Audio("Sounds/Applaus.wav");
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
        goal() {
            //let ballX: number = canvas.width / 110 * (this.position.x);
            //let ballY: number = canvas.height / 2 * (this.position.y);
            //if (this.position.x <= canvas.width / 110 * 5 && canvas.height / 2 + 40 < this.position.y && this.position.y < canvas.width / 2 - 40) {
            // console.log("goal for team left");
            //}
            if (this.position.x <= Endaufgabe_FußballSiumulation.canvas.width / 110 * 5 && this.position.y < Endaufgabe_FußballSiumulation.canvas.height / 2 + 40 && this.position.y > Endaufgabe_FußballSiumulation.canvas.height / 2 - 40) {
                console.log("goalForTeam left Team2");
                this.applaus.play();
                Endaufgabe_FußballSiumulation.goalsT2.push(1);
                Endaufgabe_FußballSiumulation.scoreBoard.innerHTML = "Team 1: " + Endaufgabe_FußballSiumulation.goalsT1.length + "Team 2: " + Endaufgabe_FußballSiumulation.goalsT2.length;
            }
            if (this.position.x >= Endaufgabe_FußballSiumulation.canvas.width / 110 * 100 && this.position.y < Endaufgabe_FußballSiumulation.canvas.height / 2 + 40 && this.position.y > Endaufgabe_FußballSiumulation.canvas.height / 2 - 40) {
                console.log("goalForTeam right Team1");
                this.applaus.play();
                Endaufgabe_FußballSiumulation.goalsT1.push(1);
                Endaufgabe_FußballSiumulation.scoreBoard.innerHTML = "Team 1: " + Endaufgabe_FußballSiumulation.goalsT1.length + "Team 2: " + Endaufgabe_FußballSiumulation.goalsT2.length;
            }
            console.log(this.position.x, this.position.y, "canvas width", Endaufgabe_FußballSiumulation.canvas.width / 110 * 5, "canvasheight", Endaufgabe_FußballSiumulation.canvas.height / 2 + 40);
        }
        draw() {
            Endaufgabe_FußballSiumulation.drawBall(this.position);
        }
    }
    Endaufgabe_FußballSiumulation.Ball = Ball;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Ball.js.map