"use strict";
var L09_2_Blumenwiese;
(function (L09_2_Blumenwiese) {
    class Flower {
        constructor() {
            this.position.x = /*randomNumber*/ 1;
            this.position.y = /*randomNumber on canvas gras*/ 2;
            this.type = /*random num btw 0 and Array Flowers -1*/ 1;
            this.size = /*randomNum between 0.5 and 2*/ 1;
        }
        draw() {
            L09_2_Blumenwiese.crc2d.save();
            L09_2_Blumenwiese.crc2d.translate(this.position.x, this.position.y);
            L09_2_Blumenwiese.crc2d.scale(this.size, this.size);
            L09_2_Blumenwiese.crc2d.translate(-50, -50);
            //crc2d.stroke(Flowers[this.type]);
            L09_2_Blumenwiese.crc2d.restore();
        }
    }
    L09_2_Blumenwiese.Flower = Flower;
})(L09_2_Blumenwiese || (L09_2_Blumenwiese = {}));
//# sourceMappingURL=Flower.js.map