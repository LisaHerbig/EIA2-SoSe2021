"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Flower3 extends L11_1_Blumenwiese.Flower {
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
            L11_1_Blumenwiese.drawFlower3(this.position);
        }
    }
    L11_1_Blumenwiese.Flower3 = Flower3;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Flower3.js.map