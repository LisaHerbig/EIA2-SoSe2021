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
    let rows = [
        { x: 10, y: 360 },
        { x: 20, y: 400 },
        { x: 10, y: 460 },
        { x: 20, y: 540 },
        { x: 10, y: 640 },
        { x: 20, y: 720 }
    ];
    let pinkPurple = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)"];
    let colorfulColors = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)", "HSLA(0, 100%, 50%, 0.8)", "HSLA(19, 100%, 50%, 0.8)", "HSLA(32, 100%, 50%, 0.9)", "HSLA(60, 100%, 50%, 0.7)", "HSLA(165, 100%, 50%, 0.8)", "HSLA(203, 100%, 50%, 0.8)", "HSLA(244, 100%, 50%, 0.8)", "HSLA((356, 100%, 50%, 0.8))", "HSLA(65, 100%, 95%, 0.9)"];
    console.log(colorfulColors.length);
    function handleLoad() {
        console.log("Hello");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_2_Blumenwiese.crc2d = canvas.getContext("2d");
        drawBackground();
        drawSun({ x: 100, y: 120 });
        drawCloud({ x: 290, y: 60 }, { x: 100, y: 60 }, 30);
        drawCloud({ x: 200, y: 140 }, { x: 80, y: 30 }, 17);
        drawMountains({ x: 0, y: 320 }, 60, 180, "grey", "White");
        drawMountains({ x: 0, y: 320 }, 20, 120, "black", "lightgrey");
        drawHouse({ x: 0, y: 340 }, 80, -40);
        drawFlowers();
        drawBee();
    }
    function createRandomNum(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
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
    function drawFlower1(_positionStem) {
        let nLeaves = 7;
        let rMax = 7;
        let x = 0;
        let y = 0;
        L09_2_Blumenwiese.crc2d.save();
        drawFlowerStem(_positionStem);
        //crc2d.save();
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            L09_2_Blumenwiese.crc2d.save();
            switch (drawn) {
                case 0:
                    x = -5;
                    y = -20;
                    break;
                case 1:
                    x = 5;
                    y = -20;
                    break;
                case 2:
                    x = -4;
                    y = -30;
                    break;
                case 3:
                    x = 4;
                    y = -30;
                    break;
                case 4:
                    x = -3;
                    y = -37;
                    break;
                case 5:
                    x = 3;
                    y = -37;
                    break;
                case 6:
                    x = 0;
                    y = -45;
                    break;
                default:
                    console.log("something is wrong");
            }
            //crc2d.save();
            L09_2_Blumenwiese.crc2d.translate(x, y);
            let posX = _positionStem.x + 1;
            let posY = _positionStem.y - 1;
            L09_2_Blumenwiese.crc2d.beginPath();
            L09_2_Blumenwiese.crc2d.ellipse(posX, posY, rMax - drawn * 0.5, rMax - drawn * 0.5, 0, 0, 2 * Math.PI);
            L09_2_Blumenwiese.crc2d.fillStyle = pinkPurple[createRandomNum(0, 3)];
            L09_2_Blumenwiese.crc2d.closePath();
            //crc2d.closePath();
            //crc2d.save();
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.restore();
        }
        L09_2_Blumenwiese.crc2d.restore();
    }
    function drawFlower2(_positionStem) {
        let nLeaves = 5;
        L09_2_Blumenwiese.crc2d.beginPath();
        drawFlowerStem(_positionStem);
        L09_2_Blumenwiese.crc2d.closePath();
        L09_2_Blumenwiese.crc2d.save();
        let color = colorfulColors[createRandomNum(0, 12)];
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            //crc2d.save();
            let rotate = 0;
            switch (drawn) {
                case 0:
                    rotate = 0;
                    break;
                case 1:
                    rotate = 72;
                    break;
                case 2:
                    rotate = 144;
                    break;
                case 3:
                    rotate = 216;
                    break;
                case 4:
                    rotate = 288;
                    break;
                default:
                    console.log("Something is wrong");
            }
            L09_2_Blumenwiese.crc2d.beginPath();
            L09_2_Blumenwiese.crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 2, 20, rotate * Math.PI / 180, 0, 2 * Math.PI);
            L09_2_Blumenwiese.crc2d.fillStyle = color;
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.closePath();
            L09_2_Blumenwiese.crc2d.translate(_positionStem.x + 2, _positionStem.y - 25);
            L09_2_Blumenwiese.crc2d.restore();
            L09_2_Blumenwiese.crc2d.beginPath();
            L09_2_Blumenwiese.crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 5, 5, 0, 0, 2 * Math.PI);
            L09_2_Blumenwiese.crc2d.fillStyle = "HSLA(58, 100%, 50%, 1)";
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.closePath();
            L09_2_Blumenwiese.crc2d.save();
        }
        //crc2d.restore();
    }
    function drawFlower3(_positionStem) {
        let nLeaves = 5;
        L09_2_Blumenwiese.crc2d.beginPath();
        drawFlowerStem(_positionStem);
        L09_2_Blumenwiese.crc2d.closePath();
        L09_2_Blumenwiese.crc2d.save();
        let color = colorfulColors[createRandomNum(0, 12)];
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            //crc2d.save();
            let rotate = 0;
            switch (drawn) {
                case 0:
                    rotate = 0;
                    break;
                case 1:
                    rotate = 72;
                    break;
                case 2:
                    rotate = 144;
                    break;
                case 3:
                    rotate = 216;
                    break;
                case 4:
                    rotate = 288;
                    break;
                default:
                    console.log("Something is wrong");
            }
            L09_2_Blumenwiese.crc2d.beginPath();
            L09_2_Blumenwiese.crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 5, 15, rotate * Math.PI / 180, 0, 2 * Math.PI);
            L09_2_Blumenwiese.crc2d.fillStyle = color;
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.closePath();
            L09_2_Blumenwiese.crc2d.translate(_positionStem.x + 2, _positionStem.y - 25);
            L09_2_Blumenwiese.crc2d.restore();
            L09_2_Blumenwiese.crc2d.beginPath();
            L09_2_Blumenwiese.crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 5, 5, 0, 0, 2 * Math.PI);
            L09_2_Blumenwiese.crc2d.fillStyle = "HSLA(58, 100%, 50%, 1)";
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.closePath();
            L09_2_Blumenwiese.crc2d.save();
        }
        //crc2d.scale(_sXY, _sXY);
        //crc2d.restore();
    }
    function drawFlower4(_positionStem) {
        L09_2_Blumenwiese.crc2d.beginPath();
        L09_2_Blumenwiese.crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        L09_2_Blumenwiese.crc2d.fillRect(_positionStem.x, _positionStem.y, 5, -20);
        L09_2_Blumenwiese.crc2d.closePath();
        L09_2_Blumenwiese.crc2d.save();
        let nLeaves = 3;
        let rMax = 10;
        let x = 0;
        let y = 0;
        drawFlowerStem(_positionStem);
        //crc2d.save();
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            L09_2_Blumenwiese.crc2d.save();
            L09_2_Blumenwiese.crc2d.translate(x, y);
            let posX = _positionStem.x + 2;
            let posY = _positionStem.y - 1;
            L09_2_Blumenwiese.crc2d.beginPath();
            L09_2_Blumenwiese.crc2d.ellipse(posX, posY - 20, rMax - drawn * 2, rMax - drawn * 2, 0, 0, 2 * Math.PI);
            L09_2_Blumenwiese.crc2d.fillStyle = colorfulColors[createRandomNum(0, 12)];
            L09_2_Blumenwiese.crc2d.closePath();
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.restore();
        }
        //crc2d.restore();
    }
    function drawFlower5(_positionStem) {
        let nLeaves = 7;
        let rMax = 7;
        let x = 0;
        let y = 0;
        let randomColor = createRandomNum(0, 360);
        drawFlowerStem(_positionStem);
        L09_2_Blumenwiese.crc2d.save();
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            L09_2_Blumenwiese.crc2d.save();
            switch (drawn) {
                case 0:
                    x = -6;
                    y = -20;
                    break;
                case 1:
                    x = 6;
                    y = -20;
                    break;
                case 2:
                    x = -12;
                    y = -30;
                    break;
                case 3:
                    x = 6;
                    y = -42;
                    break;
                case 4:
                    x = 12;
                    y = -30;
                    break;
                case 5:
                    x = -6;
                    y = -42;
                    break;
                case 6:
                    x = 0;
                    y = -31;
                    randomColor = 60;
                    break;
                default:
                    console.log("something is wrong");
            }
            L09_2_Blumenwiese.crc2d.save();
            L09_2_Blumenwiese.crc2d.translate(x, y);
            let posX = _positionStem.x + 2;
            let posY = _positionStem.y - 1;
            L09_2_Blumenwiese.crc2d.beginPath();
            L09_2_Blumenwiese.crc2d.ellipse(posX, posY, rMax, rMax, 0, 0, 2 * Math.PI);
            L09_2_Blumenwiese.crc2d.fillStyle = "HSLA(" + randomColor + ", 100%, 50%, 0.8";
            L09_2_Blumenwiese.crc2d.closePath();
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.restore();
        }
        //crc2d.restore();
    }
    function drawFlower6(_positionStem) {
        let nLeaves = 13;
        let rMax = 7;
        let x = 0;
        let y = 0;
        let randomColor = createRandomNum(0, 360);
        drawFlowerStem(_positionStem);
        L09_2_Blumenwiese.crc2d.save();
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            L09_2_Blumenwiese.crc2d.save();
            switch (drawn) {
                case 0:
                    x = -6;
                    y = -22;
                    rMax = 3;
                    break;
                case 1:
                    x = 0;
                    y = -21;
                    rMax = 3;
                    break;
                case 2:
                    x = 6;
                    y = -22;
                    rMax = 3;
                    break;
                case 3:
                    x = -8;
                    y = -25;
                    rMax = 3;
                    break;
                case 4:
                    x = 8;
                    y = -25;
                    rMax = 3;
                    break;
                case 5:
                    x = -10;
                    y = -30;
                    rMax = 3;
                    break;
                case 6:
                    x = 10;
                    y = -30;
                    rMax = 3;
                    break;
                case 7:
                    x = 8;
                    y = -35;
                    rMax = 3;
                    break;
                case 8:
                    x = -8;
                    y = -35;
                    rMax = 3;
                    break;
                case 9:
                    rMax = 3;
                    x = 5;
                    y = -38;
                    break;
                case 10:
                    x = -5;
                    y = -38;
                    rMax = 3;
                    break;
                case 11:
                    x = 0;
                    y = -40;
                    rMax = 3;
                    break;
                case 12:
                    x = 0;
                    y = -30;
                    randomColor = 60;
                    rMax = 7;
                    break;
                default:
                    console.log("something is wrong");
            }
            L09_2_Blumenwiese.crc2d.save();
            L09_2_Blumenwiese.crc2d.translate(x, y);
            let posX = _positionStem.x + 2;
            let posY = _positionStem.y - 1;
            L09_2_Blumenwiese.crc2d.beginPath();
            L09_2_Blumenwiese.crc2d.ellipse(posX, posY, rMax, rMax, 0, 0, 2 * Math.PI);
            L09_2_Blumenwiese.crc2d.fillStyle = "HSLA(" + randomColor + ", 100%, 50%, 0.8";
            L09_2_Blumenwiese.crc2d.closePath();
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.restore();
        }
    }
    function drawFlowers() {
        let step = 60;
        let i = 0;
        for (i; i < 6; i++) {
            //let scale: number = i;
            drawFlower1({ x: rows[i].x, y: rows[i].y });
            drawFlower2({ x: rows[i].x + step, y: rows[i].y });
            drawFlower3({ x: rows[i].x + 2 * step, y: rows[i].y });
            drawFlower4({ x: rows[i].x + 3 * step, y: rows[i].y });
            drawFlower5({ x: rows[i].x + 4 * step, y: rows[i].y });
            drawFlower6({ x: rows[i].x + 5 * step, y: rows[i].y });
        }
    }
    function drawFlowerStem(_positionStem) {
        L09_2_Blumenwiese.crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        L09_2_Blumenwiese.crc2d.fillRect(_positionStem.x, _positionStem.y, 5, -20);
    }
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
//# sourceMappingURL=Meadow-2Main.js.map