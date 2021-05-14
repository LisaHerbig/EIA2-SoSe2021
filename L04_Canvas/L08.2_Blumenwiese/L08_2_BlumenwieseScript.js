"use strict";
var L08_2_Blumenwiese;
(function (L08_2_Blumenwiese) {
    /*
   Aufgabe: L08.2 Blumenwiese
   Name: Lisa Herbig
   Matrikel: 266236
   Datum: 13.05.2021
   Inspiration: Code und Diagramm aus der Lektion (L08.2)
   */
    window.addEventListener("load", handleLoad);
    let crc2d;
    let pinkPurple = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)"];
    let colorfulColors = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)", "HSLA(0, 100%, 50%, 0.8)", "HSLA(19, 100%, 50%, 0.8)", "HSLA(32, 100%, 50%, 0.9)", "HSLA(60, 100%, 50%, 0.7)", "HSLA(165, 100%, 50%, 0.8)", "HSLA(203, 100%, 50%, 0.8)", "HSLA(244, 100%, 50%, 0.8)", "HSLA((356, 100%, 50%, 0.8))", "HSLA(65, 100%, 95%, 0.9)"];
    console.log(colorfulColors.length);
    function handleLoad() {
        console.log("Hello");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2d = canvas.getContext("2d");
        drawBackground();
        drawSun({ x: 100, y: 120 });
        drawCloud({ x: 290, y: 60 }, { x: 100, y: 60 }, 30);
        drawCloud({ x: 200, y: 140 }, { x: 80, y: 30 }, 17);
        drawMountains({ x: 0, y: 320 }, 60, 180, "grey", "White");
        drawMountains({ x: 0, y: 320 }, 20, 120, "black", "lightgrey");
        drawHouse({ x: 0, y: 340 }, 80, -40);
        //drawFlower1({x: 20, y: 360});
        //drawFlower2({x: 80, y: 360});
        //drawFlower3({x: 120, y: 360});
        //drawFlower4({x: 160, y: 360});
        //drawFlower5({x: 200, y: 360});
        //drawFlower6({x: 240, y: 360});
        drawFlowers();
    }
    function createRandomNum(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    function drawBackground() {
        let gradient = crc2d.createLinearGradient(0, 0, 0, crc2d.canvas.height);
        gradient.addColorStop(0, "HSLA(193, 100%, 40%, 1");
        gradient.addColorStop(0.2, "HSLA(323, 90%, 51%, 1");
        gradient.addColorStop(0.4, "HSLA(55, 100%, 50%, 1");
        gradient.addColorStop(1, "HSLA(126, 100%, 39%, 1");
        crc2d.fillStyle = gradient;
        crc2d.fillRect(0, 0, crc2d.canvas.width, crc2d.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 110;
        let gradient = crc2d.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(61, 100%, 75%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2d.save();
        crc2d.translate(_position.x, _position.y);
        crc2d.fillStyle = gradient;
        crc2d.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2d.fill();
        crc2d.restore();
    }
    function drawCloud(_position, _size, radiusParticle) {
        let nParticles = 25;
        let particle = new Path2D();
        let gradient = crc2d.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.4)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2d.save();
        crc2d.translate(_position.x, _position.y);
        crc2d.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2d.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2d.translate(x, y);
            crc2d.fill(particle);
            crc2d.restore();
        }
        crc2d.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("hi");
        let stepMin = 10;
        let stepMax = 50;
        let x = 0;
        crc2d.save();
        crc2d.translate(_position.x, _position.y);
        crc2d.beginPath();
        crc2d.moveTo(0, 0);
        crc2d.lineTo(0, -_max);
        do {
            x += stepMin + createRandomNum(stepMin, stepMax);
            let y = -_min - createRandomNum(_min, _max);
            crc2d.lineTo(x, y);
        } while (x < crc2d.canvas.width);
        crc2d.lineTo(x, 0);
        crc2d.closePath();
        let gradient = crc2d.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2d.fillStyle = gradient;
        crc2d.fill();
        crc2d.restore();
    }
    function drawHouse(_position, _stepSide, _stepUp) {
        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(_position.x, _position.y);
        crc2d.lineTo(_stepSide, _position.y);
        crc2d.lineTo(_stepSide, _position.y + _stepUp);
        crc2d.lineTo(-_stepSide, _position.y + _stepUp);
        crc2d.closePath();
        crc2d.fillStyle = "HSLA(30, 100%, 22%, 1)";
        crc2d.fill();
        crc2d.restore();
        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(_position.x, _position.y + _stepUp);
        crc2d.lineTo(_position.x + _stepSide, _position.y + _stepUp);
        crc2d.lineTo((_position.x + _stepSide) - _stepSide / 2, _position.y + 2 * _stepUp);
        crc2d.closePath();
        crc2d.fillStyle = "HSLA(9, 100%, 58%, 1)";
        crc2d.fill();
        crc2d.restore();
    }
    function drawFlower1(_positionStem, _paricleSize, _stemSize) {
        let nLeaves = 7;
        let rMax = 7;
        let x = 0;
        let y = 0;
        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, 20);
        crc2d.save();
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            crc2d.save();
            switch (drawn) {
                case 0 /*|| 2 || 4*/:
                    x = -5;
                    y = 0;
                    break;
                case 1:
                    x = 5;
                    y = 0;
                    break;
                case 2:
                    x = -4;
                    y = -10;
                    break;
                case 3 /*|| 3 || 5*/:
                    x = 4;
                    y = -10;
                    break;
                case 4:
                    x = -3;
                    y = -17;
                    break;
                case 5:
                    x = 3;
                    y = -17;
                    break;
                case 6:
                    x = 0;
                    y = -25;
                    break;
                default:
                    console.log("something is wrong");
            }
            crc2d.save();
            crc2d.translate(x, y);
            let posX = _positionStem.x + 1;
            let posY = _positionStem.y - 1;
            crc2d.beginPath();
            crc2d.ellipse(posX, posY, rMax - drawn * 0.5, rMax - drawn * 0.5, 0, 0, 2 * Math.PI);
            crc2d.fillStyle = pinkPurple[createRandomNum(0, 3)];
            crc2d.closePath();
            //crc2d.closePath();
            //crc2d.save();
            crc2d.fill();
            crc2d.restore();
        }
    }
    function drawFlower2(_positionStem, _paricleSize, _stemSize) {
        let nLeaves = 5;
        crc2d.beginPath();
        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, 20);
        crc2d.closePath();
        crc2d.save();
        let color = colorfulColors[createRandomNum(0, 12)];
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            //crc2d.save();
            let rotate = 0;
            switch (drawn) {
                case 0:
                    //crc2d.rotate(0 * Math.PI / 180);
                    rotate = 0;
                    //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                    break;
                case 1:
                    //crc2d.rotate(72 * Math.PI / 180);
                    rotate = 72;
                    //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                    break;
                case 2:
                    //crc2d.rotate(144 * Math.PI / 180);
                    rotate = 144;
                    //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                    break;
                case 3:
                    //crc2d.rotate(216 * Math.PI / 180);
                    rotate = 216;
                    //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                    break;
                case 4:
                    //crc2d.rotate(288 * Math.PI / 180);
                    rotate = 288;
                    //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                    break;
                default:
                    console.log("Something is wrong");
            }
            //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
            crc2d.beginPath();
            crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 5, 2, 20, rotate * Math.PI / 180, 0, 2 * Math.PI);
            crc2d.fillStyle = color;
            crc2d.fill();
            crc2d.closePath();
            crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
            crc2d.restore();
            crc2d.beginPath();
            crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 5, 5, 5, 0, 0, 2 * Math.PI);
            crc2d.fillStyle = "HSLA(58, 100%, 50%, 1)";
            crc2d.fill();
            crc2d.closePath();
            crc2d.save();
        }
        crc2d.restore();
    }
    function drawFlower3(_positionStem, _paricleSize, _stemSize) {
        let nLeaves = 5;
        crc2d.beginPath();
        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, 20);
        crc2d.closePath();
        crc2d.save();
        let color = colorfulColors[createRandomNum(0, 12)];
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            //crc2d.save();
            let rotate = 0;
            switch (drawn) {
                case 0:
                    //crc2d.rotate(0 * Math.PI / 180);
                    rotate = 0;
                    //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                    break;
                case 1:
                    //crc2d.rotate(72 * Math.PI / 180);
                    rotate = 72;
                    //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                    break;
                case 2:
                    //crc2d.rotate(144 * Math.PI / 180);
                    rotate = 144;
                    //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                    break;
                case 3:
                    //crc2d.rotate(216 * Math.PI / 180);
                    rotate = 216;
                    //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                    break;
                case 4:
                    //crc2d.rotate(288 * Math.PI / 180);
                    rotate = 288;
                    //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                    break;
                default:
                    console.log("Something is wrong");
            }
            //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
            crc2d.beginPath();
            crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 5, 5, 15, rotate * Math.PI / 180, 0, 2 * Math.PI);
            crc2d.fillStyle = color;
            crc2d.fill();
            crc2d.closePath();
            crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
            crc2d.restore();
            crc2d.beginPath();
            crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 5, 5, 5, 0, 0, 2 * Math.PI);
            crc2d.fillStyle = "HSLA(58, 100%, 50%, 1)";
            crc2d.fill();
            crc2d.closePath();
            crc2d.save();
        }
    }
    function drawFlower4(_positionStem, _paricleSize, _stemSize) {
        crc2d.beginPath();
        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, 20);
        crc2d.closePath();
        crc2d.save();
        let nLeaves = 3;
        let rMax = 10;
        let x = 0;
        let y = 0;
        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, 20);
        crc2d.save();
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            crc2d.save();
            crc2d.translate(x, y);
            let posX = _positionStem.x + 2;
            let posY = _positionStem.y - 1;
            crc2d.beginPath();
            crc2d.ellipse(posX, posY, rMax - drawn * 2, rMax - drawn * 2, 0, 0, 2 * Math.PI);
            crc2d.fillStyle = colorfulColors[createRandomNum(0, 12)];
            crc2d.closePath();
            //crc2d.closePath();
            //crc2d.save();
            crc2d.fill();
            crc2d.restore();
        }
    }
    function drawFlower5(_positionStem, _paricleSize, _stemSize) {
        let nLeaves = 7;
        let rMax = 7;
        let x = 0;
        let y = 0;
        let randomColor = createRandomNum(0, 360);
        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, 20);
        crc2d.save();
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            crc2d.save();
            switch (drawn) {
                case 0 /*|| 2 || 4*/:
                    x = -6;
                    y = 0;
                    break;
                case 1:
                    x = 6;
                    y = 0;
                    break;
                case 2:
                    x = -12;
                    y = -10;
                    break;
                case 3 /*|| 3 || 5*/:
                    x = 6;
                    y = -22;
                    break;
                case 4:
                    x = 12;
                    y = -10;
                    break;
                case 5:
                    x = -6;
                    y = -22;
                    break;
                case 6:
                    x = 0;
                    y = -10;
                    randomColor = 60;
                    break;
                default:
                    console.log("something is wrong");
            }
            crc2d.save();
            crc2d.translate(x, y);
            let posX = _positionStem.x + 2;
            let posY = _positionStem.y - 1;
            crc2d.beginPath();
            crc2d.ellipse(posX, posY, rMax, rMax, 0, 0, 2 * Math.PI);
            crc2d.fillStyle = "HSLA(" + randomColor + ", 100%, 50%, 0.8";
            crc2d.closePath();
            //crc2d.closePath();
            //crc2d.save();
            crc2d.fill();
            crc2d.restore();
        }
        crc2d.restore();
    }
    function drawFlower6(_positionStem, _paricleSize, _stemSize) {
        let nLeaves = 13;
        let rMax = 7;
        let x = 0;
        let y = 0;
        let randomColor = createRandomNum(0, 360);
        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, 20);
        crc2d.save();
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            crc2d.save();
            switch (drawn) {
                case 0:
                    x = -6;
                    y = -2;
                    rMax = 3;
                    break;
                case 1:
                    x = 0;
                    y = -1;
                    rMax = 3;
                    break;
                case 2:
                    x = 6;
                    y = -2;
                    rMax = 3;
                    break;
                case 3:
                    x = -8;
                    y = -5;
                    rMax = 3;
                    break;
                case 4:
                    x = 8;
                    y = -5;
                    rMax = 3;
                    break;
                case 5:
                    x = -10;
                    y = -10;
                    rMax = 3;
                    break;
                case 6:
                    x = 10;
                    y = -10;
                    rMax = 3;
                    break;
                case 7:
                    x = 8;
                    y = -15;
                    rMax = 3;
                    break;
                case 8:
                    x = -8;
                    y = -15;
                    rMax = 3;
                    break;
                case 9:
                    rMax = 3;
                    x = 5;
                    y = -18;
                    break;
                case 10:
                    x = -5;
                    y = -18;
                    rMax = 3;
                    break;
                case 11:
                    x = 0;
                    y = -20;
                    rMax = 3;
                    break;
                case 12:
                    x = 0;
                    y = -10;
                    randomColor = 60;
                    rMax = 7;
                    break;
                default:
                    console.log("something is wrong");
            }
            crc2d.save();
            crc2d.translate(x, y);
            let posX = _positionStem.x + 2;
            let posY = _positionStem.y - 1;
            crc2d.beginPath();
            crc2d.ellipse(posX, posY, rMax, rMax, 0, 0, 2 * Math.PI);
            crc2d.fillStyle = "HSLA(" + randomColor + ", 100%, 50%, 0.8";
            crc2d.closePath();
            //crc2d.closePath();
            //crc2d.save();
            crc2d.fill();
            crc2d.restore();
        }
    }
    function drawFlowers() {
        let rows = [
            { x: 10, y: 360 },
            { x: 20, y: 400 },
            { x: 10, y: 460 },
            { x: 20, y: 540 },
            { x: 10, y: 640 },
            { x: 20, y: 720 }
        ];
        let paricleSize = 5;
        let step = 60;
        let i = 0;
        let stemSize;
        for (i; i < 6; i++) {
            stemSize = i * 10 + 10;
            /*switch (i) {
                case 0:
                    console.log("start");
                    break;
                case 1:
                    rows[i].x = step;
                    break;
                case 2:
                    rows[i].x = 2 * step;
                    break;
                case 3:
                    rows[i].x = 3 * step;
                    break;
                case 4:
                    rows[i].x = 4 * step;
                    break;
                case 5:
                    rows[i].x = 5 * step;
                    break;
                default:
                    console.log("something went wrong");
                    
                    
            }*/
            //rows[i].x = step;
            drawFlower1(rows[i], paricleSize + i, stemSize);
            drawFlower2({ x: rows[i].x + step, y: rows[i].y }, paricleSize + i, stemSize);
            drawFlower3({ x: rows[i].x + 2 * step, y: rows[i].y }, paricleSize + i, stemSize);
            drawFlower4({ x: rows[i].x + 3 * step, y: rows[i].y }, paricleSize + i, stemSize);
            drawFlower5({ x: rows[i].x + 4 * step, y: rows[i].y }, paricleSize + i, stemSize);
            drawFlower6({ x: rows[i].x + 5 * step, y: rows[i].y }, paricleSize + i, stemSize);
        }
    }
})(L08_2_Blumenwiese || (L08_2_Blumenwiese = {}));
//# sourceMappingURL=L08_2_BlumenwieseScript.js.map