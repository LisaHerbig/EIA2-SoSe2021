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

        //Straffraum Linie links
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 5, (canvas.height / 2) + 110);
        crc2.lineTo(canvas.width / 110 * 21.5, (canvas.height / 2) + 110);
        crc2.lineTo(canvas.width / 110 * 21.5, (canvas.height / 2) - 110);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) - 110);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();

        //Torraum Linie links
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 5, (canvas.height / 2) + 50);
        crc2.lineTo(canvas.width / 110 * 10.5, (canvas.height / 2) + 50);
        crc2.lineTo(canvas.width / 110 * 10.5, (canvas.height / 2) - 50);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) - 50);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();

        //Bogen über Straffraum links
        crc2.save();
        crc2.beginPath();
        crc2.arc(canvas.width / 110 * 21.5, canvas.height / 2, 50, 90 * (Math.PI / 180), 270 * (Math.PI / 180), true);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();

        //Elfmeter Punkt (jedenfalls fast) links
        crc2.save();
        crc2.beginPath();
        crc2.arc(canvas.width / 110 * 15.75, canvas.height / 2, 4, 0, 360);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.lineWidth = 5;
        crc2.fill();
        crc2.restore();

        //Tor links
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 110 * 5, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 1, (canvas.height / 2) + 40);
        crc2.lineTo(canvas.width / 110 * 1, (canvas.height / 2) - 40);
        crc2.lineTo(canvas.width / 110 * 5, (canvas.height / 2) - 40);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();

        //Netz Tor
        crc2.save();
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
        crc2.restore();
    }
}