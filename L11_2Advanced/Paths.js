"use strict";
var L11_2_Blumenwiese;
(function (L11_2_Blumenwiese) {
    let pinkPurple = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)"];
    let colorfulColors = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)", "HSLA(0, 100%, 50%, 0.8)", "HSLA(19, 100%, 50%, 0.8)", "HSLA(32, 100%, 50%, 0.9)", "HSLA(60, 100%, 50%, 0.7)", "HSLA(165, 100%, 50%, 0.8)", "HSLA(203, 100%, 50%, 0.8)", "HSLA(244, 100%, 50%, 0.8)", "HSLA((356, 100%, 50%, 0.8))", "HSLA(65, 100%, 95%, 0.9)"];
    //Flower 1
    function drawFlower1(_position) {
        let nLeaves = 7;
        let rMax = 7;
        let x = 0;
        let y = 0;
        L11_2_Blumenwiese.crc2d.save();
        drawFlowerStem(_position);
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            L11_2_Blumenwiese.crc2d.save();
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
            L11_2_Blumenwiese.crc2d.translate(x, y);
            let posX = _position.x + 1;
            let posY = _position.y - 1;
            L11_2_Blumenwiese.crc2d.beginPath();
            L11_2_Blumenwiese.crc2d.ellipse(posX, posY, rMax - drawn * 0.5, rMax - drawn * 0.5, 0, 0, 2 * Math.PI);
            L11_2_Blumenwiese.crc2d.fillStyle = pinkPurple[createRandomNum(0, 3)];
            L11_2_Blumenwiese.crc2d.closePath();
            L11_2_Blumenwiese.crc2d.fill();
            L11_2_Blumenwiese.crc2d.restore();
        }
        L11_2_Blumenwiese.crc2d.restore();
    }
    L11_2_Blumenwiese.drawFlower1 = drawFlower1;
    //Flower 2
    function drawFlower2(_positionStem) {
        let nLeaves = 5;
        drawFlowerStem(_positionStem);
        L11_2_Blumenwiese.crc2d.save();
        let color = colorfulColors[createRandomNum(0, 12)];
        for (let drawn = 0; drawn < nLeaves; drawn++) {
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
            L11_2_Blumenwiese.crc2d.beginPath();
            L11_2_Blumenwiese.crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 2, 20, rotate * Math.PI / 180, 0, 2 * Math.PI);
            L11_2_Blumenwiese.crc2d.fillStyle = color;
            L11_2_Blumenwiese.crc2d.fill();
            L11_2_Blumenwiese.crc2d.closePath();
            L11_2_Blumenwiese.crc2d.translate(_positionStem.x + 2, _positionStem.y - 25);
            L11_2_Blumenwiese.crc2d.restore();
            L11_2_Blumenwiese.crc2d.beginPath();
            L11_2_Blumenwiese.crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 5, 5, 0, 0, 2 * Math.PI);
            L11_2_Blumenwiese.crc2d.fillStyle = "HSLA(58, 100%, 50%, 1)";
            L11_2_Blumenwiese.crc2d.fill();
            L11_2_Blumenwiese.crc2d.closePath();
            L11_2_Blumenwiese.crc2d.save();
        }
        L11_2_Blumenwiese.crc2d.restore();
    }
    L11_2_Blumenwiese.drawFlower2 = drawFlower2;
    //Flower 3
    function drawFlower3(_positionStem) {
        let nLeaves = 5;
        L11_2_Blumenwiese.crc2d.beginPath();
        drawFlowerStem(_positionStem);
        L11_2_Blumenwiese.crc2d.closePath();
        L11_2_Blumenwiese.crc2d.save();
        let color = colorfulColors[createRandomNum(0, 12)];
        for (let drawn = 0; drawn < nLeaves; drawn++) {
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
            L11_2_Blumenwiese.crc2d.beginPath();
            L11_2_Blumenwiese.crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 5, 15, rotate * Math.PI / 180, 0, 2 * Math.PI);
            L11_2_Blumenwiese.crc2d.fillStyle = color;
            L11_2_Blumenwiese.crc2d.fill();
            L11_2_Blumenwiese.crc2d.closePath();
            L11_2_Blumenwiese.crc2d.translate(_positionStem.x + 2, _positionStem.y - 25);
            L11_2_Blumenwiese.crc2d.restore();
            L11_2_Blumenwiese.crc2d.beginPath();
            L11_2_Blumenwiese.crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 5, 5, 0, 0, 2 * Math.PI);
            L11_2_Blumenwiese.crc2d.fillStyle = "HSLA(58, 100%, 50%, 1)";
            L11_2_Blumenwiese.crc2d.fill();
            L11_2_Blumenwiese.crc2d.closePath();
            L11_2_Blumenwiese.crc2d.save();
        }
        L11_2_Blumenwiese.crc2d.restore();
    }
    L11_2_Blumenwiese.drawFlower3 = drawFlower3;
    //Flower 4
    function drawFlower4(_positionStem) {
        L11_2_Blumenwiese.crc2d.beginPath();
        L11_2_Blumenwiese.crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        L11_2_Blumenwiese.crc2d.fillRect(_positionStem.x, _positionStem.y, 5, -20);
        L11_2_Blumenwiese.crc2d.closePath();
        L11_2_Blumenwiese.crc2d.save();
        let nLeaves = 3;
        let rMax = 10;
        let x = 0;
        let y = 0;
        drawFlowerStem(_positionStem);
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            L11_2_Blumenwiese.crc2d.save();
            L11_2_Blumenwiese.crc2d.translate(x, y);
            let posX = _positionStem.x + 2;
            let posY = _positionStem.y - 1;
            L11_2_Blumenwiese.crc2d.beginPath();
            L11_2_Blumenwiese.crc2d.ellipse(posX, posY - 20, rMax - drawn * 2, rMax - drawn * 2, 0, 0, 2 * Math.PI);
            L11_2_Blumenwiese.crc2d.fillStyle = colorfulColors[createRandomNum(0, 12)];
            L11_2_Blumenwiese.crc2d.closePath();
            L11_2_Blumenwiese.crc2d.fill();
            L11_2_Blumenwiese.crc2d.restore();
        }
        L11_2_Blumenwiese.crc2d.restore();
    }
    L11_2_Blumenwiese.drawFlower4 = drawFlower4;
    //Flower 5
    function drawFlower5(_positionStem) {
        let nLeaves = 7;
        let rMax = 7;
        let x = 0;
        let y = 0;
        let randomColor = createRandomNum(0, 360);
        drawFlowerStem(_positionStem);
        L11_2_Blumenwiese.crc2d.save();
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            L11_2_Blumenwiese.crc2d.save();
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
            L11_2_Blumenwiese.crc2d.save();
            L11_2_Blumenwiese.crc2d.translate(x, y);
            let posX = _positionStem.x + 2;
            let posY = _positionStem.y - 1;
            L11_2_Blumenwiese.crc2d.beginPath();
            L11_2_Blumenwiese.crc2d.ellipse(posX, posY, rMax, rMax, 0, 0, 2 * Math.PI);
            L11_2_Blumenwiese.crc2d.fillStyle = "HSLA(" + randomColor + ", 100%, 50%, 0.8";
            L11_2_Blumenwiese.crc2d.closePath();
            L11_2_Blumenwiese.crc2d.fill();
            L11_2_Blumenwiese.crc2d.restore();
        }
        L11_2_Blumenwiese.crc2d.restore();
    }
    L11_2_Blumenwiese.drawFlower5 = drawFlower5;
    //Flower 6 
    function drawFlower6(_positionStem) {
        let nLeaves = 13;
        let rMax = 7;
        let x = 0;
        let y = 0;
        let randomColor = createRandomNum(0, 360);
        drawFlowerStem(_positionStem);
        L11_2_Blumenwiese.crc2d.save();
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            L11_2_Blumenwiese.crc2d.save();
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
            L11_2_Blumenwiese.crc2d.translate(x, y);
            let posX = _positionStem.x + 2;
            let posY = _positionStem.y - 1;
            L11_2_Blumenwiese.crc2d.beginPath();
            L11_2_Blumenwiese.crc2d.ellipse(posX, posY, rMax, rMax, 0, 0, 2 * Math.PI);
            L11_2_Blumenwiese.crc2d.fillStyle = "HSLA(" + randomColor + ", 100%, 50%, 0.8";
            L11_2_Blumenwiese.crc2d.closePath();
            L11_2_Blumenwiese.crc2d.fill();
            L11_2_Blumenwiese.crc2d.restore();
        }
        L11_2_Blumenwiese.crc2d.restore();
    }
    L11_2_Blumenwiese.drawFlower6 = drawFlower6;
    //Cloud
    function drawCloud(_position) {
        let radiusParticle = 55;
        let particle = new Path2D();
        let gradient = L11_2_Blumenwiese.crc2d.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.4)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L11_2_Blumenwiese.crc2d.save();
        L11_2_Blumenwiese.crc2d.translate(_position.x, _position.y);
        L11_2_Blumenwiese.crc2d.fillStyle = gradient;
        for (let i = 0; i < 9; i++) {
            L11_2_Blumenwiese.crc2d.save();
            let x = 50 + 10 * i;
            let y = 2 + i;
            L11_2_Blumenwiese.crc2d.translate(x, y);
            L11_2_Blumenwiese.crc2d.fill(particle);
            L11_2_Blumenwiese.crc2d.restore();
        }
        L11_2_Blumenwiese.crc2d.restore();
    }
    L11_2_Blumenwiese.drawCloud = drawCloud;
    //Bee
    function drawBee(_position, _direction) {
        //body
        L11_2_Blumenwiese.crc2d.save();
        L11_2_Blumenwiese.crc2d.beginPath();
        L11_2_Blumenwiese.crc2d.ellipse(_position.x, _position.y, 20, 10, 0, 0, 2 * Math.PI);
        L11_2_Blumenwiese.crc2d.save();
        L11_2_Blumenwiese.crc2d.translate(_position.x - 2, _position.y - 5);
        //sting      
        L11_2_Blumenwiese.crc2d.moveTo(20, 1);
        L11_2_Blumenwiese.crc2d.lineTo(30, 5);
        L11_2_Blumenwiese.crc2d.lineTo(20, 9);
        L11_2_Blumenwiese.crc2d.lineTo(20, 1);
        L11_2_Blumenwiese.crc2d.fillStyle = "Black";
        L11_2_Blumenwiese.crc2d.fill();
        L11_2_Blumenwiese.crc2d.stroke();
        //Wing back
        createWing(-10, 0);
        //Stripes
        L11_2_Blumenwiese.crc2d.beginPath();
        L11_2_Blumenwiese.crc2d.moveTo(20, -1);
        L11_2_Blumenwiese.crc2d.lineTo(20, 11);
        L11_2_Blumenwiese.crc2d.moveTo(10, -5);
        L11_2_Blumenwiese.crc2d.lineTo(10, 15);
        L11_2_Blumenwiese.crc2d.moveTo(0, -6);
        L11_2_Blumenwiese.crc2d.lineTo(0, 16);
        L11_2_Blumenwiese.crc2d.strokeStyle = "Yellow";
        L11_2_Blumenwiese.crc2d.lineWidth = 3;
        L11_2_Blumenwiese.crc2d.stroke();
        //Eye
        L11_2_Blumenwiese.crc2d.beginPath();
        L11_2_Blumenwiese.crc2d.arc(-10, 2, 1, 0, 2 * Math.PI);
        L11_2_Blumenwiese.crc2d.strokeStyle = "White";
        L11_2_Blumenwiese.crc2d.stroke();
        //crc2d.restore();
        //Wing Front
        createWing(10, 10);
        L11_2_Blumenwiese.crc2d.restore();
        L11_2_Blumenwiese.crc2d.save();
        if (_direction.x > 0) {
            L11_2_Blumenwiese.crc2d.scale(-1, 1);
        }
        L11_2_Blumenwiese.crc2d.restore();
    }
    L11_2_Blumenwiese.drawBee = drawBee;
    //Wing
    function createWing(_direction, _x) {
        L11_2_Blumenwiese.crc2d.save();
        L11_2_Blumenwiese.crc2d.beginPath();
        L11_2_Blumenwiese.crc2d.ellipse(_x, -12, 4, 8, _direction, 0, 2 * Math.PI);
        L11_2_Blumenwiese.crc2d.strokeStyle = "Blue";
        L11_2_Blumenwiese.crc2d.lineWidth = 1;
        L11_2_Blumenwiese.crc2d.fillStyle = "Lightblue";
        L11_2_Blumenwiese.crc2d.fill();
        L11_2_Blumenwiese.crc2d.stroke();
        L11_2_Blumenwiese.crc2d.restore();
    }
    L11_2_Blumenwiese.createWing = createWing;
    //Random Number
    function createRandomNum(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    L11_2_Blumenwiese.createRandomNum = createRandomNum;
    //Backgound
    function drawBackground() {
        let gradient = L11_2_Blumenwiese.crc2d.createLinearGradient(0, 0, 0, L11_2_Blumenwiese.crc2d.canvas.height);
        gradient.addColorStop(0, "HSLA(193, 100%, 40%, 1");
        gradient.addColorStop(0.2, "HSLA(323, 90%, 51%, 1");
        gradient.addColorStop(0.3, "HSLA(55, 100%, 50%, 1");
        gradient.addColorStop(1, "HSLA(126, 100%, 39%, 1");
        L11_2_Blumenwiese.crc2d.fillStyle = gradient;
        L11_2_Blumenwiese.crc2d.fillRect(0, 0, L11_2_Blumenwiese.crc2d.canvas.width, L11_2_Blumenwiese.crc2d.canvas.height);
    }
    L11_2_Blumenwiese.drawBackground = drawBackground;
    //Sund
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 110;
        let gradient = L11_2_Blumenwiese.crc2d.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(61, 100%, 75%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L11_2_Blumenwiese.crc2d.save();
        L11_2_Blumenwiese.crc2d.translate(_position.x, _position.y);
        L11_2_Blumenwiese.crc2d.fillStyle = gradient;
        L11_2_Blumenwiese.crc2d.arc(0, 0, r2, 0, 2 * Math.PI);
        L11_2_Blumenwiese.crc2d.fill();
        L11_2_Blumenwiese.crc2d.restore();
    }
    L11_2_Blumenwiese.drawSun = drawSun;
    //Mountain
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 10;
        let stepMax = 50;
        let x = 0;
        L11_2_Blumenwiese.crc2d.save();
        L11_2_Blumenwiese.crc2d.translate(_position.x, _position.y);
        L11_2_Blumenwiese.crc2d.beginPath();
        L11_2_Blumenwiese.crc2d.moveTo(0, 0);
        L11_2_Blumenwiese.crc2d.lineTo(0, -_max);
        do {
            x += stepMin + createRandomNum(stepMin, stepMax);
            let y = -_min - createRandomNum(_min, _max);
            L11_2_Blumenwiese.crc2d.lineTo(x, y);
        } while (x < L11_2_Blumenwiese.crc2d.canvas.width);
        L11_2_Blumenwiese.crc2d.lineTo(x, 0);
        L11_2_Blumenwiese.crc2d.closePath();
        let gradient = L11_2_Blumenwiese.crc2d.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L11_2_Blumenwiese.crc2d.fillStyle = gradient;
        L11_2_Blumenwiese.crc2d.fill();
        L11_2_Blumenwiese.crc2d.restore();
    }
    L11_2_Blumenwiese.drawMountains = drawMountains;
    //House
    function drawHouse(_position, _stepSide, _stepUp) {
        L11_2_Blumenwiese.crc2d.save();
        L11_2_Blumenwiese.crc2d.beginPath();
        L11_2_Blumenwiese.crc2d.moveTo(_position.x, _position.y);
        L11_2_Blumenwiese.crc2d.lineTo(_stepSide, _position.y);
        L11_2_Blumenwiese.crc2d.lineTo(_stepSide, _position.y + _stepUp);
        L11_2_Blumenwiese.crc2d.lineTo(-_stepSide, _position.y + _stepUp);
        L11_2_Blumenwiese.crc2d.closePath();
        L11_2_Blumenwiese.crc2d.fillStyle = "HSLA(30, 100%, 22%, 1)";
        L11_2_Blumenwiese.crc2d.fill();
        L11_2_Blumenwiese.crc2d.restore();
        L11_2_Blumenwiese.crc2d.save();
        L11_2_Blumenwiese.crc2d.beginPath();
        L11_2_Blumenwiese.crc2d.moveTo(_position.x, _position.y + _stepUp);
        L11_2_Blumenwiese.crc2d.lineTo(_position.x + _stepSide, _position.y + _stepUp);
        L11_2_Blumenwiese.crc2d.lineTo((_position.x + _stepSide) - _stepSide / 2, _position.y + 2 * _stepUp);
        L11_2_Blumenwiese.crc2d.closePath();
        L11_2_Blumenwiese.crc2d.fillStyle = "HSLA(9, 100%, 58%, 1)";
        L11_2_Blumenwiese.crc2d.fill();
        L11_2_Blumenwiese.crc2d.restore();
    }
    L11_2_Blumenwiese.drawHouse = drawHouse;
    //FlowerStem
    function drawFlowerStem(_positionStem) {
        L11_2_Blumenwiese.crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        L11_2_Blumenwiese.crc2d.fillRect(_positionStem.x, _positionStem.y, 5, -20);
    }
    L11_2_Blumenwiese.drawFlowerStem = drawFlowerStem;
    //beehive
    function drawBeehive(_position) {
        L11_2_Blumenwiese.crc2d.save();
        L11_2_Blumenwiese.crc2d.beginPath();
        L11_2_Blumenwiese.crc2d.moveTo(_position.x, _position.y);
        L11_2_Blumenwiese.crc2d.lineTo(_position.x + 100, _position.y);
        L11_2_Blumenwiese.crc2d.lineTo(_position.x + 100, _position.y - 150);
        L11_2_Blumenwiese.crc2d.lineTo(_position.x, _position.y - 150);
        L11_2_Blumenwiese.crc2d.closePath();
        L11_2_Blumenwiese.crc2d.stroke();
        L11_2_Blumenwiese.crc2d.fillStyle = "hsl(28, 91%, 50%)";
        L11_2_Blumenwiese.crc2d.fill();
        L11_2_Blumenwiese.crc2d.restore();
        L11_2_Blumenwiese.crc2d.save();
        L11_2_Blumenwiese.crc2d.beginPath();
        L11_2_Blumenwiese.crc2d.moveTo(_position.x, _position.y - 100);
        L11_2_Blumenwiese.crc2d.lineTo(_position.x + 100, _position.y - 100);
        L11_2_Blumenwiese.crc2d.lineTo(_position.x + 100, _position.y - 150);
        L11_2_Blumenwiese.crc2d.lineTo(_position.x, _position.y - 150);
        L11_2_Blumenwiese.crc2d.closePath();
        L11_2_Blumenwiese.crc2d.fillStyle = "hsl(52, 100%, 51%)";
        L11_2_Blumenwiese.crc2d.fill();
        L11_2_Blumenwiese.crc2d.restore();
        L11_2_Blumenwiese.crc2d.save();
        L11_2_Blumenwiese.crc2d.beginPath();
        L11_2_Blumenwiese.crc2d.moveTo(_position.x + 35, _position.y - 35);
        L11_2_Blumenwiese.crc2d.lineTo(_position.x + 65, _position.y - 35);
        L11_2_Blumenwiese.crc2d.lineTo(_position.x + 65, _position.y - 65);
        L11_2_Blumenwiese.crc2d.lineTo(_position.x + 35, _position.y - 65);
        L11_2_Blumenwiese.crc2d.closePath();
        L11_2_Blumenwiese.crc2d.lineWidth = 5;
        L11_2_Blumenwiese.crc2d.strokeStyle = "hsl(27, 79%, 25%)";
        L11_2_Blumenwiese.crc2d.stroke();
        L11_2_Blumenwiese.crc2d.restore();
    }
    L11_2_Blumenwiese.drawBeehive = drawBeehive;
    //Nectar
    function showNectar(_position, _degree, _color, _fps) {
        let x = _position.x + 2;
        let y = _position.y + 7;
        let degree = _degree;
        degree = 0;
        let intervall = setInterval(function () {
            degree += 1;
            L11_2_Blumenwiese.crc2d.save();
            L11_2_Blumenwiese.crc2d.beginPath();
            L11_2_Blumenwiese.crc2d.arc(x, y, 10, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
            L11_2_Blumenwiese.crc2d.strokeStyle = "white";
            L11_2_Blumenwiese.crc2d.lineWidth = 5;
            L11_2_Blumenwiese.crc2d.lineCap = "round";
            L11_2_Blumenwiese.crc2d.stroke();
            L11_2_Blumenwiese.crc2d.closePath();
            L11_2_Blumenwiese.crc2d.restore();
            L11_2_Blumenwiese.crc2d.save();
            L11_2_Blumenwiese.crc2d.beginPath();
            L11_2_Blumenwiese.crc2d.strokeStyle = _color;
            L11_2_Blumenwiese.crc2d.lineWidth = 5;
            L11_2_Blumenwiese.crc2d.lineCap = "round";
            L11_2_Blumenwiese.crc2d.arc(x, y, 10, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + degree));
            L11_2_Blumenwiese.crc2d.stroke();
            L11_2_Blumenwiese.crc2d.closePath();
            L11_2_Blumenwiese.crc2d.restore();
            //console.log(intervall);
            if (degree == 361)
                clearInterval(intervall);
        }, _fps);
    }
    L11_2_Blumenwiese.showNectar = showNectar;
})(L11_2_Blumenwiese || (L11_2_Blumenwiese = {}));
//# sourceMappingURL=Paths.js.map