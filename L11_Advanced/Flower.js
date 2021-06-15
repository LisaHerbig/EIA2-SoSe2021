"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Flower {
        constructor() {
            let numX = L11_1_Blumenwiese.createRandomNum(20, 1100);
            let numY = L11_1_Blumenwiese.createRandomNum(340, 700);
            this.position = new L11_1_Blumenwiese.Vector(numX, numY);
            this.type = L11_1_Blumenwiese.createRandomNum(0, 5);
        }
        draw() {
            /*if (this.type == 0) {
                drawFlower1(this.position);
              }
            if (this.type == 1) {
                drawFlower2(this.position);
            }
            if (this.type == 2) {
                drawFlower3(this.position);
            }
            if (this.type == 3) {
                drawFlower4(this.position);
            }
            if (this.type == 4) {
                drawFlower5(this.position);
            }
            if (this.type == 5) {
                drawFlower6(this.position);
            }*/
        }
    }
    L11_1_Blumenwiese.Flower = Flower;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Flower.js.map