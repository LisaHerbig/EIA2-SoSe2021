"use strict";
var L09_2_Blumenwiese;
(function (L09_2_Blumenwiese) {
    class Flower {
        constructor() {
            this.position.x = L09_2_Blumenwiese.createRandomNum(0, 360);
            this.position.y = L09_2_Blumenwiese.createRandomNum(320, 700);
            this.type = L09_2_Blumenwiese.createRandomNum(0, 5);
            this.size = L09_2_Blumenwiese.createRandomNum(0.5, 2);
        }
        draw() {
            if (this.type == 0) {
                L09_2_Blumenwiese.drawFlower1(this.position, this.size);
            }
            if (this.type == 1) {
                L09_2_Blumenwiese.drawFlower2(this.position, this.size);
            }
            if (this.type == 2) {
                L09_2_Blumenwiese.drawFlower3(this.position, this.size);
            }
            if (this.type == 3) {
                L09_2_Blumenwiese.drawFlower4(this.position, this.size);
            }
            if (this.type == 4) {
                L09_2_Blumenwiese.drawFlower5(this.position, this.size);
            }
            if (this.type == 5) {
                L09_2_Blumenwiese.drawFlower6(this.position, this.size);
            }
        }
    }
    L09_2_Blumenwiese.Flower = Flower;
})(L09_2_Blumenwiese || (L09_2_Blumenwiese = {}));
//# sourceMappingURL=Flower.js.map