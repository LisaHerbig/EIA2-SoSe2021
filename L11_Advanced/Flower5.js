"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Flower5 extends L11_1_Blumenwiese.Flower {
        constructor(_position) {
            super();
            this.color = "DarkOrchid";
            this.fps = 8;
        }
        displayNectarLevel() {
            //Nectar
            L11_1_Blumenwiese.showNectar(this.position, Flower5.degree, this.color, this.fps);
            L11_1_Blumenwiese.crc2d.save();
            L11_1_Blumenwiese.crc2d.beginPath();
            L11_1_Blumenwiese.crc2d.strokeStyle = this.color;
            L11_1_Blumenwiese.crc2d.lineWidth = 5;
            L11_1_Blumenwiese.crc2d.lineCap = "round";
            L11_1_Blumenwiese.crc2d.arc(this.position.x + 2, this.position.y + 7, 10, 0, 360);
            L11_1_Blumenwiese.crc2d.stroke();
            L11_1_Blumenwiese.crc2d.closePath();
            L11_1_Blumenwiese.crc2d.restore();
        }
        draw() {
            //drawFlower1
            L11_1_Blumenwiese.drawFlower5(this.position);
        }
    }
    L11_1_Blumenwiese.Flower5 = Flower5;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Flower5.js.map