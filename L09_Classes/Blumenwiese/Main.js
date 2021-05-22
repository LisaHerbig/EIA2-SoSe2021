"use strict";
var L09_2_Blumenwiese;
(function (L09_2_Blumenwiese) {
    /*
   Aufgabe: L08.2 Blumenwiese
   Name: Lisa Herbig
   Matrikel: 266236
   Datum: 14.05.2021
   Inspiration: Code und Diagramm aus der Lektion (L08.2), bei Sonne, Wolken und Bergen und L09
   */
    window.addEventListener("load", handleLoad);
    //let flowerTypes: Path2D[] = [];
    L09_2_Blumenwiese.pinkPurple = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)"];
    L09_2_Blumenwiese.colorfulColors = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)", "HSLA(0, 100%, 50%, 0.8)", "HSLA(19, 100%, 50%, 0.8)", "HSLA(32, 100%, 50%, 0.9)", "HSLA(60, 100%, 50%, 0.7)", "HSLA(165, 100%, 50%, 0.8)", "HSLA(203, 100%, 50%, 0.8)", "HSLA(244, 100%, 50%, 0.8)", "HSLA((356, 100%, 50%, 0.8))", "HSLA(65, 100%, 95%, 0.9)"];
    console.log(L09_2_Blumenwiese.colorfulColors.length);
    function handleLoad() {
        console.log("Hello");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_2_Blumenwiese.crc2d = canvas.getContext("2d");
        drawBackground();
        drawSun({ x: 100, y: 120 });
        //drawCloud({x: 290, y: 60}, {x: 100, y: 60}, 30);
        //drawCloud({x: 200, y: 140}, {x: 80, y: 30}, 17);
        drawMountains({ x: 0, y: 320 }, 60, 180, "grey", "White");
        drawMountains({ x: 0, y: 320 }, 20, 120, "black", "lightgrey");
        drawHouse({ x: 0, y: 340 }, 80, -40);
        drawBee();
        let flower = new L09_2_Blumenwiese.Flower(true);
        flower.draw();
        L09_2_Blumenwiese.crc2d.getImageData(0, 0, 360, 720);
        //Flower
        //console.log(flowerTypes);
    }
    function createRandomNum(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    L09_2_Blumenwiese.createRandomNum = createRandomNum;
    function drawBackground() {
        let gradient = L09_2_Blumenwiese.crc2d.createLinearGradient(0, 0, 0, L09_2_Blumenwiese.crc2d.canvas.height);
        gradient.addColorStop(0, "HSLA(193, 100%, 40%, 1");
        gradient.addColorStop(0.2, "HSLA(323, 90%, 51%, 1");
        gradient.addColorStop(0.4, "HSLA(55, 100%, 50%, 1");
        gradient.addColorStop(1, "HSLA(126, 100%, 39%, 1");
        L09_2_Blumenwiese.crc2d.fillStyle = gradient;
        L09_2_Blumenwiese.crc2d.fillRect(0, 0, L09_2_Blumenwiese.crc2d.canvas.width, L09_2_Blumenwiese.crc2d.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 110;
        let gradient = L09_2_Blumenwiese.crc2d.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(61, 100%, 75%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L09_2_Blumenwiese.crc2d.save();
        L09_2_Blumenwiese.crc2d.translate(_position.x, _position.y);
        L09_2_Blumenwiese.crc2d.fillStyle = gradient;
        L09_2_Blumenwiese.crc2d.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_2_Blumenwiese.crc2d.fill();
        L09_2_Blumenwiese.crc2d.restore();
    }
    function drawCloud(_position, _size, radiusParticle) {
        let nParticles = 25;
        let particle = new Path2D();
        let gradient = L09_2_Blumenwiese.crc2d.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.4)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L09_2_Blumenwiese.crc2d.save();
        L09_2_Blumenwiese.crc2d.translate(_position.x, _position.y);
        L09_2_Blumenwiese.crc2d.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L09_2_Blumenwiese.crc2d.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L09_2_Blumenwiese.crc2d.translate(x, y);
            L09_2_Blumenwiese.crc2d.fill(particle);
            L09_2_Blumenwiese.crc2d.restore();
        }
        L09_2_Blumenwiese.crc2d.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("hi");
        let stepMin = 10;
        let stepMax = 50;
        let x = 0;
        L09_2_Blumenwiese.crc2d.save();
        L09_2_Blumenwiese.crc2d.translate(_position.x, _position.y);
        L09_2_Blumenwiese.crc2d.beginPath();
        L09_2_Blumenwiese.crc2d.moveTo(0, 0);
        L09_2_Blumenwiese.crc2d.lineTo(0, -_max);
        do {
            x += stepMin + createRandomNum(stepMin, stepMax);
            let y = -_min - createRandomNum(_min, _max);
            L09_2_Blumenwiese.crc2d.lineTo(x, y);
        } while (x < L09_2_Blumenwiese.crc2d.canvas.width);
        L09_2_Blumenwiese.crc2d.lineTo(x, 0);
        L09_2_Blumenwiese.crc2d.closePath();
        let gradient = L09_2_Blumenwiese.crc2d.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L09_2_Blumenwiese.crc2d.fillStyle = gradient;
        L09_2_Blumenwiese.crc2d.fill();
        L09_2_Blumenwiese.crc2d.restore();
    }
    function drawHouse(_position, _stepSide, _stepUp) {
        L09_2_Blumenwiese.crc2d.save();
        L09_2_Blumenwiese.crc2d.beginPath();
        L09_2_Blumenwiese.crc2d.moveTo(_position.x, _position.y);
        L09_2_Blumenwiese.crc2d.lineTo(_stepSide, _position.y);
        L09_2_Blumenwiese.crc2d.lineTo(_stepSide, _position.y + _stepUp);
        L09_2_Blumenwiese.crc2d.lineTo(-_stepSide, _position.y + _stepUp);
        L09_2_Blumenwiese.crc2d.closePath();
        L09_2_Blumenwiese.crc2d.fillStyle = "HSLA(30, 100%, 22%, 1)";
        L09_2_Blumenwiese.crc2d.fill();
        L09_2_Blumenwiese.crc2d.restore();
        L09_2_Blumenwiese.crc2d.save();
        L09_2_Blumenwiese.crc2d.beginPath();
        L09_2_Blumenwiese.crc2d.moveTo(_position.x, _position.y + _stepUp);
        L09_2_Blumenwiese.crc2d.lineTo(_position.x + _stepSide, _position.y + _stepUp);
        L09_2_Blumenwiese.crc2d.lineTo((_position.x + _stepSide) - _stepSide / 2, _position.y + 2 * _stepUp);
        L09_2_Blumenwiese.crc2d.closePath();
        L09_2_Blumenwiese.crc2d.fillStyle = "HSLA(9, 100%, 58%, 1)";
        L09_2_Blumenwiese.crc2d.fill();
        L09_2_Blumenwiese.crc2d.restore();
    }
    function drawFlowerStem(_positionStem) {
        L09_2_Blumenwiese.crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        L09_2_Blumenwiese.crc2d.fillRect(_positionStem.x, _positionStem.y, 5, -20);
    }
    L09_2_Blumenwiese.drawFlowerStem = drawFlowerStem;
    function drawBee() {
        //body
        L09_2_Blumenwiese.crc2d.save();
        L09_2_Blumenwiese.crc2d.beginPath();
        L09_2_Blumenwiese.crc2d.ellipse(200, 500, 20, 10, 0, 0, 2 * Math.PI);
        L09_2_Blumenwiese.crc2d.save();
        L09_2_Blumenwiese.crc2d.translate(198, 495);
        //sting      
        L09_2_Blumenwiese.crc2d.moveTo(20, 1);
        L09_2_Blumenwiese.crc2d.lineTo(30, 5);
        L09_2_Blumenwiese.crc2d.lineTo(20, 9);
        L09_2_Blumenwiese.crc2d.lineTo(20, 1);
        L09_2_Blumenwiese.crc2d.fillStyle = "Black";
        L09_2_Blumenwiese.crc2d.fill();
        L09_2_Blumenwiese.crc2d.stroke();
        //Wing back
        createWing(-10, 0);
        //Stripes
        L09_2_Blumenwiese.crc2d.beginPath();
        L09_2_Blumenwiese.crc2d.moveTo(20, -1);
        L09_2_Blumenwiese.crc2d.lineTo(20, 11);
        L09_2_Blumenwiese.crc2d.moveTo(10, -5);
        L09_2_Blumenwiese.crc2d.lineTo(10, 15);
        L09_2_Blumenwiese.crc2d.moveTo(0, -6);
        L09_2_Blumenwiese.crc2d.lineTo(0, 16);
        L09_2_Blumenwiese.crc2d.strokeStyle = "Yellow";
        L09_2_Blumenwiese.crc2d.lineWidth = 3;
        L09_2_Blumenwiese.crc2d.stroke();
        //Eye
        L09_2_Blumenwiese.crc2d.beginPath();
        L09_2_Blumenwiese.crc2d.arc(-10, 2, 1, 0, 2 * Math.PI);
        L09_2_Blumenwiese.crc2d.strokeStyle = "White";
        L09_2_Blumenwiese.crc2d.stroke();
        //crc2d.restore();
        //Wing Front
        createWing(10, 10);
        L09_2_Blumenwiese.crc2d.restore();
    }
    function createWing(_direction, _x) {
        L09_2_Blumenwiese.crc2d.save();
        L09_2_Blumenwiese.crc2d.beginPath();
        L09_2_Blumenwiese.crc2d.ellipse(_x, -12, 4, 8, _direction, 0, 2 * Math.PI);
        L09_2_Blumenwiese.crc2d.strokeStyle = "Blue";
        L09_2_Blumenwiese.crc2d.lineWidth = 1;
        L09_2_Blumenwiese.crc2d.fillStyle = "Lightblue";
        L09_2_Blumenwiese.crc2d.fill();
        L09_2_Blumenwiese.crc2d.stroke();
        L09_2_Blumenwiese.crc2d.restore();
    }
})(L09_2_Blumenwiese || (L09_2_Blumenwiese = {}));
//# sourceMappingURL=Main.js.map