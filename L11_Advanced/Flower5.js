"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Flower5 extends L11_1_Blumenwiese.Flower {
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
            L11_1_Blumenwiese.drawFlower5(this.position);
        }
    }
    L11_1_Blumenwiese.Flower5 = Flower5;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Flower5.js.map