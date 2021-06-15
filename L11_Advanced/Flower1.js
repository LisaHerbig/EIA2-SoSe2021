"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Flower1 extends L11_1_Blumenwiese.Flower {
        /*constructor(_position: Vector, _type: number) {
            super();
        }*/
        constructor(_position) {
            super();
            this.levelMax = L11_1_Blumenwiese.createRandomNum(10, 80);
        }
        displayNectarLevel() {
            //Nectar
        }
        draw() {
            //drawFlower1
            L11_1_Blumenwiese.drawFlower1(this.position);
        }
    }
    L11_1_Blumenwiese.Flower1 = Flower1;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Flower1.js.map