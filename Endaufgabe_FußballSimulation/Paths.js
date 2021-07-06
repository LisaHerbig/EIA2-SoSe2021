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
        //Straffraum Linie links
        /*crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 5, (canvas.height / 2) + 110);
        crc2.lineTo(canvas.width / 110 * 21.5, (canvas.height / 2) + 110);
        crc2.lineTo(canvas.width / 110 * 21.5, (canvas.height / 2) - 110);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) - 110);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/
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
        //Torraum Linie links
        /*crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 5, (canvas.height / 2) + 50);
        crc2.lineTo(canvas.width / 110 * 10.5, (canvas.height / 2) + 50);
        crc2.lineTo(canvas.width / 110 * 10.5, (canvas.height / 2) - 50);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) - 50);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/
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
        //Bogen über Straffraum links
        /*crc2.save();
        crc2.beginPath();
        crc2.arc(canvas.width / 110 * 21.5, canvas.height / 2, 50, 90 * (Math.PI / 180), 270 * (Math.PI / 180), true);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/
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
        //Elfmeter Punkt (jedenfalls fast) links
        /*crc2.save();
        crc2.beginPath();
        crc2.arc(canvas.width / 110 * 15.75, canvas.height / 2, 4, 0, 360);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.lineWidth = 5;
        crc2.fill();
        crc2.restore();*/
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
        //Tor links
        /*crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 5, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 1, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 1, (canvas.height / 2) - 40);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) - 40);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/
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
        //Netz Tor
        /*crc2.save();
        crc2.beginPath();
        crc2.moveTo (canvas.width / 110 * 2, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 2, (canvas.height / 2) - 40);
        crc2.moveTo(canvas.width / 110 * 3, (canvas.height / 2) - 40);
        crc2.lineTo (canvas.width / 110 * 3, (canvas.height / 2) + 40);
        crc2.moveTo(canvas.width / 110 * 4, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 4, (canvas.height / 2) - 40);
        crc2.moveTo(canvas.width / 110 * 1, (canvas.height / 2) + 20);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) + 20);
        crc2.moveTo(canvas.width / 110 * 1, (canvas.height / 2) + 0);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) + 0);
        crc2.moveTo(canvas.width / 110 * 1, (canvas.height / 2) - 20);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) - 20);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.restore();*/
        //Straffraum Linie rechts
        /*crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 105, (canvas.height / 2) + 110);
        crc2.lineTo(canvas.width / 110 * 88.5, (canvas.height / 2) + 110);
        crc2.lineTo(canvas.width / 110 * 88.5, (canvas.height / 2) - 110);
        crc2.lineTo(canvas.width / 110 * 105, (canvas.height / 2) - 110);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/
        //Torraum Linie rechts
        /*crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 105, (canvas.height / 2) + 50);
        crc2.lineTo(canvas.width / 110 * 99.5, (canvas.height / 2) + 50);
        crc2.lineTo(canvas.width / 110 * 99.5, (canvas.height / 2) - 50);
        crc2.lineTo(canvas.width / 110 * 105, (canvas.height / 2) - 50);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/
        //Bogen über Straffraum rechts
        /*crc2.save();
        crc2.beginPath();
        crc2.arc(canvas.width / 110 * 88.5, canvas.height / 2, 50, 90 * (Math.PI / 180), 270 * (Math.PI / 180), false);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/
        //Elfmeter Punkt (jedenfalls fast) rechts
        /*crc2.save();
        crc2.beginPath();
        crc2.arc(canvas.width / 110 * 94.25, canvas.height / 2, 4, 0, 360);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.lineWidth = 5;
        crc2.fill();
        crc2.restore();*/
        //Tor rechts
        /*crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 105, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 109, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 109, (canvas.height / 2) - 40);
        crc2.lineTo(canvas.width / 110 * 105, (canvas.height / 2) - 40);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/
        //Netz Tor rechts
        Endaufgabe_FußballSiumulation.crc2.save();
        Endaufgabe_FußballSiumulation.crc2.beginPath();
        Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 108, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 40);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 108, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 40);
        Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 107, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 40);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 107, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 40);
        Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 106, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 40);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 106, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 40);
        Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 109, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 20);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 105, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 20);
        Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 109, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 0);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 105, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 0);
        Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 109, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 20);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 105, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 20);
        Endaufgabe_FußballSiumulation.crc2.closePath();
        Endaufgabe_FußballSiumulation.crc2.strokeStyle = "white";
        Endaufgabe_FußballSiumulation.crc2.stroke();
        Endaufgabe_FußballSiumulation.crc2.restore();
    }
    Endaufgabe_FußballSiumulation.drawField = drawField;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Paths.js.map