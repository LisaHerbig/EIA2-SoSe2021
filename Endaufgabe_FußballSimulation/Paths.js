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
        //Straffraum Linie links
        Endaufgabe_FußballSiumulation.crc2.save();
        Endaufgabe_FußballSiumulation.crc2.beginPath();
        Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 5, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 110);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 21.5, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 110);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 21.5, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 110);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 5, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 110);
        Endaufgabe_FußballSiumulation.crc2.closePath();
        Endaufgabe_FußballSiumulation.crc2.strokeStyle = "white";
        Endaufgabe_FußballSiumulation.crc2.lineWidth = 5;
        Endaufgabe_FußballSiumulation.crc2.stroke();
        Endaufgabe_FußballSiumulation.crc2.restore();
        //Torraum Linie links
        Endaufgabe_FußballSiumulation.crc2.save();
        Endaufgabe_FußballSiumulation.crc2.beginPath();
        Endaufgabe_FußballSiumulation.crc2.moveTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 5, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 50);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 10.5, (Endaufgabe_FußballSiumulation.canvas.height / 2) + 50);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 10.5, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 50);
        Endaufgabe_FußballSiumulation.crc2.lineTo(Endaufgabe_FußballSiumulation.canvas.width / 110 * 5, (Endaufgabe_FußballSiumulation.canvas.height / 2) - 50);
        Endaufgabe_FußballSiumulation.crc2.closePath();
        Endaufgabe_FußballSiumulation.crc2.strokeStyle = "white";
        Endaufgabe_FußballSiumulation.crc2.lineWidth = 5;
        Endaufgabe_FußballSiumulation.crc2.stroke();
        Endaufgabe_FußballSiumulation.crc2.restore();
        //Bogen über Straffraum
        Endaufgabe_FußballSiumulation.crc2.save();
        Endaufgabe_FußballSiumulation.crc2.beginPath();
        Endaufgabe_FußballSiumulation.crc2.arc(Endaufgabe_FußballSiumulation.canvas.width / 110 * 21.5, Endaufgabe_FußballSiumulation.canvas.height / 2, 50, 90 * (Math.PI / 180), 270 * (Math.PI / 180), true);
        Endaufgabe_FußballSiumulation.crc2.closePath();
        Endaufgabe_FußballSiumulation.crc2.strokeStyle = "white";
        Endaufgabe_FußballSiumulation.crc2.lineWidth = 5;
        Endaufgabe_FußballSiumulation.crc2.stroke();
        Endaufgabe_FußballSiumulation.crc2.restore();
    }
    Endaufgabe_FußballSiumulation.drawField = drawField;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Paths.js.map