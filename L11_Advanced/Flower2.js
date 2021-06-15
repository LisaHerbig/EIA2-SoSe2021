"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Flower2 extends L11_1_Blumenwiese.Flower {
        constructor(_position) {
            super();
            this.levelMax = L11_1_Blumenwiese.createRandomNum(10, 80);
        }
        displayNectarLevel() {
            //Nectar
        }
        draw() {
            //drawFlower1
            L11_1_Blumenwiese.drawFlower2(this.position);
        }
    }
    L11_1_Blumenwiese.Flower2 = Flower2;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Flower2.js.map