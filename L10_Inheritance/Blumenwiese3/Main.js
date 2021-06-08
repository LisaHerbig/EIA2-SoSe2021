"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    /*
   Aufgabe: L09.2 Blumenwiese
   Name: Lisa Herbig
   Matrikel: 266236
   Datum: 29.05.2021
   Inspiration: Code und Diagramm aus der Lektion (L08.2), bei Sonne, Wolken und Bergen und L09 Asteroids für die Animation
   */
    window.addEventListener("load", handleLoad);
    let imgData;
    L10_2_Blumenwiese.pinkPurple = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)"];
    L10_2_Blumenwiese.colorfulColors = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)", "HSLA(0, 100%, 50%, 0.8)", "HSLA(19, 100%, 50%, 0.8)", "HSLA(32, 100%, 50%, 0.9)", "HSLA(60, 100%, 50%, 0.7)", "HSLA(165, 100%, 50%, 0.8)", "HSLA(203, 100%, 50%, 0.8)", "HSLA(244, 100%, 50%, 0.8)", "HSLA((356, 100%, 50%, 0.8))", "HSLA(65, 100%, 95%, 0.9)"];
    function handleLoad() {
        console.log("Hello");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_2_Blumenwiese.crc2d = canvas.getContext("2d");
        drawBackground();
        drawSun({ x: 100, y: 120 });
        drawMountains({ x: 0, y: 320 }, 60, 180, "grey", "White");
        drawMountains({ x: 0, y: 320 }, 20, 120, "black", "lightgrey");
        drawHouse({ x: 0, y: 340 }, 80, -40);
        //drawBee();
        for (let i = 0; i < createRandomNum(35, 50); i++) {
            let flower = new L10_2_Blumenwiese.Flower(true);
            flower.draw();
        }
        //let cloud: Cloud = new Cloud();
        //cloud.draw();
        /*brauche ich das hier schon oder erst in update?*/
        imgData = L10_2_Blumenwiese.crc2d.getImageData(0, 0, L10_2_Blumenwiese.crc2d.canvas.width, L10_2_Blumenwiese.crc2d.canvas.height);
        L10_2_Blumenwiese.crc2d.save();
        window.setInterval(update, 20);
    }
    function createRandomNum(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    L10_2_Blumenwiese.createRandomNum = createRandomNum;
    function drawBackground() {
        let gradient = L10_2_Blumenwiese.crc2d.createLinearGradient(0, 0, 0, L10_2_Blumenwiese.crc2d.canvas.height);
        gradient.addColorStop(0, "HSLA(193, 100%, 40%, 1");
        gradient.addColorStop(0.2, "HSLA(323, 90%, 51%, 1");
        gradient.addColorStop(0.4, "HSLA(55, 100%, 50%, 1");
        gradient.addColorStop(1, "HSLA(126, 100%, 39%, 1");
        L10_2_Blumenwiese.crc2d.fillStyle = gradient;
        L10_2_Blumenwiese.crc2d.fillRect(0, 0, L10_2_Blumenwiese.crc2d.canvas.width, L10_2_Blumenwiese.crc2d.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 110;
        let gradient = L10_2_Blumenwiese.crc2d.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(61, 100%, 75%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L10_2_Blumenwiese.crc2d.save();
        L10_2_Blumenwiese.crc2d.translate(_position.x, _position.y);
        L10_2_Blumenwiese.crc2d.fillStyle = gradient;
        L10_2_Blumenwiese.crc2d.arc(0, 0, r2, 0, 2 * Math.PI);
        L10_2_Blumenwiese.crc2d.fill();
        L10_2_Blumenwiese.crc2d.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("hi");
        let stepMin = 10;
        let stepMax = 50;
        let x = 0;
        L10_2_Blumenwiese.crc2d.save();
        L10_2_Blumenwiese.crc2d.translate(_position.x, _position.y);
        L10_2_Blumenwiese.crc2d.beginPath();
        L10_2_Blumenwiese.crc2d.moveTo(0, 0);
        L10_2_Blumenwiese.crc2d.lineTo(0, -_max);
        do {
            x += stepMin + createRandomNum(stepMin, stepMax);
            let y = -_min - createRandomNum(_min, _max);
            L10_2_Blumenwiese.crc2d.lineTo(x, y);
        } while (x < L10_2_Blumenwiese.crc2d.canvas.width);
        L10_2_Blumenwiese.crc2d.lineTo(x, 0);
        L10_2_Blumenwiese.crc2d.closePath();
        let gradient = L10_2_Blumenwiese.crc2d.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L10_2_Blumenwiese.crc2d.fillStyle = gradient;
        L10_2_Blumenwiese.crc2d.fill();
        L10_2_Blumenwiese.crc2d.restore();
    }
    function drawHouse(_position, _stepSide, _stepUp) {
        L10_2_Blumenwiese.crc2d.save();
        L10_2_Blumenwiese.crc2d.beginPath();
        L10_2_Blumenwiese.crc2d.moveTo(_position.x, _position.y);
        L10_2_Blumenwiese.crc2d.lineTo(_stepSide, _position.y);
        L10_2_Blumenwiese.crc2d.lineTo(_stepSide, _position.y + _stepUp);
        L10_2_Blumenwiese.crc2d.lineTo(-_stepSide, _position.y + _stepUp);
        L10_2_Blumenwiese.crc2d.closePath();
        L10_2_Blumenwiese.crc2d.fillStyle = "HSLA(30, 100%, 22%, 1)";
        L10_2_Blumenwiese.crc2d.fill();
        L10_2_Blumenwiese.crc2d.restore();
        L10_2_Blumenwiese.crc2d.save();
        L10_2_Blumenwiese.crc2d.beginPath();
        L10_2_Blumenwiese.crc2d.moveTo(_position.x, _position.y + _stepUp);
        L10_2_Blumenwiese.crc2d.lineTo(_position.x + _stepSide, _position.y + _stepUp);
        L10_2_Blumenwiese.crc2d.lineTo((_position.x + _stepSide) - _stepSide / 2, _position.y + 2 * _stepUp);
        L10_2_Blumenwiese.crc2d.closePath();
        L10_2_Blumenwiese.crc2d.fillStyle = "HSLA(9, 100%, 58%, 1)";
        L10_2_Blumenwiese.crc2d.fill();
        L10_2_Blumenwiese.crc2d.restore();
    }
    function drawFlowerStem(_positionStem) {
        L10_2_Blumenwiese.crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        L10_2_Blumenwiese.crc2d.fillRect(_positionStem.x, _positionStem.y, 5, -20);
    }
    L10_2_Blumenwiese.drawFlowerStem = drawFlowerStem;
    let bees = [];
    let cloud = new L10_2_Blumenwiese.Cloud();
    for (let i = 0; i < 8; i++) {
        let bee = new L10_2_Blumenwiese.Bee();
        bees.push(bee);
    }
    function update() {
        L10_2_Blumenwiese.crc2d.clearRect(0, 0, 360, 720);
        //crc2d.restore();
        L10_2_Blumenwiese.crc2d.putImageData(imgData, 0, 0);
        //crc2d.fillRect(0, 0, 360, 720);
        cloud.move(1 / 50);
        cloud.draw();
        for (let j = 0; j < 8; j++) {
            bees[j].move(1 / createRandomNum(25, 125));
            bees[j].draw();
        }
    }
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Main.js.map