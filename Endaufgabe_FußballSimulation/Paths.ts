namespace Endaufgabe_FußballSiumulation {
    export function drawField(): void {
        crc2.fillStyle = "green";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Außenlinie
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 5, canvas.height / 75 * 5);
        crc2.lineTo(canvas.width / 110 * 105, canvas.height / 75 * 5);
        crc2.lineTo(canvas.width / 110 * 105, canvas.height / 75 * 70);
        crc2.lineTo(canvas.width / 110 * 5, canvas.height / 75 * 70);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();

        //Mittellinie
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 2, canvas.height / 75 * 5);
        crc2.lineTo(canvas.width / 2, canvas.height / 75 * 70);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();

        //enger Kreis um Mittellinie
        crc2.save();
        crc2.beginPath();
        crc2.arc(canvas.width / 2, canvas.height / 2, 4, 0, 2 * Math.PI);
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();

        //Kreis um Mittellinie
        crc2.save();
        crc2.beginPath();
        crc2.arc(canvas.width / 2, canvas.height / 2, canvas.width / 110 * 9, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();

        function drawPenaltyArea(_outerLine: number, _distance: number): void {
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(canvas.width / 110 * _outerLine, (canvas.height / 2) + 110);
            crc2.lineTo(canvas.width / 110 * _distance, (canvas.height / 2) + 110);
            crc2.lineTo(canvas.width / 110 * _distance, (canvas.height / 2) - 110);
            crc2.lineTo(canvas.width / 110 * _outerLine, (canvas.height / 2) - 110);
            crc2.closePath();
            crc2.strokeStyle = "white";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.restore(); 
        }
        //Links
        drawPenaltyArea(5, 21.5);
        //Rechts
        drawPenaltyArea(105, 88.5);
        //Straffraum Linie links
        /*crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 5, (canvas.height / 2) + 110);
        crc2.lineTo(canvas.width / 110 * 21.5, (canvas.height / 2) + 110);
        crc2.lineTo(canvas.width / 110 * 21.5, (canvas.height / 2) - 110);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) - 110);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/

        function drawGoalArea(_outerLine: number, _distance: number): void {
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(canvas.width / 110 * _outerLine, (canvas.height / 2) + 50);
            crc2.lineTo(canvas.width / 110 * _distance, (canvas.height / 2) + 50);
            crc2.lineTo(canvas.width / 110 * _distance, (canvas.height / 2) - 50);
            crc2.lineTo(canvas.width / 110 * _outerLine, (canvas.height / 2) - 50);
            crc2.closePath();
            crc2.strokeStyle = "white";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.restore();
        }
        //Links
        drawGoalArea(5, 10.5);
        //Rechts
        drawGoalArea(105, 99.5);
        //Torraum Linie links
        /*crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 5, (canvas.height / 2) + 50);
        crc2.lineTo(canvas.width / 110 * 10.5, (canvas.height / 2) + 50);
        crc2.lineTo(canvas.width / 110 * 10.5, (canvas.height / 2) - 50);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) - 50);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/

        function drawArcPentaltyArea(_start: number, _anticlockwise: boolean): void {
            crc2.save();
            crc2.beginPath();
            crc2.arc(canvas.width / 110 * _start, canvas.height / 2, 50, 90 * (Math.PI / 180), 270 * (Math.PI / 180), _anticlockwise);
            crc2.closePath();
            crc2.strokeStyle = "white";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.restore();
        }
        //Links
        drawArcPentaltyArea(21.5, true);
        //Rechts
        drawArcPentaltyArea(88.5, false);
        //Bogen über Straffraum links
        /*crc2.save();
        crc2.beginPath();
        crc2.arc(canvas.width / 110 * 21.5, canvas.height / 2, 50, 90 * (Math.PI / 180), 270 * (Math.PI / 180), true);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/

        function drawPentaltySpot(_center: number): void {
            crc2.save();
            crc2.beginPath();
            crc2.arc(canvas.width / 110 * _center, canvas.height / 2, 4, 0, 360);
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.lineWidth = 5;
            crc2.fill();
            crc2.restore();
        }
        //Links
        drawPentaltySpot(15.75);
        //Rechts
        drawPentaltySpot(94.25);
        //Elfmeter Punkt (jedenfalls fast) links
        /*crc2.save();
        crc2.beginPath();
        crc2.arc(canvas.width / 110 * 15.75, canvas.height / 2, 4, 0, 360);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.lineWidth = 5;
        crc2.fill();
        crc2.restore();*/

        function drawGoal(_outerLine: number, _end: number): void {
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(canvas.width / 110 * _outerLine, (canvas.height / 2) + 40);
            crc2.lineTo(canvas.width / 110 * _end, (canvas.height / 2) + 40);
            crc2.lineTo(canvas.width / 110 * _end, (canvas.height / 2) - 40);
            crc2.lineTo(canvas.width / 110 * _outerLine, (canvas.height / 2) - 40);
            crc2.closePath();
            crc2.strokeStyle = "white";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.restore();
        }
        //Links
        drawGoal(5, 1);
        //Rechts
        drawGoal(105, 109);
        //Tor links
        /*crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 5, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 1, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 1, (canvas.height / 2) - 40);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) - 40);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/

        function drawNet(_distance1: number, _distance2: number, _distance3: number, _distance4: number, _distance5: number): void {
            crc2.save();
            crc2.beginPath();
            crc2.moveTo (canvas.width / 110 * _distance2, (canvas.height / 2) + 40);
            crc2.lineTo(canvas.width / 110 * _distance2, (canvas.height / 2) - 40);
            crc2.moveTo(canvas.width / 110 * _distance3, (canvas.height / 2) - 40);
            crc2.lineTo (canvas.width / 110 * _distance3, (canvas.height / 2) + 40);
            crc2.moveTo(canvas.width / 110 * _distance4, (canvas.height / 2) + 40);
            crc2.lineTo(canvas.width / 110 * _distance4, (canvas.height / 2) - 40);
            crc2.moveTo(canvas.width / 110 * _distance1, (canvas.height / 2) + 20);
            crc2.lineTo(canvas.width / 110 * _distance5, (canvas.height / 2) + 20);
            crc2.moveTo(canvas.width / 110 * _distance1, (canvas.height / 2) + 0);
            crc2.lineTo(canvas.width / 110 * _distance5, (canvas.height / 2) + 0);
            crc2.moveTo(canvas.width / 110 * _distance1, (canvas.height / 2) - 20);
            crc2.lineTo(canvas.width / 110 * _distance5, (canvas.height / 2) - 20);
            crc2.closePath();
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.restore();
        }
        //Links
        drawNet(1, 2, 3, 4, 5);
        //Rechts
        drawNet(109, 108, 107, 106, 105);
        //Netz Tor
        /*crc2.save();
        crc2.beginPath();
        crc2.moveTo (canvas.width / 110 * 2, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 2, (canvas.height / 2) - 40);
        crc2.moveTo(canvas.width / 110 * 3, (canvas.height / 2) - 40);
        crc2.lineTo (canvas.width / 110 * 3, (canvas.height / 2) + 40);
        crc2.moveTo(canvas.width / 110 * 4, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 4, (canvas.height / 2) - 40);
        crc2.moveTo(canvas.width / 110 * 1, (canvas.height / 2) + 20);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) + 20);
        crc2.moveTo(canvas.width / 110 * 1, (canvas.height / 2) + 0);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) + 0);
        crc2.moveTo(canvas.width / 110 * 1, (canvas.height / 2) - 20);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) - 20);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.restore();*/

        //Straffraum Linie rechts
        /*crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 105, (canvas.height / 2) + 110);
        crc2.lineTo(canvas.width / 110 * 88.5, (canvas.height / 2) + 110);
        crc2.lineTo(canvas.width / 110 * 88.5, (canvas.height / 2) - 110);
        crc2.lineTo(canvas.width / 110 * 105, (canvas.height / 2) - 110);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/

        //Torraum Linie rechts
        /*crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 105, (canvas.height / 2) + 50);
        crc2.lineTo(canvas.width / 110 * 99.5, (canvas.height / 2) + 50);
        crc2.lineTo(canvas.width / 110 * 99.5, (canvas.height / 2) - 50);
        crc2.lineTo(canvas.width / 110 * 105, (canvas.height / 2) - 50);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/

        //Bogen über Straffraum rechts
        /*crc2.save();
        crc2.beginPath();
        crc2.arc(canvas.width / 110 * 88.5, canvas.height / 2, 50, 90 * (Math.PI / 180), 270 * (Math.PI / 180), false);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/

         //Elfmeter Punkt (jedenfalls fast) rechts
        /*crc2.save();
        crc2.beginPath();
        crc2.arc(canvas.width / 110 * 94.25, canvas.height / 2, 4, 0, 360);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.lineWidth = 5;
        crc2.fill();
        crc2.restore();*/

        //Tor rechts
        /*crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 105, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 109, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 109, (canvas.height / 2) - 40);
        crc2.lineTo(canvas.width / 110 * 105, (canvas.height / 2) - 40);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();*/

        //Netz Tor rechts
        crc2.save();
        crc2.beginPath();
        crc2.moveTo (canvas.width / 110 * 108, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 108, (canvas.height / 2) - 40);
        crc2.moveTo(canvas.width / 110 * 107, (canvas.height / 2) - 40);
        crc2.lineTo (canvas.width / 110 * 107, (canvas.height / 2) + 40);
        crc2.moveTo(canvas.width / 110 * 106, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 106, (canvas.height / 2) - 40);
        crc2.moveTo(canvas.width / 110 * 109, (canvas.height / 2) + 20);
        crc2.lineTo(canvas.width / 110 * 105, (canvas.height / 2) + 20);
        crc2.moveTo(canvas.width / 110 * 109, (canvas.height / 2) + 0);
        crc2.lineTo(canvas.width / 110 * 105, (canvas.height / 2) + 0);
        crc2.moveTo(canvas.width / 110 * 109, (canvas.height / 2) - 20);
        crc2.lineTo(canvas.width / 110 * 105, (canvas.height / 2) - 20);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.restore();
    }
}