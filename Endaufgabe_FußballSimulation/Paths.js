"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    function drawField() {
        Endaufgabe_FußballSiumulation.crc2.fillStyle = "green";
        Endaufgabe_FußballSiumulation.crc2.fillRect(0, 0, Endaufgabe_FußballSiumulation.canvas.width, Endaufgabe_FußballSiumulation.canvas.height);
        //Außenlinie
        Endaufgabe_FußballSiumulation.crc2.save();
        Endaufgabe_FußballSiumulation.crc2.beginPath();
        Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 5, Endaufgabe_FußballSiumulation.canvas.height / 75 * 5);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 105, Endaufgabe_FußballSiumulation.canvas.height / 75 * 5);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 105, Endaufgabe_FußballSiumulation.canvas.height / 75 * 70);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 5, Endaufgabe_FußballSiumulation.canvas.height / 75 * 70);
        Endaufgabe_FußballSiumulation.crc2.closePath();
        Endaufgabe_FußballSiumulation.crc2.strokeStyle = "white";
        Endaufgabe_FußballSiumulation.crc2.lineWidth = 5;
        Endaufgabe_FußballSiumulation.crc2.stroke();
        Endaufgabe_FußballSiumulation.crc2.restore();
        //Mittellinie
        Endaufgabe_FußballSiumulation.crc2.save();
        Endaufgabe_FußballSiumulation.crc2.beginPath();
        Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 2, Endaufgabe_FußballSiumulation.canvas.height / 75 * 5);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 2, Endaufgabe_FußballSiumulation.canvas.height / 75 * 70);
        Endaufgabe_FußballSiumulation.crc2.closePath();
        Endaufgabe_FußballSiumulation.crc2.strokeStyle = "white";
        Endaufgabe_FußballSiumulation.crc2.lineWidth = 5;
        Endaufgabe_FußballSiumulation.crc2.stroke();
        Endaufgabe_FußballSiumulation.crc2.restore();
        //enger Kreis um Mittellinie
        Endaufgabe_FußballSiumulation.crc2.save();
        Endaufgabe_FußballSiumulation.crc2.beginPath();
        Endaufgabe_FußballSiumulation.crc2.arc(Endaufgabe_FußballSiumulation.canvas.width / 2, Endaufgabe_FußballSiumulation.canvas.height / 2, 4, 0, 2 * Math.PI);
        Endaufgabe_FußballSiumulation.crc2.strokeStyle = "white";
        Endaufgabe_FußballSiumulation.crc2.lineWidth = 5;
        Endaufgabe_FußballSiumulation.crc2.stroke();
        Endaufgabe_FußballSiumulation.crc2.restore();
        //Kreis um Mittellinie
        Endaufgabe_FußballSiumulation.crc2.save();
        Endaufgabe_FußballSiumulation.crc2.beginPath();
        Endaufgabe_FußballSiumulation.crc2.arc(Endaufgabe_FußballSiumulation.canvas.width / 2, Endaufgabe_FußballSiumulation.canvas.height / 2, Endaufgabe_FußballSiumulation.canvas.width / 110 * 9, 0, 2 * Math.PI);
        Endaufgabe_FußballSiumulation.crc2.closePath();
        Endaufgabe_FußballSiumulation.crc2.strokeStyle = "white";
        Endaufgabe_FußballSiumulation.crc2.lineWidth = 5;
        Endaufgabe_FußballSiumulation.crc2.stroke();
        Endaufgabe_FußballSiumulation.crc2.restore();
        function drawPenaltyArea(_outerLine, _distance) {
            Endaufgabe_FußballSiumulation.crc2.save();
            Endaufgabe_FußballSiumulation.crc2.beginPath();
            Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _outerLine, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 110);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 110);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 110);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _outerLine, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 110);
            Endaufgabe_FußballSiumulation.crc2.closePath();
            Endaufgabe_FußballSiumulation.crc2.strokeStyle = "white";
            Endaufgabe_FußballSiumulation.crc2.lineWidth = 5;
            Endaufgabe_FußballSiumulation.crc2.stroke();
            Endaufgabe_FußballSiumulation.crc2.restore();
        }
        //Links
        drawPenaltyArea(5, 21.5);
        //Rechts
        drawPenaltyArea(105, 88.5);
        function drawGoalArea(_outerLine, _distance) {
            Endaufgabe_FußballSiumulation.crc2.save();
            Endaufgabe_FußballSiumulation.crc2.beginPath();
            Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _outerLine, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 50);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 50);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 50);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _outerLine, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 50);
            Endaufgabe_FußballSiumulation.crc2.closePath();
            Endaufgabe_FußballSiumulation.crc2.strokeStyle = "white";
            Endaufgabe_FußballSiumulation.crc2.lineWidth = 5;
            Endaufgabe_FußballSiumulation.crc2.stroke();
            Endaufgabe_FußballSiumulation.crc2.restore();
        }
        //Links
        drawGoalArea(5, 10.5);
        //Rechts
        drawGoalArea(105, 99.5);
        function drawArcPentaltyArea(_start, _anticlockwise) {
            Endaufgabe_FußballSiumulation.crc2.save();
            Endaufgabe_FußballSiumulation.crc2.beginPath();
            Endaufgabe_FußballSiumulation.crc2.arc(Endaufgabe_FußballSiumulation.canvas.width / 110 * _start, Endaufgabe_FußballSiumulation.canvas.height / 2, 50, 90 * (Math.PI / 180), 270 * (Math.PI / 180), _anticlockwise);
            Endaufgabe_FußballSiumulation.crc2.closePath();
            Endaufgabe_FußballSiumulation.crc2.strokeStyle = "white";
            Endaufgabe_FußballSiumulation.crc2.lineWidth = 5;
            Endaufgabe_FußballSiumulation.crc2.stroke();
            Endaufgabe_FußballSiumulation.crc2.restore();
        }
        //Links
        drawArcPentaltyArea(21.5, true);
        //Rechts
        drawArcPentaltyArea(88.5, false);
        function drawPentaltySpot(_center) {
            Endaufgabe_FußballSiumulation.crc2.save();
            Endaufgabe_FußballSiumulation.crc2.beginPath();
            Endaufgabe_FußballSiumulation.crc2.arc(Endaufgabe_FußballSiumulation.canvas.width / 110 * _center, Endaufgabe_FußballSiumulation.canvas.height / 2, 4, 0, 360);
            Endaufgabe_FußballSiumulation.crc2.closePath();
            Endaufgabe_FußballSiumulation.crc2.fillStyle = "white";
            Endaufgabe_FußballSiumulation.crc2.lineWidth = 5;
            Endaufgabe_FußballSiumulation.crc2.fill();
            Endaufgabe_FußballSiumulation.crc2.restore();
        }
        //Links
        drawPentaltySpot(15.75);
        //Rechts
        drawPentaltySpot(94.25);
        function drawGoal(_outerLine, _end) {
            Endaufgabe_FußballSiumulation.crc2.save();
            Endaufgabe_FußballSiumulation.crc2.beginPath();
            Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _outerLine, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 40);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _end, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 40);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _end, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 40);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _outerLine, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 40);
            Endaufgabe_FußballSiumulation.crc2.closePath();
            Endaufgabe_FußballSiumulation.crc2.strokeStyle = "white";
            Endaufgabe_FußballSiumulation.crc2.lineWidth = 5;
            Endaufgabe_FußballSiumulation.crc2.stroke();
            Endaufgabe_FußballSiumulation.crc2.restore();
        }
        //Links
        drawGoal(5, 1);
        //Rechts
        drawGoal(105, 109);
        function drawNet(_distance1, _distance2, _distance3, _distance4, _distance5) {
            Endaufgabe_FußballSiumulation.crc2.save();
            Endaufgabe_FußballSiumulation.crc2.beginPath();
            Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance2, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 40);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance2, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 40);
            Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance3, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 40);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance3, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 40);
            Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance4, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 40);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance4, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 40);
            Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance1, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 20);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance5, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 20);
            Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance1, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 0);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance5, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 0);
            Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance1, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 20);
            Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * _distance5, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 20);
            Endaufgabe_FußballSiumulation.crc2.closePath();
            Endaufgabe_FußballSiumulation.crc2.strokeStyle = "white";
            Endaufgabe_FußballSiumulation.crc2.stroke();
            Endaufgabe_FußballSiumulation.crc2.restore();
        }
        //Links
        drawNet(1, 2, 3, 4, 5);
        //Rechts
        drawNet(109, 108, 107, 106, 105);
    }
    Endaufgabe_FußballSiumulation.drawField = drawField;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Paths.js.map