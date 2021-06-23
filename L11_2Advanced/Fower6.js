"use strict";
var L11_2_Blumenwiese;
(function (L11_2_Blumenwiese) {
    class Flower6 extends L11_2_Blumenwiese.Flower {
        constructor(_position) {
            super();
            this.color = "Blue";
            this.fps = 5;
        }
        displayNectarLevel() {
            //Nectar
            L11_2_Blumenwiese.showNectar(this.position, Flower6.degree, this.color, this.fps);
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
            L11_2_Blumenwiese.drawFlower6(this.position);
        }
    }
    L11_2_Blumenwiese.Flower6 = Flower6;
})(L11_2_Blumenwiese || (L11_2_Blumenwiese = {}));
//# sourceMappingURL=Fower6.js.map