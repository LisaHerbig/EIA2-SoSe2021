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

    //Dog
    export function drawDog(): void {
        //head
        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(50, 200);
        crc2d.lineTo(100, 200);
        crc2d.lineTo(100, 250);
        crc2d.lineTo(50, 250);
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
                crc2d.arc(70, 220, 3, 0, 2 * Math.PI);
                crc2d.fill();
                crc2d.closePath();
                crc2d.restore();
            }
            if (i == 1) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.arc(80, 220, 3, 0, 2 * Math.PI);
                crc2d.fill();
                crc2d.closePath();
                crc2d.restore();
            }
        }

        //nose
        crc2d.save();
        crc2d.beginPath();
        crc2d.ellipse(75, 230, 5, 2, 0, 0, 2 * Math.PI);
        crc2d.closePath();
        crc2d.stroke();
        crc2d.restore();

        crc2d.save();
        crc2d.moveTo(75, 232);
        crc2d.lineTo(75, 240);
        crc2d.stroke();
        crc2d.restore();

        //Ears
        for (let i: number = 0; i < 3; i++) {
            if (i == 0) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.ellipse(45, 210, 5, 10, 0.5, 0, 2 * Math.PI);
                crc2d.stroke();
                crc2d.closePath();
                crc2d.restore();
            }
            if ( i == 1) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.ellipse(105, 210, 5, 10, -0.5, 0, 2 * Math.PI);
                crc2d.stroke();
                crc2d.closePath();
                crc2d.restore();
            }    
        }
    }

    //pig
    export function drawPig(): void {
        crc2d.save();
        crc2d.beginPath();
        crc2d.arc(625, 225, 30, 0, 2 * Math.PI);
        crc2d.stroke();
        crc2d.restore();

        //Eyes
        for (let i: number = 0; i < 3; i++) {
            //crc2d.save();
            if (i == 0) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.arc(615, 210, 3, 0, 2 * Math.PI);
                crc2d.fill();
                crc2d.closePath();
                crc2d.restore();
            }
            if (i == 1) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.arc(635, 210, 3, 0, 2 * Math.PI);
                crc2d.fill();
                crc2d.closePath();
                crc2d.restore();
            }

        //Nose
            crc2d.save();
            crc2d.beginPath();
            crc2d.arc(625, 230, 15, 0, 2 * Math.PI);
            crc2d.closePath();
            crc2d.stroke();
            crc2d.restore();

            crc2d.save();
            crc2d.beginPath();
            crc2d.arc(620, 230, 2, 0, 2 * Math.PI);
            crc2d.closePath();
            crc2d.stroke();
            crc2d.restore();

            crc2d.save();
            crc2d.beginPath();
            crc2d.arc(630, 230, 2, 0, 2 * Math.PI);
            crc2d.closePath();
            crc2d.stroke();
            crc2d.restore();

            //Ears
            function drawPigEars(_x: number): void {
                crc2d.save();
                crc2d.beginPath();
                crc2d.arc(_x, 200, 5, 0, 2 * Math.PI);
                crc2d.closePath(),
                crc2d.stroke();
                crc2d.restore();
            }
            drawPigEars(600);
            drawPigEars(650);
            
    }
}

    //Goat
    export function drawGoat(): void {
        crc2d.save();
        crc2d.moveTo(50, 400);
        crc2d.lineTo(100, 400);
        crc2d.lineTo(100, 450);
        crc2d.lineTo(75, 470);
        crc2d.lineTo(50, 450);
        crc2d.closePath();
        crc2d.stroke();
        crc2d.restore();

        //Nose
        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(75, 470);
        crc2d.lineTo(75, 450);
        crc2d.lineTo(70, 445);
        crc2d.stroke();
        crc2d.restore();
        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(75, 450);
        crc2d.lineTo(80, 445);
        crc2d.stroke();
        crc2d.restore();
    

        //Eyes
        for (let i: number = 0; i < 4; i++) {
            //crc2d.save();
            if (i == 0) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.arc(70, 430, 3, 0, 2 * Math.PI);
                crc2d.fill();
                crc2d.closePath();
                crc2d.restore();
            }
            if (i == 1) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.arc(80, 430, 3, 0, 2 * Math.PI);
                crc2d.fill();
                crc2d.closePath();
                crc2d.restore();
            }
        }
        //Ears
        function drawGoatEars(_x: number): void {
            crc2d.save();
            crc2d.beginPath();
            crc2d.arc(_x, 405, 5, 0, 2 * Math.PI);
            crc2d.closePath(),
            crc2d.stroke();
            crc2d.restore();
        }
        drawGoatEars(45);
        drawGoatEars(105);  

        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(60, 400);
        crc2d.lineTo(70, 400);
        crc2d.lineTo(65, 380);
        crc2d.closePath();
        crc2d.stroke();
        crc2d.restore();

        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(80, 400);
        crc2d.lineTo(90, 400);
        crc2d.lineTo(85, 380);
        crc2d.closePath();
        crc2d.stroke();
        crc2d.restore();

    }

    //Chicken
    export function drawChicken(): void {
        crc2d.save();
        crc2d.beginPath();
        crc2d.arc(625, 430, 30, 0, 2 * Math.PI);
        crc2d.stroke();
        crc2d.restore();

        //Eyes
        for (let i: number = 0; i < 3; i++) {
            //crc2d.save();
            if (i == 0) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.arc(615, 420, 3, 0, 2 * Math.PI);
                crc2d.fill();
                crc2d.closePath();
                crc2d.restore();
            }
            if (i == 1) {
                crc2d.save();
                crc2d.beginPath();
                crc2d.arc(635, 420, 3, 0, 2 * Math.PI);
                crc2d.fill();
                crc2d.closePath();
                crc2d.restore();
            }
        }

        //Beak
        crc2d.save();
        crc2d.moveTo(615, 430);
        crc2d.lineTo(635, 430);
        crc2d.lineTo(625, 440);
        crc2d.closePath();
        crc2d.stroke();
        crc2d.restore();

        crc2d.save();
        crc2d.beginPath();
        crc2d.ellipse(620, 455, 5, 13, 0.2, 0, 2 * Math.PI);
        crc2d.stroke();
        crc2d.fillStyle = "white";
        crc2d.fill();
        crc2d.restore();

        crc2d.save();
        crc2d.beginPath();
        crc2d.ellipse(630, 455, 5, 10, - 0.2, 0, 2 * Math.PI);
        crc2d.stroke();
        crc2d.fillStyle = "white";
        crc2d.fill();
        crc2d.restore();

        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(620, 400);
        crc2d.lineTo(630, 400);
        crc2d.lineTo(625, 390);
        crc2d.closePath();
        crc2d.stroke();
        crc2d.restore();
    }
}