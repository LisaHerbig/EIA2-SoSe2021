"use strict";
var L11_2_Blumenwiese;
(function (L11_2_Blumenwiese) {
    class Flower {
        //type: number;
        constructor() {
            let numX = L11_2_Blumenwiese.createRandomNum(20, 1100);
            let numY = L11_2_Blumenwiese.createRandomNum(340, 700);
            this.position = new L11_2_Blumenwiese.Vector(numX, numY);
        }
    }
    L11_2_Blumenwiese.Flower = Flower;
})(L11_2_Blumenwiese || (L11_2_Blumenwiese = {}));
//# sourceMappingURL=Flower.js.map