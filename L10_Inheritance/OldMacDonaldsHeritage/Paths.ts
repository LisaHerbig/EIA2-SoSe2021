namespace L10_1_OldMacDonalsHeritage {
    //Cow
    export function drawCow(): void {
        //head
        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(50, 0);
        crc2d.lineTo(100, 0);
        crc2d.lineTo(100, 60);
        crc2d.lineTo(50, 60);
        crc2d.closePath();
        crc2d.strokeStyle = "black";
        crc2d.stroke();
        crc2d.restore();

        //Nose
        crc2d.beginPath();
        crc2d.save();
        crc2d.moveTo(50, 50);
        crc2d.lineTo(100, 50);
        crc2d.stroke();
        crc2d.restore();

        //Eyes
        for (let i: number = 0; i < 4; i++) {
            //crc2d.save();
            if (i == 0) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.arc(60, 20, 3, 0, 2 * Math.PI);
                crc2d.fill();
                crc2d.closePath();
                crc2d.restore();
            }
            if (i == 1) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.arc(90, 20, 3, 0, 2 * Math.PI);
                crc2d.fill();
                crc2d.closePath();
                crc2d.restore();
            }
            if (i == 2) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.arc(70, 55, 2, 0, 2 * Math.PI);
                crc2d.stroke();
                crc2d.closePath();
                crc2d.restore();
            }
            if ( i == 3) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.arc(80, 55, 2, 0, 2 * Math.PI);
                crc2d.stroke();
                crc2d.closePath();
                crc2d.restore();
            }
        }

        //Ears
        for (let i: number = 0; i < 3; i++) {
            if (i == 0) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.ellipse(45, 7, 5, 7, -2, 0, 2 * Math.PI);
                crc2d.stroke();
                crc2d.closePath();
                crc2d.restore();
            }
            if ( i == 1) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.ellipse(105, 7, 5, 7, 2, 0, 2 * Math.PI);
                crc2d.stroke();
                crc2d.closePath();
                crc2d.restore();
            }    
        }
        }

    //Cat
    export function drawCat(): void {
        //head
        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(600, 10);
        crc2d.lineTo(650, 10);
        crc2d.lineTo(650, 60);
        crc2d.lineTo(600, 60);
        crc2d.closePath();
        crc2d.strokeStyle = "black";
        crc2d.stroke();
        crc2d.restore();

        //eyes
        for (let i: number = 0; i < 3; i++) {
            //crc2d.save();
            if (i == 0) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.arc(620, 30, 3, 0, 2 * Math.PI);
                crc2d.fill();
                crc2d.closePath();
                crc2d.restore();
            }
            if (i == 1) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.arc(630, 30, 3, 0, 2 * Math.PI);
                crc2d.fill();
                crc2d.closePath();
                crc2d.restore();
            }
    }

    //nose
        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(620, 40);
        crc2d.lineTo(625, 45);
        crc2d.lineTo(630, 40);
        crc2d.closePath();

        crc2d.moveTo(625, 45);
        crc2d.lineTo(625, 50);
        crc2d.stroke();
        crc2d.restore();

    //hair
        crc2d.save();
        crc2d.moveTo(610, 43);
        crc2d.lineTo(590, 43);
        crc2d.stroke();
        crc2d.restore();

        crc2d.save();
        crc2d.moveTo(610, 46);
        crc2d.lineTo(590, 46);
        crc2d.stroke();
        crc2d.restore();

        crc2d.save();
        crc2d.moveTo(640, 43);
        crc2d.lineTo(660, 43);
        crc2d.stroke();
        crc2d.restore();

        crc2d.save();
        crc2d.moveTo(640, 46);
        crc2d.lineTo(660, 46);
        crc2d.stroke();
        crc2d.restore();

        //ears
        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(600, 10);
        crc2d.lineTo(620, 10);
        crc2d.lineTo(610, 0);
        crc2d.closePath();
        crc2d.stroke();
        crc2d.restore();

        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(650, 10);
        crc2d.lineTo(630, 10);
        crc2d.lineTo(640, 0);
        crc2d.closePath();
        crc2d.stroke();
        crc2d.restore();
}
}