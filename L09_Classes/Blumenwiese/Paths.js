"use strict";
var L09_2_Blumenwiese;
(function (L09_2_Blumenwiese) {
    //Flower 1
    function drawFlower1(_position, _size) {
        let nLeaves = 7;
        let rMax = 7;
        let x = 0;
        let y = 0;
        L09_2_Blumenwiese.crc2d.save();
        L09_2_Blumenwiese.drawFlowerStem(_position);
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
            L09_2_Blumenwiese.crc2d.translate(x, y);
            let posX = _position.x + 1;
            let posY = _position.y - 1;
            L09_2_Blumenwiese.crc2d.beginPath();
            L09_2_Blumenwiese.crc2d.ellipse(posX, posY, rMax - drawn * 0.5, rMax - drawn * 0.5, 0, 0, 2 * Math.PI);
            L09_2_Blumenwiese.crc2d.fillStyle = L09_2_Blumenwiese.pinkPurple[L09_2_Blumenwiese.createRandomNum(0, 3)];
            L09_2_Blumenwiese.crc2d.closePath();
            //crc2d.scale(_size, _size);
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.restore();
        }
        L09_2_Blumenwiese.crc2d.restore();
    }
    L09_2_Blumenwiese.drawFlower1 = drawFlower1;
    //Flower 2
    function drawFlower2(_positionStem, _size) {
        let nLeaves = 5;
        //crc2d.beginPath();
        L09_2_Blumenwiese.drawFlowerStem(_positionStem);
        //crc2d.closePath();
        L09_2_Blumenwiese.crc2d.save();
        let color = L09_2_Blumenwiese.colorfulColors[L09_2_Blumenwiese.createRandomNum(0, 12)];
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
            L09_2_Blumenwiese.crc2d.beginPath();
            L09_2_Blumenwiese.crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 2, 20, rotate * Math.PI / 180, 0, 2 * Math.PI);
            L09_2_Blumenwiese.crc2d.fillStyle = color;
            //crc2d.scale(_size, _size);
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.closePath();
            L09_2_Blumenwiese.crc2d.translate(_positionStem.x + 2, _positionStem.y - 25);
            L09_2_Blumenwiese.crc2d.restore();
            L09_2_Blumenwiese.crc2d.beginPath();
            L09_2_Blumenwiese.crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 5, 5, 0, 0, 2 * Math.PI);
            L09_2_Blumenwiese.crc2d.fillStyle = "HSLA(58, 100%, 50%, 1)";
            //crc2d.scale(_size, _size);
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.closePath();
            L09_2_Blumenwiese.crc2d.save();
        }
    }
    L09_2_Blumenwiese.drawFlower2 = drawFlower2;
    //Flower 3
    function drawFlower3(_positionStem, _size) {
        let nLeaves = 5;
        L09_2_Blumenwiese.crc2d.beginPath();
        L09_2_Blumenwiese.drawFlowerStem(_positionStem);
        L09_2_Blumenwiese.crc2d.closePath();
        L09_2_Blumenwiese.crc2d.save();
        let color = L09_2_Blumenwiese.colorfulColors[L09_2_Blumenwiese.createRandomNum(0, 12)];
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
            L09_2_Blumenwiese.crc2d.beginPath();
            L09_2_Blumenwiese.crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 5, 15, rotate * Math.PI / 180, 0, 2 * Math.PI);
            L09_2_Blumenwiese.crc2d.fillStyle = color;
            //crc2d.scale(_size, _size);
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.closePath();
            L09_2_Blumenwiese.crc2d.translate(_positionStem.x + 2, _positionStem.y - 25);
            L09_2_Blumenwiese.crc2d.restore();
            L09_2_Blumenwiese.crc2d.beginPath();
            L09_2_Blumenwiese.crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 5, 5, 0, 0, 2 * Math.PI);
            L09_2_Blumenwiese.crc2d.fillStyle = "HSLA(58, 100%, 50%, 1)";
            //crc2d.scale(_size, _size);
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.closePath();
            L09_2_Blumenwiese.crc2d.save();
        }
    }
    L09_2_Blumenwiese.drawFlower3 = drawFlower3;
    //Flower 4
    function drawFlower4(_positionStem, _size) {
        L09_2_Blumenwiese.crc2d.beginPath();
        L09_2_Blumenwiese.crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        L09_2_Blumenwiese.crc2d.fillRect(_positionStem.x, _positionStem.y, 5, -20);
        L09_2_Blumenwiese.crc2d.closePath();
        L09_2_Blumenwiese.crc2d.save();
        let nLeaves = 3;
        let rMax = 10;
        let x = 0;
        let y = 0;
        L09_2_Blumenwiese.drawFlowerStem(_positionStem);
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            L09_2_Blumenwiese.crc2d.save();
            L09_2_Blumenwiese.crc2d.translate(x, y);
            let posX = _positionStem.x + 2;
            let posY = _positionStem.y - 1;
            L09_2_Blumenwiese.crc2d.beginPath();
            L09_2_Blumenwiese.crc2d.ellipse(posX, posY - 20, rMax - drawn * 2, rMax - drawn * 2, 0, 0, 2 * Math.PI);
            L09_2_Blumenwiese.crc2d.fillStyle = L09_2_Blumenwiese.colorfulColors[L09_2_Blumenwiese.createRandomNum(0, 12)];
            L09_2_Blumenwiese.crc2d.closePath();
            //crc2d.scale(_size, _size);
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.restore();
        }
    }
    L09_2_Blumenwiese.drawFlower4 = drawFlower4;
    //Flower 5
    function drawFlower5(_positionStem, _size) {
        let nLeaves = 7;
        let rMax = 7;
        let x = 0;
        let y = 0;
        let randomColor = L09_2_Blumenwiese.createRandomNum(0, 360);
        L09_2_Blumenwiese.drawFlowerStem(_positionStem);
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
    }
    L09_2_Blumenwiese.drawFlower5 = drawFlower5;
    //Flower 6 
    function drawFlower6(_positionStem, _size) {
        let nLeaves = 13;
        let rMax = 7;
        let x = 0;
        let y = 0;
        let randomColor = L09_2_Blumenwiese.createRandomNum(0, 360);
        L09_2_Blumenwiese.drawFlowerStem(_positionStem);
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
            //crc2d.scale(_size, _size);
            L09_2_Blumenwiese.crc2d.fill();
            L09_2_Blumenwiese.crc2d.restore();
        }
    }
    L09_2_Blumenwiese.drawFlower6 = drawFlower6;
})(L09_2_Blumenwiese || (L09_2_Blumenwiese = {}));
//# sourceMappingURL=Paths.js.map