"use strict";
var L10_1_OldMacDonalsHeritage;
(function (L10_1_OldMacDonalsHeritage) {
    //Cow
    function drawCow() {
        //head
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.beginPath();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(50, 0);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(100, 0);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(100, 60);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(50, 60);
        L10_1_OldMacDonalsHeritage.crc2d.closePath();
        L10_1_OldMacDonalsHeritage.crc2d.strokeStyle = "black";
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        //Nose
        L10_1_OldMacDonalsHeritage.crc2d.beginPath();
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(50, 50);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(100, 50);
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        //Eyes
        for (let i = 0; i < 4; i++) {
            //crc2d.save();
            if (i == 0) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.arc(60, 20, 3, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.fill();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
            if (i == 1) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.arc(90, 20, 3, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.fill();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
            if (i == 2) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.arc(70, 55, 2, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.stroke();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
            if (i == 3) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.arc(80, 55, 2, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.stroke();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
        }
        //Ears
        for (let i = 0; i < 3; i++) {
            if (i == 0) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.ellipse(45, 7, 5, 7, -2, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.stroke();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
            if (i == 1) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.ellipse(105, 7, 5, 7, 2, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.stroke();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
        }
    }
    L10_1_OldMacDonalsHeritage.drawCow = drawCow;
    //Cat
    function drawCat() {
        //head
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.beginPath();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(600, 10);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(650, 10);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(650, 60);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(600, 60);
        L10_1_OldMacDonalsHeritage.crc2d.closePath();
        L10_1_OldMacDonalsHeritage.crc2d.strokeStyle = "black";
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        //eyes
        for (let i = 0; i < 3; i++) {
            //crc2d.save();
            if (i == 0) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.arc(620, 30, 3, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.fill();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
            if (i == 1) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.arc(630, 30, 3, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.fill();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
        }
        //nose
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.beginPath();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(620, 40);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(625, 45);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(630, 40);
        L10_1_OldMacDonalsHeritage.crc2d.closePath();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(625, 45);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(625, 50);
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        //hair
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(610, 43);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(590, 43);
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(610, 46);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(590, 46);
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(640, 43);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(660, 43);
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(640, 46);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(660, 46);
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        //ears
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.beginPath();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(600, 10);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(620, 10);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(610, 0);
        L10_1_OldMacDonalsHeritage.crc2d.closePath();
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.beginPath();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(650, 10);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(630, 10);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(640, 0);
        L10_1_OldMacDonalsHeritage.crc2d.closePath();
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
    }
    L10_1_OldMacDonalsHeritage.drawCat = drawCat;
    //Dog
    function drawDog() {
        //head
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.beginPath();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(50, 200);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(100, 200);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(100, 250);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(50, 250);
        L10_1_OldMacDonalsHeritage.crc2d.closePath();
        L10_1_OldMacDonalsHeritage.crc2d.strokeStyle = "black";
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        //eyes
        for (let i = 0; i < 3; i++) {
            //crc2d.save();
            if (i == 0) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.arc(70, 220, 3, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.fill();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
            if (i == 1) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.arc(80, 220, 3, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.fill();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
        }
        //nose
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.beginPath();
        L10_1_OldMacDonalsHeritage.crc2d.ellipse(75, 230, 5, 2, 0, 0, 2 * Math.PI);
        L10_1_OldMacDonalsHeritage.crc2d.closePath();
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(75, 232);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(75, 240);
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        //Ears
        for (let i = 0; i < 3; i++) {
            if (i == 0) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.ellipse(45, 210, 5, 10, 0.5, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.stroke();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
            if (i == 1) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.ellipse(105, 210, 5, 10, -0.5, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.stroke();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
        }
    }
    L10_1_OldMacDonalsHeritage.drawDog = drawDog;
    //pig
    function drawPig() {
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.beginPath();
        L10_1_OldMacDonalsHeritage.crc2d.arc(625, 225, 30, 0, 2 * Math.PI);
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        //Eyes
        for (let i = 0; i < 3; i++) {
            //crc2d.save();
            if (i == 0) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.arc(615, 210, 3, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.fill();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
            if (i == 1) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.arc(635, 210, 3, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.fill();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
            //Nose
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.beginPath();
            L10_1_OldMacDonalsHeritage.crc2d.arc(625, 230, 15, 0, 2 * Math.PI);
            L10_1_OldMacDonalsHeritage.crc2d.closePath();
            L10_1_OldMacDonalsHeritage.crc2d.stroke();
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.beginPath();
            L10_1_OldMacDonalsHeritage.crc2d.arc(620, 230, 2, 0, 2 * Math.PI);
            L10_1_OldMacDonalsHeritage.crc2d.closePath();
            L10_1_OldMacDonalsHeritage.crc2d.stroke();
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.beginPath();
            L10_1_OldMacDonalsHeritage.crc2d.arc(630, 230, 2, 0, 2 * Math.PI);
            L10_1_OldMacDonalsHeritage.crc2d.closePath();
            L10_1_OldMacDonalsHeritage.crc2d.stroke();
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            //Ears
            function drawPigEars(_x) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.arc(_x, 200, 5, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.closePath(),
                    L10_1_OldMacDonalsHeritage.crc2d.stroke();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
            drawPigEars(600);
            drawPigEars(650);
        }
    }
    L10_1_OldMacDonalsHeritage.drawPig = drawPig;
    //Goat
    function drawGoat() {
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(50, 400);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(100, 400);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(100, 450);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(75, 470);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(50, 450);
        L10_1_OldMacDonalsHeritage.crc2d.closePath();
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        //Nose
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.beginPath();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(75, 470);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(75, 450);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(70, 445);
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.beginPath();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(75, 450);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(80, 445);
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        //Eyes
        for (let i = 0; i < 4; i++) {
            //crc2d.save();
            if (i == 0) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.arc(70, 430, 3, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.fill();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
            if (i == 1) {
                L10_1_OldMacDonalsHeritage.crc2d.save();
                L10_1_OldMacDonalsHeritage.crc2d.beginPath();
                L10_1_OldMacDonalsHeritage.crc2d.arc(80, 430, 3, 0, 2 * Math.PI);
                L10_1_OldMacDonalsHeritage.crc2d.fill();
                L10_1_OldMacDonalsHeritage.crc2d.closePath();
                L10_1_OldMacDonalsHeritage.crc2d.restore();
            }
        }
        //Ears
        function drawGoatEars(_x) {
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.beginPath();
            L10_1_OldMacDonalsHeritage.crc2d.arc(_x, 405, 5, 0, 2 * Math.PI);
            L10_1_OldMacDonalsHeritage.crc2d.closePath(),
                L10_1_OldMacDonalsHeritage.crc2d.stroke();
            L10_1_OldMacDonalsHeritage.crc2d.restore();
        }
        drawGoatEars(45);
        drawGoatEars(105);
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.beginPath();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(60, 400);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(70, 400);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(65, 380);
        L10_1_OldMacDonalsHeritage.crc2d.closePath();
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
        L10_1_OldMacDonalsHeritage.crc2d.save();
        L10_1_OldMacDonalsHeritage.crc2d.beginPath();
        L10_1_OldMacDonalsHeritage.crc2d.moveTo(80, 400);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(90, 400);
        L10_1_OldMacDonalsHeritage.crc2d.lineTo(85, 380);
        L10_1_OldMacDonalsHeritage.crc2d.closePath();
        L10_1_OldMacDonalsHeritage.crc2d.stroke();
        L10_1_OldMacDonalsHeritage.crc2d.restore();
    }
    L10_1_OldMacDonalsHeritage.drawGoat = drawGoat;
})(L10_1_OldMacDonalsHeritage || (L10_1_OldMacDonalsHeritage = {}));
//# sourceMappingURL=Paths.js.map