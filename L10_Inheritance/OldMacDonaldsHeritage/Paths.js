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
})(L10_1_OldMacDonalsHeritage || (L10_1_OldMacDonalsHeritage = {}));
//# sourceMappingURL=Paths.js.map