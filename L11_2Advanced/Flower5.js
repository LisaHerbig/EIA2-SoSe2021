"use strict";
var L11_2_Blumenwiese;
(function (L11_2_Blumenwiese) {
    class Flower5 extends L11_2_Blumenwiese.Flower {
        constructor(_position) {
            super();
            this.color = "DarkOrchid";
            this.fps = 8;
        }
        displayNectarLevel() {
            //Nectar
            L11_2_Blumenwiese.showNectar(this.position, Flower5.degree, this.color, "white", this.fps);
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
            L11_2_Blumenwiese.drawFlower5(this.position);
        }
    }
    L11_2_Blumenwiese.Flower5 = Flower5;
})(L11_2_Blumenwiese || (L11_2_Blumenwiese = {}));
//# sourceMappingURL=Flower5.js.map