"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    class Flower {
        constructor(_active) {
            //console.log(_active);
            let numX = L10_2_Blumenwiese.createRandomNum(20, 360);
            let numY = L10_2_Blumenwiese.createRandomNum(340, 700);
            console.log(numX);
            //console.log(numY);
            this.position = new L10_2_Blumenwiese.Vector(numX, numY);
            this.type = L10_2_Blumenwiese.createRandomNum(0, 5);
            this.size = L10_2_Blumenwiese.createRandomNum(0.5, 2);
        }
        draw() {
            if (this.type == 0) {
                L10_2_Blumenwiese.drawFlower1(this.position, this.size);
            }
            if (this.type == 1) {
                L10_2_Blumenwiese.drawFlower2(this.position, this.size);
            }
            if (this.type == 2) {
                L10_2_Blumenwiese.drawFlower3(this.position, this.size);
            }
            if (this.type == 3) {
                L10_2_Blumenwiese.drawFlower4(this.position, this.size);
            }
            if (this.type == 4) {
                L10_2_Blumenwiese.drawFlower5(this.position, this.size);
            }
            if (this.type == 5) {
                L10_2_Blumenwiese.drawFlower6(this.position, this.size);
            }
        }
    }
    L10_2_Blumenwiese.Flower = Flower;
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Flower.js.map