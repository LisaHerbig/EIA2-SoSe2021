"use strict";
var Canvas_Lektion;
(function (Canvas_Lektion) {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    crc2.fillStyle = "#FF0000";
    crc2.fillRect(100, 0, crc2.canvas.width, crc2.canvas.height);
    //Arc
    crc2.beginPath();
    crc2.ellipse(150, 100, 20, 20, Math.PI / 5, 0, 2 * Math.PI);
    //crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
    //crc2.closePath();
    crc2.moveTo(150, 100);
    crc2.lineTo(200, 100);
    crc2.lineTo(150, 50);
    crc2.lineTo(150, 100);
    crc2.strokeStyle = "#0000FF";
    crc2.stroke();
    //Farbe
    let gradient = crc2.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, "black");
    gradient.addColorStop(.2, "black");
    gradient.addColorStop(.4, "red");
    gradient.addColorStop(.5, "red");
    gradient.addColorStop(.6, "red");
    gradient.addColorStop(.7, "gold");
    gradient.addColorStop(1, "gold");
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, 200, 100);
    //Pattern
    let pattern = document.createElement("canvas").getContext("2d");
    pattern.canvas.width = 40;
    pattern.canvas.height = 20;
    pattern.fillStyle = "#fec";
    pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
    pattern.moveTo(0, 10);
    pattern.lineTo(10, 10);
    pattern.lineTo(20, 0);
    pattern.lineTo(30, 0);
    pattern.lineTo(40, 10);
    pattern.lineTo(30, 20);
    pattern.lineTo(20, 20);
    pattern.lineTo(10, 10);
    pattern.stroke();
    crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
    crc2.fillRect(0, 0, canvas.width, canvas.height);
})(Canvas_Lektion || (Canvas_Lektion = {}));
//# sourceMappingURL=Lektion.js.map