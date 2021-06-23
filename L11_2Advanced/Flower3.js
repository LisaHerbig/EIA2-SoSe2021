"use strict";
var L11_2_Blumenwiese;
(function (L11_2_Blumenwiese) {
    class Flower3 extends L11_2_Blumenwiese.Flower {
        constructor(_position) {
            super();
            this.color = "Gold";
            this.fps = 9;
        }
        displayNectarLevel() {
            //Nectar
            L11_2_Blumenwiese.showNectar(this.position, Flower3.degree, this.color, this.fps);
            L11_2_Blumenwiese.crc2d.save();
            L11_2_Blumenwiese.crc2d.beginPath();
            L11_2_Blumenwiese.crc2d.strokeStyle = this.color;
            L11_2_Blumenwiese.crc2d.lineWidth = 5;
            L11_2_Blumenwiese.crc2d.lineCap = "round";
            L11_2_Blumenwiese.crc2d.arc(this.position.x + 2, this.position.y + 7, 10, 0, 360);
            L11_2_Blumenwiese.crc2d.stroke();
            L11_2_Blumenwiese.crc2d.closePath();
            L11_2_Blumenwiese.crc2d.restore();
        }
        draw() {
            //drawFlower1
            L11_2_Blumenwiese.drawFlower3(this.position);
        }
    }
    L11_2_Blumenwiese.Flower3 = Flower3;
})(L11_2_Blumenwiese || (L11_2_Blumenwiese = {}));
//# sourceMappingURL=Flower3.js.map