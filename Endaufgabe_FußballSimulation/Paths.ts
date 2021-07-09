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
    }

    export function drawShirt(_position: Vector, _color: string, _typ: string, _team: string): void {
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(_position.x - canvas.width / 110 * 2, _position.y - canvas.height / 75 * 2);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3,  _position.y - canvas.height / 75 * 2);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3, (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 2);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3 + canvas.width / 110 * 1, (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 2 + canvas.height / 75 * 1);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3 + 2 * (canvas.width / 110 * 1), (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 2);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3 + 2 * (canvas.width / 110 * 1) - canvas.width / 110 * 2, (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 4);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3 + 2 * (canvas.width / 110 * 1) - canvas.width / 110 * 5, (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 4);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3 + 2 * (canvas.width / 110 * 1) - canvas.width / 110 * 7, (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 2);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3 + 2 * (canvas.width / 110 * 1) - canvas.width / 110 * 6, (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 1);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3 + 2 * (canvas.width / 110 * 1) - canvas.width / 110 * 5, (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 2);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.restore();
        if (_team == "team1") {
            crc2.save();
            crc2.strokeStyle = "white";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.restore();
        }
        //crc2.restore();
        if (_typ == "lineJudge") {
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(_position.x - canvas.width / 110 * 2, _position.y - canvas.height / 75 * 3);
            crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3, _position.y - canvas.height / 75 * 3);
            crc2.closePath();
            crc2.lineWidth = 7;
            crc2.stroke();
            crc2.restore();
        }
        if (_typ == "referee") {
            crc2.save();
            crc2.beginPath();
            crc2.moveTo((_position.x - canvas.width / 110 * 2.5) + canvas.width / 110 + 10, _position.y - canvas.height / 75 * 5);
            crc2.lineTo((_position.x - canvas.width / 110 * 2.5) + canvas.width / 110 + 10, _position.y - canvas.height / 75 * 3);
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.restore();
        }
    }

    export function drawBall(_position: Vector): void {
        crc2.save();
        crc2.beginPath();
        //crc2.translate(_position.x, _position.y);
        crc2.arc(_position.x, _position.y, width / 110 * 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.moveTo(_position.x - 5, _position.y - 7);
        crc2.lineTo(_position.x + 5, _position.y - 7);
        crc2.lineTo(_position.x + 7, _position.y);
        crc2.lineTo(_position.x, _position.y + 6);
        crc2.lineTo(_position.x - 7, _position.y);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.moveTo(_position.x - 3, _position.y - 5);
        crc2.lineTo(_position.x - 7, _position.y - 10);
        crc2.moveTo(_position.x + 3, _position.y - 5);
        crc2.lineTo(_position.x + 7, _position.y - 10);
        crc2.moveTo(_position.x + 5, _position.y);
        crc2.lineTo(_position.x + 13, _position.y + 2);
        crc2.moveTo(_position.x, _position.y + 4);
        crc2.lineTo(_position.x, _position.y + 12);
        crc2.moveTo(_position.x - 5, _position.y);
        crc2.lineTo(_position.x - 13, _position.y + 2);
        //crc2.translate(_position.x, _position.y);
        crc2.stroke();
        crc2.restore();
    }
}