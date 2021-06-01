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
}