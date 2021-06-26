"use strict";
var L11_2_Blumenwiese;
(function (L11_2_Blumenwiese) {
    class Flower1 extends L11_2_Blumenwiese.Flower {
        constructor(_position) {
            super();
            this.color = "Fuchsia";
            this.fps = 10;
        }
        displayNectarLevel() {
            //showNectar(this.position, Flower1.degree, this.color, "white", this.fps)
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
            L11_2_Blumenwiese.drawFlower1(this.position);
        }
    }
    L11_2_Blumenwiese.Flower1 = Flower1;
})(L11_2_Blumenwiese || (L11_2_Blumenwiese = {}));
//# sourceMappingURL=Flower1.js.map