"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Flower4 extends L11_1_Blumenwiese.Flower {
        constructor(_position) {
            super();
            this.levelMax = L11_1_Blumenwiese.createRandomNum(10, 80);
        }
        displayNectarLevel() {
            //Nectar
            console.log(this.levelMax);
        }
        draw() {
            //drawFlower1
            L11_1_Blumenwiese.drawFlower4(this.position);
        }
    }
    L11_1_Blumenwiese.Flower4 = Flower4;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Flower4.js.map