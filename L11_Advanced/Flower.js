"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Flower {
        //type: number;
        constructor() {
            let numX = L11_1_Blumenwiese.createRandomNum(20, 1100);
            let numY = L11_1_Blumenwiese.createRandomNum(340, 700);
            this.position = new L11_1_Blumenwiese.Vector(numX, numY);
        }
    }
    L11_1_Blumenwiese.Flower = Flower;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Flower.js.map